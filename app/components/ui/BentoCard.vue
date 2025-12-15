<template>
  <div
    :class="cn(
      'group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300',
      'hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10',
      size === 'large' && 'md:col-span-2 md:row-span-2',
      size === 'wide' && 'md:col-span-2',
      size === 'tall' && 'md:row-span-2',
      className
    )"
  >
    <!-- Background Pattern -->
    <div
      v-if="pattern"
      class="absolute inset-0 opacity-5 transition-opacity duration-300 group-hover:opacity-10"
      :style="{ backgroundImage: `url(${pattern})` }"
    />

    <!-- Gradient overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    />

    <!-- Content -->
    <div class="relative flex h-full flex-col">
      <!-- Icon/Image -->
      <div v-if="icon || emoji" class="mb-4">
        <div
          class="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground"
        >
          <UIcon v-if="icon" :name="icon" class="h-6 w-6" />
          <span v-else-if="emoji" class="text-2xl">{{ emoji }}</span>
        </div>
      </div>

      <!-- Title & Description -->
      <div class="mb-4 flex-1">
        <h3
          :class="cn(
            'mb-2 font-semibold text-foreground',
            size === 'large' ? 'text-2xl md:text-3xl' : 'text-xl'
          )"
        >
          {{ title }}
        </h3>
        
        <p
          :class="cn(
            'text-muted-foreground leading-relaxed',
            size === 'large' ? 'text-base md:text-lg' : 'text-sm'
          )"
        >
          {{ description }}
        </p>
      </div>

      <!-- Image/Media -->
      <div v-if="image" class="mb-4 overflow-hidden rounded-lg">
        <NuxtImg
          :src="image"
          :alt="title"
          class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <!-- Footer/Action -->
      <div v-if="$slots.footer || link" class="mt-auto">
        <slot name="footer">
          <NuxtLink
            v-if="link"
            :to="link"
            class="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
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
          </NuxtLink>
        </slot>
      </div>

      <!-- Badge -->
      <div
        v-if="badge"
        class="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground"
      >
        {{ badge }}
      </div>
    </div>

    <!-- Decorative elements -->
    <div
      class="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all duration-300 group-hover:scale-150"
    />
  </div>
</template>

<script setup lang="ts">
import { cn } from '../../utils/cn'

interface Props {
  title: string
  description: string
  icon?: string
  emoji?: string
  image?: string
  pattern?: string
  badge?: string
  size?: 'normal' | 'large' | 'wide' | 'tall'
  link?: string
  linkText?: string
  className?: string
}

withDefaults(defineProps<Props>(), {
  size: 'normal',
  linkText: 'Learn more',
  className: ''
})
</script>
