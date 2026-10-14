/**
 * Source check: re-verify what the catalog says about licenses and links.
 *
 *   pnpm check:sources                      check, exit 1 on a failure
 *   pnpm check:sources --update-baseline    record the current license-file hashes
 *   --licenses-only   skip the link check          --report <file>  also write the report
 *   --catalog <file>  --baseline <file>             (paths; mainly for tests)
 *
 * Why this exists: `lastVerified` in the catalog is a date, not a guarantee. Licenses
 * change and links rot, and the cheapest moment to notice is a scheduled run.
 *
 * Three kinds of check, with deliberately different severities:
 *
 *   FAILURE  a license file's text changed since the baseline          (needs a human)
 *   FAILURE  the license file no longer matches the catalog's wording   (needs a human)
 *   FAILURE  a URL answers 404 or 410                                  (really gone)
 *   WARNING  403 / 429 / 5xx / network error / timeout
 *
 * Only 404 and 410 fail the run. Publishers and archives often refuse automated
 * requests (the README already says so), and a network error cannot tell link rot
 * from a bad minute, so those are reported but never red.
 *
 * Only files that ARE a license text are hashed (raw GitHub/GitLab files). Terms pages
 * and creativecommons.org pages get the link check only: their markup changes without
 * the license changing, and hashing them would send a false alarm every month.
 */
import { createHash } from 'node:crypto';
import { appendFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs';

type Supplementary = { label?: string; url: string };
type Resource = {
  id: string;
  githubUrl?: string;
  webUrl?: string;
  licenseUrl: string;
  paper?: { url: string };
  primarySource: { url: string };
  en: { license: string; supplementaryResources?: Supplementary[] };
};
type Baseline = {
  updated: string;
  licenses: Record<string, { url: string; sha256: string; detected: string[] }>;
};

const args = process.argv.slice(2);
const has = (name: string) => args.includes(name);
const opt = (name: string, fallback: string) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};
const CATALOG = opt('--catalog', 'data/mof-catalog.json');
const BASELINE = opt('--baseline', 'data/source-baseline.json');
const REPORT = opt('--report', '');
const UPDATE = has('--update-baseline');
const LICENSES_ONLY = has('--licenses-only');

const TIMEOUT_MS = 25_000;
const CONCURRENCY = 6;
const UA = 'mof-open-source-hub-source-check (+https://github.com/ScottChiang0521/mof-open-source-hub)';

// ---- helpers ---------------------------------------------------------------

/** URL of the raw license text, or null when the URL is not a license file. */
function toRawLicenseUrl(u: string): string | null {
  try {
    const url = new URL(u);
    url.hash = '';
    if (url.hostname === 'raw.githubusercontent.com') return url.toString();
    const gh = url.pathname.match(/^\/([^/]+)\/([^/]+)\/blob\/(.+)$/);
    if (url.hostname === 'github.com' && gh) {
      return `https://raw.githubusercontent.com/${gh[1]}/${gh[2]}/${gh[3]}`;
    }
    if (url.hostname === 'gitlab.com' && url.pathname.includes('/-/blob/')) {
      url.pathname = url.pathname.replace('/-/blob/', '/-/raw/');
      return url.toString();
    }
  } catch {
    /* not a URL */
  }
  return null;
}

async function request(url: string, wantBody: boolean) {
  for (let attempt = 0; attempt < 2; attempt++) {
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(url, {
        redirect: 'follow',
        signal: ctl.signal,
        headers: { 'user-agent': UA, accept: '*/*' },
      });
      const text = wantBody && res.ok ? await res.text() : undefined;
      if (!wantBody) await res.body?.cancel();
      if (res.status >= 500 && attempt === 0) continue; // one retry for a transient server error
      return { status: res.status, text, error: undefined as string | undefined };
    } catch (e) {
      if (attempt === 1) {
        const msg = e instanceof Error ? (e.cause instanceof Error ? e.cause.message : e.message) : String(e);
        return { status: 0, text: undefined, error: msg };
      }
    } finally {
      clearTimeout(timer);
    }
  }
  return { status: 0, text: undefined, error: 'unknown' };
}

