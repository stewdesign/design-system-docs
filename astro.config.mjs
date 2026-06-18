import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://stewartwilson.github.io',
  base: '/design-system-docs',
  integrations: [mdx()],
});