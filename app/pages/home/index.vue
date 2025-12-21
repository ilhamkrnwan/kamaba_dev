<script lang="ts" setup>
const { t } = useI18n()

useSeoMeta({
  title: t('QINARYAN - Berkarya dengan Teknologi'),
  description: t('Komunitas pengembang digital yang berfokus pada pengembangan teknologi modern untuk kebutuhan pendidikan, organisasi, dan masyarakat.'),
})

// Hero Stats
const heroStats = computed(() => [
  {
    value: t('20+'),
    label: t('Proyek'),
    description: t('Proyek yang telah diselesaikan')
  },
  {
    value: t('50+'),
    label: t('Anggota'),
    description: t('Anggota aktif komunitas')
  },
  {
    value: t('100%'),
    label: t('Open Source'),
    description: t('Semua proyek open source')
  }
])

// Focus Areas
const focusAreas = computed(() => [
  {
    icon: 'i-lucide-globe',
    title: t('Website Development'),
    description: t('Membangun website modern, responsif, dan user-friendly untuk berbagai kebutuhan bisnis dan organisasi.'),
    tags: 'Vue.js, Nuxt, React, Next.js'
  },
  {
    icon: 'i-lucide-smartphone',
    title: t('Mobile Development'),
    description: t('Mengembangkan aplikasi mobile native dan cross-platform yang powerful dan intuitif.'),
    tags: 'React Native, Flutter, Ionic'
  },
  {
    icon: 'i-lucide-graduation-cap',
    title: t('E-Learning Solutions'),
    description: t('Platform pembelajaran digital yang interaktif untuk meningkatkan pengalaman belajar mengajar.'),
    tags: 'LMS, Interactive Content, Gamification'
  },
  {
    icon: 'i-lucide-users',
    title: t('Collaborative Tools'),
    description: t('Sistem manajemen dan kolaborasi untuk meningkatkan produktivitas tim dan organisasi.'),
    tags: 'Project Management, Communication, Automation'
  }
])

// Why Us Advantages
const advantages = computed(() => [
  {
    title: t('Modern & Up-to-date'),
    description: t('Menggunakan teknologi terkini dan best practices dalam setiap proyek yang kami kerjakan.'),
    icon: 'i-lucide-sparkles',
    size: 'large' as const
  },
  {
    title: t('Open Source'),
    description: t('Komitmen pada transparansi dan berbagi pengetahuan melalui kontribusi open source.'),
    icon: 'i-lucide-code-2'
  },
  {
    title: t('Professional'),
    description: t('Standar profesional tinggi dengan dokumentasi lengkap dan kode berkualitas.'),
    icon: 'i-lucide-star'
  },
  {
    title: t('Kolaboratif'),
    description: t('Membangun dengan semangat kerja sama dan saling mendukung antar anggota.'),
    icon: 'i-lucide-hand-metal'
  },
  {
    title: t('Berkelanjutan'),
    description: t('Fokus pada solusi jangka panjang yang scalable dan mudah dimaintain.'),
    icon: 'i-lucide-trending-up',
    size: 'wide' as const
  }
])

// Community Members
const communityMembers = computed(() => [
  {
    icon: 'i-lucide-graduation-cap',
    title: t('Mahasiswa Aktif'),
    description: t('Mahasiswa yang ingin belajar dan mengembangkan skill teknologi sambil berkontribusi pada proyek nyata.')
  },
  {
    icon: 'i-lucide-briefcase',
    title: t('Alumni Profesional'),
    description: t('Alumni yang sudah bekerja di industri dan ingin berbagi pengalaman serta membimbing generasi selanjutnya.')
  },
  {
    icon: 'i-lucide-heart',
    title: t('Kontributor Open Source'),
    description: t('Developer yang passionate tentang open source dan ingin berkontribusi pada proyek-proyek bermakna.')
  },
  {
    icon: 'i-lucide-lightbulb',
    title: t('Mentor & Advisor'),
    description: t('Profesional berpengalaman yang memberikan bimbingan dan arahan strategis untuk perkembangan komunitas.')
  }
])

