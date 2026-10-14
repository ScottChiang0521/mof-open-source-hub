import { MOF_PROJECTS, type MOFProject } from './const';
import { MOF_PROJECTS_EN, type ProjectEn } from './const.en';
import { NEW_SOFTWARE, NEW_SOFTWARE_EN } from './new/software-entries';
import { NEW_DATABASES, NEW_DATABASES_EN } from './new/database-entries';

export const ALL_PROJECTS: MOFProject[] = [...MOF_PROJECTS, ...NEW_SOFTWARE, ...NEW_DATABASES];

export const ALL_PROJECTS_EN: Record<string, ProjectEn> = {
  ...MOF_PROJECTS_EN,
  ...NEW_SOFTWARE_EN,
  ...NEW_DATABASES_EN,
};

const LIST_FIELDS = ['capabilities', 'problemsSolved', 'keyFeatures', 'caveats', 'supplementaryResources'] as const;

// Returns human-readable problems; an empty array means the Chinese and English records are paired correctly.
// Checked on the source arrays of the individual files, before they are merged, so a duplicate id or an extra English key cannot be hidden by the merge.
export function validateCatalog(): string[] {
  const errors: string[] = [];
  const sources: [string, MOFProject[], Record<string, ProjectEn>][] = [
    ['const.ts', MOF_PROJECTS, MOF_PROJECTS_EN],
    ['new/software-entries.ts', NEW_SOFTWARE, NEW_SOFTWARE_EN],
    ['new/database-entries.ts', NEW_DATABASES, NEW_DATABASES_EN],
  ];
  const seen = new Set<string>();
  for (const [file, zhList, enMap] of sources) {
    const zhIds = new Set(zhList.map((p) => p.id));
    for (const key of Object.keys(enMap)) {
      if (!zhIds.has(key)) errors.push(`${file}: English record "${key}" has no Chinese record`);
    }
    for (const p of zhList) {
      if (seen.has(p.id)) errors.push(`${file}: duplicate id "${p.id}"`);
      seen.add(p.id);
      const en = enMap[p.id];
      if (!en) {
        errors.push(`${file}: "${p.id}" has no English record`);
        continue;
      }
      for (const k of LIST_FIELDS) {
        if (p[k].length !== en[k].length) errors.push(`${file}: "${p.id}".${k} has ${p[k].length} Chinese but ${en[k].length} English items`);
      }
    }
  }
  return errors;
}
