<script setup lang="ts">
import GlowingEffect from '~/components/ui/GlowingEffect.vue'

interface Socials {
  github?: string
  linkedin?: string
  instagram?: string
}

interface Props {
  name: string
  role: string
  profileImage?: string
  revealImage?: string
  socials?: Socials
}

defineProps<Props>()

// Get initials from name
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}
</script>

<template>
  <GlowingEffect
    :spread="40"
    :glow="false"
    :disabled="false"
    :proximity="64"
    :inactive-zone="0.01"
    :border-width="1"
    class="rounded-2xl h-full"
  >
    <div class="group relative h-full overflow-hidden rounded-2xl border border-neutral-200/50 dark:border-white/10 bg-white dark:bg-neutral-950 transition-all duration-500">
      
      <!-- Full Card Background - Reveal Image (hidden by default, full bg on hover) -->
      <div class="absolute inset-0 transition-all duration-700 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 z-0">
        <NuxtImg
          v-if="revealImage"
          :src="revealImage"
          :alt="`${name} - reveal`"
          class="w-full h-full object-cover"
          loading="lazy"
        />
        <div v-else class="w-full h-full bg-linear-to-br from-[#050254]/30 to-[#49042f]/30" />
        
        <!-- Dark overlay for text readability -->
        <div class="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/20" />
      </div>

      <!-- Default State Content -->
      <div class="relative z-10 h-full flex flex-col">
        <!-- Profile Image Container (visible by default) -->
        <div class="relative aspect-[4/5] overflow-hidden bg-linear-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 transition-all duration-500 group-hover:opacity-0">
          <!-- Profile Image -->
          <div class="absolute inset-0 flex items-center justify-center p-8">
            <div class="relative w-full max-w-[180px] aspect-square">
              <!-- Profile image with rounded style -->
              <div class="w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-[#050254]/20 border-4 border-white dark:border-neutral-800">
                <NuxtImg
                  v-if="profileImage"
                  :src="profileImage"
                  :alt="name"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
                <div v-else class="w-full h-full bg-linear-to-br from-[#050254] to-[#49042f] flex items-center justify-center">
                  <span class="text-4xl md:text-5xl font-bold text-white">
                    {{ getInitials(name) }}
                  </span>
                </div>
              </div>
              
              <!-- Decorative ring -->
              <div class="absolute -inset-2 rounded-3xl border-2 border-dashed border-[#050254]/20 dark:border-[#8b87d6]/20 animate-spin-slow" />
            </div>
          </div>

          <!-- Background decoration -->
          <div class="absolute top-4 right-4 w-20 h-20 rounded-full bg-linear-to-br from-[#050254]/10 to-[#49042f]/10 blur-2xl" />
          <div class="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-linear-to-br from-[#49042f]/10 to-[#050254]/10 blur-2xl" />
        </div>

        <!-- Content - Always visible but transforms on hover -->
        <div class="relative p-5 mt-auto transition-all duration-500 group-hover:translate-y-0">
          <!-- Default content -->
          <div class="transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
            <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-1">
              {{ name }}
            </h3>
            <p class="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              {{ role }}
            </p>

            <!-- Social Links -->
            <div v-if="socials" class="flex items-center gap-2">
              <a
                v-if="socials.github"
                :href="socials.github"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-9 h-9 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-white/5 hover:bg-linear-to-br hover:from-[#050254] hover:to-[#49042f] hover:border-transparent text-neutral-500 dark:text-neutral-400 hover:text-white transition-all duration-300"
              >
                <UIcon name="lucide-github" class="w-4 h-4" />
              </a>
              <a
                v-if="socials.linkedin"
                :href="socials.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-9 h-9 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-white/5 hover:bg-linear-to-br hover:from-[#050254] hover:to-[#49042f] hover:border-transparent text-neutral-500 dark:text-neutral-400 hover:text-white transition-all duration-300"
              >
                <UIcon name="lucide-linkedin" class="w-4 h-4" />
              </a>
              <a
                v-if="socials.instagram"
                :href="socials.instagram"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-9 h-9 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-white/5 hover:bg-linear-to-br hover:from-[#050254] hover:to-[#49042f] hover:border-transparent text-neutral-500 dark:text-neutral-400 hover:text-white transition-all duration-300"
              >
                <UIcon name="lucide-instagram" class="w-4 h-4" />
              </a>
            </div>
          </div>

          <!-- Hover content (appears on hover, positioned at bottom) -->
          <div class="absolute inset-x-5 bottom-5 opacity-0 translate-y-4 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
            <h3 class="text-xl font-bold text-white mb-1">
              {{ name }}
            </h3>
            <p class="text-sm text-white/80 mb-4">
              {{ role }}
            </p>

            <!-- Social Links - Light version for dark bg -->
            <div v-if="socials" class="flex items-center gap-2">
              <a
                v-if="socials.github"
                :href="socials.github"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-[#050254] transition-all duration-300"
              >
                <UIcon name="lucide-github" class="w-5 h-5" />
              </a>
              <a
                v-if="socials.linkedin"
                :href="socials.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-[#050254] transition-all duration-300"
              >
                <UIcon name="lucide-linkedin" class="w-5 h-5" />
              </a>
              <a
                v-if="socials.instagram"
                :href="socials.instagram"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-[#050254] transition-all duration-300"
              >
                <UIcon name="lucide-instagram" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Decorative elements on hover -->
      <div class="absolute top-4 right-4 w-2 h-2 rounded-full bg-white opacity-0 transition-all duration-700 delay-200 group-hover:opacity-100" />
      <div class="absolute top-4 right-8 w-1 h-1 rounded-full bg-white/60 opacity-0 transition-all duration-700 delay-300 group-hover:opacity-100" />
      <div class="absolute top-8 right-4 w-1.5 h-1.5 rounded-full bg-white/40 opacity-0 transition-all duration-700 delay-400 group-hover:opacity-100" />
    </div>
  </GlowingEffect>
</template>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
</style>
