<template>
  <div
    class="top-0 z-10 sticky bg-default/80 drop-shadow-sm backdrop-blur-xl border-default border-b"
  >
    <UContainer class="items-center border-default border-x w-full">
      <header class="flex items-center h-(--header-height)">
        <div class="flex-1 font-mono tracking-tighter">
          <ULink
            id="myName"
            to="/"
            class="flex items-center text-highlighted"
            aria-label="logo"
          >
            <h1 class="font-bold text-lg">bkozii<span class="font-normal text-sm">.com</span></h1>
          </ULink>
        </div>
        <div class="flex flex-1 justify-center">
          <UNavigationMenu
            :items="navItems"
            variant="link"
            highlight
          />
        </div>
        <div class="flex flex-row flex-1 justify-end shrink-0">
          <LazyNavbarLangSwitch />
          <LazyNavbarThemeSwitch />
        </div>
      </header>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const localePath = useLocalePath()

const navItems = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: localePath('/'),
    icon: 'solar:home-2-linear',
  },
  {
    label: 'Projects',
    to: localePath('/projects'),
    icon: 'ph:folder-open-duotone',
  },
  {
    label: 'What\'s In My Bag?',
    icon: 'solar:backpack-linear',
    disabled: true,
  },
  /*   {
    label: 'Bookmarks',
    to: '/Bookmarks',
    icon: 'ph:bookmark-duotone',
  }, */
  {
    label: 'Blog',
    icon: 'solar:book-2-linear',
    disabled: true,
  },
])
</script>
