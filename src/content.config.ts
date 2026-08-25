import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Shared shape for anything rendered as a labeled card with an optional
// image — anatomy parts, variants, and behavior/states all use this same
// template on the page, just under different headings.
const propertyItem = z.object({
  name: z.string(),
  description: z.string(),
  image: z.string().optional(),
});

const components = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/components' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    storybookUrl: z.string().optional(),
    figmaUrl: z.string().optional(),
    previewImage: z.string().optional(),
    version: z.string().optional(),
    lastUpdated: z.coerce.date().optional(),
    platforms: z.array(z.enum(['Web', 'Mobile app'])).optional(),
    anatomy: z.object({
      image: z.string().optional(),
      parts: z.array(propertyItem),
    }).optional(),
    variants: z.array(propertyItem).optional(),
    behavior: z.array(propertyItem).optional(),
    bestPractices: z.object({
      do: z.array(z.string()),
      dont: z.array(z.string()),
    }).optional(),
    designTokens: z.array(z.object({
      name: z.string(),
      value: z.string(),
    })).optional(),
    accessibility: z.array(z.string()).optional(),
    relatedComponents: z.array(z.object({
      label: z.string(),
      href: z.string(),
      note: z.string().optional(),
    })).optional(),
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
