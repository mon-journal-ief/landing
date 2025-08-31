export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    'nuxt-umami',
  ],
  // fe543b3c-d4d1-4293-bec4-c64dc01361e1
  runtimeConfig: {
    public: {
      ENVIRONNEMENT: '',
      URL_APP: '',
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  fonts: {
    families: [{
      name: 'Fredoka',
      weights: [400, 500, 600, 700, 800, 900],
      provider: 'google',
    }],
  },

  tailwindcss: {
    cssPath: '@/assets/main.css',
  },

  umami: {
    id: 'fe543b3c-d4d1-4293-bec4-c64dc01361e1',
    host: 'https://umami.mon-journal-ief.com/',
    autoTrack: true,
    ignoreLocalhost: true,
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },
})
