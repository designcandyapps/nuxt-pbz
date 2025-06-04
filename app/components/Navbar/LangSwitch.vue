<template>
  <ClientOnly>
    <UTooltip
      :text="$t('langSwitcher')"
      disable-closing-trigger
    >
      <UButton
        :icon="currentLocale === 'en' ? 'circle-flags:us' : 'circle-flags:th'"
        variant="ghost"
        color="neutral"
        @click="toggleLocale"
      />
    </UTooltip>

    <template #fallback>
      <USkeleton
        class="size-6"
        :ui="{ rounded: 'rounded-full' }"
      />
    </template>
  </ClientOnly>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale, setLocale } = useI18n()
const currentLocale = ref(locale.value)

const toggleLocale = () => {
  const newLocale = currentLocale.value === 'en' ? 'th' : 'en'
  setLocale(newLocale)
  currentLocale.value = newLocale
}
</script>
