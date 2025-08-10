export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
  ],


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

  tailwindcss: {
    cssPath: '@/assets/main.css',
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