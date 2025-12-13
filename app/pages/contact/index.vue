<script lang="ts" setup>
definePageMeta({
  layout: "default",
  title: "Hubungi KAMABA DEV - Mari Berkolaborasi",
  description: "Hubungi kami untuk kerja sama proyek, pengembangan sistem, atau diskusi tentang teknologi. Kami terbuka untuk berbagai bentuk kolaborasi.",
});

const form = ref({
  name: '',
  email: '',
  organization: '',
  projectType: '',
  message: ''
});

const isSubmitting = ref(false);
const submitMessage = ref('');
const submitType = ref<'success' | 'error'>('success');

const projectTypes = [
  'Website Development',
  'Mobile App Development',
  'Web Application',
  'UI/UX Design',
  'Consulting',
  'Workshop/Training',
  'Collaboration',
  'Other'
];

const contactInfo = [
  {
    icon: '📧',
    title: 'Email',
    value: 'hello@kamaba.dev',
    description: 'Kirim email untuk pertanyaan detail'
  },
  {
    icon: '💬',
    title: 'Discord',
    value: 'KAMABA DEV Server',
    description: 'Join komunitas kami untuk diskusi'
  },
  {
    icon: '🐙',
    title: 'GitHub',
    value: 'github.com/kamaba-dev',
    description: 'Lihat proyek open source kami'
  },
  {
    icon: '📱',
    title: 'WhatsApp',
    value: '+62 xxx xxxx xxxx',
    description: 'Hubungi untuk kolaborasi cepat'
  }
];

