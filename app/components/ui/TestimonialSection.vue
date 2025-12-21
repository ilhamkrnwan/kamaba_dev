<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Testimonial {
  id: number
  quote: string
  name: string
  position: string
  rating: string
  image: string
}

interface Props {
  title?: string
  subtitle?: string
  badge?: string
  testimonials?: Testimonial[]
  autoplay?: boolean
  autoplayInterval?: number
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Apa Kata Klien Kami',
  subtitle: 'Dengarkan pengalaman mereka yang telah bekerja sama dengan kami',
  badge: 'Testimoni',
  testimonials: () => [
    {
      id: 1,
      quote: 'QINARYAN memberikan kinerja terbaiknya dalam membuat Website! Sangat profesional dan hasil memuaskan.',
      name: 'Dhimas Sulistio',
      position: 'Web Developer',
      rating: '20° FS',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dhimas'
    },
    {
      id: 2,
      quote: 'Pelayanan yang sangat profesional dan hasil yang memuaskan. Highly recommended untuk proyek digital!',
      name: 'Sarah Johnson',
      position: 'Product Manager',
      rating: '18° FS',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    {
      id: 3,
      quote: 'Tim yang solid dan komunikatif. Proyek selesai tepat waktu dengan kualitas terbaik.',
      name: 'Ahmad Rizki',
      position: 'CEO Startup',
      rating: '19° FS',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad'
    }
  ],
  autoplay: true,
  autoplayInterval: 5000
})

const currentIndex = ref(0)
let autoplayTimer: ReturnType<typeof setInterval> | null = null

// Computed property to safely get current testimonial
const currentTestimonial = computed((): Testimonial => {
  return props.testimonials[currentIndex.value] ?? props.testimonials[0]!
})

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.testimonials.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.testimonials.length) % props.testimonials.length
}

const startAutoplay = () => {
  if (props.autoplay && !autoplayTimer) {
    autoplayTimer = setInterval(nextSlide, props.autoplayInterval)
  }
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <section class="relative overflow-hidden py-20 md:py-32">
    <!-- Background blur overlay -->
    <div class="pointer-events-none absolute inset-0 bg-background/60 backdrop-blur-sm" />
    
    <!-- Background decorations -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div class="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
    </div>

    <div class="container relative mx-auto px-4">
      <!-- Header -->
      <UiSectionHeading
        :title="title"
        :subtitle="subtitle"
        :badge="badge"
        size="md"
      />

      <!-- Carousel Container -->
      <div class="mx-auto max-w-6xl">
        <UiGlowingEffect
          :blur="6"
          :spread="100"
          :border-width="1"
          :inactive-zone="0.4"
          class="rounded-3xl"
        >
          <div class="relative rounded-3xl border border-border bg-card/80 p-8 backdrop-blur-md md:p-12">
            <div class="grid items-center gap-8 md:grid-cols-2">
              <!-- Left Side - Testimonial Text -->
              <div class="space-y-6">
                <!-- Quote Icon & Rating -->
                <div class="relative">
                  <div class="text-6xl font-bold text-muted-foreground/10">
                    {{ currentTestimonial.rating }}
                  </div>
                </div>

                <!-- Quote Text -->
                <p class="relative z-10 text-xl font-medium leading-relaxed text-foreground md:text-2xl">
                  "{{ currentTestimonial.quote }}"
                </p>

                <!-- Author Info -->
                <div class="flex items-center gap-4 pt-4">
                  <div class="relative">
                    <div class="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-blue-500 opacity-70 blur-sm" />
                    <img
                      :src="currentTestimonial.image"
                      :alt="currentTestimonial.name"
                      class="relative h-16 w-16 rounded-full border-4 border-background object-cover"
                    />
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-foreground">
                      {{ currentTestimonial.name }}
                    </h3>
                    <p class="text-muted-foreground">
                      {{ currentTestimonial.position }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Right Side - Phone Mockup -->
              <div class="relative hidden justify-center md:flex">
                <div class="relative h-[400px] w-full max-w-md">
                  <!-- Phone 1 -->
                  <div class="absolute left-0 top-0 w-48 -rotate-12 transform rounded-[2rem] border border-border bg-gradient-to-br from-primary/20 to-blue-500/20 p-2 shadow-2xl backdrop-blur-sm lg:w-56">
                    <div class="h-full w-full overflow-hidden rounded-[1.5rem] bg-card">
                      <div class="mx-auto h-5 w-24 rounded-b-2xl bg-foreground/10" />
                      <div class="space-y-2 p-4">
                        <div class="h-2 w-3/4 rounded bg-primary/30" />
                        <div class="h-2 w-full rounded bg-muted" />
                        <div class="h-2 w-5/6 rounded bg-muted" />
                        <div class="mt-3 h-24 rounded-lg bg-gradient-to-br from-primary/40 to-blue-500/40" />
                        <div class="mt-3 grid grid-cols-2 gap-2">
                          <div class="h-14 rounded bg-muted" />
                          <div class="h-14 rounded bg-muted" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Phone 2 -->
                  <div class="absolute right-0 top-8 w-48 rotate-12 transform rounded-[2rem] border border-border bg-gradient-to-br from-muted to-card p-2 shadow-2xl backdrop-blur-sm lg:w-56">
                    <div class="h-full w-full overflow-hidden rounded-[1.5rem] bg-card">
                      <div class="mx-auto h-5 w-24 rounded-b-2xl bg-foreground/10" />
                      <div class="space-y-2 p-4">
                        <div class="mb-2 text-xs font-bold text-primary">50+</div>
                        <div class="h-2 w-3/4 rounded bg-primary/30" />
                        <div class="mt-3 h-20 rounded-lg bg-gradient-to-br from-primary/40 to-blue-500/40" />
                        <div class="mt-3 space-y-2">
                          <div class="h-2 w-full rounded bg-muted" />
                          <div class="h-2 w-5/6 rounded bg-muted" />
                          <div class="mt-3 h-12 rounded bg-primary/50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Navigation Buttons -->
            <div class="mt-8 flex items-center justify-center gap-4">
              <button
                class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                @click="prevSlide"
              >
                <UIcon name="i-lucide-chevron-left" class="h-6 w-6" />
              </button>

              <!-- Dots Indicator -->
              <div class="flex items-center gap-2">
                <button
                  v-for="(_, index) in testimonials"
                  :key="index"
                  class="h-3 rounded-full transition-all"
                  :class="[
                    index === currentIndex
                      ? 'w-8 bg-primary'
                      : 'w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  ]"
                  @click="currentIndex = index"
                />
              </div>

              <button
                class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                @click="nextSlide"
              >
                <UIcon name="i-lucide-chevron-right" class="h-6 w-6" />
              </button>
            </div>
          </div>
        </UiGlowingEffect>
      </div>
    </div>
  </section>
</template>
