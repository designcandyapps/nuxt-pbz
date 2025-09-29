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

<!--template>
  <NuxtLoadingIndicator />
  <UApp :tooltip="{delayDuration:0}" :locale="locales[locale]">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template-->

<template>
  <div>
    <NuxtLoadingIndicator />
    <AppHeader />
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
    <AppFooter />
  </div>
</template>

<!--style>
@media (min-width: 400px) and (prefers-reduced-motion: no-preference) {
  .page-enter-active {
    transition: all 0.5s cubic-bezier(0.25, 1, 0.25, 1);
  }
  .page-leave-active {
    transition: all 0.3s cubic-bezier(0.75, 0, 0.75, 0);
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style-->
