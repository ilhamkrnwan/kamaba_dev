<script lang="ts" setup>
const { t } = useI18n()

useSeoMeta({
  title: t('KAMABA DEV - Berkarya dengan Teknologi'),
  description: t('Komunitas pengembang digital yang berfokus pada pengembangan teknologi modern untuk kebutuhan pendidikan, organisasi, dan masyarakat.'),
})

const heroStats = computed(() => [
  {
    value: t('hero.statistik.proyek.nilai'),
    label: t('hero.statistik.proyek.label'),
    description: t('hero.statistik.proyek.deskripsi')
  },
  {
    value: t('hero.statistik.anggota.nilai'),
    label: t('hero.statistik.anggota.label'),
    description: t('hero.statistik.anggota.deskripsi')
  },
  {
    value: t('hero.statistik.openSource.nilai'),
    label: t('hero.statistik.openSource.label'),
    description: t('hero.statistik.openSource.deskripsi')
  }
])

const focusAreas = computed(() => [
  {
    icon: t('fokusArea.website.icon'),
    title: t('fokusArea.website.judul'),
    description: t('fokusArea.website.deskripsi'),
    tags: t('fokusArea.website.tags')
  },
  {
    icon: t('fokusArea.mobile.icon'),
    title: t('fokusArea.mobile.judul'),
    description: t('fokusArea.mobile.deskripsi'),
    tags: t('fokusArea.mobile.tags')
  },
  {
    icon: t('fokusArea.pembelajaran.icon'),
    title: t('fokusArea.pembelajaran.judul'),
    description: t('fokusArea.pembelajaran.deskripsi'),
    tags: t('fokusArea.pembelajaran.tags')
  },
  {
    icon: t('fokusArea.kolaborasi.icon'),
    title: t('fokusArea.kolaborasi.judul'),
    description: t('fokusArea.kolaborasi.deskripsi'),
    tags: t('fokusArea.kolaborasi.tags')
  }
])

const bentoItems = computed(() => [
  {
    title: t('mengapa.modern.judul'),
    description: t('mengapa.modern.deskripsi'),
    icon: t('mengapa.modern.icon'),
    size: 'large' as const,
  },
  {
    title: t('mengapa.openSource.judul'),
    description: t('mengapa.openSource.deskripsi'),
    icon: t('mengapa.openSource.icon'),
  },
  {
    title: t('mengapa.profesional.judul'),
    description: t('mengapa.profesional.deskripsi'),
    icon: t('mengapa.profesional.icon'),
  },
  {
    title: t('mengapa.kolaboratif.judul'),
    description: t('mengapa.kolaboratif.deskripsi'),
    icon: t('mengapa.kolaboratif.icon'),
  },
  {
    title: t('mengapa.berkelanjutan.judul'),
    description: t('mengapa.berkelanjutan.deskripsi'),
    icon: t('mengapa.berkelanjutan.icon'),
    size: 'wide' as const,
  }
])

