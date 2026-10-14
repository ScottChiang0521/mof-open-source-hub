import { writeFileSync } from 'node:fs';
import {
  CATEGORY_LABELS,
  CURATION_TIER_LABELS,
  DATA_ACCESS_LABELS,
  ENTITY_TYPE_LABELS,
} from '../client/src/const';
import {
  CATEGORY_LABELS_EN,
  CURATION_TIER_LABELS_EN,
  DATA_ACCESS_LABELS_EN,
  ENTITY_TYPE_LABELS_EN,
  RESOURCE_TYPE_EN,
} from '../client/src/const.en';
import { ALL_PROJECTS, ALL_PROJECTS_EN } from '../client/src/catalog';

const resources = ALL_PROJECTS.map((p) => {
  const en = ALL_PROJECTS_EN[p.id];
  if (!en) throw new Error(`missing English record for ${p.id}`);
  return {
    id: p.id,
    name: p.name,
    author: p.author,
    githubUrl: p.githubUrl,
    webUrl: p.webUrl,
    entityType: p.entityType,
    curationTier: p.curationTier,
    category: p.category,
    dataAccess: p.dataAccess,
    languages: p.languages,
    paper: p.paper,
    primarySource: { url: p.primarySource.url },
    licenseUrl: p.licenseUrl,
    lastVerified: p.lastVerified,
    en: {
      entityTypeLabel: ENTITY_TYPE_LABELS_EN[p.entityType],
      curationTierLabel: CURATION_TIER_LABELS_EN[p.curationTier],
      categoryLabel: CATEGORY_LABELS_EN[p.category],
      dataAccessLabel: en.dataAccessLabel,
      sourceStatus: en.sourceStatus,
      description: en.description,
      capabilities: en.capabilities,
      license: en.license,
      maintenanceStatus: en.maintenanceStatus,
      mofApplicability: en.mofApplicability,
      supplementaryResources: p.supplementaryResources.map((r, i) => ({
        label: en.supplementaryResources[i].label,
        resourceType: RESOURCE_TYPE_EN[r.resourceType],
        url: r.url,
        access: en.supplementaryResources[i].access,
        dataType: en.supplementaryResources[i].dataType,
      })),
      primarySourceLabel: en.primarySourceLabel,
      problemsSolved: en.problemsSolved,
      keyFeatures: en.keyFeatures,
      trainingUse: en.trainingUse,
      caveats: en.caveats,
    },
    zh: {
      entityTypeLabel: ENTITY_TYPE_LABELS[p.entityType],
      curationTierLabel: CURATION_TIER_LABELS[p.curationTier],
      categoryLabel: CATEGORY_LABELS[p.category],
      dataAccessLabel: p.dataAccessLabel,
      sourceStatus: p.sourceStatus,
      description: p.description,
      capabilities: p.capabilities,
      license: p.license,
      maintenanceStatus: p.maintenanceStatus,
      mofApplicability: p.mofApplicability,
      supplementaryResources: p.supplementaryResources,
      primarySourceLabel: p.primarySource.label,
      problemsSolved: p.problemsSolved,
      keyFeatures: p.keyFeatures,
      trainingUse: p.trainingUse,
      caveats: p.caveats,
    },
  };
});

// Guard against en/zh drift: every list must be the same length in both languages.
for (const r of resources) {
  for (const k of ['capabilities', 'problemsSolved', 'keyFeatures', 'caveats', 'supplementaryResources'] as const) {
    if (r.en[k].length !== r.zh[k].length) throw new Error(`${r.id}.${k}: en/zh length differ`);
  }
}
void DATA_ACCESS_LABELS;
void DATA_ACCESS_LABELS_EN;

const catalog = {
  catalogVersion: '2026-10-14',
  title: { en: 'MOF Open Source Hub verified catalog', zh: 'MOF Open Source Hub 已核實資料庫' },
  language: ['en', 'zh-Hant'],
  verificationDate: '2026-10-14',
  itemCount: resources.length,
  curationGuide: {
    immediate: {
      en: 'Official source, core use, and the main license and data access can all be matched unambiguously.',
      zh: '官方來源、核心用途與主要授權／資料存取可明確對應。',
    },
    caveat: {
      en: 'Verified, but note version, source, data-rights, model-applicability, or maintenance caveats.',
      zh: '已核實但需注意版本、來源、資料權利、模型適用範圍或維護訊號。',
    },
  },
  resources,
};

writeFileSync(new URL('../data/mof-catalog.json', import.meta.url), JSON.stringify(catalog, null, 2) + '\n', 'utf-8');
console.log(`wrote data/mof-catalog.json with ${resources.length} resources`);
