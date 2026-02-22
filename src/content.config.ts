import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    titleEn: z.string(),
    titleZh: z.string(),
    date: z.coerce.date(),
    slug: z.string(),
    originalUrl: z.string().url(),
  }),
});

export const collections = { posts };
