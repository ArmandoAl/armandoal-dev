import type { APIRoute } from 'astro';
import { ROUTE_NAMES } from '@app/router/route_names';
import { getAllSlugs } from '@features/case_studies/data/repositories/case_study_repository';

export const prerender = true;

export const GET: APIRoute = async () => {
  const [englishSlugs, spanishSlugs] = await Promise.all([getAllSlugs('en'), getAllSlugs('es')]);
  const paths = [
    ROUTE_NAMES.en.home,
    ROUTE_NAMES.es.home,
    ROUTE_NAMES.en.work,
    ROUTE_NAMES.es.work,
    ...englishSlugs.map(ROUTE_NAMES.en.workDetail),
    ...spanishSlugs.map(ROUTE_NAMES.es.workDetail),
    ROUTE_NAMES.en.about,
    ROUTE_NAMES.es.about,
    ROUTE_NAMES.en.contact,
    ROUTE_NAMES.es.contact,
  ];
  const urls = paths.map((path) => `<url><loc>${new URL(path, import.meta.env.SITE).href}</loc></url>`).join('');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
