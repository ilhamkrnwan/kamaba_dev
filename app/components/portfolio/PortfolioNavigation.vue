<script setup lang="ts">
import GlowingEffect from '~/components/ui/GlowingEffect.vue'

interface PortfolioItem {
  path?: string
  title?: string
  image?: string
  category?: string
}

interface Props {
  prevProject?: PortfolioItem | null
  nextProject?: PortfolioItem | null
}

defineProps<Props>()

const { locale, t } = useI18n()

const getPortfolioLink = (path?: string) => {
  return path?.replace(`/portofolio/${locale.value}`, '/portofolio') || '#'
}
</script>

<template>
  <section class="py-12 md:py-16 border-t border-neutral-200/50 dark:border-white/[0.1]">
    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-6xl">
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Previous Project -->
          <div>
            <NuxtLink 
              v-if="prevProject"
              :to="getPortfolioLink(prevProject.path)"
              class="group block"
            >
              <GlowingEffect
                :spread="40"
                :glow="false"
                :disabled="false"
                :proximity="64"
                :inactive-zone="0.01"
                :border-width="1"
                class="rounded-2xl"
              >
                <div class="p-4 rounded-2xl border border-neutral-200/50 dark:border-white/[0.1] bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl hover:bg-neutral-50 dark:hover:bg-neutral-900/80 transition-all duration-300">
                  <div class="flex items-center gap-4">
                    <!-- Arrow -->
                    <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-100 dark:bg-white/10 group-hover:bg-gradient-to-br group-hover:from-[#050254] group-hover:to-[#49042f] transition-all duration-300 flex-shrink-0">
                      <UIcon name="lucide-arrow-left" class="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-white transition-colors" />
                    </div>
                    
                    <!-- Content -->
                    <div class="flex-1 min-w-0">
                      <p class="text-xs text-neutral-500 dark:text-neutral-500 mb-1">{{ t('Proyek Sebelumnya') }}</p>
                      <p class="font-semibold text-neutral-900 dark:text-white truncate group-hover:text-[#3d39a1] dark:group-hover:text-[#8b87d6] transition-colors">
                        {{ prevProject.title }}
                      </p>
                      <p v-if="prevProject.category" class="text-xs text-neutral-500 dark:text-neutral-500 mt-0.5">
                        {{ prevProject.category }}
                      </p>
                    </div>

                    <!-- Thumbnail -->
                    <div v-if="prevProject.image" class="hidden sm:block w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <NuxtImg 
                        :src="prevProject.image" 
                        :alt="prevProject.title || ''"
                        class="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </GlowingEffect>
            </NuxtLink>
            
            <!-- Empty state -->
            <div v-else class="p-4 rounded-2xl border border-dashed border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
              <div class="flex items-center gap-4">
                <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-100 dark:bg-white/5 flex-shrink-0">
                  <UIcon name="lucide-arrow-left" class="w-5 h-5 text-neutral-300 dark:text-neutral-700" />
                </div>
                <p class="text-sm text-neutral-400 dark:text-neutral-600">{{ t('Tidak ada proyek sebelumnya') }}</p>
              </div>
            </div>
          </div>

          <!-- Next Project -->
          <div>
            <NuxtLink 
              v-if="nextProject"
              :to="getPortfolioLink(nextProject.path)"
              class="group block"
            >
              <GlowingEffect
                :spread="40"
                :glow="false"
                :disabled="false"
                :proximity="64"
                :inactive-zone="0.01"
                :border-width="1"
                class="rounded-2xl"
              >
                <div class="p-4 rounded-2xl border border-neutral-200/50 dark:border-white/[0.1] bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl hover:bg-neutral-50 dark:hover:bg-neutral-900/80 transition-all duration-300">
                  <div class="flex items-center gap-4">
                    <!-- Thumbnail -->
                    <div v-if="nextProject.image" class="hidden sm:block w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <NuxtImg 
                        :src="nextProject.image" 
                        :alt="nextProject.title || ''"
                        class="w-full h-full object-cover"
                      />
                    </div>

                    <!-- Content -->
                    <div class="flex-1 min-w-0 text-right">
                      <p class="text-xs text-neutral-500 dark:text-neutral-500 mb-1">{{ t('Proyek Selanjutnya') }}</p>
                      <p class="font-semibold text-neutral-900 dark:text-white truncate group-hover:text-[#3d39a1] dark:group-hover:text-[#8b87d6] transition-colors">
                        {{ nextProject.title }}
                      </p>
                      <p v-if="nextProject.category" class="text-xs text-neutral-500 dark:text-neutral-500 mt-0.5">
                        {{ nextProject.category }}
                      </p>
                    </div>
                    
                    <!-- Arrow -->
                    <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-100 dark:bg-white/10 group-hover:bg-gradient-to-br group-hover:from-[#050254] group-hover:to-[#49042f] transition-all duration-300 flex-shrink-0">
                      <UIcon name="lucide-arrow-right" class="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </GlowingEffect>
            </NuxtLink>
            
            <!-- Empty state -->
            <div v-else class="p-4 rounded-2xl border border-dashed border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
              <div class="flex items-center justify-end gap-4">
                <p class="text-sm text-neutral-400 dark:text-neutral-600">{{ t('Tidak ada proyek selanjutnya') }}</p>
                <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-100 dark:bg-white/5 flex-shrink-0">
                  <UIcon name="lucide-arrow-right" class="w-5 h-5 text-neutral-300 dark:text-neutral-700" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Back to Portfolio Button -->
        <div class="mt-8 text-center">
          <NuxtLink 
            to="/portofolio"
            class="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all duration-300"
          >
            <UIcon name="lucide-folder-open" class="w-4 h-4" />
            <span class="font-medium">{{ t('Lihat Semua Portofolio') }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
