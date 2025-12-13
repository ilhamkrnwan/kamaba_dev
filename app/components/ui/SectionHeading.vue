<template>
  <div
    :class="cn(
      'mb-12 text-center',
      align === 'left' && 'text-left',
      align === 'right' && 'text-right',
      className
    )"
  >
    <!-- Badge/Label -->
    <div v-if="badge" class="mb-4">
      <span
        class="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-primary"
      >
        {{ badge }}
      </span>
    </div>

    <!-- Title -->
    <h2
      :class="cn(
        'mb-4 font-bold text-foreground',
        size === 'sm' && 'text-2xl md:text-3xl',
        size === 'md' && 'text-3xl md:text-4xl lg:text-5xl',
        size === 'lg' && 'text-4xl md:text-5xl lg:text-6xl'
      )"
    >
      <span v-if="gradient" class="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
        {{ title }}
      </span>
      <span v-else>{{ title }}</span>
    </h2>

    <!-- Subtitle/Description -->
    <p
      v-if="subtitle"
      :class="cn(
        'mx-auto text-muted-foreground',
        size === 'sm' && 'max-w-2xl text-base',
        size === 'md' && 'max-w-3xl text-lg md:text-xl',
        size === 'lg' && 'max-w-4xl text-xl md:text-2xl',
        align === 'left' && 'mx-0',
        align === 'right' && 'ml-auto mr-0'
      )"
    >
      {{ subtitle }}
    </p>

    <!-- Decorative line -->
    <div
      v-if="showLine"
      :class="cn(
        'mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-blue-600',
        align === 'center' && 'mx-auto',
        align === 'right' && 'ml-auto'
      )"
    />
  </div>
</template>

<script setup lang="ts">
import { cn } from '../../utils/cn'

interface Props {
  title: string
  subtitle?: string
  badge?: string
  size?: 'sm' | 'md' | 'lg'
  align?: 'left' | 'center' | 'right'
  gradient?: boolean
  showLine?: boolean
  className?: string
}

withDefaults(defineProps<Props>(), {
  size: 'md',
  align: 'center',
  gradient: false,
  showLine: false,
  className: ''
})
</script>
