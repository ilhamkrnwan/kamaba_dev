<template>
  <section class="relative overflow-hidden py-20 md:py-32">
    <!-- Background decoration -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div class="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
    </div>

    <div class="container relative mx-auto px-4">
      <UiSectionHeading
        :title="title"
        :badge="badge"
        size="md"
      />

      <div class="mx-auto max-w-5xl">
        <!-- Quote -->
        <UiGlowingEffect
          :blur="4"
          :spread="80"
          :border-width="1"
          class="mb-12 rounded-2xl"
        >
          <div class="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-blue-500/5 p-8 md:p-12">
            <blockquote class="text-center">
              <p class="mb-4 text-2xl font-semibold italic text-foreground md:text-3xl">
                "{{ quote }}"
              </p>
            </blockquote>
          </div>
        </UiGlowingEffect>

        <UiBentoGrid :columns="3">
          <UiBentoCard
            v-for="(advantage, index) in advantages"
            :key="index"
            :title="advantage.title"
            :description="advantage.description"
            :icon="advantage.icon"
            :size="advantage.size"
          />
        </UiBentoGrid>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Advantage {
  title: string
  description: string
  icon: string
  size?: 'normal' | 'large' | 'wide' | 'tall'
}

interface Props {
  title?: string
  badge?: string
  quote?: string
  advantages?: Advantage[]
}

withDefaults(defineProps<Props>(), {
  title: 'Mengapa Memilih QINARYAN?',
  badge: 'Keunggulan Kami',
  quote: 'Teknologi terbaik adalah yang membuat hidup lebih mudah, bukan lebih rumit.',
  advantages: () => [
    {
      title: 'Modern & Up-to-date',
      description: 'Menggunakan teknologi terkini dan best practices dalam setiap proyek yang kami kerjakan.',
      icon: 'i-heroicons-sparkles',
      size: 'large'
    },
    {
      title: 'Open Source',
      description: 'Komitmen pada transparansi dan berbagi pengetahuan melalui kontribusi open source.',
      icon: 'i-heroicons-code-bracket'
    },
    {
      title: 'Professional',
      description: 'Standar profesional tinggi dengan dokumentasi lengkap dan kode berkualitas.',
      icon: 'i-heroicons-star'
    },
    {
      title: 'Kolaboratif',
      description: 'Membangun dengan semangat kerja sama dan saling mendukung antar anggota.',
      icon: 'i-heroicons-hand-raised'
    },
    {
      title: 'Berkelanjutan',
      description: 'Fokus pada solusi jangka panjang yang scalable dan mudah dimaintain.',
      icon: 'i-heroicons-arrow-trending-up',
      size: 'wide'
    }
  ]
})
</script>
