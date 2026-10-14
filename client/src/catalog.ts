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
