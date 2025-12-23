<script setup lang="ts">
import { ref, computed } from 'vue'
import type { FaqItem } from '~/types'

interface Props {
  title?: string
  subtitle?: string
  badge?: string
  items: FaqItem[]
  showCta?: boolean
  ctaText?: string
  ctaButtonText?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Frequently Asked Questions',
  subtitle: 'Find answers to common questions about our services',
  badge: 'FAQ',
  showCta: true,
  ctaText: 'Tidak menemukan jawaban yang Anda cari?',
  ctaButtonText: 'Hubungi Kami'
})

defineEmits<{
  'cta-click': []
}>()

const activeIndex = ref<number | null>(null)

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

// Split items into left and right columns with original index
const itemsWithIndex = computed(() => 
  props.items.map((item, index) => ({
    ...item,
    originalIndex: index
  }))
)

const leftColumnItems = computed(() => 
  itemsWithIndex.value.filter((_, index) => index % 2 === 0)
)

const rightColumnItems = computed(() => 
  itemsWithIndex.value.filter((_, index) => index % 2 === 1)
)
</script>

<template>
  <section class="py-20 md:py-32">
    <div class="container mx-auto px-4">
      <UiSectionHeading
        :title="title"
        :subtitle="subtitle"
        :badge="badge"
        size="md"
      />

      <div class="mx-auto max-w-6xl">
        <!-- Two column grid on desktop -->
        <div class="grid gap-4 md:grid-cols-2">
          <!-- Left column -->
          <div class="space-y-4">
            <template v-for="(item, index) in leftColumnItems" :key="`left-${index}`">
              <UiGlowingEffect
                :blur="4"
                :spread="80"
                :glow="activeIndex === item.originalIndex"
                :border-width="1"
                :inactive-zone="0.5"
                class="rounded-2xl"
              >
                <div
                  class="relative overflow-hidden rounded-2xl border border-border bg-card/80 backdrop-blur-sm transition-all duration-300"
                  :class="[
                    activeIndex === item.originalIndex ? 'border-primary/50 shadow-lg shadow-primary/5' : '',
                  ]"
                >
                  <!-- Question Header -->
                  <button
                    class="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-muted/50"
                    @click="toggle(item.originalIndex)"
                  >
                    <div class="flex items-center gap-4">
                      <div
                        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 text-primary transition-transform duration-300"
                        :class="[activeIndex === item.originalIndex ? 'rotate-0 scale-110' : '']"
                      >
                        <UIcon :name="item.icon || 'i-lucide-help-circle'" class="h-5 w-5" />
                      </div>
                      <span class="text-lg font-semibold text-foreground">
                        {{ item.question }}
                      </span>
                    </div>

                    <div
                      class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-background transition-all duration-300"
                      :class="[activeIndex === item.originalIndex ? 'rotate-180 border-primary bg-primary/10' : '']"
                    >
                      <UIcon name="i-lucide-chevron-down" class="h-4 w-4 text-muted-foreground" />
                    </div>
                  </button>

                  <!-- Answer Content -->
                  <Transition
                    enter-active-class="transition-all duration-300 ease-out"
                    enter-from-class="max-h-0 opacity-0"
                    enter-to-class="max-h-96 opacity-100"
                    leave-active-class="transition-all duration-300 ease-in"
                    leave-from-class="max-h-96 opacity-100"
                    leave-to-class="max-h-0 opacity-0"
                  >
                    <div v-show="activeIndex === item.originalIndex" class="overflow-hidden">
                      <div class="border-t border-border/50 px-6 py-5">
                        <div class="pl-14">
                          <p class="text-muted-foreground leading-relaxed">
                            {{ item.answer }}
                          </p>

                          <!-- Optional link -->
                          <NuxtLink
                            v-if="item.link"
                            :to="item.link.url"
                            class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                          >
                            {{ item.link.text }}
                            <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
                          </NuxtLink>
                        </div>
                      </div>
                    </div>
                  </Transition>
                </div>
              </UiGlowingEffect>
            </template>
          </div>

          <!-- Right column -->
          <div class="space-y-4">
            <template v-for="(item, index) in rightColumnItems" :key="`right-${index}`">
              <UiGlowingEffect
                :blur="4"
                :spread="80"
                :glow="activeIndex === item.originalIndex"
                :border-width="1"
                :inactive-zone="0.5"
                class="rounded-2xl"
              >
                <div
                  class="relative overflow-hidden rounded-2xl border border-border bg-card/80 backdrop-blur-sm transition-all duration-300"
                  :class="[
                    activeIndex === item.originalIndex ? 'border-primary/50 shadow-lg shadow-primary/5' : '',
                  ]"
                >
                  <!-- Question Header -->
                  <button
                    class="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-muted/50"
                    @click="toggle(item.originalIndex)"
                  >
                    <div class="flex items-center gap-4">
                      <div
                        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 text-primary transition-transform duration-300"
                        :class="[activeIndex === item.originalIndex ? 'rotate-0 scale-110' : '']"
                      >
                        <UIcon :name="item.icon || 'i-lucide-help-circle'" class="h-5 w-5" />
                      </div>
                      <span class="text-lg font-semibold text-foreground">
                        {{ item.question }}
                      </span>
                    </div>

                    <div
                      class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-background transition-all duration-300"
                      :class="[activeIndex === item.originalIndex ? 'rotate-180 border-primary bg-primary/10' : '']"
                    >
                      <UIcon name="i-lucide-chevron-down" class="h-4 w-4 text-muted-foreground" />
                    </div>
                  </button>

                  <!-- Answer Content -->
                  <Transition
                    enter-active-class="transition-all duration-300 ease-out"
                    enter-from-class="max-h-0 opacity-0"
                    enter-to-class="max-h-96 opacity-100"
                    leave-active-class="transition-all duration-300 ease-in"
                    leave-from-class="max-h-96 opacity-100"
                    leave-to-class="max-h-0 opacity-0"
                  >
                    <div v-show="activeIndex === item.originalIndex" class="overflow-hidden">
                      <div class="border-t border-border/50 px-6 py-5">
                        <div class="pl-14">
                          <p class="text-muted-foreground leading-relaxed">
                            {{ item.answer }}
                          </p>

                          <!-- Optional link -->
                          <NuxtLink
                            v-if="item.link"
                            :to="item.link.url"
                            class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                          >
                            {{ item.link.text }}
                            <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
                          </NuxtLink>
                        </div>
                      </div>
                    </div>
                  </Transition>
                </div>
              </UiGlowingEffect>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
