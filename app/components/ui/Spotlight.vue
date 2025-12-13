<template>
  <div
    class="pointer-events-none absolute z-[1] h-[140%] w-[140%] rounded-full"
    :style="spotlightStyle"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  fill?: string
}>()

const spotlightStyle = computed(() => ({
  background: `radial-gradient(ellipse at center, ${props.fill ?? 'white'} 0%, transparent 60%)`,
  opacity: '0.25',
}))
</script>
