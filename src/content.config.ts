import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),          // 卡片一句话
    status: z.enum(['active', 'paused', 'done', 'archived']),
    type: z.enum(['game', 'app', 'tool', 'ai', 'business', 'hardware', 'content']),
    year: z.number(),
    cover: z.string().optional(), // /covers/xxx.webp
    tech: z.array(z.string()).default([]),
    links: z
      .object({
        demo: z.string().url().optional(),
        repo: z.string().url().optional(),
        docs: z.string().url().optional(),
      })
      .default({}),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { projects };
