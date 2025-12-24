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

      <!-- Bento Grid with Spotlight Effect -->
      <div class="mx-auto max-w-6xl mt-12 md:mt-16">
        <UiBentoGrid :columns="3">
          <UiBentoCard
            v-for="(card, index) in focusCards"
            :key="index"
            :title="card.title"
            :description="card.description"
            :icon="card.icon"
            :size="card.size"
            spotlight
          />
        </UiBentoGrid>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  badge?: string
}

withDefaults(defineProps<Props>(), {
  title: 'We Offer Custom Digital Services to Build on Your Ideas',
  subtitle: 'Comprehensive technology solutions tailored to your business needs',
  badge: 'Services',
})

const focusCards = [
  {
    title: 'Full Web Development',
    description: 'One-stop Website Development Solution.',
    icon: 'i-lucide-globe',
    size: 'normal'
  },
  {
    title: 'AI & ML Solutions',
    description: 'AI/ML consulting and model dev, Data analysis, Performance tracking',
    icon: 'i-lucide-cpu',
    size: 'normal'
  },
  {
    title: 'App Development Package',
    description: 'Provide customized mobile application development services to enhance user experience',
    icon: 'i-lucide-smartphone',
    size: 'normal'
  },
  {
    title: 'Product Development (Cooperation)',
    description: 'Provide innovative product solutions',
    icon: 'i-lucide-lightbulb',
    size: 'wide'
  },
  {
    title: 'Cybersecurity Services',
    description: 'Protect digital assets and reduce security risks',
    icon: 'i-lucide-shield-check',
    size: 'normal'
  }
]
</script>

<style scoped>
/* Smooth hover transitions */
.group:hover {
  transform: translateY(-4px);
}

/* Icon animations */
.group:hover :deep(.iconify) {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
</style>
