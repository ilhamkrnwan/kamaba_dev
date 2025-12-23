<template>
  <section class="relative overflow-hidden py-10 md:py-20 bg-background" id="about">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-primary blur-3xl"></div>
      <div class="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/50 blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <!-- Left Column - Main Content -->
        <div class="space-y-8">
          <!-- Title with accent border -->
          <div class="border-l-4 border-primary pl-6">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {{ title }}
            </h2>
          </div>

          <!-- Description -->
          <p class="text-lg text-muted-foreground leading-relaxed">
            {{ subtitle }}
          </p>

          <!-- CTA Button -->
          <div class="pt-4">
            <UButton
              size="xl"
              color="primary"
              class="uppercase tracking-wider"
              @click="$emit('ctaClick')"
            >
              {{ ctaText }}
            </UButton>
          </div>
        </div>

        <!-- Right Column - Services/Features List -->
        <div class="space-y-8">
          <!-- Section Title -->
          <h3 class="text-3xl md:text-4xl font-bold text-primary mb-8">
            {{ servicesTitle }}
          </h3>

          <!-- Services List -->
          <div class="space-y-8">
            <div 
              v-for="(service, index) in services" 
              :key="index"
              class="flex gap-6 group"
            >
              <!-- Icon -->
              <div class="flex-shrink-0">
                <div class="w-14 h-14 flex items-center justify-center border-2 border-primary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 rounded-md">
                  <UIcon :name="service.icon" class="w-7 h-7" />
                </div>
              </div>
              
              <!-- Content -->
              <div class="flex-1">
                <h4 class="text-xl font-bold text-foreground mb-2">
                  {{ service.title }}
                </h4>
                <p class="text-muted-foreground leading-relaxed">
                  {{ service.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Service {
  icon: string
  title: string
  description: string
}

interface Props {
  title?: string
  subtitle?: string
  ctaText?: string
  servicesTitle?: string
  services?: Service[]
}

defineEmits<{
  ctaClick: []
}>()

withDefaults(defineProps<Props>(), {
  title: 'Tentang QINARYAN',
  subtitle: 'QINARYAN dimulai dari visi sederhana: menciptakan ekosistem teknologi yang inklusif dan berdampak positif bagi masyarakat. Kami percaya bahwa teknologi harus mudah diakses, transparan, dan memberdayakan.',
  ctaText: 'Lihat Karya Kami',
  servicesTitle: 'Apa Yang Kami Lakukan',
  services: () => [
    {
      icon: 'i-lucide-code-2',
      title: 'Pengembangan Digital',
      description: 'Membangun aplikasi web dan mobile modern dengan teknologi terkini untuk solusi bisnis yang efektif dan efisien.'
    },
    {
      icon: 'i-lucide-lightbulb',
      title: 'Solusi Inovatif',
      description: 'Menciptakan solusi teknologi kreatif yang menjawab tantangan nyata dalam pendidikan dan organisasi.'
    },
    {
      icon: 'i-lucide-users',
      title: 'Komunitas Kolaboratif',
      description: 'Membangun ekosistem pengembang yang saling mendukung dan berbagi pengetahuan untuk pertumbuhan bersama.'
    },
    {
      icon: 'i-lucide-rocket',
      title: 'Transformasi Digital',
      description: 'Membantu organisasi bertransformasi dengan teknologi yang mudah diakses dan memberdayakan semua pihak.'
    }
  ]
})
</script>
