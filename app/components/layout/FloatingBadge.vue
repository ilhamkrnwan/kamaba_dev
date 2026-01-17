<script setup lang="ts">
interface Props {
  badge?: string
}

withDefaults(defineProps<Props>(), {
  badge: 'Sedang Berkembang',
})
</script>

<template>
    <!-- Status Badge (Absolute Positioned) -->
    <div 
      v-if="badge" 
      class="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 z-30 inline-flex items-center rounded-full border border-border bg-background/80 backdrop-blur-md px-4 py-2 text-sm font-medium text-foreground shadow-lg ring-1 ring-border/50 transition-all hover:scale-105 hover:bg-background"
    >
      <span class="mr-2 h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
      {{ badge }}
    </div>
</template>