/** Which license families the text looks like. Keyword-level on purpose. */
function detect(text: string): string[] {
  const s = text.slice(0, 6000).toLowerCase();
  const found: string[] = [];
  if (s.includes('permission is hereby granted, free of charge')) found.push('MIT');
  if (s.includes('apache license') && s.includes('version 2.0')) found.push('Apache');
  // The GNU title line decides, not mere mentions: the standard GPL-2.0 preamble says
  // "some other ... software is covered by the GNU Lesser General Public License", so
  // testing for "lesser" anywhere misreads every GPL-2.0 file as LGPL (MOFid did).
  const gnu = (
    [
      ['LGPL', 'gnu lesser general public license'],
      ['LGPL', 'gnu library general public license'],
      ['GPL', 'gnu general public license'],
    ] as const
  )
    .map(([tag, phrase]) => ({ tag, at: s.indexOf(phrase) }))
    .filter((x) => x.at >= 0)
    .sort((a, b) => a.at - b.at);
  if (gnu.length) found.push(gnu[0].tag);
  if (s.includes('redistribution and use in source and binary forms')) found.push('BSD');
  if (s.includes('creative commons') || /\bcc[ -]by\b/.test(s) || /\bcc0\b/.test(s)) found.push('CC');
  if (s.includes('mozilla public license')) found.push('MPL');
  return found;
}

const CLAIM_PATTERN: Record<string, RegExp> = {
  MIT: /\bmit\b/i,
  Apache: /apache/i,
  LGPL: /lgpl|lesser/i,
  GPL: /gpl|general public/i,
  BSD: /bsd/i,
  CC: /\bcc\b|creative commons|cc0|cc by/i,
  MPL: /mpl|mozilla/i,
};

const sha256 = (t: string) => createHash('sha256').update(t.replace(/\s+/g, ' ').trim()).digest('hex');

async function pool<T, R>(items: T[], n: number, fn: (x: T) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(n, items.length) }, async () => {
      while (next < items.length) {
        const i = next++;
        out[i] = await fn(items[i]);
      }
    }),
  );
  return out;
}

// ---- main ------------------------------------------------------------------

