<script setup lang="ts">
import GlowingEffect from '~/components/ui/GlowingEffect.vue'

interface Props {
  services?: string[]
  tags?: string[]
  client?: string
  industry?: string
  status?: string
  date?: string
}

defineProps<Props>()

const { t } = useI18n()
</script>

<template>
  <aside class="lg:sticky lg:top-24">
    <GlowingEffect
      :spread="40"
      :glow="false"
      :disabled="false"
      :proximity="64"
      :inactive-zone="0.01"
      :border-width="1"
      class="rounded-2xl"
    >
      <div class="p-6 rounded-2xl border border-neutral-200/50 dark:border-white/[0.1] bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl">
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
          <span class="w-8 h-0.5 bg-gradient-to-r from-[#050254] to-[#49042f] rounded-full" />
          {{ t('Detail Proyek') }}
        </h3>

        <div class="space-y-5">
          <!-- Client -->
          <div v-if="client" class="flex items-start gap-3">
            <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/10 flex-shrink-0">
              <UIcon name="lucide-building-2" class="w-5 h-5 text-[#3d39a1]" />
            </div>
            <div>
              <p class="text-xs text-neutral-500 dark:text-neutral-500 mb-0.5">Klien</p>
              <p class="text-sm font-medium text-neutral-900 dark:text-white">{{ client }}</p>
            </div>
          </div>

          <!-- Industry -->
          <div v-if="industry" class="flex items-start gap-3">
            <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/10 flex-shrink-0">
              <UIcon name="lucide-briefcase" class="w-5 h-5 text-[#3d39a1]" />
            </div>
            <div>
              <p class="text-xs text-neutral-500 dark:text-neutral-500 mb-0.5">Industri</p>
              <p class="text-sm font-medium text-neutral-900 dark:text-white">{{ industry }}</p>
            </div>
          </div>

          <!-- Status -->
          <div v-if="status" class="flex items-start gap-3">
            <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/10 flex-shrink-0">
              <UIcon name="lucide-check-circle" class="w-5 h-5 text-green-500" />
            </div>
            <div>
              <p class="text-xs text-neutral-500 dark:text-neutral-500 mb-0.5">Status</p>
              <p class="text-sm font-medium text-neutral-900 dark:text-white">{{ status }}</p>
            </div>
          </div>

          <!-- Services -->
          <div v-if="services && services.length > 0">
            <div class="flex items-start gap-3 mb-3">
              <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/10 flex-shrink-0">
                <UIcon name="lucide-layers" class="w-5 h-5 text-[#3d39a1]" />
              </div>
              <div>
                <p class="text-xs text-neutral-500 dark:text-neutral-500 mb-0.5">Layanan</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2 ml-13">
              <span 
                v-for="(service, idx) in services" 
                :key="idx"
                class="px-3 py-1.5 text-xs font-medium rounded-lg bg-neutral-100 dark:bg-white/10 text-neutral-700 dark:text-neutral-300 border border-neutral-200/50 dark:border-white/[0.05]"
              >
                {{ service }}
              </span>
            </div>
          </div>

          <!-- Divider -->
          <div class="h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-700 to-transparent" />

          <!-- Tags -->
          <div v-if="tags && tags.length > 0">
            <div class="flex items-start gap-3 mb-3">
              <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/10 flex-shrink-0">
                <UIcon name="lucide-tags" class="w-5 h-5 text-[#3d39a1]" />
              </div>
              <div>
                <p class="text-xs text-neutral-500 dark:text-neutral-500 mb-0.5">Teknologi</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2 ml-13">
              <span 
                v-for="(tag, idx) in tags" 
                :key="idx"
                class="px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-br from-[#050254]/10 to-[#49042f]/10 dark:from-[#050254]/20 dark:to-[#49042f]/20 text-[#050254] dark:text-[#8b87d6] border border-[#050254]/20 dark:border-[#3d39a1]/20"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="mt-8">
          <button
            class="group relative w-full py-3.5 rounded-xl overflow-hidden"
            @click="navigateTo('/home#contact')"
          >
            <span class="absolute inset-0 bg-gradient-to-r from-[#050254] via-[#49042f] to-[#050254] transition-all duration-300 group-hover:scale-105" />
            <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span class="relative flex items-center justify-center gap-2 text-sm font-semibold text-white">
              <UIcon name="lucide-message-circle" class="w-4 h-4" />
              {{ t('Hubungi Kami') }}
            </span>
          </button>
        </div>
      </div>
    </GlowingEffect>
  </aside>
</template>

<style scoped>
.ml-13 {
  margin-left: 3.25rem;
}
</style>
