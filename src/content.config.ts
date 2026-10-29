import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    kicker: z.string(),
    disciplines: z.array(z.enum(['strategy', 'ux', 'visual'])),
    year: z.string(),
    summary: z.string(),
    cover: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

const playground = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/playground' }),
  schema: z.object({
    title: z.string(),
    kicker: z.string(),
    kind: z.string(),
    cover: z.string(),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, playground };
