<script lang="ts" setup>
import type {  
  Feature,
  Advantage,
  Member,
  Testimonial,
  FaqItem,
} from '~/types'

// ============================================
// Composables
// ============================================
const { t } = useI18n()

// ============================================
// SEO Meta
// ============================================
useSeoMeta({
  title: t('NataKarsa - Berkarya dengan Teknologi'),
  description: t('Komunitas pengembang digital yang berfokus pada pengembangan teknologi modern untuk kebutuhan pendidikan, organisasi, dan masyarakat.'),
})

// ============================================
// Animation Configurations
// ============================================
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }
}

const fadeInUpDelayed = (delay: number = 100) => ({
  initial: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 700, ease: 'easeOut', delay } }
})

const fadeInScale = {
  initial: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 600, ease: 'easeOut', delay: 100 } }
}

const fadeInScaleUp = {
  initial: { opacity: 0, scale: 0.95, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 600, ease: 'easeOut', delay: 100 } }
}

// ============================================
// Hero Section Data
// ============================================

// ============================================
// Focus Areas Data
// ============================================
const focusAreas = computed<Feature[]>(() => [
  {
    icon: 'i-lucide-globe',
    title: t('Website Development'),
    description: t('Membangun website modern, responsif, dan user-friendly untuk berbagai kebutuhan bisnis dan organisasi.'),
    tags: t('Vue.js, Nuxt, React, Next.js')
  },
  {
    icon: 'i-lucide-smartphone',
    title: t('Mobile Development'),
    description: t('Mengembangkan aplikasi mobile native dan cross-platform yang powerful dan intuitif.'),
    tags: t('React Native, Flutter, Ionic')
  },
  {
    icon: 'i-lucide-graduation-cap',
    title: t('E-Learning Solutions'),
    description: t('Platform pembelajaran digital yang interaktif untuk meningkatkan pengalaman belajar mengajar.'),
    tags: t('LMS, Interactive Content, Gamification')
  },
  {
    icon: 'i-lucide-users',
    title: t('Collaborative Tools'),
    description: t('Sistem manajemen dan kolaborasi untuk meningkatkan produktivitas tim dan organisasi.'),
    tags: t('Project Management, Communication, Automation')
  }
])

// ============================================
// Advantages Data
// ============================================
const advantages = computed<Advantage[]>(() => [
  {
    title: t('Modern & Up-to-date'),
    description: t('Menggunakan teknologi terkini dan best practices dalam setiap proyek yang kami kerjakan.'),
    icon: 'i-lucide-sparkles',
    size: 'large'
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
    size: 'wide'
  }
])

