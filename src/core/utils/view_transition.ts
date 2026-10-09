function asIdent(slug: string): string {
  return slug.replace(/[^a-zA-Z0-9_-]/g, '-');
}

export function caseTitleName(slug: string): string {
  return `case-title-${asIdent(slug)}`;
}

export function caseMetaName(slug: string): string {
  return `case-meta-${asIdent(slug)}`;
}

export function projectTitleName(slug: string): string {
  return `project-title-${asIdent(slug)}`;
}

export function projectMetaName(slug: string): string {
  return `project-meta-${asIdent(slug)}`;
}
