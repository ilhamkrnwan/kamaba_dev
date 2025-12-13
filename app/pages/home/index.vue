<script lang="ts" setup>
definePageMeta({
  layout: "default",
  title: "KAMABA DEV - Berkarya dengan Teknologi",
  description: "Komunitas pengembang digital yang berfokus pada pengembangan teknologi modern untuk kebutuhan pendidikan, organisasi, dan masyarakat.",
});

const router = useRouter()

const heroStats = [
  {
    value: '10+',
    label: 'Proyek Selesai',
    description: 'Website dan aplikasi yang telah kami kembangkan'
  },
  {
    value: '50+',
    label: 'Anggota Aktif',
    description: 'Developer dan kontributor yang berkolaborasi'
  },
  {
    value: '100%',
    label: 'Open Source',
    description: 'Komitmen kami pada pembelajaran terbuka'
  }
]

const focusAreas = [
  {
    emoji: '💻',
    title: 'Pembuatan Website',
    description: 'Website profil, landing page, sistem informasi, dan berbagai solusi web sesuai kebutuhan organisasi dan UMKM.',
    tags: ['Web Development', 'UI/UX', 'Responsive Design']
  },
  {
    emoji: '📱',
    title: 'Aplikasi Mobile & Web App',
    description: 'Aplikasi berbasis web maupun mobile yang modern, efisien, dan user-friendly untuk berbagai kebutuhan.',
    tags: ['Mobile App', 'Progressive Web App', 'Cross Platform']
  },
  {
    emoji: '🧠',
    title: 'Pembelajaran & Pengembangan Skill',
    description: 'Belajar bareng, diskusi teknologi, workshop, dan berbagi pengalaman untuk meningkatkan kemampuan developer.',
    tags: ['Learning', 'Workshop', 'Mentoring']
  },
  {
    emoji: '🤝',
    title: 'Kolaborasi & Proyek Sosial',
    description: 'Mendukung kegiatan kampus, komunitas, dan UMKM melalui solusi teknologi yang bermanfaat.',
    tags: ['Social Impact', 'Community', 'Collaboration']
  }
]

const bentoItems = [
  {
    title: 'Teknologi Modern',
    description: 'Menggunakan tech stack terkini seperti Nuxt, Vue, TypeScript, dan berbagai framework modern lainnya.',
    emoji: '⚡',
    size: 'large' as const,
  },
  {
    title: 'Open Source',
    description: 'Komitmen pada pembelajaran terbuka dan berbagi pengetahuan.',
    emoji: '🌍',
  },
  {
    title: 'Profesional',
    description: 'Kualitas kerja yang tinggi dengan pendekatan yang terstruktur.',
    emoji: '🎯',
  },
  {
    title: 'Kolaboratif',
    description: 'Kerja sama tim yang solid dan saling mendukung.',
    emoji: '👥',
  },
  {
    title: 'Berkelanjutan',
    description: 'Pengembangan yang kontinyu dan maintenance jangka panjang.',
    emoji: '♻️',
    size: 'wide' as const,
  }
]

const navigateToContact = () => {
  router.push('/contact')
}

