<script lang="ts" setup>
definePageMeta({
  layout: "default",
  title: "Tentang KAMABA DEV - Komunitas Developer",
  description: "Pelajari lebih lanjut tentang KAMABA DEV, komunitas pengembang digital yang berkomitmen pada pembelajaran, kolaborasi, dan dampak sosial melalui teknologi.",
});

const timeline = [
  {
    year: '2024',
    title: 'Awal Perjalanan',
    description: 'KAMABA DEV didirikan sebagai komunitas pengembang di bawah naungan KAMABA',
    icon: '🚀'
  },
  {
    year: '2024',
    title: 'Proyek Pertama',
    description: 'Meluncurkan proyek-proyek website untuk mendukung kegiatan kampus',
    icon: '💻'
  },
  {
    year: '2025',
    title: 'Ekspansi Komunitas',
    description: 'Berkembang dengan lebih banyak anggota dan proyek sosial',
    icon: '🌱'
  },
  {
    year: 'Future',
    title: 'Visi Ke Depan',
    description: 'Menjadi hub teknologi yang berdampak bagi masyarakat',
    icon: '✨'
  }
]

const team = [
  {
    name: 'Frontend Team',
    role: 'UI/UX & Development',
    bio: 'Bertanggung jawab untuk membuat antarmuka yang menarik dan user-friendly',
    skills: ['Vue.js', 'Nuxt', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Backend Team',
    role: 'Server & Database',
    bio: 'Mengelola logika bisnis, API, dan database untuk sistem yang robust',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'REST API'],
  },
  {
    name: 'Mobile Team',
    role: 'Mobile Development',
    bio: 'Mengembangkan aplikasi mobile yang powerful dan cross-platform',
    skills: ['React Native', 'Flutter', 'Mobile UI'],
  },
  {
    name: 'DevOps Team',
    role: 'Infrastructure & Deployment',
    bio: 'Memastikan aplikasi berjalan optimal dengan deployment yang smooth',
    skills: ['Docker', 'CI/CD', 'Cloud', 'Monitoring'],
  },
  {
    name: 'UI/UX Team',
    role: 'Design & Research',
    bio: 'Merancang pengalaman pengguna yang intuitif dan estetis',
    skills: ['Figma', 'User Research', 'Prototyping'],
  },
  {
    name: 'QA Team',
    role: 'Quality Assurance',
    bio: 'Memastikan kualitas produk melalui testing yang komprehensif',
    skills: ['Testing', 'Automation', 'Bug Tracking'],
  }
]

const values = [
  {
    emoji: '🎯',
    title: 'Fokus pada Dampak',
    description: 'Setiap proyek yang kami kerjakan dirancang untuk memberikan manfaat nyata bagi pengguna dan masyarakat.'
  },
  {
    emoji: '🤝',
    title: 'Kolaborasi Terbuka',
    description: 'Kami percaya pada kekuatan kerja sama tim dan berbagi pengetahuan untuk pertumbuhan bersama.'
  },
  {
    emoji: '📚',
    title: 'Pembelajaran Berkelanjutan',
    description: 'Teknologi terus berkembang, dan kami berkomitmen untuk terus belajar dan beradaptasi.'
  },
  {
    emoji: '💡',
    title: 'Inovasi & Kreativitas',
    description: 'Mendorong pemikiran kreatif dan solusi inovatif untuk setiap tantangan yang dihadapi.'
  },
  {
    emoji: '⚡',
    title: 'Kualitas & Profesionalisme',
    description: 'Mengutamakan kualitas kode, dokumentasi, dan pendekatan profesional dalam setiap proyek.'
  },
  {
    emoji: '🌍',
    title: 'Open Source',
    description: 'Berkontribusi pada ekosistem open source dan berbagi pengetahuan dengan komunitas global.'
  }
]
</script>

