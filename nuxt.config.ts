// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/content',
    'motion-v/nuxt',
    '@nuxthub/core',
  ],
  ssr: false,
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    noVueServer: true,
  },

  compatibilityDate: '2025-06-03',
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: true,
      routes: ['/'],
      ignore: ['/__nuxt_content'],
    },
  },

  vite: {
    vue: {
      features: { optionsAPI: false },
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
        name: 'Roboto Flex', display: 'swap', global: true, subsets: ['latin', 'latin-ext'], styles: ['normal'], weights: ['300 900'],
      },
      {
        name: 'Noto Sans Thai', display: 'swap', global: true, subsets: ['thai'], styles: ['normal'], weights: ['400 900'],
      },
      {
        name: 'Fira Code', display: 'swap', subsets: ['latin'], styles: ['normal'], weights: [400, 600, 700],
      },
    ],
  },
  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
    baseUrl: 'https://www.bkozii.com',
    strategy: 'prefix',
    defaultLocale: 'th',
    lazy: true,
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
      redirectOn: 'no prefix',
      fallbackLocale: 'th',
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
