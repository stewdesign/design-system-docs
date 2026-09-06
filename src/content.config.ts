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

// ─── Ordered, block-based sections ──────────────────────────────────────
// A component's page can be built as an ordered list of typed sections
// instead of (or alongside) the fixed fields below. Each `type` maps to
// one reusable block component in src/components/blocks/ or one of the
// existing global section components — see ComponentLayout.astro. This is
// what lets a page be assembled from a fixed vocabulary of blocks rather
// than a hardcoded field-by-field layout.

const figureItem = z.object({
  image: z.string(),
  imageAlt: z.string().optional(),
  caption: z.string(),
});

// New, generic page-building blocks (hand-coded and reviewed in the
// components/playground page before being promoted here).
const anatomySection = z.object({
  type: z.literal('anatomy'),
  heading: z.string().default('Anatomy'),
  items: z.array(z.string()),
  image: z.string(),
  imageAlt: z.string().optional(),
  caption: z.string(),
});

const twoColSection = z.object({
  type: z.literal('two-col'),
  heading: z.string(),
  items: z.array(z.object({
    title: z.string(),
    description: z.string(),
    list: z.array(z.string()).optional(),
    image: z.string(),
    imageAlt: z.string().optional(),
    caption: z.string(),
  })),
});

const largeSection = z.object({
  type: z.literal('large'),
  heading: z.string(),
  items: z.array(z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    imageAlt: z.string().optional(),
    caption: z.string(),
  })),
});

const sideBySideSection = z.object({
  type: z.literal('side-by-side'),
  heading: z.string(),
  items: z.array(z.object({
    title: z.string(),
    figures: z.tuple([figureItem, figureItem]),
  })),
});

// Existing sections, folded into the same union so a page can mix them
// with the new blocks in one ordered list. Heading/id for these stay
// fixed, matching the components that already render them.
const variantsSection = z.object({ type: z.literal('variants'), items: z.array(propertyItem) });
const behaviorSection = z.object({ type: z.literal('behavior'), items: z.array(propertyItem) });
const bestPracticesSection = z.object({
  type: z.literal('best-practices'),
  do: z.array(z.string()),
  dont: z.array(z.string()),
});
const designTokensSection = z.object({
  type: z.literal('design-tokens'),
  tokens: z.array(z.object({ name: z.string(), value: z.string() })),
});
const accessibilitySection = z.object({ type: z.literal('accessibility'), items: z.array(z.string()) });
const relatedComponentsSection = z.object({
  type: z.literal('related-components'),
  items: z.array(z.object({
    label: z.string(),
    href: z.string(),
    note: z.string().optional(),
  })),
});

const section = z.discriminatedUnion('type', [
  anatomySection,
  twoColSection,
  largeSection,
  sideBySideSection,
  variantsSection,
  behaviorSection,
  bestPracticesSection,
  designTokensSection,
  accessibilitySection,
  relatedComponentsSection,
]);

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

    // New, ordered block-based sections (see above). A migrated component
    // uses this instead of the fixed fields below.
    sections: z.array(section).optional(),

    // Legacy fixed fields — still supported for components not yet
    // migrated onto `sections`. Remove a field here only once every
    // component using it has moved to the new shape.
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
