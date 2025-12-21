<script setup lang="ts">
import { computed } from 'vue'
import { useColorMode } from '#imports'

interface Stat {
  value: string
  label: string
  description: string
}

interface Props {
  title: string
  subtitle: string
  badge?: string
  primaryButton?: string
  secondaryButton?: string
  stats?: Stat[]
}

const props = withDefaults(defineProps<Props>(), {
  badge: 'Sedang Berkembang',
  primaryButton: 'Mulai Berkolaborasi',
  secondaryButton: 'Pelajari Lebih Lanjut'
})

const emit = defineEmits<{
  primaryAction: []
  secondaryAction: []
}>()

const colorMode = useColorMode()

const spotlightColor = computed(() => 
  colorMode.value === 'dark' ? 'transparent' : '#3b82f6'
)

const onPrimaryAction = () => emit('primaryAction')
const onSecondaryAction = () => emit('secondaryAction')
</script>

<template>
  <div class="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden ">
    <!-- Spotlight effects -->
    <UiSpotlight
      class="-top-40 left-0 md:-top-20 md:left-60"
      :fill="spotlightColor"
    />
    <UiSpotlight
      class="left-full top-10 md:left-[60%]"
      :fill="spotlightColor"
    />

    <!-- Content -->
    <div class="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6 py-24 animate-fade-in-up">
      <div class="text-center">
        <!-- Badge -->
        <div class="mb-8 inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-sm">
          <span class="animate-pulse mr-2 h-2 w-2 rounded-full bg-green-500" />
          <span class="text-muted-foreground">{{ badge }}</span>
        </div>

        <!-- Main heading -->
        <h1
          class="mb-6 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-4xl font-bold text-transparent md:text-6xl lg:text-7xl"
        >
          {{ title }}
        </h1>

        <!-- Subtitle -->
        <p
          class="mx-auto mb-12 max-w-3xl text-lg text-muted-foreground md:text-xl"
        >
          {{ subtitle }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <UButton
            size="xl"
            color="primary"
            class="group relative overflow-hidden"
            @click="onPrimaryAction"
          >
            <span class="relative z-10">{{ primaryButton }}</span>
            <span class="absolute inset-0 -z-0 bg-gradient-to-r from-primary to-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
          </UButton>
          
          <UButton
            size="xl"
            variant="outline"
            @click="onSecondaryAction"
          >
            {{ secondaryButton }}
          </UButton>
        </div>

        <!-- Stats or features -->
        <div v-if="stats && stats.length > 0" class="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div
            v-for="(stat, idx) in stats"
            :key="idx"
            class="group rounded-lg border border-border bg-card/50 p-6 backdrop-blur transition-all hover:border-primary/50 hover:shadow-lg"
          >
            <div class="mb-2 text-4xl font-bold text-primary">
              {{ stat.value }}
            </div>
            <div class="text-sm font-medium text-foreground">
              {{ stat.label }}
            </div>
            <p class="mt-2 text-xs text-muted-foreground">
              {{ stat.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
      <div class="animate-bounce">
        <svg
          class="h-6 w-6 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
</style>
