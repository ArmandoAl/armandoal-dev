import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const lang = z.enum(['en', 'es']);

const caseStudies = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/case-studies',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: ({ image }) => z.object({
    slug: z.string(),
    translationKey: z.string(),
    lang,
    title: z.string(),
    client: z.string(),
    role: z.string(),
    period: z.string(),
    summary: z.string(),
    context: z.string(),
    problem: z.string(),
    approach: z.array(z.string()),
    constraints: z.string(),
    outcome: z.string(),
    stack: z.array(z.string()),
    metrics: z.array(z.object({ label: z.string(), value: z.string() }).strict()),
    featured: z.boolean(),
    order: z.number(),
    coverAlt: z.string(),
    gallery: z.array(z.object({
      src: image(),
      alt: z.string(),
      kind: z.enum(['mobile', 'desktop']),
      caption: z.string().optional(),
    }).strict()).optional(),
  }).strict(),
});

const profile = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/profile' }),
  schema: z.object({
    lang,
    name: z.string(),
    headline: z.string(),
    summary: z.string(),
    availability: z.string(),
    timezone: z.string(),
    address: z.string(),
    experience: z.array(z.object({
      role: z.string(),
      company: z.string(),
      period: z.string(),
      mode: z.string(),
      bullets: z.array(z.string()),
    }).strict()),
    skills: z.array(z.object({
      category: z.string(),
      items: z.array(z.string()),
    }).strict()),
    education: z.string(),
    certifications: z.array(z.string()),
    languages: z.array(z.string()),
    links: z.array(z.object({
      label: z.string(),
      url: z.url(),
    }).strict()),
  }).strict(),
});

export const collections = { caseStudies, profile };
