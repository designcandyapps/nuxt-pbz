// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/fonts',
    '@nuxt/content',
    'motion-v/nuxt',
  ],
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-06-03',
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/en', '/th'],
    },
  },

  eslint: {
    config: {
      stylistic: {
        jsx: false,
        braceStyle: '1tbs',
        arrowParens: true,
      },
    },
  },
  fonts: {
    provider: 'google',
    families: [
      {
        name: 'Nunito Sans', display: 'swap', global: true, subsets: ['latin', 'latin-ext'], styles: ['normal'],
      },
      {
        name: 'Noto Sans Thai', display: 'swap', global: true, subsets: ['thai'], styles: ['normal'],
      },
    ],
    defaults: {
      weights: [300, 400, 500, 700, 800],
      styles: ['normal'],
    },
  },
  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
    baseUrl: 'https://www.bkozii.com',
    strategy: 'prefix',
    defaultLocale: 'en',
    lazy: true,
    skipSettingLocaleOnNavigate: true,
    locales: [
      {
        code: 'th',
        language: 'th-TH',
        name: 'ภาษาไทย',
        file: 'th.json',
        isCatchallLocale: true,
      },
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        file: 'en.json',
        isCatchallLocale: true,
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_language',
      fallbackLocale: 'en',
    },
    vueI18n: 'i18n.config.ts',
  },
  icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './app/assets/icons',
      },
    ],
    provider: 'iconify',
  },
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dqx4sss9s/image/upload',
    },
  },
})
