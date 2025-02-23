<template>
  <div
    class="flex items-center"
    role="radiogroup"
  >
    <button
      v-for="index in maxRating"
      :key="index"
      :class="[
        'size-6 transition-colors duration-150',
        index <= displayValue ? 'text-yellow-400' : 'text-gray-300',
        { 'cursor-pointer': !disabled },
        { 'cursor-not-allowed': disabled },
      ]"
      :disabled="disabled"
      type="button"
      role="radio"
      :aria-checked="index <= modelValue"
      :aria-label="`Rate ${index} out of ${maxRating}`"
      @click="handleClick(index)"
      @mouseenter="hoveredIndex = index"
      @mouseleave="hoveredIndex = 0"
    >
      <Icon
        :name=" index <= displayValue ? 'ph:star-fill' : 'ph:star-duotone'"
        class="size-6"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  modelValue: number
  maxRating?: number
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  maxRating: 5,
  disabled: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const hoveredIndex = ref(0)

const displayValue = computed(() =>
  hoveredIndex.value || props.modelValue,
)

const handleClick = (index: number) => {
  if (!props.disabled) {
    emit('update:modelValue', index)
  }
}
</script>