</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <UiHeroSection
      :title="$t('hero.judul')"
      :subtitle="$t('hero.subjudul')"
      :badge="$t('hero.lencana')"
      :primary-button="$t('hero.tombolUtama')"
      :secondary-button="$t('hero.tombolKedua')"
      :stats="heroStats"
      @primary-action="navigateTo('/#contact')"
      @secondary-action="navigateTo('/#about')"
    />

    <!-- What is KAMABA DEV Section -->
    <section class="relative overflow-hidden py-20 md:py-32" id="about">
      <div class="container mx-auto px-4">
        <UiSectionHeading
          :title="$t('tentang.judul')"
          :subtitle="$t('tentang.subjudul')"
          :badge="$t('tentang.lencana')"
          size="md"
          :gradient="true"
        />

        <div class="mx-auto max-w-4xl">
          <div class="rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm md:p-12">
            <div class="space-y-6 text-center">
              <p class="text-lg text-muted-foreground leading-relaxed md:text-xl">
                {{ $t('tentang.deskripsi1') }} <span class="font-semibold text-primary">{{ $t('tentang.deskripsi1Tebal') }}</span> {{ $t('tentang.deskripsi1Setelah') }}
              </p>
              <p class="text-lg text-muted-foreground leading-relaxed">
                {{ $t('tentang.deskripsi2') }} <span class="font-semibold text-foreground">{{ $t('tentang.deskripsi2Tebal') }}</span>{{ $t('tentang.deskripsi2Setelah') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Focus Areas Section -->
    <section class="py-20 md:py-32">
      <div class="container mx-auto px-4">
        <UiSectionHeading
          :title="$t('fokusArea.judul')"
          :subtitle="$t('fokusArea.subjudul')"
          :badge="$t('fokusArea.lencana')"
          size="md"
          :show-line="true"
        />

        <UiBentoGrid :columns="2" class="mx-auto max-w-6xl">
          <UiFeatureCard
            v-for="(area, idx) in focusAreas"
            :key="idx"
            :icon="area.icon"
            :title="area.title"
            :description="area.description"
            :tags="area.tags"
          />
        </UiBentoGrid>
      </div>
    </section>

    <!-- Why KAMABA DEV Section -->
    <section class="relative overflow-hidden py-20 md:py-32">
      <!-- Background decoration -->
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div class="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div class="container relative mx-auto px-4">
        <UiSectionHeading
          :title="$t('mengapa.judul')"
          :badge="$t('mengapa.lencana')"
          size="md"
        />

        <div class="mx-auto max-w-5xl">
          <div class="mb-12 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-blue-500/5 p-8 md:p-12">
            <blockquote class="text-center">
              <p class="mb-4 text-2xl font-semibold italic text-foreground md:text-3xl">
                "{{ $t('mengapa.kutipan') }}"
              </p>
            </blockquote>
          </div>

          <UiBentoGrid :columns="3">
            <UiBentoCard
              v-for="(item, idx) in bentoItems"
              :key="idx"
              :title="item.title"
              :description="item.description"
              :icon="item.icon"
              :size="item.size"
            />
          </UiBentoGrid>
        </div>
      </div>
    </section>

    <!-- Who's Inside Section -->
    <section class="py-20 md:py-32">
      <div class="container mx-auto px-4">
        <UiSectionHeading
          :title="$t('komunitas.judul')"
          :subtitle="$t('komunitas.subjudul')"
          :badge="$t('komunitas.lencana')"
          size="md"
        />

        <div class="mx-auto max-w-4xl">
          <div class="grid gap-6 md:grid-cols-2">
            <div class="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <UIcon :name="$t('komunitas.mahasiswa.icon')" class="mb-3 h-8 w-8 text-primary" />
              <h3 class="mb-2 text-xl font-semibold text-foreground">{{ $t('komunitas.mahasiswa.judul') }}</h3>
              <p class="text-sm text-muted-foreground">{{ $t('komunitas.mahasiswa.deskripsi') }}</p>
            </div>

            <div class="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <UIcon :name="$t('komunitas.alumni.icon')" class="mb-3 h-8 w-8 text-primary" />
              <h3 class="mb-2 text-xl font-semibold text-foreground">{{ $t('komunitas.alumni.judul') }}</h3>
              <p class="text-sm text-muted-foreground">{{ $t('komunitas.alumni.deskripsi') }}</p>
            </div>

            <div class="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <UIcon :name="$t('komunitas.kontributor.icon')" class="mb-3 h-8 w-8 text-primary" />
              <h3 class="mb-2 text-xl font-semibold text-foreground">{{ $t('komunitas.kontributor.judul') }}</h3>
              <p class="text-sm text-muted-foreground">{{ $t('komunitas.kontributor.deskripsi') }}</p>
            </div>

            <div class="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <UIcon :name="$t('komunitas.mentor.icon')" class="mb-3 h-8 w-8 text-primary" />
              <h3 class="mb-2 text-xl font-semibold text-foreground">{{ $t('komunitas.mentor.judul') }}</h3>
              <p class="text-sm text-muted-foreground">{{ $t('komunitas.mentor.deskripsi') }}</p>
            </div>
          </div>

          <div class="mt-12 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-transparent p-8 text-center">
            <p class="text-lg text-foreground">
              {{ $t('komunitas.footer') }} <span class="font-semibold text-primary">{{ $t('komunitas.footerTebal') }}</span> <UIcon :name="$t('komunitas.footerIcon')" class="inline-block ml-1" />
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 md:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl">
          <div class="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-blue-500/5 to-transparent p-12 text-center md:p-16">
            <!-- Background pattern -->
            <div
              class="pointer-events-none absolute inset-0 opacity-10"
              style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 20px 20px;"
            />

            <div class="relative">
              <h2 class="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                {{ $t('cta.judul') }}
              </h2>
              <p class="mb-8 text-lg text-muted-foreground">
                {{ $t('cta.deskripsi') }}
              </p>

              <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <UButton
                  size="xl"
                  color="primary"
                  @click="navigateTo('/#contact')"
                >
                  {{ $t('cta.tombolUtama') }}
                </UButton>
                <UButton
                  size="xl"
                  variant="outline"
                  to="/about"
                >
                  {{ $t('cta.tombolKedua') }}
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Additional animations can be added here */
</style>
