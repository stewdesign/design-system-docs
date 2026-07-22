import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const components = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/components' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    storybookUrl: z.string().optional(),
    figmaUrl: z.string().optional(),
    previewImage: z.string().optional(),
  }),
});

const foundations = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/foundations' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { components, foundations };