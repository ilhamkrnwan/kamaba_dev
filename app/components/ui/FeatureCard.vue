<template>
  <div
    :class="cn(
      'group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300',
      'hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10',
      'hover:-translate-y-1',
      className
    )"
  >
    <!-- Background gradient on hover -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    />

    <!-- Icon -->
    <div
      class="relative mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground"
    >
      <UIcon v-if="icon" :name="icon" class="h-6 w-6" />
      <span v-else class="text-2xl">{{ emoji }}</span>
    </div>

    <!-- Content -->
    <div class="relative">
      <h3 class="mb-2 text-xl font-semibold text-foreground">
        {{ title }}
      </h3>
      
      <p class="mb-4 text-sm text-muted-foreground leading-relaxed">
        {{ description }}
      </p>

      <!-- Tags or additional info -->
      <div v-if="tagsArray && tagsArray.length > 0" class="flex flex-wrap gap-2">
        <span
          v-for="(tag, idx) in tagsArray"
          :key="idx"
          class="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Learn more link -->
      <div
        v-if="link"
        class="mt-4 flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
      >
        <span>{{ linkText }}</span>
        <svg
          class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>

    <!-- Decorative corner -->
    <div
      class="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-300 group-hover:scale-150"
    />
  </div>
</template>

<script setup lang="ts">
import { cn } from '../../utils/cn'

interface Props {
  icon?: string
  emoji?: string
  title: string
  description: string
  tags?: string | string[]
  link?: string
  linkText?: string
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  linkText: 'Pelajari lebih lanjut',
  className: ''
})

// Convert tags to array if it's a string
const tagsArray = computed(() => {
  if (!props.tags) return []
  if (typeof props.tags === 'string') {
    return props.tags.split(',').map(tag => tag.trim())
  }
  return props.tags
})
</script>
