<script lang="ts" setup>
definePageMeta({
  layout: "default",
  title: "Layanan KAMABA DEV - Solusi Digital Profesional",
  description: "Jelajahi berbagai layanan teknologi yang kami tawarkan, dari pembuatan website, aplikasi mobile, hingga workshop dan konsultasi.",
});

const services = [
  {
    id: 'web-development',
    emoji: '💻',
    title: 'Website Development',
    description: 'Pembuatan website profesional yang responsive, modern, dan sesuai kebutuhan bisnis atau organisasi Anda.',
    features: [
      'Company Profile',
      'Landing Page',
      'E-Commerce',
      'Blog & CMS',
      'Portal Informasi',
      'Admin Dashboard'
    ],
    technologies: ['Vue.js', 'Nuxt', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    deliverables: [
      'Responsive design untuk semua perangkat',
      'SEO optimization',
      'Fast loading performance',
      'Modern UI/UX',
      'Content Management System',
      'Documentation lengkap'
    ]
  },
  {
    id: 'mobile-app',
    emoji: '📱',
    title: 'Mobile App Development',
    description: 'Aplikasi mobile native dan cross-platform yang powerful, user-friendly, dan dapat diakses di iOS dan Android.',
    features: [
      'Cross-platform Apps',
      'Progressive Web Apps (PWA)',
      'Native Development',
      'App Store Deployment',
      'Push Notifications',
      'Offline Functionality'
    ],
    technologies: ['React Native', 'Flutter', 'Expo', 'Firebase', 'REST API'],
    deliverables: [
      'Aplikasi iOS & Android',
      'Backend integration',
      'Real-time features',
      'Secure authentication',
      'Analytics integration',
      'Maintenance support'
    ]
  },
  {
    id: 'web-app',
    emoji: '🌐',
    title: 'Web Application',
    description: 'Sistem informasi dan aplikasi web kompleks yang scalable untuk berbagai kebutuhan bisnis dan organisasi.',
    features: [
      'SaaS Platform',
      'Custom CRM/ERP',
      'Booking System',
      'Learning Management System',
      'Inventory Management',
      'Project Management Tools'
    ],
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'],
    deliverables: [
      'Scalable architecture',
      'Database design',
      'API development',
      'User management',
      'Role-based access control',
      'Cloud deployment'
    ]
  },
  {
    id: 'ui-ux',
    emoji: '🎨',
    title: 'UI/UX Design',
    description: 'Desain antarmuka yang indah dan pengalaman pengguna yang intuitif untuk website dan aplikasi Anda.',
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Visual Design',
      'Design System',
      'Usability Testing'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro'],
    deliverables: [
      'Design mockups',
      'Interactive prototypes',
      'Design system documentation',
      'Style guide',
      'Assets & icons',
      'Developer handoff'
    ]
  },
  {
    id: 'workshop',
    emoji: '🧠',
    title: 'Workshop & Training',
    description: 'Program pelatihan dan workshop teknologi untuk meningkatkan skill tim atau komunitas Anda.',
    features: [
      'Web Development Bootcamp',
      'Mobile Development Course',
      'UI/UX Workshop',
      'Git & Collaboration',
      'Database Design',
      'Custom Training'
    ],
    technologies: ['Practical Projects', 'Live Coding', 'Mentoring', 'Learning Materials'],
    deliverables: [
      'Comprehensive curriculum',
      'Hands-on projects',
      'Learning materials',
      'Certificate of completion',
      'Mentoring session',
      'Community support'
    ]
  },
  {
    id: 'consulting',
    emoji: '💡',
    title: 'Technology Consulting',
    description: 'Konsultasi teknologi untuk membantu organisasi Anda membuat keputusan digital yang tepat.',
    features: [
      'Digital Transformation',
      'Tech Stack Selection',
      'Architecture Review',
      'Performance Optimization',
      'Security Audit',
      'Best Practices'
    ],
    technologies: ['Strategy', 'Analysis', 'Documentation', 'Recommendations'],
    deliverables: [
      'Technical assessment',
      'Roadmap development',
      'Technology recommendations',
      'Architecture documentation',
      'Implementation plan',
      'Ongoing support'
    ]
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'Kami mulai dengan memahami kebutuhan, goals, dan challenge Anda secara mendalam.',
    icon: '🔍'
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description: 'Merancang solusi dan membuat prototype untuk validasi konsep sebelum development.',
    icon: '✏️'
  },
  {
    number: '03',
    title: 'Development',
    description: 'Implementasi dengan code quality tinggi, best practices, dan regular updates.',
    icon: '⚙️'
  },
  {
    number: '04',
    title: 'Testing & QA',
    description: 'Pengujian menyeluruh untuk memastikan produk berfungsi sempurna di semua skenario.',
    icon: '🧪'
  },
  {
    number: '05',
    title: 'Deployment',
    description: 'Launch produk dengan strategi deployment yang aman dan monitoring yang ketat.',
    icon: '🚀'
  },
  {
    number: '06',
    title: 'Support & Maintenance',
    description: 'Dukungan berkelanjutan untuk memastikan sistem berjalan optimal jangka panjang.',
    icon: '🛠️'
  }
];

const whyChooseUs = [
  {
    title: 'Experienced Team',
    description: 'Tim developer berpengalaman dengan portfolio proyek yang beragam',
    icon: '👥'
  },
  {
    title: 'Modern Tech Stack',
    description: 'Menggunakan teknologi terkini dan best practices industry',
    icon: '⚡'
  },
  {
    title: 'Agile Development',
    description: 'Metodologi agile untuk fleksibilitas dan iterasi cepat',
    icon: '🔄'
  },
  {
    title: 'Quality Assurance',
    description: 'Testing comprehensive dan code review yang ketat',
    icon: '✅'
  },
  {
    title: 'Transparent Communication',
    description: 'Update regular dan komunikasi yang jelas sepanjang proyek',
    icon: '💬'
  },
  {
    title: 'Competitive Pricing',
    description: 'Harga yang reasonable dengan kualitas profesional',
    icon: '💰'
  }
];

const router = useRouter();

const navigateToContact = () => {
  router.push('/contact');
};
</script>

<template>
  <div class="min-h-screen">
    <AppFloatingNavbar />
    
    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-32 pb-20">
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div class="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div class="container relative mx-auto px-4">
        <div class="mx-auto max-w-4xl text-center">
          <div class="mb-6 inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-sm">
            <span class="text-muted-foreground">🎯 Layanan Kami</span>
          </div>

          <h1 class="mb-6 text-4xl font-bold text-foreground md:text-6xl lg:text-7xl">
            Solusi Digital untuk
            <span class="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Setiap Kebutuhan</span>
          </h1>

          <p class="mb-8 text-lg text-muted-foreground md:text-xl">
            Dari website profesional hingga aplikasi mobile yang powerful, kami menyediakan layanan teknologi lengkap dengan kualitas terbaik.
          </p>

          <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <UButton size="xl" color="primary" @click="navigateToContact">
              Konsultasi Gratis
            </UButton>
            <UButton size="xl" variant="outline" to="/home">
              Lihat Portfolio
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20 md:py-32">
      <div class="container mx-auto px-4">
        <UiSectionHeading
          title="Layanan yang Kami Tawarkan"
          subtitle="Pilihan lengkap untuk kebutuhan digital Anda"
          size="md"
        />

        <div class="mx-auto max-w-7xl space-y-12">
          <div
            v-for="(service, idx) in services"
            :key="service.id"
            class="group rounded-3xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-2xl"
          >
            <div class="grid gap-8 p-8 md:grid-cols-2 md:p-12">
              <!-- Left: Info -->
              <div>
                <div class="mb-4 text-6xl">{{ service.emoji }}</div>
                <h3 class="mb-4 text-3xl font-bold text-foreground">{{ service.title }}</h3>
                <p class="mb-6 text-lg text-muted-foreground">{{ service.description }}</p>

                <div class="mb-6">
                  <h4 class="mb-3 font-semibold text-foreground">✨ Fitur Utama:</h4>
                  <div class="grid gap-2 sm:grid-cols-2">
                    <div
                      v-for="(feature, fIdx) in service.features"
                      :key="fIdx"
                      class="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div class="h-1.5 w-1.5 rounded-full bg-primary" />
                      {{ feature }}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 class="mb-3 font-semibold text-foreground">🛠️ Teknologi:</h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="(tech, tIdx) in service.technologies"
                      :key="tIdx"
                      class="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Right: Deliverables -->
              <div class="flex flex-col justify-center">
                <div class="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-transparent p-6">
                  <h4 class="mb-4 text-lg font-semibold text-foreground">📦 Yang Anda Dapatkan:</h4>
                  <div class="space-y-3">
                    <div
                      v-for="(deliverable, dIdx) in service.deliverables"
                      :key="dIdx"
                      class="flex items-start gap-3"
                    >
                      <div class="mt-1 flex-shrink-0 text-primary">✓</div>
                      <span class="text-sm text-muted-foreground">{{ deliverable }}</span>
                    </div>
                  </div>
                  <div class="mt-6">
                    <UButton
                      size="md"
                      color="primary"
                      variant="outline"
                      class="w-full"
                      @click="navigateToContact"
                    >
                      Diskusi Proyek
                    </UButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="bg-muted/30 py-20 md:py-32">
      <div class="container mx-auto px-4">
        <UiSectionHeading
          title="Proses Kerja Kami"
          subtitle="Metodologi yang terstruktur untuk hasil yang maksimal"
          badge="🔄 Our Process"
          size="md"
        />

        <div class="mx-auto max-w-6xl">
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="(step, idx) in processSteps"
              :key="idx"
              class="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <!-- Number badge -->
              <div class="absolute -right-3 -top-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                {{ step.number }}
              </div>

              <div class="mb-4 text-4xl">{{ step.icon }}</div>
              <h3 class="mb-3 text-xl font-semibold text-foreground">{{ step.title }}</h3>
              <p class="text-sm text-muted-foreground leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 md:py-32">
      <div class="container mx-auto px-4">
        <UiSectionHeading
          title="Mengapa Memilih KAMABA DEV?"
          subtitle="Keunggulan yang membedakan kami dari yang lain"
          badge="⭐ Our Advantages"
          size="md"
        />

        <UiBentoGrid :columns="3" class="mx-auto max-w-6xl">
          <UiFeatureCard
            v-for="(advantage, idx) in whyChooseUs"
            :key="idx"
            :emoji="advantage.icon"
            :title="advantage.title"
            :description="advantage.description"
          />
        </UiBentoGrid>
      </div>
    </section>

    <!-- Pricing Info Section -->
    <section class="bg-muted/30 py-20 md:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl">
          <div class="rounded-3xl border border-border bg-card p-12 text-center">
            <div class="mb-6 text-6xl">💰</div>
            <h2 class="mb-4 text-3xl font-bold text-foreground">Harga yang Fleksibel</h2>
            <p class="mb-8 text-lg text-muted-foreground">
              Kami memahami bahwa setiap proyek unik. Oleh karena itu, kami menawarkan skema harga yang fleksibel dan disesuaikan dengan kebutuhan serta budget Anda.
            </p>

            <div class="mb-8 grid gap-6 text-left md:grid-cols-3">
              <div class="rounded-xl border border-border bg-background p-6">
                <h3 class="mb-2 font-semibold text-foreground">🎓 Pendidikan</h3>
                <p class="text-sm text-muted-foreground">Harga khusus untuk institusi pendidikan dan mahasiswa</p>
              </div>
              <div class="rounded-xl border border-border bg-background p-6">
                <h3 class="mb-2 font-semibold text-foreground">🤝 Komunitas</h3>
                <p class="text-sm text-muted-foreground">Tarif friendly untuk organisasi dan komunitas non-profit</p>
              </div>
              <div class="rounded-xl border border-border bg-background p-6">
                <h3 class="mb-2 font-semibold text-foreground">🏢 Enterprise</h3>
                <p class="text-sm text-muted-foreground">Solusi lengkap untuk kebutuhan bisnis skala besar</p>
              </div>
            </div>

            <UButton size="xl" color="primary" @click="navigateToContact">
              Dapatkan Penawaran
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 md:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl">
          <div class="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-blue-500/5 to-transparent p-12 text-center md:p-16">
            <div
              class="pointer-events-none absolute inset-0 opacity-10"
              style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 20px 20px;"
            />

            <div class="relative">
              <h2 class="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Siap Memulai Proyek Anda?
              </h2>
              <p class="mb-8 text-lg text-muted-foreground">
                Mari diskusikan bagaimana kami dapat membantu mewujudkan visi digital Anda menjadi kenyataan.
              </p>

              <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <UButton size="xl" color="primary" @click="navigateToContact">
                  Mulai Konsultasi
                </UButton>
                <UButton size="xl" variant="outline" to="/about">
                  Tentang Kami
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
/* Additional styles if needed */
</style>
