export default defineNuxtConfig({
  compatibilityDate: '2024-07-30',
  future: { compatibilityVersion: 3 },

  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
  ],

  hub: { cache: true },

  supabase: {
    redirect: false
  },

  css: ['./assets/css/global.css'],
  colorMode: { preference: 'light' },

  devtools: { enabled: true },

  runtimeConfig: {
    realEstateApiUri: process.env.REAL_ESTATE_API_URI,
    realEstateApiKey: process.env.REAL_ESTATE_API_KEY,
  },
})