const navigateToAbout = () => {
  router.push('/about')
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <UiHeroSection
      title="KAMABA DEV"
      subtitle="Komunitas pengembang digital yang berfokus pada pengembangan teknologi modern. Belajar, berkolaborasi, dan berkarya untuk menciptakan solusi digital yang bermakna."
      badge="🚀 Sedang Berkembang"
      primary-button="Mulai Berkolaborasi"
      secondary-button="Pelajari Lebih Lanjut"
      :stats="heroStats"
      @primary-action="navigateToContact"
      @secondary-action="navigateToAbout"
    />

    <!-- What is KAMABA DEV Section -->
    <section class="relative overflow-hidden py-20 md:py-32">
      <div class="container mx-auto px-4">
        <UiSectionHeading
          title="Apa itu KAMABA DEV?"
          subtitle="KAMABA DEV bukan sekadar tim teknis. Kami adalah komunitas yang mengembangkan website dan aplikasi, menciptakan sistem digital yang bermanfaat, dan menjadi jembatan antara ide dan solusi teknologi."
          badge="🌱 Tentang Kami"
          size="md"
          :gradient="true"
        />

        <div class="mx-auto max-w-4xl">
          <div class="rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm md:p-12">
            <div class="space-y-6 text-center">
              <p class="text-lg text-muted-foreground leading-relaxed md:text-xl">
                Kami hadir sebagai ruang <span class="font-semibold text-primary">belajar, berkolaborasi, dan berkarya</span> bagi mahasiswa, alumni, dan siapa pun yang tertarik dengan dunia teknologi digital.
              </p>
              <p class="text-lg text-muted-foreground leading-relaxed">
                Semua dilakukan secara <span class="font-semibold text-foreground">profesional, kolaboratif, dan berkelanjutan</span>.
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
          title="Fokus Kegiatan"
          subtitle="Kami bergerak di beberapa bidang utama untuk memberikan dampak nyata"
          badge="🎯 Yang Kami Lakukan"
          size="md"
          :show-line="true"
        />

        <UiBentoGrid :columns="2" class="mx-auto max-w-6xl">
          <UiFeatureCard
            v-for="(area, idx) in focusAreas"
            :key="idx"
            :emoji="area.emoji"
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
          title="Kenapa KAMABA DEV Ada?"
          badge="💡 Filosofi Kami"
          size="md"
        />

        <div class="mx-auto max-w-5xl">
          <div class="mb-12 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-blue-500/5 p-8 md:p-12">
            <blockquote class="text-center">
              <p class="mb-4 text-2xl font-semibold italic text-foreground md:text-3xl">
                "Teknologi bukan hanya tentang kode, tapi tentang dampak dan manfaat nyata."
              </p>
            </blockquote>
          </div>

          <UiBentoGrid :columns="3">
            <UiBentoCard
              v-for="(item, idx) in bentoItems"
              :key="idx"
              :title="item.title"
              :description="item.description"
              :emoji="item.emoji"
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
          title="Siapa Saja di Dalamnya?"
          subtitle="KAMABA DEV terdiri dari berbagai individu yang passionate tentang teknologi"
          badge="👥 Komunitas"
          size="md"
        />

        <div class="mx-auto max-w-4xl">
          <div class="grid gap-6 md:grid-cols-2">
            <div class="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <div class="mb-3 text-3xl">🎓</div>
              <h3 class="mb-2 text-xl font-semibold text-foreground">Mahasiswa IT</h3>
              <p class="text-sm text-muted-foreground">Mahasiswa yang ingin belajar dan mengembangkan skill programming</p>
            </div>

            <div class="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <div class="mb-3 text-3xl">🎖️</div>
              <h3 class="mb-2 text-xl font-semibold text-foreground">Alumni IT</h3>
              <p class="text-sm text-muted-foreground">Alumni yang ingin berbagi pengalaman dan berkontribusi</p>
            </div>

            <div class="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <div class="mb-3 text-3xl">💼</div>
              <h3 class="mb-2 text-xl font-semibold text-foreground">Kontributor Teknologi</h3>
              <p class="text-sm text-muted-foreground">Developer dan tech enthusiast dari berbagai background</p>
            </div>

            <div class="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <div class="mb-3 text-3xl">🧑‍🏫</div>
              <h3 class="mb-2 text-xl font-semibold text-foreground">Mentor & Praktisi</h3>
              <p class="text-sm text-muted-foreground">Profesional berpengalaman yang membimbing anggota</p>
            </div>
          </div>

          <div class="mt-12 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-transparent p-8 text-center">
            <p class="text-lg text-foreground">
              Tidak harus jago sejak awal. Yang penting punya <span class="font-semibold text-primary">niat belajar dan semangat berkembang</span> 🌿
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
                Ingin Berkolaborasi?
              </h2>
              <p class="mb-8 text-lg text-muted-foreground">
                Kami terbuka untuk kerja sama proyek, pengembangan sistem, kegiatan komunitas, dan diskusi teknologi.
              </p>

              <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <UButton
                  size="xl"
                  color="primary"
                  @click="navigateToContact"
                >
                  Hubungi Kami
                </UButton>
                <UButton
                  size="xl"
                  variant="outline"
                  to="/about"
                >
                  Pelajari Lebih Lanjut
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
