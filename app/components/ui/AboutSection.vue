<template>
  <section class="relative overflow-hidden py-20 md:py-32" id="about">
    <div class="container mx-auto px-4">
      <UiSectionHeading
        :title="title"
        :subtitle="subtitle"
        :badge="badge"
        size="md"
        :gradient="true"
      />

      <div class="mx-auto max-w-4xl">
        <UiGlowingEffect
          :blur="4"
          :spread="80"
          :border-width="1"
          :inactive-zone="0.5"
          class="rounded-2xl"
        >
          <div class="rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm md:p-12">
            <div class="space-y-6 text-center">
              <p class="text-lg leading-relaxed text-muted-foreground md:text-xl">
                {{ introText1 }} <span class="font-semibold text-primary">{{ highlightText1 }}</span> {{ introText2 }}
              </p>
              <p class="text-lg leading-relaxed text-muted-foreground">
                {{ beliefText1 }} <span class="font-semibold text-foreground">{{ highlightText2 }}</span>{{ beliefText2 }}
              </p>
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
  subtitle?: string
  badge?: string
  introText1?: string
  highlightText1?: string
  introText2?: string
  beliefText1?: string
  highlightText2?: string
  beliefText2?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Tentang QINARYAN',
  subtitle: 'Kami adalah komunitas pengembang digital yang berkomitmen untuk menciptakan solusi teknologi inovatif dan berkelanjutan bagi pendidikan, organisasi, dan masyarakat luas.',
  badge: 'Siapa Kami',
  introText1: 'QINARYAN dimulai dari',
  highlightText1: 'visi sederhana',
  introText2: ': menciptakan ekosistem teknologi yang inklusif dan berdampak positif bagi masyarakat.',
  beliefText1: 'Kami percaya bahwa',
  highlightText2: 'teknologi harus mudah diakses, transparan, dan memberdayakan',
  beliefText2: ', bukan memperumit.'
})
</script>
