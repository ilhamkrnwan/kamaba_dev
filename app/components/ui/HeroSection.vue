<script setup lang="ts">
import { computed } from 'vue'
import { useColorMode } from '#imports'

interface Props {
  title: string
  subtitle: string
  badge?: string
  primaryButton?: string
  secondaryButton?: string
  image?: string
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
  <section class="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden pt-20 pb-12 lg:pt-32 lg:pb-20">
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
    <div class="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6 flex flex-col items-center animate-fade-in-up">
      
        <!-- Text Header -->
        <div class="flex flex-col items-center text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <!-- Badge -->
          <div v-if="badge" class="mb-6 inline-flex items-center rounded-full border border-border bg-card/50 backdrop-blur px-4 py-1.5 text-sm shadow-sm transition-colors hover:bg-card">
            <span class="animate-pulse mr-2 h-2 w-2 rounded-full bg-green-500" />
            <span class="text-muted-foreground font-medium">{{ badge }}</span>
          </div>

          <!-- Main heading -->
          <h1
            class="pb-4 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl lg:text-7xl tracking-tight leading-tight"
          >
            {{ title }}
          </h1>
        </div>

        <!-- Central Image -->
        <div class="relative w-full max-w-lg lg:max-w-xl mx-auto perspective-1000">
          <div class="relative transform transition-transform duration-700 hover:scale-105">
            <!-- Glow effect -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-primary/20 blur-[100px] opacity-50 pointer-events-none" />
            
            <!-- Image -->
             <img 
               v-if="image" 
               :src="image" 
               alt="Hero Illustration" 
               class="relative z-60 w-full h-auto object-contain drop-shadow-2xl"
             />
             <div v-else class="relative z-50flex items-center justify-center w-full aspect-square bg-muted/10 rounded-full border border-white/10 backdrop-blur-sm">
                <span class="text-muted-foreground">No Image</span>
             </div>
          </div>
        </div>

        <!-- Bottom Content -->
        <div class="relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto -mt-12 sm:-mt-20">
           <!-- Subtitle with glass effect -->
          <div class="mb-8 rounded-2xl border border-white/10 bg-background/30 backdrop-blur-md p-6 sm:p-8 shadow-2xl max-w-2xl mx-auto">
            <p
              class="text-lg text-foreground/90 md:text-xl font-medium leading-relaxed"
            >
              {{ subtitle }}
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col items-center gap-4 sm:flex-row w-full sm:w-auto">
            <UButton
              size="xl"
              color="primary"
              class="group relative overflow-hidden w-full sm:w-auto min-w-[160px] justify-center rounded-full"
              @click="onPrimaryAction"
            >
              <span class="relative z-10 font-bold tracking-wide">{{ primaryButton }}</span>
              <span class="absolute inset-0 -z-0 bg-gradient-to-r from-primary to-orange-500 opacity-0 transition-opacity group-hover:opacity-100" />
            </UButton>
            
            <UButton
              size="xl"
              color="warning"
              variant="solid"
              class="w-full sm:w-auto min-w-[160px] justify-center rounded-full font-bold tracking-wide"
              @click="onSecondaryAction"
            >
              {{ secondaryButton }}
            </UButton>
          </div>
        </div>

    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
      <div class="animate-bounce p-2 rounded-full bg-background/50 backdrop-blur border border-border/50 text-muted-foreground">
        <svg
          class="h-5 w-5"
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
  </section>
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
