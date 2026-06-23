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

export const collections = { components };