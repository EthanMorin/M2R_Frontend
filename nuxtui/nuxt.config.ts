export default defineNuxtConfig({
  compatibilityDate: '2024-07-30',
  future: { compatibilityVersion: 3 },

  modules: ['@nuxthub/core', '@nuxt/eslint', '@nuxt/ui', '@nuxtjs/supabase'],

  hub: { cache: true },

  css: ['./assets/css/global.css'],
  colorMode: { preference: 'light' },

  devtools: { enabled: true },
})