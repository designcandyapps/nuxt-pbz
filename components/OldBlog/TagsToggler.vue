<template>
  <div>
    <ToggleGroupRoot
      v-model="toggledTags"
      type="multiple"
      class="flex flex-wrap gap-1 rounded-lg shadow-sm"
      @update:model-value="$emit('toggledTags', toggledTags)"
    >
      <div
        v-for="tagItem in $props.tags"
        :key="tagItem.documentId"
      >
        <ToggleGroupItem
          :value="tagItem.name"
          :as-child="true"
        >
          <UBadge
            variant="subtle"
            :ui="{
              base: 'dark:data-[state=on]:bg-primary-700 cursor-pointer data-[state=on]:bg-primary-500 data-[state=on]:hover:bg-primary-800 data-[state=on]:text-white hover:bg-primary-300 dark:hover:bg-primary-800 hover:text-white',
            }"
            color="primary"
          >
            {{ tagItem.name }}
          </UBadge>
        </ToggleGroupItem>
      </div>
    </ToggleGroupRoot>
  </div>
</template>

<script lang="ts" setup>
import { ToggleGroupItem, ToggleGroupRoot } from 'reka-ui'
import type { Category } from '~/types/StrapiBlogs'

defineProps<{
  tags: Category[]
}>()

defineEmits(['toggledTags'])
const toggledTags = ref([])
</script>
