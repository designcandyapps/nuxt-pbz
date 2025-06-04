<template>
  <div>
    <div class="flex flex-col w-full overflow-auto dark:text-gray-200">
      <h3 class="mb-2 font-bold">
        {{ title }}
      </h3>
      <div class="flex flex-row flex-wrap justify-center sm:justify-start gap-3">
        <div
          v-for="item in technologyData"
          :key="item.name"
        >
          <UTooltip
            :text="item.name"
            :arrow="true"
            :content="{ side: 'top' }"
          >
            <UIcon
              :name="item.icon"
              class="size-7 md:size-5 text-dimmed hover:text-primary"
              title="item.name"
            />
          </UTooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type FrameworkListInterface from '~/../types/FrameworkListInterface'

defineProps({
  technologyData: {
    type: Array as () => FrameworkListInterface[],
    required: true,
  },
  title: String,
})
</script>
