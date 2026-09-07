import { getCollection } from 'astro:content';
import type { Locale } from '@core/utils/i18n';

export type Language = Locale;

export async function getAll(lang: Language) {
  const entries = await getCollection('caseStudies', ({ data }) => data.lang === lang);
  return entries.sort((a, b) => a.data.order - b.data.order);
}

export async function getFeatured(lang: Language) {
  return (await getAll(lang)).filter(({ data }) => data.featured);
}

export async function getBySlug(slug: string, lang: Language) {
  return (await getAll(lang)).find(({ data }) => data.slug === slug);
}

export async function getAllSlugs(lang: Language) {
  return (await getAll(lang)).map(({ data }) => data.slug);
}
