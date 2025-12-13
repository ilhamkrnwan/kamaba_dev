<template>
  <div
    :class="cn(
      'grid gap-4 md:gap-6',
      gridCols,
      className
    )"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../utils/cn'

interface Props {
  columns?: number
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  columns: 3,
  className: ''
})

const gridCols = computed(() => {
  const colsMap: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }
  return colsMap[props.columns] || colsMap[3]
})
</script>
