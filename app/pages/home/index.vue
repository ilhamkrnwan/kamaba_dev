<script lang="ts" setup>
const { t } = useI18n()

useSeoMeta({
  title: t('KAMABA DEV - Berkarya dengan Teknologi'),
  description: t('Menyatukan semangat untuk belajar dan berkreatif bersama dalam satu komunitas. Misi kami adalah melahirkan teknologi modern yang menjadi solusi bagi tantangan di sektor pendidikan, organisasi, dan sosial kemasyarakatan.'),
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <UiHeroSection
      :title="$t('KAMABA DEV')"
      :subtitle="$t('Menyatukan semangat untuk belajar dan berkreatif bersama dalam satu komunitas. Misi kami adalah melahirkan teknologi modern yang menjadi solusi bagi tantangan di sektor pendidikan, organisasi, dan sosial kemasyarakatan.')"
      :badge="$t('Terbuka untuk pekerjaan')"
      :primary-button="$t('Portofolio')"
      :secondary-button="$t('Mari Berkolaborasi!')"
      :stats="[
        {
          value: $t('20+'),
          label: $t('Proyek'),
          description: $t('Proyek yang telah diselesaikan')
        },
        {
          value: $t('50+'),
          label: $t('Anggota'),
          description: $t('Anggota aktif komunitas')
        },
        {
          value: $t('100%'),
          label: $t('Open Source'),
          description: $t('Semua proyek open source')
        }
      ]"
      @primary-action="navigateTo('/portfolio')"
      @secondary-action="navigateTo('/#contact')"
      class="font-['Baumans']"
    />

    <!-- What is KAMABA DEV Section -->
    <section class="relative overflow-hidden py-20 md:py-32" id="about">
      <div class="container mx-auto px-4">
        <UiSectionHeading
          :title="$t('Tentang KAMABA DEV')"
          :subtitle="$t('Kami adalah komunitas pengembang digital yang berkomitmen untuk menciptakan solusi teknologi inovatif dan berkelanjutan bagi pendidikan, organisasi, dan masyarakat luas.')"
          :badge="$t('Siapa Kami')"
          size="md"
          :gradient="true"
        />

        <div class="mx-auto max-w-4xl">
          <div class="rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm md:p-12">
            <div class="space-y-6 text-center">
              <p class="text-lg text-muted-foreground leading-relaxed md:text-xl">
                {{ $t('KAMABA DEV dimulai dari') }} <span class="font-semibold text-primary">{{ $t('visi sederhana') }}</span> {{ $t(': menciptakan ekosistem teknologi yang inklusif dan berdampak positif bagi masyarakat.') }}
              </p>
              <p class="text-lg text-muted-foreground leading-relaxed">
                {{ $t('Kami percaya bahwa') }} <span class="font-semibold text-foreground">{{ $t('teknologi harus mudah diakses, transparan, dan memberdayakan') }}</span>{{ $t(', bukan memperumit.') }}
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
          :title="$t('Area Fokus Kami')"
          :subtitle="$t('Kami mengkhususkan diri dalam berbagai bidang teknologi untuk memberikan solusi terbaik')"
          :badge="$t('Keahlian')"
          size="md"
          :show-line="true"
        />

        <UiBentoGrid :columns="2" class="mx-auto max-w-6xl">
          <UiFeatureCard
            :icon="$t('i-heroicons-globe-alt')"
            :title="$t('Website Development')"
            :description="$t('Membangun website modern, responsif, dan user-friendly untuk berbagai kebutuhan bisnis dan organisasi.')"
            :tags="$t('Vue.js, Nuxt, React, Next.js')"
          />
          <UiFeatureCard
            :icon="$t('i-heroicons-device-phone-mobile')"
            :title="$t('Mobile Development')"
            :description="$t('Mengembangkan aplikasi mobile native dan cross-platform yang powerful dan intuitif.')"
            :tags="$t('React Native, Flutter, Ionic')"
          />
          <UiFeatureCard
            :icon="$t('i-heroicons-academic-cap')"
            :title="$t('E-Learning Solutions')"
            :description="$t('Platform pembelajaran digital yang interaktif untuk meningkatkan pengalaman belajar mengajar.')"
            :tags="$t('LMS, Interactive Content, Gamification')"
          />
          <UiFeatureCard
            :icon="$t('i-heroicons-users')"
            :title="$t('Collaborative Tools')"
            :description="$t('Sistem manajemen dan kolaborasi untuk meningkatkan produktivitas tim dan organisasi.')"
            :tags="$t('Project Management, Communication, Automation')"
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
          :title="$t('Mengapa Memilih KAMABA DEV?')"
          :badge="$t('Keunggulan Kami')"
          size="md"
        />

        <div class="mx-auto max-w-5xl">
          <div class="mb-12 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-blue-500/5 p-8 md:p-12">
            <blockquote class="text-center">
              <p class="mb-4 text-2xl font-semibold italic text-foreground md:text-3xl">
                "{{ $t('Teknologi terbaik adalah yang membuat hidup lebih mudah, bukan lebih rumit.') }}"
              </p>
            </blockquote>
          </div>

          <UiBentoGrid :columns="3">
            <UiBentoCard
              :title="$t('Modern & Up-to-date')"
              :description="$t('Menggunakan teknologi terkini dan best practices dalam setiap proyek yang kami kerjakan.')"
              :icon="$t('i-heroicons-sparkles')"
              size="large"
            />
            <UiBentoCard
              :title="$t('Open Source')"
              :description="$t('Komitmen pada transparansi dan berbagi pengetahuan melalui kontribusi open source.')"
              :icon="$t('i-heroicons-code-bracket')"
            />
            <UiBentoCard
              :title="$t('Professional')"
              :description="$t('Standar profesional tinggi dengan dokumentasi lengkap dan kode berkualitas.')"
              :icon="$t('i-heroicons-star')"
            />
            <UiBentoCard
              :title="$t('Kolaboratif')"
              :description="$t('Membangun dengan semangat kerja sama dan saling mendukung antar anggota.')"
              :icon="$t('i-heroicons-hand-raised')"
            />
            <UiBentoCard
              :title="$t('Berkelanjutan')"
              :description="$t('Fokus pada solusi jangka panjang yang scalable dan mudah dimaintain.')"
              :icon="$t('i-heroicons-arrow-trending-up')"
              size="wide"
            />
          </UiBentoGrid>
        </div>
      </div>
    </section>

    <!-- Who's Inside Section -->
    <section class="py-20 md:py-32">
      <div class="container mx-auto px-4">
        <UiSectionHeading
          :title="$t('Siapa Saja yang Ada di KAMABA DEV?')"
          :subtitle="$t('Komunitas kami terdiri dari berbagai latar belakang yang bekerja sama untuk tujuan yang sama')"
          :badge="$t('Komunitas')"
          size="md"
        />

        <div class="mx-auto max-w-4xl">
          <div class="grid gap-6 md:grid-cols-2">
            <div class="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <UIcon :name="$t('i-heroicons-academic-cap')" class="mb-3 h-8 w-8 text-primary" />
              <h3 class="mb-2 text-xl font-semibold text-foreground">{{ $t('Mahasiswa Aktif') }}</h3>
              <p class="text-sm text-muted-foreground">{{ $t('Mahasiswa yang ingin belajar dan mengembangkan skill teknologi sambil berkontribusi pada proyek nyata.') }}</p>
            </div>

            <div class="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <UIcon :name="$t('i-heroicons-briefcase')" class="mb-3 h-8 w-8 text-primary" />
              <h3 class="mb-2 text-xl font-semibold text-foreground">{{ $t('Alumni Profesional') }}</h3>
              <p class="text-sm text-muted-foreground">{{ $t('Alumni yang sudah bekerja di industri dan ingin berbagi pengalaman serta membimbing generasi selanjutnya.') }}</p>
            </div>

            <div class="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <UIcon :name="$t('i-heroicons-heart')" class="mb-3 h-8 w-8 text-primary" />
              <h3 class="mb-2 text-xl font-semibold text-foreground">{{ $t('Kontributor Open Source') }}</h3>
              <p class="text-sm text-muted-foreground">{{ $t('Developer yang passionate tentang open source dan ingin berkontribusi pada proyek-proyek bermakna.') }}</p>
            </div>

            <div class="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <UIcon :name="$t('i-heroicons-light-bulb')" class="mb-3 h-8 w-8 text-primary" />
              <h3 class="mb-2 text-xl font-semibold text-foreground">{{ $t('Mentor & Advisor') }}</h3>
              <p class="text-sm text-muted-foreground">{{ $t('Profesional berpengalaman yang memberikan bimbingan dan arahan strategis untuk perkembangan komunitas.') }}</p>
            </div>
          </div>

          <div class="mt-12 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-transparent p-8 text-center">
            <p class="text-lg text-foreground">
              {{ $t('Bersama-sama, kita membangun') }} <span class="font-semibold text-primary">{{ $t('masa depan teknologi yang lebih baik') }}</span> <UIcon :name="$t('i-heroicons-heart')" class="inline-block ml-1" />
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
                {{ $t('Siap Berkolaborasi?') }}
              </h2>
              <p class="mb-8 text-lg text-muted-foreground">
                {{ $t('Mari bergabung dengan kami dan ciptakan solusi teknologi yang bermakna bersama-sama.') }}
              </p>

              <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <UButton
                  size="xl"
                  color="primary"
                  @click="navigateTo('/#contact')"
                >
                  {{ $t('Hubungi Kami') }}
                </UButton>
                <UButton
                  size="xl"
                  variant="outline"
                  to="/about"
                >
                  {{ $t('Pelajari Lebih Lanjut') }}
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