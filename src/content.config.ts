import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { fileURLToPath } from 'node:url';
import { relative } from 'node:path';

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/blog',
    generateId: ({ entry, base }) =>
      relative(fileURLToPath(base), fileURLToPath(new URL(encodeURI(entry), base))).replace(/\.md$/, ''),
  }),
  schema: z.object({
    slug: z.string(),
    lang: z.enum(['en', 'id']),
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
