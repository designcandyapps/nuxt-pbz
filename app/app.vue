<template>
  <NuxtLoadingIndicator />
  <UApp
    :tooltip="{ delayDuration: 0 }"
    :locale="locales[locale]"
  >
    <NuxtLayout>
      <NuxtPage keepalive />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
import { en, th } from '@nuxt/ui/locale'

const locales = { en, th }
const { locale } = useI18n()
const lang = computed(() => locales[locale.value as keyof typeof locales].code)

useHead({
  htmlAttrs: {
    lang,
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Konkamon Sion` : 'Konkamon Sion'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/vnd.microsoft.icon',
      href: '/favicon.ico',
    },
  ],
  meta: [
    { name: 'author', content: 'Konkamon Sion' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'charset', content: 'utf-8' },
    { name: 'theme-color', content: '#379777' },
  ],
})

useSeoMeta({
  ogLocale: 'th_TH',
  themeColor: '#379777',
})
</script>
