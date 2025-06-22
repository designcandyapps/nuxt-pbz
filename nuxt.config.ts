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
  ssr: false,
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      titleTemplate: '%s - Konkamon Sion',
      meta: [
        { name: 'author', content: 'Konkamon Sion' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'charset', content: 'utf-8' },
        { name: 'theme-color', content: '#379777' },
      ],
      htmlAttrs: {
        lang: 'th',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-06-03',
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
