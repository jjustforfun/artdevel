import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://artisan-dev.example',
  server: { host: '0.0.0.0' },
  preview: { host: '0.0.0.0' },
  vite: {
    server: { allowedHosts: true },
    preview: { allowedHosts: true },
  },
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
