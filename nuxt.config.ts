import { defineNuxtConfig } from 'nuxt3';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.ts'),
    },
  },
  vite: {
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  },
});
