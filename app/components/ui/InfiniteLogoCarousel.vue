<script lang="ts" setup>
interface Logo {
  id: number
  name: string
  image?: string
  color?: string
}

interface Props {
  logos?: Logo[]
  speed?: number
  pauseOnHover?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  speed: 30,
  pauseOnHover: true,
  logos: () => [
    { id: 1, name: 'Kamaba Yogyakarta', image: '/portofolio/kamaba-yogyakarta/logo.png' },
    { id: 2, name: 'Wicara Space', image: '/portofolio/wicara-space/logo.png' },
    { id: 3, name: 'Mustika Amarta', image: '/portofolio/mustika-amarta/logo.png' },
    { id: 4, name: 'Kabupaten Blora', image: '/portofolio/kabupaten-blora/logo.png' }
  ]
})

const duplicatedLogos = computed(() => [...props.logos, ...props.logos])
const animationDuration = computed(() => `${props.speed}s`)
</script>

<template>
  <section class="w-full py-16 md:py-20 overflow-hidden bg-background">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative">
        <!-- Gradient overlays -->
        <div class="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div class="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <!-- Scrolling container -->
        <div class="flex overflow-hidden">
          <div
            class="flex animate-scroll"
            :class="{ 'pause-on-hover': pauseOnHover }"
          >
            <div
              v-for="(logo, index) in duplicatedLogos"
              :key="`${logo.id}-${index}`"
              class="flex-shrink-0 mx-4 md:mx-8 w-32 md:w-40 h-20 md:h-24 flex items-center justify-center"
            >
              <template v-if="logo.image">
                <img
                  :src="logo.image"
                  :alt="logo.name"
                  class="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </template>
              <template v-else>
                <div
                  :class="[
                    logo.color || 'bg-muted',
                    'w-28 md:w-32 h-14 md:h-16 rounded-lg flex items-center justify-center',
                    'shadow-md hover:shadow-xl transition-all duration-300',
                    'hover:scale-105 cursor-pointer'
                  ]"
                >
                  <span class="text-[10px] md:text-xs font-semibold text-white text-center px-2 line-clamp-2">
                    {{ logo.name }}
                  </span>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll v-bind(animationDuration) linear infinite;
}

.pause-on-hover:hover {
  animation-play-state: paused;
}
</style>