import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import pagefind from 'astro-pagefind';

export default defineConfig({
  site: 'https://stewdesign.github.io',
  base: '/design-system-docs',
  integrations: [mdx(), pagefind()],
});