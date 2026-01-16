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
  <section class="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-0 top-24">
    <!-- Background Effects -->
    <UiSpotlight
      class="-top-40 left-0 md:-top-20 md:left-60"
      :fill="spotlightColor"
    />
    <UiSpotlight
      class="left-full top-10 md:left-[60%]"
      :fill="spotlightColor"
    />

    <!-- Status Badge (Absolute Positioned) -->
    <div 
      v-if="badge" 
      class="absolute bottom-6 right-6 lg:bottom-32 lg:right-10 z-30 inline-flex items-center rounded-full border border-border bg-background/80 backdrop-blur-md px-4 py-2 text-sm font-medium text-foreground shadow-lg ring-1 ring-border/50 transition-all hover:scale-105 hover:bg-background"
    >
      <span class="mr-2 h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
      {{ badge }}
    </div>

    <!-- Main Content -->
    <div class="container relative z-10 flex flex-col items-center animate-fade-in-up">
      
      <!-- 1. Headings Area -->
      <div class="relative z-20 flex max-w-5xl flex-col items-center text-center top-4">
        <h1 class="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl leading-[1.1] drop-shadow-sm filter ">
          {{ title }}
        </h1>
      </div>

      <!-- 2. Visual Centerpiece (Image) -->
      <!-- Reduced negative margins for a cleaner overlap -->
      <div class="relative z-10 w-full max-w-6xl perspective-1000 -my-8 sm:-my-16 lg:-my-20 pointer-events-none select-none">
        <div class="relative transform transition-all duration-700 hover:scale-[1.01]">
          <!-- Glow effect -->
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[200px] w-[200px] sm:h-[400px] sm:w-[500px] rounded-full bg-primary/20 blur-[80px] sm:blur-[100px] opacity-40" />
          
          <!-- Image Asset -->
          <img 
            v-if="image" 
            :src="image" 
            alt="Hero Illustration" 
            class="relative z-0 w-full h-full max-h-[400px] sm:max-h-[550px] md:max-h-[680px] object-contain drop-shadow-2xl opacity-90 "
          />
          <div v-else class="relative z-0 flex items-center justify-center w-full aspect-video bg-muted/10 rounded-2xl border border-white/10 backdrop-blur-sm">
             <span class="text-muted-foreground">No Image</span>
          </div>
        </div>
      </div>

      <!-- 3. Actions Area -->
      <div class="relative z-20 flex max-w-4xl flex-col items-center text-center bottom-36">
        <!-- Subtitle: Reduced mb from 8 to 6 -->
        <p class="mb-6 text-xl font-medium text-foreground/90 sm:text-2xl leading-relaxed drop-shadow-sm bg-background/60 backdrop-blur-md border border-white/10 rounded-3xl px-8 py-4 shadow-lg">
          {{ subtitle }}
        </p>

        <!-- Buttons -->
        <div class="flex flex-col w-full sm:w-auto sm:flex-row gap-4">
          <UButton
            size="xl"
            color="primary"
            class="group relative overflow-hidden min-w-[160px] justify-center rounded-full"
            @click="emit('primaryAction')"
          >
            <span class="relative z-10 font-bold tracking-wide">{{ primaryButton }}</span>
            <span class="absolute inset-0 -z-0 bg-gradient-to-r from-primary to-orange-500 opacity-0 transition-opacity group-hover:opacity-100" />
          </UButton>
          
          <UButton
            size="xl"
            color="warning"
            variant="solid"
            class="min-w-[160px] justify-center rounded-full font-bold tracking-wide"
            @click="emit('secondaryAction')"
          >
            {{ secondaryButton }}
          </UButton>
        </div>
      </div>

    </div>

    <!-- Scroll Hint -->
    <div class="absolute z-99 bottom-22 left-1/2 -translate-x-1/2 hidden lg:block">
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
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}
</style>
