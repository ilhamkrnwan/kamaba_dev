<template>
  <section class="py-20 md:py-32">
    <div class="container mx-auto px-4">
      <UiSectionHeading
        :title="title"
        :subtitle="subtitle"
        :badge="badge"
        size="md"
        :show-line="true"
      />

      <UiBentoGrid :columns="2" class="mx-auto max-w-6xl">
        <UiFeatureCard
          v-for="(feature, index) in features"
          :key="index"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
          :tags="feature.tags"
        />
      </UiBentoGrid>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Feature {
  icon: string
  title: string
  description: string
  tags: string
}

interface Props {
  title?: string
  subtitle?: string
  badge?: string
  features?: Feature[]
}

withDefaults(defineProps<Props>(), {
  title: 'Area Fokus Kami',
  subtitle: 'Kami mengkhususkan diri dalam berbagai bidang teknologi untuk memberikan solusi terbaik',
  badge: 'Keahlian',
  features: () => [
    {
      icon: 'i-heroicons-globe-alt',
      title: 'Website Development',
      description: 'Membangun website modern, responsif, dan user-friendly untuk berbagai kebutuhan bisnis dan organisasi.',
      tags: 'Vue.js, Nuxt, React, Next.js'
    },
    {
      icon: 'i-heroicons-device-phone-mobile',
      title: 'Mobile Development',
      description: 'Mengembangkan aplikasi mobile native dan cross-platform yang powerful dan intuitif.',
      tags: 'React Native, Flutter, Ionic'
    },
    {
      icon: 'i-heroicons-academic-cap',
      title: 'E-Learning Solutions',
      description: 'Platform pembelajaran digital yang interaktif untuk meningkatkan pengalaman belajar mengajar.',
      tags: 'LMS, Interactive Content, Gamification'
    },
    {
      icon: 'i-heroicons-users',
      title: 'Collaborative Tools',
      description: 'Sistem manajemen dan kolaborasi untuk meningkatkan produktivitas tim dan organisasi.',
      tags: 'Project Management, Communication, Automation'
    }
  ]
})
</script>