async function main() {
  const catalog = JSON.parse(readFileSync(CATALOG, 'utf-8')) as { resources: Resource[] };
  const resources = catalog.resources;
  const baseline: Baseline = existsSync(BASELINE)
    ? JSON.parse(readFileSync(BASELINE, 'utf-8'))
    : { updated: '', licenses: {} };

  const failures: string[] = [];
  const warnings: string[] = [];

  // 1. License files -----------------------------------------------------------
  const licenseJobs = resources
    .map((r) => ({ r, raw: toRawLicenseUrl(r.licenseUrl) }))
    .filter((j): j is { r: Resource; raw: string } => j.raw !== null);

  const fetched = await pool(licenseJobs, CONCURRENCY, async (j) => ({ ...j, res: await request(j.raw, true) }));
  const newBaseline: Baseline['licenses'] = { ...baseline.licenses };
  const changes: string[] = [];
  let licensesOk = 0;

  for (const { r, raw, res } of fetched) {
    if (res.status === 404 || res.status === 410) {
      failures.push(`**${r.id}** — license file is gone (HTTP ${res.status}): ${raw}`);
      continue;
    }
    if (!res.text) {
      warnings.push(`**${r.id}** — license file not read (${res.status || res.error}): ${raw}`);
      continue;
    }
    const detected = detect(res.text);
    const hash = sha256(res.text);
    const known = baseline.licenses[r.id];

    if (UPDATE) {
      if (!known || known.sha256 !== hash || known.url !== raw) changes.push(`${r.id}: ${known ? 'updated' : 'added'}`);
      newBaseline[r.id] = { url: raw, sha256: hash, detected };
    } else if (!known) {
      warnings.push(`**${r.id}** — no baseline yet; current sha256 \`${hash}\` (detected: ${detected.join(', ') || '?'})`);
    } else if (known.sha256 !== hash) {
      failures.push(
        `**${r.id}** — license text changed since the baseline (${baseline.updated || 'unknown date'}). ` +
          `Detected now: ${detected.join(', ') || '?'}. Re-read it, update the catalog if needed, then run \`pnpm check:sources --update-baseline\`. ${raw}`,
      );
    }

    // Does the file still look like what the catalog says it is?
    if (detected.length === 0) {
      warnings.push(`**${r.id}** — license type not recognised from the file text; check by hand: ${raw}`);
    } else if (!detected.some((t) => CLAIM_PATTERN[t]?.test(r.en.license))) {
      failures.push(
        `**${r.id}** — file looks like ${detected.join(' / ')} but the catalog says "${r.en.license.slice(0, 120)}". ${raw}`,
      );
    } else {
      licensesOk++;
    }
  }

  // Baseline entries whose id left the catalog
  const ids = new Set(resources.map((r) => r.id));
  for (const id of Object.keys(baseline.licenses)) {
    if (!ids.has(id)) warnings.push(`baseline has \`${id}\`, which is no longer in the catalog`);
  }

  // 2. Links -------------------------------------------------------------------
  let linkCount = 0;
  let linksOk = 0;
  if (!LICENSES_ONLY) {
    const urls = new Map<string, string[]>();
    const add = (u: string | undefined, id: string) => {
      if (!u || !/^https?:/.test(u)) return;
      const key = u.split('#')[0];
      urls.set(key, [...(urls.get(key) ?? []), id]);
    };
    for (const r of resources) {
      [r.githubUrl, r.webUrl, r.primarySource.url, r.licenseUrl, r.paper?.url].forEach((u) => add(u, r.id));
      r.en.supplementaryResources?.forEach((s) => add(s.url, r.id));
    }
    linkCount = urls.size;
    const results = await pool([...urls.entries()], CONCURRENCY, async ([u, who]) => ({
      u,
      who: [...new Set(who)],
      res: await request(u, false),
    }));
    for (const { u, who, res } of results) {
      const label = `${who.join(', ')} — ${u}`;
      if (res.status === 404 || res.status === 410) failures.push(`**dead link** (HTTP ${res.status}): ${label}`);
      else if (res.status === 0) warnings.push(`unreachable (${res.error}): ${label}`);
      else if (res.status >= 400) warnings.push(`HTTP ${res.status} (may be blocking automated requests): ${label}`);
      else linksOk++;
    }
  }

  // 3. Baseline update mode ----------------------------------------------------
  if (UPDATE) {
    const out: Baseline = { updated: new Date().toISOString().slice(0, 10), licenses: newBaseline };
    writeFileSync(BASELINE, JSON.stringify(out, null, 2) + '\n', 'utf-8');
    console.log(`Baseline written to ${BASELINE}: ${Object.keys(newBaseline).length} license file(s).`);
    console.log(changes.length ? changes.map((c) => `  ${c}`).join('\n') : '  (no changes)');
    for (const w of warnings) console.log(`  warning: ${w}`);
    return;
  }

  // 4. Report ------------------------------------------------------------------
  const lines = [
    `# Source check ${new Date().toISOString().slice(0, 10)}`,
    '',
    `- License files read and consistent with the catalog: **${licensesOk} / ${licenseJobs.length}**`,
    LICENSES_ONLY ? '- Links: skipped (`--licenses-only`)' : `- Links reachable: **${linksOk} / ${linkCount}**`,
    `- Failures: **${failures.length}** · Warnings: **${warnings.length}**`,
    '',
  ];
  if (failures.length) lines.push('## Failures', '', ...failures.map((f) => `- ${f}`), '');
  if (warnings.length) lines.push('## Warnings (do not fail the run)', '', ...warnings.map((w) => `- ${w}`), '');
  const report = lines.join('\n');
  console.log(report);
  if (REPORT) writeFileSync(REPORT, report, 'utf-8');
  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, report + '\n');
  process.exit(failures.length ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(2);
});
