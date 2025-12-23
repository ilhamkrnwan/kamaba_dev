<script setup lang="ts">
interface Props {
  title: string
  description: string
  image?: string
  badge?: string
  link?: string
  linkText?: string
  size?: 'normal' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'normal',
  linkText: 'View Detail'
})
</script>

<template>
  <NuxtLink
    :to="link || '#'"
    :class="[
      'group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300',
      'hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1',
      size === 'large' ? 'md:col-span-2 md:row-span-2 min-h-[500px]' : 'min-h-[400px]'
    ]"
  >
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        v-if="image"
        class="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        :style="{ backgroundImage: `url(${image})` }"
      />
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
    </div>

    <!-- Content Container -->
    <div class="relative z-10 flex flex-1 flex-col justify-between p-6 md:p-8">
      <!-- Top Section: Badge -->
      <div class="flex items-start justify-between">
        <span
          v-if="badge"
          class="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm"
        >
          {{ badge }}
        </span>
      </div>

      <!-- Bottom Section: Title, Description & Footer -->
      <div class="space-y-4">
        <div class="space-y-2">
          <h3
            :class="[
              'font-bold leading-tight text-foreground transition-colors group-hover:text-primary',
              size === 'large' ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
            ]"
          >
            {{ title }}
          </h3>
          <p
            :class="[
              'text-muted-foreground line-clamp-2',
              size === 'large' ? 'text-base' : 'text-sm'
            ]"
          >
            {{ description }}
          </p>
        </div>

        <!-- Footer Slot -->
        <div class="pt-2">
          <slot name="footer">
            <div class="flex items-center justify-between">
              <span class="inline-flex items-center text-sm font-medium text-primary transition-all group-hover:gap-2">
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
              </span>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
