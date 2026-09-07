function asIdent(slug: string): string {
  return slug.replace(/[^a-zA-Z0-9_-]/g, '-');
}

export function caseTitleName(slug: string): string {
  return `case-title-${asIdent(slug)}`;
}

export function caseMetaName(slug: string): string {
  return `case-meta-${asIdent(slug)}`;
}
