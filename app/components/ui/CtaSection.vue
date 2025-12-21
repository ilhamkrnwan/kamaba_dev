<template>
  <section class="py-20 md:py-32">
    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-4xl">
        <UiGlowingEffect
          :blur="8"
          :spread="100"
          :border-width="2"
          :inactive-zone="0.3"
          class="rounded-3xl"
        >
          <div
            class="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-blue-500/5 to-transparent p-12 text-center md:p-16"
          >
            <!-- Animated background gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-blue-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />

            <!-- Background pattern -->
            <div
              class="pointer-events-none absolute inset-0 opacity-10"
              style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 20px 20px;"
            />

            <!-- Floating orbs -->
            <div class="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition-transform duration-700 group-hover:translate-x-10 group-hover:translate-y-10" />
            <div class="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl transition-transform duration-700 group-hover:-translate-x-10 group-hover:-translate-y-10" />

            <div class="relative">
              <!-- Badge -->
              <div v-if="badge" class="mb-6">
                <span class="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  <UIcon v-if="badgeIcon" :name="badgeIcon" class="h-4 w-4" />
                  {{ badge }}
                </span>
              </div>

              <!-- Title -->
              <h2 class="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                <span v-if="gradientTitle" class="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  {{ title }}
                </span>
                <span v-else>{{ title }}</span>
              </h2>

              <!-- Description -->
              <p class="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                {{ description }}
              </p>

              <!-- Buttons -->
              <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <UButton
                  size="xl"
                  color="primary"
                  class="group/btn relative overflow-hidden"
                  @click="$emit('primary-click')"
                >
                  <span class="relative z-10 flex items-center gap-2">
                    <UIcon v-if="primaryIcon" :name="primaryIcon" class="h-5 w-5" />
                    {{ primaryButtonText }}
                  </span>
                  <div class="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover/btn:translate-x-full" />
                </UButton>

                <UButton
                  v-if="secondaryButtonText"
                  size="xl"
                  variant="outline"
                  class="border-border hover:border-primary/50 hover:bg-primary/5"
                  @click="$emit('secondary-click')"
                >
                  <UIcon v-if="secondaryIcon" :name="secondaryIcon" class="mr-2 h-5 w-5" />
                  {{ secondaryButtonText }}
                </UButton>
              </div>
            </div>
          </div>
        </UiGlowingEffect>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  description?: string
  badge?: string
  badgeIcon?: string
  gradientTitle?: boolean
  primaryButtonText?: string
  primaryIcon?: string
  secondaryButtonText?: string
  secondaryIcon?: string
  showTrustIndicators?: boolean
  trustText1?: string
  trustText2?: string
  trustText3?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Siap Berkolaborasi?',
  description: 'Mari bergabung dengan kami dan ciptakan solusi teknologi yang bermakna bersama-sama.',
  gradientTitle: false,
  primaryButtonText: 'Hubungi Kami',
  showTrustIndicators: false,
  trustText1: 'Aman & Terpercaya',
  trustText2: 'Respon Cepat',
  trustText3: 'Dukungan 24/7'
})

defineEmits<{
  'primary-click': []
  'secondary-click': []
}>()
</script>
