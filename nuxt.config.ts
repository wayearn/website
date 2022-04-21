import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.ts'),
    },
  },
  buildModules: [
    '@pinia/nuxt',
    [
      // todo
      'unplugin-icons/nuxt',
      {
        autoInstall: true,
      },
    ],
  ],
});
