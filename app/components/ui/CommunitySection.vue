<template>
  <section class="py-20 md:py-32">
    <div class="container mx-auto px-4">
      <UiSectionHeading
        :title="title"
        :subtitle="subtitle"
        :badge="badge"
        size="md"
      />

      <div class="mx-auto max-w-4xl">
        <div class="grid gap-6 md:grid-cols-2">
          <UiGlowingEffect
            v-for="(member, index) in members"
            :key="index"
            :blur="4"
            :spread="60"
            :border-width="1"
            :inactive-zone="0.5"
            class="rounded-xl"
          >
            <div class="group h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <UIcon :name="member.icon" class="mb-3 h-8 w-8 text-primary" />
              <h3 class="mb-2 text-xl font-semibold text-foreground">{{ member.title }}</h3>
              <p class="text-sm text-muted-foreground">{{ member.description }}</p>
            </div>
          </UiGlowingEffect>
        </div>

        <div class="mt-12 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-transparent p-8 text-center">
          <p class="text-lg text-foreground">
            {{ closingText1 }} <span class="font-semibold text-primary">{{ closingHighlight }}</span> <UIcon name="i-lucide-heart" class="ml-1 inline-block text-red-500" />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Member {
  icon: string
  title: string
  description: string
}

interface Props {
  title?: string
  subtitle?: string
  badge?: string
  members?: Member[]
  closingText1?: string
  closingHighlight?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Siapa Saja yang Ada di QINARYAN?',
  subtitle: 'Komunitas kami terdiri dari berbagai latar belakang yang bekerja sama untuk tujuan yang sama',
  badge: 'Komunitas',
  members: () => [
    {
      icon: 'i-lucide-graduation-cap',
      title: 'Mahasiswa Aktif',
      description: 'Mahasiswa yang ingin belajar dan mengembangkan skill teknologi sambil berkontribusi pada proyek nyata.'
    },
    {
      icon: 'i-lucide-briefcase',
      title: 'Alumni Profesional',
      description: 'Alumni yang sudah bekerja di industri dan ingin berbagi pengalaman serta membimbing generasi selanjutnya.'
    },
    {
      icon: 'i-lucide-heart',
      title: 'Kontributor Open Source',
      description: 'Developer yang passionate tentang open source dan ingin berkontribusi pada proyek-proyek bermakna.'
    },
    {
      icon: 'i-lucide-lightbulb',
      title: 'Mentor & Advisor',
      description: 'Profesional berpengalaman yang memberikan bimbingan dan arahan strategis untuk perkembangan komunitas.'
    }
  ],
  closingText1: 'Bersama-sama, kita membangun',
  closingHighlight: 'masa depan teknologi yang lebih baik'
})
</script>
