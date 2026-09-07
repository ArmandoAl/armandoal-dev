import { getCollection } from 'astro:content';
import type { Locale } from '@core/utils/i18n';

export async function get(lang: Locale) {
  return (await getCollection('profile')).find(({ data }) => data.lang === lang);
}
