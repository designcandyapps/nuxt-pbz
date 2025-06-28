<template>
  <div
    class="top-0 z-10 sticky bg-default border-default border-b"
  >
    <UContainer class="border-default border-x w-full">
      <header class="flex items-center h-(--header-height)">
        <div class="flex flex-row flex-1 items-center space-x-4">
          <NuxtLinkLocale
            id="myName"
            to="/"
            active-class="decoration-primary decoration-2 underline underline-offset-[12px]"
            class="font-mono font-bold text-highlighted"
            aria-label="logo"
          >
            <h1>
              bkozii<span class="font-normal text-sm">.com</span>
            </h1>
          </NuxtLinkLocale>
          <UNavigationMenu
            class="hidden sm:block"
            :ui="{ link: 'after:-bottom-1 after:h-0.5' }"
            :items="navItems"
            variant="link"
            highlight
          />
        </div>
        <div class="flex flex-row justify-end space-x-2 shrink-0">
          <LazyNavbarLangSwitch />
          <LazyNavbarThemeSwitch />
          <LazyUButton
            variant="ghost"
            class="sm:hidden inline-flex"
            icon="solar:hamburger-menu-linear"
            color="neutral"
            @click="openModal"
          />
        </div>
      </header>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'
import { LazyNavbarMobileNav } from '#components'

const localePath = useLocalePath()
const overlay = useOverlay()

const navItems = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Projects',
    to: localePath('/projects'),
    icon: 'solar:inbox-archive-line-duotone',
  },
  {
    label: 'What\'s In My Bag?',
    icon: 'solar:backpack-line-duotone',
    disabled: true,
  },
  {
    label: 'Blog',
    icon: 'solar:notebook-line-duotone',
    disabled: true,
  },
])

const modal = overlay.create(LazyNavbarMobileNav, {
  props: {
    menu: navItems.value,
  },
})

async function openModal() {
  modal.open()
}
</script>