// ============================================
// Community Members Data
// ============================================
const communityMembers = computed<Member[]>(() => [
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

// ============================================
// Team Members Data
// ============================================
const teamMembers = computed(() => [
  {
    id: 1,
    name: 'Ilham Kurniawan',
    role: t('Founder & Lead Developer'),
    profileImage: '/team/ilham-profile.png',
    revealImage: '/team/ilham-reveal.png',
    socials: {
      github: 'https://github.com/ilhamkurniawan',
      linkedin: 'https://linkedin.com/in/ilhamkurniawan',
      instagram: 'https://instagram.com/ilhamkurniawan'
    }
  },
  {
    id: 2,
    name: 'Mohamad Khairul Anam',
    role: t('Full Stack Developer'),
    profileImage: '/team/khairul-profile.png',
    revealImage: '/team/khairul-reveal.png',
    socials: {
      github: 'https://github.com/asixnam',
      linkedin: 'https://linkedin.com/in/asixnam'
    }
  },
  {
    id: 3,
    name: 'Muhammad Irham Zubaidi',
    role: t('UI/UX Designer'),
    profileImage: '/team/irham-profile.png',
    revealImage: '/team/irham-reveal.png',
    socials: {
      instagram: 'https://instagram.com/muhammadirham',
      linkedin: 'https://linkedin.com/in/muhammadirham'
    }
  },
  {
    id: 4,
    name: 'Asyifa Nur Sholihah',
    role: t('Project Manager'),
    profileImage: '/team/asyifa-profile.png',
    revealImage: '/team/asyifa-reveal.png',
    socials: {
      linkedin: 'https://linkedin.com/in/asyifanursholihah',
      instagram: 'https://instagram.com/asyifanursholihah'
    }
  },
  {
    id: 5,
    name: 'Agus Prastyo',
    role: t('Backend Developer'),
    profileImage: '/team/prasetyo-profile.jpeg',
    revealImage: '/team/prasetyo-reveal.jpeg',
    socials: {
      github: 'https://github.com/agusp1257',
      linkedin: 'https://linkedin.com/in/prasetyobambang'
    }
  },
  {
    id: 5,
    name: 'Rajwa Khoirunisa Septiamalia',
    role: t('Backend Developer'),
    profileImage: '/team/prasetyo-profile.png',
    revealImage: '/team/prasetyo-reveal.png',
    socials: {
      github: 'https://github.com/agusp1257',
      linkedin: 'https://linkedin.com/in/prasetyobambang'
    }
  }
])

// ============================================
// Testimonials Data
// ============================================
const testimonials = computed<Testimonial[]>(() => [
  {
    id: 1,
    quote: t('NataKarsa memberikan kinerja terbaiknya dalam membuat Website! Sangat profesional dan hasil memuaskan.'),
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

// ============================================
// FAQ Data
// ============================================
const faqItems = computed<FaqItem[]>(() => [
  {
    question: t('Apa itu NataKarsa?'),
    answer: t('NataKarsa adalah komunitas pengembang digital yang berfokus pada pengembangan teknologi modern untuk kebutuhan pendidikan, organisasi, dan masyarakat. Kami berkomitmen pada prinsip open source dan kolaborasi.'),
    icon: 'i-lucide-info',
    link: {
      text: t('Pelajari lebih lanjut'),
      url: '/home#about'
    }
  },
  {
    question: t('Bagaimana cara bergabung dengan NataKarsa?'),
    answer: t('Anda dapat bergabung dengan menghubungi kami melalui halaman kontak atau mengikuti akun media sosial kami. Kami terbuka untuk semua orang yang memiliki passion di bidang teknologi, baik mahasiswa aktif, alumni, maupun profesional.'),
    icon: 'i-lucide-user-plus'
  },
  {
    question: t('Apakah layanan NataKarsa berbayar?'),
    answer: t('Untuk proyek komunitas dan edukasi, sebagian besar layanan kami gratis dan open source. Untuk proyek komersial atau kebutuhan khusus, kami menawarkan paket layanan dengan harga yang kompetitif. Hubungi kami untuk informasi lebih lanjut.'),
    icon: 'i-lucide-dollar-sign'
  },
  {
    question: t('Teknologi apa saja yang digunakan NataKarsa?'),
    answer: t('Kami menggunakan teknologi modern seperti Vue.js, Nuxt, React, Next.js untuk web development. Untuk mobile, kami menggunakan React Native dan Flutter. Kami juga berpengalaman dengan berbagai backend teknologi dan cloud services.'),
    icon: 'i-lucide-code-2',
    link: {
      text: t('Lihat portofolio kami'),
      url: '/portofolio'
    }
  },
  {
    question: t('Berapa lama waktu pengerjaan proyek?'),
    answer: t('Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Proyek sederhana bisa selesai dalam 2-4 minggu, sedangkan proyek yang lebih kompleks bisa memakan waktu 2-6 bulan. Kami akan memberikan estimasi waktu yang akurat setelah diskusi kebutuhan.'),
    icon: 'i-lucide-clock'
  },
  {
    question: t('Apakah NataKarsa menerima kontribusi open source?'),
    answer: t('Tentu! Kami sangat terbuka untuk kontribusi dari siapa saja. Semua proyek open source kami tersedia di GitHub dan kami menyambut pull request, bug reports, dan saran dari komunitas.'),
    icon: 'i-lucide-heart',
    link: {
      text: t('Kunjungi GitHub kami'),
      url: 'https://github.com/NataKarsa'
    }
  }
])

// ============================================
// Event Handlers
// ============================================
const handleContactClick = () => navigateTo('/home#contact')
const handleLearnMoreClick = () => navigateTo('/home#about')
const handlePortfolioClick = () => navigateTo('/portofolio')
const handleCollaborateClick = () => navigateTo('/home#contact')
</script>

<template>
  <div class="w-full">
    <!-- Hero Section -->
    <UiHeroSection
      id="hero"
      v-motion
      :initial="fadeInUp.initial"
      :visible="fadeInUp.visible"
      :title="$t('Membentuk masa depan melalui teknologi')"
      :subtitle="$t('Komunitas pengembang digital yang berfokus pada pengembangan teknologi modern untuk kebutuhan pendidikan, organisasi, dan masyarakat.')"
      :badge="$t('Terbuka untuk pekerjaan')"
      :primary-button="$t('Portofolio')"
      :secondary-button="$t('Mari Berkolaborasi!')"
      image="/hero-illustration.png"
      class="font-['Baumans']"
      @primary-action="handlePortfolioClick"
      @secondary-action="handleCollaborateClick"
    />

    <!-- Partners Logo Carousel -->
    <UiInfiniteLogoCarousel
      id="partners"
      v-motion
      :initial="fadeInUpDelayed(100).initial"
      :visible="fadeInUpDelayed(100).visible"
      :title="$t('Mitra Kami')"
      :badge="$t('Dipercaya Oleh')"
      :speed="25"
      :pause-on-hover="true"
    />

    <!-- About Section -->
    <UiAboutSection
      id="about"
      v-motion
      :initial="fadeInUpDelayed(150).initial"
      :visible="fadeInUpDelayed(150).visible"
      :title="$t('Tentang NataKarsa')"
      :subtitle="$t('NataKarsa dimulai dari visi sederhana: menciptakan ekosistem teknologi yang inklusif dan berdampak positif bagi masyarakat. Kami percaya bahwa teknologi harus mudah diakses, transparan, dan memberdayakan.')"
      :cta-text="$t('Lihat Karya Kami')"
      :services-title="$t('Apa Yang Kami Lakukan')"
    />

    <!-- Focus Areas Section -->
    <UiFocusAreasSection
      id="focus-areas"
      v-motion
      :initial="fadeInUpDelayed(100).initial"
      :visible="fadeInUpDelayed(100).visible"
      :title="$t('Area Fokus Kami')"
      :subtitle="$t('Kami mengkhususkan diri dalam berbagai bidang teknologi untuk memberikan solusi terbaik')"
      :badge="$t('Keahlian')"
      :features="focusAreas"
    />

    <!-- Why Us Section -->
    <UiWhyUsSection
      id="why-us"
      v-motion
      :initial="fadeInUpDelayed(100).initial"
      :visible="fadeInUpDelayed(100).visible"
      :title="$t('Mengapa Memilih NataKarsa?')"
      :badge="$t('Keunggulan Kami')"
      :quote="$t('Teknologi terbaik adalah yang membuat hidup lebih mudah, bukan lebih rumit.')"
      :advantages="advantages"
    />

    <!-- Community Section -->
    <UiCommunitySection
      id="community"
      v-motion
      :initial="fadeInScale.initial"
      :visible="fadeInScale.visible"
      :title="$t('Siapa Saja yang Ada di NataKarsa?')"
      :subtitle="$t('Komunitas kami terdiri dari berbagai latar belakang yang bekerja sama untuk tujuan yang sama')"
      :badge="$t('Komunitas')"
      :members="communityMembers"
      :closing-text1="$t('Bersama-sama, kita membangun')"
      :closing-highlight="$t('masa depan teknologi yang lebih baik')"
    />

    <!-- Team Section -->
    <UiTeamSection
      id="team"
      v-motion
      :initial="fadeInUpDelayed(100).initial"
      :visible="fadeInUpDelayed(100).visible"
      :title="$t('Meet Our Team')"
      :subtitle="$t('Tim yang berdedikasi untuk menciptakan solusi teknologi terbaik')"
      :badge="$t('Tim Kami')"
      :members="teamMembers"
      :speed="35"
      :pause-on-hover="true"
    />

    <!-- Testimonial Section -->
    <UiTestimonialSection
      id="testimonials"
      v-motion
      :initial="fadeInUpDelayed(100).initial"
      :visible="fadeInUpDelayed(100).visible"
      :title="$t('Apa Kata Klien Kami')"
      :subtitle="$t('Dengarkan pengalaman mereka yang telah bekerja sama dengan kami')"
      :badge="$t('Testimoni')"
      :testimonials="testimonials"
      :autoplay="true"
      :autoplay-interval="5000"
    />

    <!-- FAQ Section -->
    <UiFaqSection
      id="faq"
      v-motion
      :initial="fadeInUpDelayed(100).initial"
      :visible="fadeInUpDelayed(100).visible"
      :title="$t('Pertanyaan yang Sering Diajukan')"
      :subtitle="$t('Temukan jawaban untuk pertanyaan umum tentang NataKarsa dan layanan kami')"
      :badge="$t('FAQ')"
      :items="faqItems"
      :show-cta="true"
      :cta-text="$t('Tidak menemukan jawaban yang Anda cari?')"
      :cta-button-text="$t('Hubungi Kami')"
      @cta-click="handleContactClick"
    />

    <!-- CTA Section -->
    <UiCtaSection
      id="contact"
      v-motion
      :initial="fadeInScaleUp.initial"
      :visible="fadeInScaleUp.visible"
      :title="$t('Tertarik dengan Hasil Karya Kami?')"
      :description="$t('Mari diskusikan proyek Anda bersama kami. Kami siap membantu mewujudkan ide-ide inovatif Anda.')"
      :badge="$t('Mari Berkolaborasi')"
      badge-icon="i-lucide-sparkles"
      :primary-button-text="$t('Hubungi Kami')"
      primary-icon="i-lucide-message-circle"
      :secondary-button-text="$t('Pelajari Lebih Lanjut')"
      secondary-icon="i-lucide-arrow-right"
      :show-trust-indicators="true"
      :trust-text1="$t('Konsultasi Gratis')"
      :trust-text2="$t('Respon Cepat')"
      :trust-text3="$t('Harga Kompetitif')"
      @primary-click="handleContactClick"
      @secondary-click="handleLearnMoreClick"
    />
  </div>
</template>