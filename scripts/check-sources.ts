/**
 * Source check: re-verify what the catalog says about licenses, DOIs and links.
 *
 *   pnpm check:sources                      check, exit 1 on a failure
 *   pnpm check:sources --update-baseline    record the current license-file hashes
 *   --licenses-only   only the license files        --no-links       skip the link check
 *   --report <file>   also write the report         --catalog <file> --baseline <file>  (tests)
 *
 * Why this exists: `lastVerified` in the catalog is a date, not a guarantee. Licenses
 * change, links rot and DOIs get mistyped, and the cheapest moment to notice is a
 * scheduled run.
 *
 *   FAILURE  a license file's text changed since the baseline          (needs a human)
 *   FAILURE  the license file no longer matches the catalog's wording   (needs a human)
 *   FAILURE  a DOI is registered with neither Crossref nor DataCite    (mistyped or withdrawn)
 *   FAILURE  a URL answers 404 or 410                                  (really gone)
 *   WARNING  403 / 429 / 5xx / network error / timeout / registry unreachable
 *   WARNING  a DOI exists but its registered title shares little with the catalog's title
 *
 * Only 404 and 410 fail a link. Publishers and archives routinely refuse automated
 * requests, and a network error cannot tell link rot from a bad minute, so those are
 * reported (grouped by host, collapsed) but never turn the run red.
 *
 * DOIs are NOT checked by following doi.org: it redirects to the publisher, which
 * answers a bot with 403, so that would prove nothing. They are looked up in the
 * registries' own APIs, which allow automated use. That proves the DOI exists and,
 * for a paper's main DOI, that its title resembles the catalog's; it does not prove
 * that the DOI is the right citation for a tool.
 *
 * Only files that ARE a license text are hashed (raw GitHub/GitLab files). Terms pages
 * and creativecommons.org pages get the link check only: their markup changes without
 * the license changing, and hashing them would raise a false alarm every month.
 */
