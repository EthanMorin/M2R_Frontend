export default defineNuxtConfig({
  compatibilityDate: '2024-07-30',
  future: { compatibilityVersion: 3 },

  modules: ['@nuxthub/core', '@nuxt/eslint', '@nuxt/ui'],

  hub: { cache: true },

  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    apiKey: '',
    supabaseKey: '',
    supabaseUrl: '',
    public: {
    }
  },

  css: ['./assets/css/global.css'],
  colorMode: { preference: 'light' },

  devtools: { enabled: true },
})