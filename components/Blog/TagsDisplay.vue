<template>
  <section class="rounded-lg border border-gray-200 bg-white p-4 drop-shadow dark:border-gray-800 dark:bg-gray-900 dark:drop-shadow-none">
    <h2 class="mb-2 text-2xl font-bold">
      Tags ({{ tagItems?.meta.pagination.total }}):
    </h2>
    <div>
      <template v-if="tagItems">
        <BlogTagsToggler
          :tags="tagItems.data"
          @toggled-tags="$emit('toggledTags', $event)"
        />
      </template>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Strapi5ResponseMany } from '@nuxtjs/strapi'
import type { tagsItem } from '~/types/BlogTags'

defineEmits(['toggledTags'])

const { find } = useStrapi()
const { data: tagItems } = useNuxtData<Strapi5ResponseMany<Category>>('tags')
await useAsyncData(
  'tags',
  () => find<Category>('categories', { fields: ['name'], sort: 'name:asc' }),
  {
    default() {
      return tagItems.value
    },
    deep: false,
    lazy: true,
  },
)
</script>
