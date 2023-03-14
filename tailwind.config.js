module.exports = {
  theme: {
    // https://tailwindcss.com/docs/customizing-colors#color-object-syntax
    extend: {
      colors: {
        custom: '#2a3fb1',
        content: '#333',
      },
    },
  },
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
