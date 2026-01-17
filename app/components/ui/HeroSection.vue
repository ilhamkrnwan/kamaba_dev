<script setup lang="ts">
interface Props {
  title: string
  subtitle: string
  badge?: string
  primaryButton?: string
  secondaryButton?: string
  image?: string
}

withDefaults(defineProps<Props>(), {
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
</script>

<template>
  <section class="relative flex min-h-[90vh] md:min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-24 md:pt-32 pb-10 md:pb-0">
    <!-- Background Effects -->
    <UiSpotlight
      class="-top-40 left-0 md:-top-20 md:left-60"
      :fill="spotlightColor"
    />
    <UiSpotlight
      class="left-full top-10 md:left-[60%]"
      :fill="spotlightColor"
    />

    <!-- Visual Centerpiece (Image) -->
    <div class="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
      <!-- Subtle Tech Grid -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      
      <div class="relative w-full h-full flex items-center justify-center">
        <!-- Glow effect -->
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[200px] w-[200px] sm:h-[400px] sm:w-[500px] rounded-full bg-primary/20 blur-[100px] opacity-50 animate-pulse-slow" />
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[100px] w-[100px] sm:h-[200px] sm:w-[250px] rounded-full bg-blue-400/10 blur-[60px] opacity-30 animate-pulse-slow delay-700" />

        <!-- Image Asset Wrapper: Entrance -->
        <div class="relative w-full h-full flex items-center justify-center animate-fade-in-blur delay-200">
          <!-- Image Asset Wrapper: Floating -->
          <div class="w-full h-full flex items-center justify-center animate-float">
            <img 
              v-if="image" 
              :src="image" 
              alt="Hero Illustration" 
              class="w-full h-full object-contain drop-shadow-2xl opacity-90 pt-5 md:pt-20 pb-0 md:pb-0 scale-[3.3] md:scale-120 origin-center"
            />
             <div v-else class="flex items-center justify-center w-full h-full bg-muted/10 backdrop-blur-sm">
              <span class="text-muted-foreground">No Image</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container relative z-10 flex flex-col w-full min-h-[75vh] md:min-h-[85vh] items-center justify-between px-4 py-2 md:px-0 md:py-0">
      
      <!-- 1. Headings Area -->
      <div class="relative z-20 flex w-full flex-col items-center text-center px-2 py-2 sm:py-0 sm:px-0 animate-fade-in-up">
        <h1 class="bg-gradient-to-b from-foreground via-foreground/90 to-foreground/60 bg-clip-text text-4xl w-full font-extrabold tracking-tighter text-transparent sm:text-6xl lg:text-7xl leading-[1.0] drop-shadow-lg filter ui-text-shadow">
          {{ title }}
        </h1>
      </div>

      <!-- 3. Actions Area -->
      <div class="relative z-20 flex max-w-4xl flex-col items-center text-center pb-0 md:pb-16 animate-fade-in-up delay-200">
        <!-- Subtitle: Reduced mb from 8 to 6 -->
        <p class="mb-6 md:mb-8 text-sm sm:text-2xl font-light text-white leading-relaxed drop-shadow-sm bg-black/25 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
          {{ subtitle }}
        </p>

        <!-- Buttons -->
        <div class="grid grid-cols-2 w-full gap-3 sm:gap-4 sm:flex sm:w-auto sm:flex-row">
          <UButton
            size="xl"
            color="primary"
            class="group relative overflow-hidden w-full sm:w-auto sm:min-w-[160px] justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(var(--color-primary-500),0.5)] active:scale-95 active:translate-y-0"
            @click="emit('primaryAction')"
          >
            <span class="relative z-10 font-bold tracking-wide group-hover:tracking-wider transition-all duration-300">{{ primaryButton }}</span>
            <span class="absolute inset-0 -z-0 bg-gradient-to-r from-primary via-orange-500 to-primary bg-[length:200%_auto] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-gradient-x" />
            <!-- Shine Effect -->
            <div class="absolute inset-0 -left-[100%] group-hover:animate-shine bg-gradient-to-r from-transparent via-white/30 to-transparent z-20 skew-x-12" />
          </UButton>
          
          <UButton
            size="xl"
            color="warning"
            variant="solid"
            class="group relative w-full sm:w-auto sm:min-w-[160px] justify-center rounded-full font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 active:translate-y-0 overflow-hidden"
            @click="emit('secondaryAction')"
          >
            <span class="relative z-10 group-hover:scale-105 transition-transform duration-300">{{ secondaryButton }}</span>
            <div class="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
          </UButton>
        </div>
      </div>

    </div>

    <!-- Scroll Hint -->
    <div class="absolute z-99 bottom-0 md:pb-0 left-1/2 -translate-x-1/2 hidden lg:block">
      <div class="animate-bounce p-2 rounded-full bg-background/50 backdrop-blur border border-border/50 text-muted-foreground">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes fadeInBlur {
  from {
    opacity: 0;
    filter: blur(20px);
  }
  to {
    opacity: 1;
    filter: blur(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes pulseSlow {
  0%, 100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(1.05);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  opacity: 0;
  will-change: transform, opacity, filter;
}

.animate-fade-in-blur {
  animation: fadeInBlur 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  opacity: 0;
  will-change: opacity, filter;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
  will-change: transform;
}

.animate-pulse-slow {
  animation: pulseSlow 6s ease-in-out infinite;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-700 {
  animation-delay: 0.7s;
}

@keyframes shine {
  100% {
    left: 125%;
  }
}

@keyframes gradient-x {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-shine {
  animation: shine 0.75s;
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}
</style>
