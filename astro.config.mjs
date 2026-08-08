// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hm.cakson.my.id',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  vite: { plugins: [/** @type {any} */ (tailwindcss())] },
  integrations: [sitemap({
    i18n: { defaultLocale: 'en', locales: { en: 'en', id: 'id' } },
    filter: (page) => !page.includes('/api/') && page !== 'https://hm.cakson.my.id/',
  })],
});
