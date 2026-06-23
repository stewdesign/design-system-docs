import { defineCollection, z } from 'astro:content';

const components = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    storybookUrl: z.string().optional(),
    figmaUrl: z.string().optional(),
    previewImage: z.string().optional(),
  }),
});

export const collections = { components };