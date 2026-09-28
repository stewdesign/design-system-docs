import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Shared shape for anything rendered as a labeled card with an optional
// image — used only by the legacy fixed fields and legacy section types.
const propertyItem = z.object({
  name: z.string(),
  description: z.string(),
  image: z.string().optional(),
});

// ─── Ordered, block-based sections ──────────────────────────────────────
// A component's page is built as an ordered list of typed sections. Each
// `type` maps to one reusable block component — see ComponentLayout.astro.

const figureItem = z.object({
  image: z.string(),
  imageAlt: z.string().optional(),
  label: z.string().optional(),
  caption: z.string(),
});

const anatomySection = z.object({
  type: z.literal('anatomy'),
  heading: z.string().default('Anatomy'),
  items: z.array(z.string()),
  image: z.string(),
  imageAlt: z.string().optional(),
  caption: z.string().optional(),
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
    caption: z.string().optional(),
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

// CHANGED: optional section-level `description` and `list`, rendered above
// the paired figures. Lets Content guidance carry its full set of writing
// rules, with do/don't pairs as illustrated examples beneath. `items` may
// now be empty when a component has rules but no do/don't examples.
const sideBySideSection = z.object({
  type: z.literal('side-by-side'),
  heading: z.string(),
  description: z.string().optional(),
  list: z.array(z.string()).optional(),
  items: z.array(z.object({
    title: z.string().optional(),
    figures: z.tuple([figureItem, figureItem]),
  })).default([]),
});

// NEW: the component API as a table (Property | Options | Default |
// Description). `tables` is an array so composite components (e.g. a
// parent and its child item) can show one titled table each.
const propertiesSection = z.object({
  type: z.literal('properties'),
  heading: z.string().default('Properties'),
  tables: z.array(z.object({
    title: z.string().optional(),
    rows: z.array(z.object({
      name: z.string(),
      options: z.string(),
      defaultValue: z.string().optional(),
      description: z.string(),
    })),
  })),
});

const designTokensSection = z.object({
  type: z.literal('design-tokens'),
  tokens: z.array(z.object({ name: z.string(), value: z.string() })),
});

// CHANGED: fixed sub-sections instead of "### Heading" strings mixed into
// a flat list. Each renders under its own h3 only when present. `items`
// stays for pages already using the flat list.
const accessibilitySection = z.object({
  type: z.literal('accessibility'),
  items: z.array(z.string()).optional(),
  focusOrder: z.array(z.string()).optional(),
  keyboard: z.array(z.object({ key: z.string(), action: z.string() })).optional(),
  aria: z.array(z.string()).optional(),
  seo: z.array(z.string()).optional(),
});

const relatedComponentsSection = z.object({
  type: z.literal('related-components'),
  items: z.array(z.object({
    label: z.string(),
    href: z.string(),
    note: z.string().optional(),
  })),
});

// Two text columns, "Do" and "Don't". Used for When to use / When not to
// use, where the points aren't one-to-one pairs. Heading and column titles
// are optional and default to "Best practices", "Do" and "Don't".
const bestPracticesSection = z.object({
  type: z.literal('best-practices'),
  heading: z.string().default('Best practices'),
  doHeading: z.string().default('Do'),
  dontHeading: z.string().default("Don't"),
  do: z.array(z.string()).default([]),
  dont: z.array(z.string()).default([]),
});

// Legacy section types — keep until no page uses them.
const variantsSection = z.object({ type: z.literal('variants'), items: z.array(propertyItem) });
const behaviorSection = z.object({ type: z.literal('behavior'), items: z.array(propertyItem) });

const section = z.discriminatedUnion('type', [
  anatomySection,
  twoColSection,
  largeSection,
  sideBySideSection,
  propertiesSection,
  designTokensSection,
  accessibilitySection,
  relatedComponentsSection,
  variantsSection,
  behaviorSection,
  bestPracticesSection,
]);

const components = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/components' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // NEW: drafts are built in dev only and hidden from production.
    draft: z.boolean().default(false),
    storybookUrl: z.string().optional(),
    figmaUrl: z.string().optional(),
    previewImage: z.string().optional(),
    version: z.string().optional(),
    lastUpdated: z.coerce.date().optional(),
    platforms: z.array(z.enum(['Web', 'Mobile app'])).optional(),

    sections: z.array(section).optional(),

    // Legacy fixed fields — still supported for components not yet
    // migrated onto `sections`. Remove once every page has moved over.
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
