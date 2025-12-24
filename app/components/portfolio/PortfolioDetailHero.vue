<script setup lang="ts">
import GlowingEffect from '~/components/ui/GlowingEffect.vue'

interface Props {
  title: string
  description?: string
  image?: string
  category?: string
  date?: string
  status?: string
  client?: string
}

defineProps<Props>()

const { t } = useI18n()

const formatDate = (dateString?: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <section class="relative overflow-hidden py-24">
    <!-- Background decorations -->
    <div class="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#050254]/20 to-[#49042f]/20 blur-3xl" />
    <div class="pointer-events-none absolute -right-40 top-20 h-60 w-60 rounded-full bg-gradient-to-br from-[#49042f]/20 to-[#050254]/20 blur-3xl" />
    <div class="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-full bg-gradient-to-t from-background to-transparent" />

    <div class="container relative mx-auto px-4">
      <div class="mx-auto max-w-6xl">
        <!-- Back button -->
        <NuxtLink 
          to="/portofolio"
          class="group mb-8 inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
        >
          <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-100 dark:bg-white/10 group-hover:bg-gradient-to-br group-hover:from-[#050254] group-hover:to-[#49042f] transition-all duration-200">
            <UIcon name="lucide-arrow-left" class="w-4 h-4 group-hover:text-white transition-colors" />
          </div>
          <span class="group-hover:translate-x-1 transition-transform duration-200">
            {{ t('Portofolio') }}
          </span>
        </NuxtLink>

        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <!-- Content -->
          <div class="order-2 lg:order-1">
            <!-- Category Badge -->
            <div v-if="category" class="mb-4">
              <span class="inline-flex items-center gap-2 rounded-full border border-[#050254]/30 dark:border-[#3d39a1]/30 bg-[#050254]/10 dark:bg-[#050254]/20 px-4 py-1.5 text-sm font-medium text-[#050254] dark:text-[#8b87d6]">
                <UIcon name="lucide-folder" class="w-4 h-4" />
                {{ category }}
              </span>
            </div>

            <!-- Title -->
            <h1 class="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
              {{ title }}
            </h1>

            <!-- Description -->
            <p v-if="description" class="mb-6 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {{ description }}
            </p>

            <!-- Meta info -->
            <div class="flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-500">
              <div v-if="client" class="flex items-center gap-2">
                <UIcon name="lucide-building-2" class="w-4 h-4" />
                <span>{{ client }}</span>
              </div>
              <div v-if="date" class="flex items-center gap-2">
                <UIcon name="lucide-calendar" class="w-4 h-4" />
                <span>{{ formatDate(date) }}</span>
              </div>
              <div v-if="status" class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>{{ status }}</span>
              </div>
            </div>
          </div>

          <!-- Image -->
          <div class="order-1 lg:order-2">
            <GlowingEffect
              :spread="60"
              :glow="false"
              :disabled="false"
              :proximity="80"
              :inactive-zone="0.01"
              :border-width="2"
              class="rounded-2xl"
            >
              <div class="relative overflow-hidden rounded-2xl border border-neutral-200/50 dark:border-white/[0.1] bg-neutral-100 dark:bg-neutral-900">
                <div class="aspect-video">
                  <NuxtImg 
                    v-if="image"
                    :src="image" 
                    :alt="title"
                    class="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#050254]/10 to-[#49042f]/10">
                    <UIcon name="lucide-image" class="w-16 h-16 text-neutral-300 dark:text-neutral-700" />
                  </div>
                </div>
                
                <!-- Overlay gradient -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </GlowingEffect>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
