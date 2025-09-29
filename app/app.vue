<script setup lang="ts">
import { en,th } from '@nuxt/ui/locale'
const locales = { en,th }
const { locale,localeProperties } = useI18n()
const lang = computed(()=>locales[locale.value].code)
const langCode = computed(()=>localeProperties.value.language)
useHead({
  htmlAttrs: {lang},
  titleTemplate: (titleChunk)=>{return titleChunk?`${titleChunk} - Konkamon Sion` : 'Konkamon Sion'},
  link: [{rel:'icon',type:'image/vnd.microsoft.icon',href:'/favicon.ico'}],
  meta: [{name:'author',content:'Konkamon Sion'},{name:'viewport',content:'width=device-width,initial-scale=1'},{name:'charset',content:'utf-8'},{name:'theme-color',content:'#3892a2'}],
})
useSeoMeta({ogLocale:langCode,themeColor:'#3892a2',charset:'utf-8',ogType:'website'})

/*import type {ParsedContent} from '@nuxt/content'
const {seo}=useAppConfig()
const {data:navigation}=await useAsyncData('navigation',()=>fetchContentNavigation())
const {data:files}=useLazyFetch<ParsedContent[]>('/api/search.json',{default:()=>[],server:false})
useHead({meta:[{name:'viewport',content:'width=device-width,initial-scale=1'}],htmlAttrs:{lang:'en'}})
provide('navigation',navigation)*/
</script>

<template>
  <NuxtLoadingIndicator />
  <UApp :tooltip="{delayDuration:0}" :locale="locales[locale]">
    <UMain>
      <NuxtLayout>
        <NuxtPage keepalive />
      </NuxtLayout>
    </UMain>
  </UApp>
</template>