<template>
  <div class="min-h-screen">
    <AppFloatingNavbar />
    
    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-32 pb-20 md:pb-32">
      <!-- Background decoration -->
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div class="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div class="container relative mx-auto px-4">
        <div class="mx-auto max-w-4xl text-center">
          <div class="mb-6 inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-sm">
            <span class="text-muted-foreground">🏢 Tentang Kami</span>
          </div>

          <h1 class="mb-6 text-4xl font-bold text-foreground md:text-6xl lg:text-7xl">
            Membangun Masa Depan dengan
            <span class="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Teknologi</span>
          </h1>

          <p class="mb-8 text-lg text-muted-foreground md:text-xl">
            KAMABA DEV adalah komunitas pengembang yang berkomitmen untuk menciptakan solusi teknologi yang bermanfaat bagi pendidikan, organisasi, dan masyarakat.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-20 md:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-6xl">
          <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <!-- Mission -->
            <div>
              <div class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-4xl">
                🎯
              </div>
              <h2 class="mb-4 text-3xl font-bold text-foreground">Misi Kami</h2>
              <p class="mb-6 text-lg text-muted-foreground leading-relaxed">
                Memberdayakan individu dan organisasi melalui teknologi digital yang inovatif, mudah diakses, dan berdampak nyata.
              </p>
              <div class="space-y-4">
                <div class="flex gap-3">
                  <div class="flex-shrink-0 text-primary">✓</div>
                  <p class="text-muted-foreground">Mengembangkan solusi teknologi yang praktis dan sustainable</p>
                </div>
                <div class="flex gap-3">
                  <div class="flex-shrink-0 text-primary">✓</div>
                  <p class="text-muted-foreground">Membangun ekosistem pembelajaran teknologi yang inklusif</p>
                </div>
                <div class="flex gap-3">
                  <div class="flex-shrink-0 text-primary">✓</div>
                  <p class="text-muted-foreground">Memberikan kontribusi positif bagi komunitas dan masyarakat</p>
                </div>
              </div>
            </div>

            <!-- Vision -->
            <div>
              <div class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-4xl">
                🔮
              </div>
              <h2 class="mb-4 text-3xl font-bold text-foreground">Visi Kami</h2>
              <p class="mb-6 text-lg text-muted-foreground leading-relaxed">
                Menjadi komunitas developer terdepan yang dikenal karena kualitas, kolaborasi, dan dampak sosialnya dalam ekosistem teknologi Indonesia.
              </p>
              <div class="space-y-4">
                <div class="flex gap-3">
                  <div class="flex-shrink-0 text-primary">✓</div>
                  <p class="text-muted-foreground">Hub untuk inovasi dan eksperimen teknologi</p>
                </div>
                <div class="flex gap-3">
                  <div class="flex-shrink-0 text-primary">✓</div>
                  <p class="text-muted-foreground">Partner terpercaya untuk transformasi digital</p>
                </div>
                <div class="flex gap-3">
                  <div class="flex-shrink-0 text-primary">✓</div>
                  <p class="text-muted-foreground">Komunitas yang menginspirasi generasi developer baru</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="bg-muted/30 py-20 md:py-32">
      <div class="container mx-auto px-4">
        <UiSectionHeading
          title="Nilai-Nilai Kami"
          subtitle="Prinsip-prinsip yang menjadi fondasi dalam setiap langkah kami"
          badge="💎 Core Values"
          size="md"
        />

        <UiBentoGrid :columns="3" class="mx-auto max-w-6xl">
          <UiFeatureCard
            v-for="(value, idx) in values"
            :key="idx"
            :emoji="value.emoji"
            :title="value.title"
            :description="value.description"
          />
        </UiBentoGrid>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="py-20 md:py-32">
      <div class="container mx-auto px-4">
        <UiSectionHeading
          title="Perjalanan Kami"
          subtitle="Melihat kembali milestone dan pencapaian KAMABA DEV"
          badge="📅 Timeline"
          size="md"
        />

        <div class="mx-auto max-w-4xl">
          <div class="relative">
            <!-- Timeline line -->
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />

            <!-- Timeline items -->
            <div class="space-y-12">
              <div
                v-for="(item, idx) in timeline"
                :key="idx"
                class="relative"
                :class="idx % 2 === 0 ? 'md:text-right' : 'md:text-left'"
              >
                <div
                  class="flex gap-6 md:gap-12"
                  :class="idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'"
                >
                  <!-- Content -->
                  <div class="flex-1 pl-16 md:pl-0">
                    <div class="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                      <div class="mb-2 flex items-center gap-2" :class="idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'">
                        <span class="text-2xl">{{ item.icon }}</span>
                        <span class="text-sm font-semibold text-primary">{{ item.year }}</span>
                      </div>
                      <h3 class="mb-2 text-xl font-bold text-foreground">{{ item.title }}</h3>
                      <p class="text-sm text-muted-foreground">{{ item.description }}</p>
                    </div>
                  </div>

                  <!-- Dot -->
                  <div class="absolute left-8 flex h-4 w-4 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                    <div class="h-4 w-4 rounded-full border-4 border-background bg-primary" />
                  </div>

                  <!-- Spacer -->
                  <div class="hidden flex-1 md:block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Structure Section -->
    <section class="bg-muted/30 py-20 md:py-32">
      <div class="container mx-auto px-4">
        <UiSectionHeading
          title="Tim Kami"
          subtitle="Struktur tim yang solid dengan spesialisasi di berbagai bidang teknologi"
          badge="👥 Team Structure"
          size="md"
        />

        <UiBentoGrid :columns="3" class="mx-auto max-w-6xl">
          <UiTeamCard
            v-for="(member, idx) in team"
            :key="idx"
            :name="member.name"
            :role="member.role"
            :bio="member.bio"
            :skills="member.skills"
          />
        </UiBentoGrid>
      </div>
    </section>

    <!-- Philosophy Section -->
    <section class="py-20 md:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl">
          <div class="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-blue-500/5 to-transparent p-12 text-center md:p-16">
            <div class="mb-8 text-6xl">🌟</div>
            <h2 class="mb-6 text-3xl font-bold text-foreground md:text-4xl">Filosofi Kami</h2>
            <blockquote class="mb-8 text-xl italic text-muted-foreground md:text-2xl">
              "Teknologi bukan hanya tentang kode, tapi tentang dampak dan manfaat nyata untuk masyarakat."
            </blockquote>
            <p class="text-lg text-muted-foreground">
              Kami percaya bahwa setiap baris kode yang ditulis memiliki potensi untuk membuat perbedaan. Dengan kombinasi skill teknis, kreativitas, dan empati terhadap pengguna, kami berusaha menciptakan solusi yang tidak hanya berfungsi dengan baik, tetapi juga memberikan nilai tambah yang signifikan.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 md:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl text-center">
          <h2 class="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Tertarik Bergabung?
          </h2>
          <p class="mb-8 text-lg text-muted-foreground">
            Kami selalu terbuka untuk anggota baru yang bersemangat belajar dan berkontribusi
          </p>
          <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <UButton size="xl" color="primary" to="/contact">
              Hubungi Kami
            </UButton>
            <UButton size="xl" variant="outline" to="/home">
              Kembali ke Home
            </UButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Additional styles if needed */
</style>
