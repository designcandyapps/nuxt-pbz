<template>
  <div class="flex bg-default p-2 rounded ring ring-default">
    <div class="flex flex-col">
      <a
        v-if="workData.link"
        ref="noopener noreferrer"
        :href="workData.link"
        target="_blank"
        class="flex gap-2 hover:text-primary text-sm sm:text-lg shrink-0"
      >{{ workData.name }}
        <Icon
          name="ic:baseline-launch"
          mode="svg"
        />
      </a>
      <p
        v-else
        class="text-sm sm:text-lg"
      >
        {{ workData.name }}
      </p>
      <span class="text-gray-600 dark:text-gray-400 text-xs sm:text-sm shrink-0">{{
        workData.description
      }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type workListInterface from '~/../types/workListInterface'

defineProps<{
  workData: workListInterface
}>()
</script>
