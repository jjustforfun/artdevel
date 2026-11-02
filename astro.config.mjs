import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://artisan-dev.example',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'ru'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    mdx(),
    sitemap()
  ]
});
