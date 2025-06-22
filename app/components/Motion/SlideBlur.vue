<template>
  <LazyMotion
    :features="domAnimation"
  >
    <Motion
      :initial="initialState"
      :while-in-view="inViewState"
      :in-view-options="{ once: true, margin: '0px 0px -20% 0px' }"
      :transition="{
        duration: $props.duration,
        delay: $props.delay,
        ease: 'easeOut',
        type: 'tween',
      }"
    >
      <slot />
    </Motion>
  </LazyMotion>
</template>

<script lang="ts" setup>
import { domAnimation } from 'motion-v'

const props = withDefaults(defineProps<{
  duration?: number
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}>(), {
  duration: 0.5,
  delay: 0,
  direction: 'up',
})

const transformMap = {
  down: { initial: 'translateY(-50px)', final: 'translateY(0px)' },
  up: { initial: 'translateY(50px)', final: 'translateY(0px)' },
  left: { initial: 'translateX(-50px)', final: 'translateX(0px)' },
  right: { initial: 'translateX(50px)', final: 'translateX(0px)' },
}

const initialState = computed(() => ({
  opacity: 0,
  filter: 'blur(10px)',
  transform: transformMap[props.direction].initial,
}))

const inViewState = computed(() => ({
  opacity: 1,
  filter: 'blur(0px)',
  transform: transformMap[props.direction].final,
}))
</script>
