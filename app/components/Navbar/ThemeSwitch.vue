<template>
  <div class="inline-flex">
    <ClientOnly>
      <UTooltip
        text="Switch Color Mode"
        disable-closing-trigger
      >
        <UButton
          color="neutral"
          variant="ghost"
          :icon="iconName"
          @click="switchColorMode"
        />
      </UTooltip>

      <template #fallback>
        <USkeleton
          class="size-6"
          :ui="{ rounded: 'rounded-full' }"
        />
      </template>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()

const ColorModeList = ['light', 'dark', 'system'] as const
type ColorMode = (typeof ColorModeList)[number]

const switchColorMode = () => {
  const currentIndex = ColorModeList.indexOf(colorMode.preference as ColorMode)
  const nextIndex = (currentIndex + 1) % ColorModeList.length
  colorMode.preference = ColorModeList[nextIndex] as ColorMode
}

const iconName = computed(() => {
  const iconNameMap: Record<ColorMode, string> = {
    system: 'monitor-linear',
    light: 'sun-linear',
    dark: 'moon-linear',
  }
  const iconName = colorMode.preference as ColorMode
  return `solar:${iconNameMap[iconName]}`
})
</script>