// Testimonials
const testimonials = computed(() => [
  {
    id: 1,
    quote: t('QINARYAN memberikan kinerja terbaiknya dalam membuat Website! Sangat profesional dan hasil memuaskan.'),
    name: 'Dhimas Sulistio',
    position: t('Web Developer'),
    rating: '20° FS',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dhimas'
  },
  {
    id: 2,
    quote: t('Pelayanan yang sangat profesional dan hasil yang memuaskan. Highly recommended untuk proyek digital!'),
    name: 'Sarah Johnson',
    position: t('Product Manager'),
    rating: '18° FS',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  },
  {
    id: 3,
    quote: t('Tim yang solid dan komunikatif. Proyek selesai tepat waktu dengan kualitas terbaik.'),
    name: 'Ahmad Rizki',
    position: t('CEO Startup'),
    rating: '19° FS',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad'
  }
])

// FAQ Items
const faqItems = computed(() => [
  {
    question: t('Apa itu QINARYAN?'),
    answer: t('QINARYAN adalah komunitas pengembang digital yang berfokus pada pengembangan teknologi modern untuk kebutuhan pendidikan, organisasi, dan masyarakat. Kami berkomitmen pada prinsip open source dan kolaborasi.'),
    icon: 'i-lucide-info',
    link: {
      text: t('Pelajari lebih lanjut'),
      url: '/about'
    }
  },
  {
    question: t('Bagaimana cara bergabung dengan QINARYAN?'),
    answer: t('Anda dapat bergabung dengan menghubungi kami melalui halaman kontak atau mengikuti akun media sosial kami. Kami terbuka untuk semua orang yang memiliki passion di bidang teknologi, baik mahasiswa aktif, alumni, maupun profesional.'),
    icon: 'i-lucide-user-plus'
  },
  {
    question: t('Apakah layanan QINARYAN berbayar?'),
    answer: t('Untuk proyek komunitas dan edukasi, sebagian besar layanan kami gratis dan open source. Untuk proyek komersial atau kebutuhan khusus, kami menawarkan paket layanan dengan harga yang kompetitif. Hubungi kami untuk informasi lebih lanjut.'),
    icon: 'i-lucide-dollar-sign'
  },
  {
    question: t('Teknologi apa saja yang digunakan QINARYAN?'),
    answer: t('Kami menggunakan teknologi modern seperti Vue.js, Nuxt, React, Next.js untuk web development. Untuk mobile, kami menggunakan React Native dan Flutter. Kami juga berpengalaman dengan berbagai backend teknologi dan cloud services.'),
    icon: 'i-lucide-code-2',
    link: {
      text: t('Lihat portofolio kami'),
      url: '/portfolio'
    }
  },
  {
    question: t('Berapa lama waktu pengerjaan proyek?'),
    answer: t('Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Proyek sederhana bisa selesai dalam 2-4 minggu, sedangkan proyek yang lebih kompleks bisa memakan waktu 2-6 bulan. Kami akan memberikan estimasi waktu yang akurat setelah diskusi kebutuhan.'),
    icon: 'i-lucide-clock'
  },
  {
    question: t('Apakah QINARYAN menerima kontribusi open source?'),
    answer: t('Tentu! Kami sangat terbuka untuk kontribusi dari siapa saja. Semua proyek open source kami tersedia di GitHub dan kami menyambut pull request, bug reports, dan saran dari komunitas.'),
    icon: 'i-lucide-heart',
    link: {
      text: t('Kunjungi GitHub kami'),
      url: 'https://github.com/qinaryan'
    }
  }
])
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <UiHeroSection
      v-motion
      :initial="{ opacity: 0, y: -50 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
      :title="$t('QINARYAN')"
      :subtitle="$t('Komunitas pengembang digital yang berfokus pada pengembangan teknologi modern untuk kebutuhan pendidikan, organisasi, dan masyarakat.')"
      :badge="$t('Terbuka untuk pekerjaan')"
      :primary-button="$t('Portofolio')"
      :secondary-button="$t('Mari Berkolaborasi!')"
      :stats="heroStats"
      class="font-['Baumans']"
      @primary-action="navigateTo('/portfolio')"
      @secondary-action="navigateTo('/#contact')"
    />

    <!-- About Section -->
    <UiAboutSection
      v-motion
      :initial="{ opacity: 0, y: 80 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 700, ease: 'easeOut', delay: 100 } }"
      :title="$t('Tentang QINARYAN')"
      :subtitle="$t('Kami adalah komunitas pengembang digital yang berkomitmen untuk menciptakan solusi teknologi inovatif dan berkelanjutan bagi pendidikan, organisasi, dan masyarakat luas.')"
      :badge="$t('Siapa Kami')"
      :intro-text1="$t('QINARYAN dimulai dari')"
      :highlight-text1="$t('visi sederhana')"
      :intro-text2="$t(': menciptakan ekosistem teknologi yang inklusif dan berdampak positif bagi masyarakat.')"
      :belief-text1="$t('Kami percaya bahwa')"
      :highlight-text2="$t('teknologi harus mudah diakses, transparan, dan memberdayakan')"
      :belief-text2="$t(', bukan memperumit.')"
    />

    <!-- Focus Areas Section -->
    <UiFocusAreasSection
      v-motion
      :initial="{ opacity: 0, x: -100 }"
      :visible="{ opacity: 1, x: 0, transition: { duration: 700, ease: 'easeOut', delay: 100 } }"
      :title="$t('Area Fokus Kami')"
      :subtitle="$t('Kami mengkhususkan diri dalam berbagai bidang teknologi untuk memberikan solusi terbaik')"
      :badge="$t('Keahlian')"
      :features="focusAreas"
    />

    <!-- Why Us Section -->
    <UiWhyUsSection
      v-motion
      :initial="{ opacity: 0, x: 100 }"
      :visible="{ opacity: 1, x: 0, transition: { duration: 700, ease: 'easeOut', delay: 100 } }"
      :title="$t('Mengapa Memilih QINARYAN?')"
      :badge="$t('Keunggulan Kami')"
      :quote="$t('Teknologi terbaik adalah yang membuat hidup lebih mudah, bukan lebih rumit.')"
      :advantages="advantages"
    />

    <!-- Community Section -->
    <UiCommunitySection
      v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :visible="{ opacity: 1, scale: 1, transition: { duration: 600, ease: 'easeOut', delay: 100 } }"
      :title="$t('Siapa Saja yang Ada di QINARYAN?')"
      :subtitle="$t('Komunitas kami terdiri dari berbagai latar belakang yang bekerja sama untuk tujuan yang sama')"
      :badge="$t('Komunitas')"
      :members="communityMembers"
      :closing-text1="$t('Bersama-sama, kita membangun')"
      :closing-highlight="$t('masa depan teknologi yang lebih baik')"
    />

    <!-- Testimonial Section -->
    <UiTestimonialSection
      v-motion
      :initial="{ opacity: 0, y: 80 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 700, ease: 'easeOut', delay: 100 } }"
      :title="$t('Apa Kata Klien Kami')"
      :subtitle="$t('Dengarkan pengalaman mereka yang telah bekerja sama dengan kami')"
      :badge="$t('Testimoni')"
      :testimonials="testimonials"
      :autoplay="true"
      :autoplay-interval="5000"
    />

    <!-- FAQ Section -->
    <UiFaqSection
      v-motion
      :initial="{ opacity: 0, y: 80 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 700, ease: 'easeOut', delay: 100 } }"
      :title="$t('Pertanyaan yang Sering Diajukan')"
      :subtitle="$t('Temukan jawaban untuk pertanyaan umum tentang QINARYAN dan layanan kami')"
      :badge="$t('FAQ')"
      :items="faqItems"
      :show-cta="true"
      :cta-text="$t('Tidak menemukan jawaban yang Anda cari?')"
      :cta-button-text="$t('Hubungi Kami')"
      @cta-click="navigateTo('/#contact')"
    />

    <!-- CTA Section -->
    <UiCtaSection
      v-motion
      :initial="{ opacity: 0, scale: 0.95, y: 50 }"
      :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 600, ease: 'easeOut', delay: 100 } }"
      :title="$t('Siap Berkolaborasi?')"
      :description="$t('Mari bergabung dengan kami dan ciptakan solusi teknologi yang bermakna bersama-sama.')"
      :primary-button-text="$t('Hubungi Kami')"
      primary-icon="i-lucide-message-circle"
      :secondary-button-text="$t('Pelajari Lebih Lanjut')"
      secondary-icon="i-lucide-arrow-right"
      :show-trust-indicators="true"
      :trust-text1="$t('Aman & Terpercaya')"
      :trust-text2="$t('Respon Cepat')"
      :trust-text3="$t('Open Source')"
      @primary-click="navigateTo('/#contact')"
      @secondary-click="navigateTo('/about')"
    />
  </div>
</template>