const collaborationTypes = [
  {
    emoji: '🤝',
    title: 'Kerja Sama Proyek',
    description: 'Kembangkan website, aplikasi, atau sistem digital bersama kami'
  },
  {
    emoji: '🎓',
    title: 'Workshop & Training',
    description: 'Adakan pelatihan teknologi untuk organisasi atau komunitas Anda'
  },
  {
    emoji: '💡',
    title: 'Konsultasi Teknologi',
    description: 'Diskusikan kebutuhan digital dan solusi yang tepat'
  },
  {
    emoji: '🌟',
    title: 'Join Komunitas',
    description: 'Bergabung sebagai anggota dan berkontribusi dalam proyek'
  }
];

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitMessage.value = '';
  
  try {
    // Simulate form submission - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate successful submission
    submitType.value = 'success';
    submitMessage.value = 'Terima kasih telah menghubungi kami! Tim kami akan segera merespons dalam 1-2 hari kerja.';
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      organization: '',
      projectType: '',
      message: ''
    };
  } catch (error) {
    submitType.value = 'error';
    submitMessage.value = 'Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi kami melalui email.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="min-h-screen">
    <AppFloatingNavbar />
    
    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-32 pb-20">
      <!-- Background decoration -->
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div class="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div class="container relative mx-auto px-4">
        <div class="mx-auto max-w-4xl text-center">
          <div class="mb-6 inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-sm">
            <span class="text-muted-foreground">📬 Hubungi Kami</span>
          </div>

          <h1 class="mb-6 text-4xl font-bold text-foreground md:text-6xl lg:text-7xl">
            Mari Berkolaborasi untuk
            <span class="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Masa Depan Digital</span>
          </h1>

          <p class="mb-8 text-lg text-muted-foreground md:text-xl">
            Kami siap mendengarkan ide Anda dan membantu mewujudkannya menjadi solusi teknologi yang berdampak.
          </p>
        </div>
      </div>
    </section>

    <!-- Collaboration Types -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <UiSectionHeading
          title="Apa yang Bisa Kami Bantu?"
          subtitle="Berbagai bentuk kolaborasi yang kami tawarkan"
          size="md"
        />

        <UiBentoGrid :columns="2" class="mx-auto max-w-5xl">
          <div
            v-for="(type, idx) in collaborationTypes"
            :key="idx"
            class="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
          >
            <div class="mb-4 text-5xl">{{ type.emoji }}</div>
            <h3 class="mb-2 text-xl font-semibold text-foreground">{{ type.title }}</h3>
            <p class="text-muted-foreground">{{ type.description }}</p>
          </div>
        </UiBentoGrid>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="py-20 md:py-32">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-6xl">
          <div class="grid gap-12 lg:grid-cols-2">
            <!-- Contact Form -->
            <div>
              <div class="rounded-2xl border border-border bg-card p-8">
                <h2 class="mb-6 text-2xl font-bold text-foreground">
                  Kirim Pesan
                </h2>
                
                <form @submit.prevent="handleSubmit" class="space-y-6">
                  <div>
                    <label for="name" class="mb-2 block text-sm font-medium text-foreground">
                      Nama Lengkap *
                    </label>
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Nama Anda"
                    />
                  </div>
                  
                  <div>
                    <label for="email" class="mb-2 block text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label for="organization" class="mb-2 block text-sm font-medium text-foreground">
                      Organisasi/Perusahaan
                    </label>
                    <input
                      id="organization"
                      v-model="form.organization"
                      type="text"
                      class="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Nama organisasi (opsional)"
                    />
                  </div>

                  <div>
                    <label for="projectType" class="mb-2 block text-sm font-medium text-foreground">
                      Jenis Proyek *
                    </label>
                    <select
                      id="projectType"
                      v-model="form.projectType"
                      required
                      class="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="" disabled>Pilih jenis proyek</option>
                      <option v-for="type in projectTypes" :key="type" :value="type">
                        {{ type }}
                      </option>
                    </select>
                  </div>
                  
                  <div>
                    <label for="message" class="mb-2 block text-sm font-medium text-foreground">
                      Pesan *
                    </label>
                    <textarea
                      id="message"
                      v-model="form.message"
                      required
                      rows="5"
                      class="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Ceritakan tentang proyek atau kebutuhan Anda..."
                    />
                  </div>
                  
                  <UButton
                    type="submit"
                    size="lg"
                    color="primary"
                    :disabled="isSubmitting"
                    class="w-full"
                  >
                    {{ isSubmitting ? 'Mengirim...' : 'Kirim Pesan' }}
                  </UButton>
                  
                  <div
                    v-if="submitMessage"
                    :class="[
                      'rounded-lg p-4 text-sm',
                      submitType === 'success' ? 'bg-green-500/10 text-green-600 dark:text-green-400' : 'bg-red-500/10 text-red-600 dark:text-red-400'
                    ]"
                  >
                    {{ submitMessage }}
                  </div>
                </form>
              </div>
            </div>

            <!-- Contact Info -->
            <div class="space-y-6">
              <div>
                <h2 class="mb-6 text-2xl font-bold text-foreground">
                  Informasi Kontak
                </h2>
                <p class="mb-8 text-muted-foreground">
                  Pilih cara yang paling nyaman untuk menghubungi kami. Tim kami siap membantu Anda.
                </p>
              </div>

              <div class="space-y-4">
                <div
                  v-for="(info, idx) in contactInfo"
                  :key="idx"
                  class="group flex gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div class="flex-shrink-0 text-4xl">{{ info.icon }}</div>
                  <div>
                    <h3 class="mb-1 font-semibold text-foreground">{{ info.title }}</h3>
                    <p class="mb-2 text-sm font-medium text-primary">{{ info.value }}</p>
                    <p class="text-xs text-muted-foreground">{{ info.description }}</p>
                  </div>
                </div>
              </div>

              <!-- Additional Info -->
              <div class="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-transparent p-6">
                <h3 class="mb-3 font-semibold text-foreground">⏰ Waktu Respons</h3>
                <p class="text-sm text-muted-foreground">
                  Kami biasanya merespons dalam <span class="font-semibold text-foreground">1-2 hari kerja</span>. Untuk pertanyaan urgent, silakan hubungi via WhatsApp.
                </p>
              </div>

              <div class="rounded-2xl border border-border bg-gradient-to-br from-blue-500/5 to-transparent p-6">
                <h3 class="mb-3 font-semibold text-foreground">🎯 Office Hours</h3>
                <p class="text-sm text-muted-foreground">
                  <strong class="text-foreground">Senin - Jumat:</strong> 09:00 - 17:00 WIB<br>
                  <strong class="text-foreground">Sabtu:</strong> 09:00 - 14:00 WIB<br>
                  <strong class="text-foreground">Minggu:</strong> Tutup
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-muted/30 py-20 md:py-32">
      <div class="container mx-auto px-4">
        <UiSectionHeading
          title="Pertanyaan Umum"
          subtitle="Jawaban untuk pertanyaan yang sering ditanyakan"
          badge="❓ FAQ"
          size="md"
        />

        <div class="mx-auto max-w-3xl space-y-4">
          <details class="group rounded-xl border border-border bg-card">
            <summary class="flex cursor-pointer items-center justify-between p-6 font-semibold text-foreground">
              <span>Berapa biaya untuk mengembangkan website?</span>
              <svg class="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div class="px-6 pb-6 text-muted-foreground">
              <p>Biaya bervariasi tergantung kompleksitas proyek. Untuk proyek komunitas dan pendidikan, kami menawarkan harga khusus. Hubungi kami untuk diskusi lebih lanjut.</p>
            </div>
          </details>

          <details class="group rounded-xl border border-border bg-card">
            <summary class="flex cursor-pointer items-center justify-between p-6 font-semibold text-foreground">
              <span>Berapa lama waktu pengerjaan proyek?</span>
              <svg class="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div class="px-6 pb-6 text-muted-foreground">
              <p>Waktu pengerjaan bergantung pada scope proyek. Website sederhana bisa selesai dalam 2-4 minggu, sementara aplikasi kompleks memerlukan 2-3 bulan. Kami akan memberikan timeline detail setelah diskusi kebutuhan.</p>
            </div>
          </details>

          <details class="group rounded-xl border border-border bg-card">
            <summary class="flex cursor-pointer items-center justify-between p-6 font-semibold text-foreground">
              <span>Apakah ada maintenance setelah proyek selesai?</span>
              <svg class="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div class="px-6 pb-6 text-muted-foreground">
              <p>Ya, kami menyediakan layanan maintenance dan support berkelanjutan. Paket maintenance dapat disesuaikan dengan kebutuhan, mulai dari bug fixes hingga feature updates.</p>
            </div>
          </details>

          <details class="group rounded-xl border border-border bg-card">
            <summary class="flex cursor-pointer items-center justify-between p-6 font-semibold text-foreground">
              <span>Bagaimana cara bergabung menjadi anggota KAMABA DEV?</span>
              <svg class="h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div class="px-6 pb-6 text-muted-foreground">
              <p>Kami terbuka untuk anggota baru! Hubungi kami melalui form di atas atau join Discord server kami. Tidak perlu pengalaman khusus, yang penting adalah semangat untuk belajar dan berkontribusi.</p>
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- Map/Location Section (Optional) -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl text-center">
          <h2 class="mb-4 text-3xl font-bold text-foreground">
            Mari Wujudkan Ide Anda
          </h2>
          <p class="mb-8 text-lg text-muted-foreground">
            Setiap proyek besar dimulai dari percakapan sederhana. Hubungi kami hari ini dan mulai perjalanan digital Anda.
          </p>
          <UButton size="xl" color="primary" @click="handleSubmit">
            Mulai Sekarang
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
details summary::-webkit-details-marker {
  display: none;
}
</style>