import { createHash } from 'node:crypto';
import { appendFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs';

type Supplementary = { label?: string; url: string };
type Resource = {
  id: string;
  githubUrl?: string;
  webUrl?: string;
  licenseUrl: string;
  paper?: { title?: string; doi?: string; url: string };
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
const NO_LINKS = has('--no-links');

// Overridable so the logic can be tested against a local mock of the registries.
const CROSSREF = process.env.CROSSREF_API ?? 'https://api.crossref.org/works/';
const DATACITE = process.env.DATACITE_API ?? 'https://api.datacite.org/dois/';

const TIMEOUT_MS = 25_000;
const CONCURRENCY = 6;
const TITLE_OVERLAP_MIN = 0.6;
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

/** The DOI inside a https://doi.org/10.xxxx/... URL, else null. */
function doiFromUrl(u: string): string | null {
  const m = u.match(/^https?:\/\/(?:dx\.)?doi\.org\/(10\.\d{4,9}\/[^\s?#]+)/i);
  return m ? decodeURIComponent(m[1]) : null;
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
      let host = '';
      try {
        host = new URL(res.url).host;
      } catch {
        /* keep empty */
      }
      const ra = Number(res.headers.get('retry-after'));
      const retryAfterMs = Number.isFinite(ra) && ra > 0 ? ra * 1000 : 0;
      return { status: res.status, text, host, retryAfterMs, error: undefined as string | undefined };
    } catch (e) {
      if (attempt === 1) {
        const msg = e instanceof Error ? (e.cause instanceof Error ? e.cause.message : e.message) : String(e);
        return { status: 0, text: undefined, host: '', retryAfterMs: 0, error: msg };
      }
    } finally {
      clearTimeout(timer);
    }
  }
  return { status: 0, text: undefined, host: '', retryAfterMs: 0, error: 'unknown' };
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * GET against a registry API. The first real run sent four lookups at once and Crossref
 * answered 429 to 40 of 52, so: retry a 429 after the time the server asks for (or an
 * increasing pause), at most three times.
 */
async function registryGet(url: string) {
  let res = await request(url, true);
  for (let attempt = 0; res.status === 429 && attempt < 3; attempt++) {
    await sleep(Math.min(res.retryAfterMs || 2000 * 2 ** attempt, 30_000));
    res = await request(url, true);
  }
  return res;
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

/** Share of the shorter title's words that also appear in the other title (0..1). */
function titleOverlap(a: string, b: string): number {
  const words = (s: string) =>
    new Set(
      s
        .toLowerCase()
        .normalize('NFKD')
        .replace(/<[^>]+>/g, ' ') // Crossref titles can carry markup
        .replace(/[^a-z0-9]+/g, ' ')
        .split(' ')
        .filter((w) => w.length >= 3),
    );
  const A = words(a);
  const B = words(b);
  const small = A.size <= B.size ? A : B;
  const large = A.size <= B.size ? B : A;
  if (small.size === 0) return 0;
  let hit = 0;
  small.forEach((w) => large.has(w) && hit++);
  return hit / small.size;
}

type DoiResult =
  | { state: 'found'; via: 'Crossref' | 'DataCite'; title?: string }
  | { state: 'missing' }
  | { state: 'unknown'; why: string };

async function lookupDoi(doi: string): Promise<DoiResult> {
  const path = doi.split('/').map(encodeURIComponent).join('/');
  const cr = await registryGet(CROSSREF + path);
  if (cr.status === 200 && cr.text) {
    try {
      const title = JSON.parse(cr.text)?.message?.title?.[0];
      return { state: 'found', via: 'Crossref', title: typeof title === 'string' ? title : undefined };
    } catch {
      return { state: 'found', via: 'Crossref' };
    }
  }
  if (cr.status !== 404) return { state: 'unknown', why: `Crossref ${cr.status || cr.error}` };
  // Not in Crossref: arXiv, Zenodo, Figshare and others register with DataCite.
  const dc = await registryGet(DATACITE + path);
  if (dc.status === 200 && dc.text) {
    try {
      const title = JSON.parse(dc.text)?.data?.attributes?.titles?.[0]?.title;
      return { state: 'found', via: 'DataCite', title: typeof title === 'string' ? title : undefined };
    } catch {
      return { state: 'found', via: 'DataCite' };
    }
  }
  if (dc.status === 404) return { state: 'missing' };
  return { state: 'unknown', why: `DataCite ${dc.status || dc.error}` };
}

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
  const doiWarnings: string[] = [];
  const otherWarnings: string[] = [];

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
      otherWarnings.push(`**${r.id}** — license file not read (${res.status || res.error}): ${raw}`);
      continue;
    }
    const detected = detect(res.text);
    const hash = sha256(res.text);
    const known = baseline.licenses[r.id];

    if (UPDATE) {
      if (!known || known.sha256 !== hash || known.url !== raw) changes.push(`${r.id}: ${known ? 'updated' : 'added'}`);
      newBaseline[r.id] = { url: raw, sha256: hash, detected };
    } else if (!known) {
      otherWarnings.push(`**${r.id}** — no baseline yet; current sha256 \`${hash}\` (detected: ${detected.join(', ') || '?'})`);
    } else if (known.sha256 !== hash) {
      failures.push(
        `**${r.id}** — license text changed since the baseline (${baseline.updated || 'unknown date'}). ` +
          `Detected now: ${detected.join(', ') || '?'}. Re-read it, update the catalog if needed, then run \`pnpm check:sources --update-baseline\`. ${raw}`,
      );
    }

    // Does the file still look like what the catalog says it is?
    if (detected.length === 0) {
      otherWarnings.push(`**${r.id}** — license type not recognised from the file text; check by hand: ${raw}`);
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
    if (!ids.has(id)) otherWarnings.push(`baseline has \`${id}\`, which is no longer in the catalog`);
  }

  // 2. Baseline update mode ----------------------------------------------------
  if (UPDATE) {
    const out: Baseline = { updated: new Date().toISOString().slice(0, 10), licenses: newBaseline };
    writeFileSync(BASELINE, JSON.stringify(out, null, 2) + '\n', 'utf-8');
    console.log(`Baseline written to ${BASELINE}: ${Object.keys(newBaseline).length} license file(s).`);
    console.log(changes.length ? changes.map((c) => `  ${c}`).join('\n') : '  (no changes)');
    for (const w of otherWarnings) console.log(`  warning: ${w}`);
    return;
  }

  // 3. DOIs --------------------------------------------------------------------
  let doiTotal = 0;
  let doiFound = 0;
  const doiVia = { Crossref: 0, DataCite: 0 };
  // Every URL in the catalog, so DOI-style links are verified as DOIs rather than followed.
  const allUrls = new Map<string, string[]>();
  const addUrl = (u: string | undefined, id: string) => {
    if (u && /^https?:/.test(u)) allUrls.set(u.split('#')[0], [...(allUrls.get(u.split('#')[0]) ?? []), id]);
  };
  for (const r of resources) {
    [r.githubUrl, r.webUrl, r.primarySource.url, r.licenseUrl, r.paper?.url].forEach((u) => addUrl(u, r.id));
    r.en.supplementaryResources?.forEach((s) => addUrl(s.url, r.id));
  }

  if (!LICENSES_ONLY) {
    const dois = new Map<string, { who: Set<string>; title?: string }>();
    const addDoi = (doi: string | null | undefined, id: string, title?: string) => {
      if (!doi) return;
      const key = doi.toLowerCase();
      const cur = dois.get(key) ?? { who: new Set<string>() };
      cur.who.add(id);
      if (title && !cur.title) cur.title = title;
      dois.set(key, cur);
    };
    for (const r of resources) {
      addDoi(r.paper?.doi, r.id, r.paper?.title);
      for (const u of allUrls.keys()) if (allUrls.get(u)!.includes(r.id)) addDoi(doiFromUrl(u), r.id);
    }
    doiTotal = dois.size;
    // One at a time with a pause: Crossref's public pool allows roughly one concurrent request.
    const looked = await pool([...dois.entries()], 1, async ([doi, v]) => {
      const res = await lookupDoi(doi);
      await sleep(250);
      return { doi, ...v, res };
    });
    for (const { doi, who, title, res } of looked) {
      const label = `${[...who].join(', ')} — ${doi}`;
      if (res.state === 'missing') {
        failures.push(`**DOI not registered** with Crossref or DataCite: ${label}`);
      } else if (res.state === 'unknown') {
        doiWarnings.push(`could not check (${res.why}): ${label}`);
      } else {
        doiFound++;
        doiVia[res.via]++;
        if (title && res.title) {
          const o = titleOverlap(title, res.title);
          if (o < TITLE_OVERLAP_MIN) {
            doiWarnings.push(
              `title differs (word overlap ${Math.round(o * 100)}%): ${label}\n  - catalog: ${title}\n  - ${res.via}: ${res.title}`,
            );
          }
        }
      }
    }
  }

  // 4. Links -------------------------------------------------------------------
  let linkCount = 0;
  let linksOk = 0;
  const blocked = new Map<string, string[]>(); // host -> entries (403/429/other 4xx)
  if (!LICENSES_ONLY && !NO_LINKS) {
    const urls = [...allUrls.entries()].filter(([u]) => doiFromUrl(u) === null); // DOIs were handled above
    linkCount = urls.length;
    const results = await pool(urls, CONCURRENCY, async ([u, who]) => ({
      u,
      who: [...new Set(who)],
      res: await request(u, false),
    }));
    for (const { u, who, res } of results) {
      const label = `${who.join(', ')} — ${u}`;
      if (res.status === 404 || res.status === 410) failures.push(`**dead link** (HTTP ${res.status}): ${label}`);
      else if (res.status === 0) otherWarnings.push(`unreachable (${res.error}): ${label}`);
      else if (res.status >= 400) {
        const host = res.host || new URL(u).host;
        blocked.set(host, [...(blocked.get(host) ?? []), `${label} (HTTP ${res.status})`]);
      } else linksOk++;
    }
  }

  // 5. Report ------------------------------------------------------------------
  const blockedCount = [...blocked.values()].reduce((n, v) => n + v.length, 0);
  const warnCount = doiWarnings.length + otherWarnings.length + blockedCount;
  const lines = [
    `# Source check ${new Date().toISOString().slice(0, 10)}`,
    '',
    `- License files read and consistent with the catalog: **${licensesOk} / ${licenseJobs.length}**`,
    LICENSES_ONLY
      ? '- DOIs and links: skipped (`--licenses-only`)'
      : `- DOIs found in a registry: **${doiFound} / ${doiTotal}** (Crossref ${doiVia.Crossref}, DataCite ${doiVia.DataCite})`,
    LICENSES_ONLY || NO_LINKS
      ? '- Links: skipped'
      : `- Links reachable: **${linksOk} / ${linkCount}** (DOI links are checked as DOIs, not followed)`,
    `- Failures: **${failures.length}** · Warnings: **${warnCount}**`,
    '',
  ];
  if (failures.length) lines.push('## Failures', '', ...failures.map((f) => `- ${f}`), '');
  if (doiWarnings.length) lines.push('## Warnings: DOIs', '', ...doiWarnings.map((w) => `- ${w}`), '');
  if (otherWarnings.length) lines.push('## Warnings: other', '', ...otherWarnings.map((w) => `- ${w}`), '');
  if (blockedCount) {
    lines.push(
      '## Not followed: answered 4xx (usually a publisher refusing automated requests)',
      '',
      'These never fail the run. Open them in a browser if one looks wrong.',
      '',
    );
    for (const [host, items] of [...blocked.entries()].sort((a, b) => b[1].length - a[1].length)) {
      lines.push(`<details><summary>${host}: ${items.length} URL(s)</summary>`, '', ...items.map((i) => `- ${i}`), '', '</details>', '');
    }
  }
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
