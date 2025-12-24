<script setup lang="ts">
import type { PortofolioCollectionItem } from '~/types'
const { locale, t } = useI18n()

const { data: portofolios } = await useAsyncData<PortofolioCollectionItem[]>(
  `portofolio-${locale.value}`,
  () =>
    queryCollection('portofolio')
      .select('path', 'title', 'description', 'image', 'category', 'tags')
      .where('path', 'LIKE', `/portofolio/${locale.value}%`)
      .all(),
  {
    watch: [locale],
  }
)

const getPortofolioLink = (path?: string) => {
  return path?.replace(`/portofolio/${locale.value}`, '/portofolio') || '#'
}

// State management
const searchQuery = ref('')
const selectedCategory = ref('All')

// Extract unique categories from portfolio data
const categories = computed(() => {
  const uniqueCategories = new Set<string>(['All'])
  portofolios.value?.forEach(item => {
    if (item.category) {
      uniqueCategories.add(item.category)
    }
  })
  return Array.from(uniqueCategories)
})

// Filtered portfolios based on search and category
const filteredPortfolios = computed(() => {
  let filtered = portofolios.value || []

  // Filter by category
  if (selectedCategory.value !== 'All') {
    filtered = filtered.filter(item => item.category === selectedCategory.value)
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(item =>
      item.title?.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query) ||
      item.tags?.some(tag => tag.toLowerCase().includes(query))
    )
  }

  return filtered
})

// Navigation
const router = useRouter()
const goBack = () => {
  router.back()
}

// CTA handlers
const handleContactClick = () => {
  navigateTo('/#contact')
}

const handleLearnMoreClick = () => {
  navigateTo('/home#about')
}

useSeoMeta({
  title: () => t('Portofolio - QINARYAN'),
  description: () => t('Lihat hasil karya dan proyek yang telah kami kerjakan'),
})
</script>

<template>
  <div class="min-h-screen ">

    <!-- Hero Section with Search -->
    <section 
      v-motion
      :initial="{ opacity: 0, y: -50 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut', delay: 100 } }"
      class="relative overflow-hidden py-12 md:py-20"
    >
      <!-- Background decorations -->
      <div class="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div class="pointer-events-none absolute -right-40 top-20 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
      
      <div class="container mx-auto px-4 pt-12 md:pt-4">
        <div class="mx-auto max-w-6xl">
        <UiSectionHeading
          :title="$t('Jelajahi Karya Kami')"
          :subtitle="$t('Lihat hasil karya dan proyek yang telah kami kerjakan untuk berbagai klien dan organisasi.')"
          :badge="$t('Portofolio')"
          size="lg"
          :gradient="true"
          :show-line="true"
        />

        <!-- Search Bar -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 500, ease: 'easeOut', delay: 200 } }"
          class="mx-auto mt-8 max-w-2xl"
        >
          <div class="relative group">
            <svg
              class="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              :placeholder="$t('Cari proyek...')"
              class="w-full rounded-xl border border-border bg-card/50 py-4 pl-12 pr-4 text-foreground placeholder:text-muted-foreground backdrop-blur-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:shadow-lg focus:shadow-primary/10"
            />
          </div>
        </div>

        <!-- Category Filter -->
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 500, ease: 'easeOut', delay: 300 } }"
          class="mt-6 flex flex-wrap justify-center gap-3"
        >
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'rounded-xl px-6 py-2.5 font-medium transition-all duration-300',
              selectedCategory === category
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105'
                : 'bg-card/50 text-foreground hover:bg-accent backdrop-blur-sm border border-border hover:border-primary/50 hover:shadow-md'
            ]"
          >
            {{ category === 'All' ? $t('Semua') : category }}
          </button>
        </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section 
      v-motion
      :initial="{ opacity: 0, y: 80 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 700, ease: 'easeOut', delay: 100 } }"
      class="pb-12 md:pb-20"
    >
      <div class="container mx-auto px-4">
        <!-- Results Count -->
        <div 
          v-if="searchQuery || selectedCategory !== 'All'" 
          v-motion
          :initial="{ opacity: 0 }"
          :visible="{ opacity: 1, transition: { duration: 300 } }"
          class="mb-8 text-center"
        >
          <p class="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
            {{ $t('Menampilkan') }} 
            <span class="font-semibold text-primary">{{ filteredPortfolios.length }}</span>
            {{ $t('dari') }}
            <span class="font-semibold text-foreground">{{ portofolios?.length || 0 }}</span>
            {{ $t('proyek') }}
          </p>
        </div>

        <div class="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UiPortfolioCard
            v-for="(item, index) in filteredPortfolios"
            :key="item.path"
            v-motion
            :initial="{ opacity: 0, y: 50, scale: 0.95 }"
            :visible="{ 
              opacity: 1, 
              y: 0, 
              scale: 1, 
              transition: { 
                duration: 500, 
                ease: 'easeOut', 
                delay: 100 + (index * 100) 
              } 
            }"
            :title="item.title || ''"
            :description="item.description || ''"
            :image="item.image"
            :badge="item.category"
            :link="getPortofolioLink(item.path)"
            :link-text="$t('Lihat Detail')"
            :size="index === 0 ? 'large' : 'normal'"
          >
            <template #footer>
              <div class="flex flex-wrap items-center justify-between gap-2">
                <!-- Tags -->
                <div v-if="item.tags?.length" class="flex flex-wrap gap-1.5">
                  <span
                    v-for="tag in item.tags.slice(0, 3)"
                    :key="tag"
                    class="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary transition-colors group-hover:bg-primary/20"
                  >
                    {{ tag }}
                  </span>
                </div>
                <!-- Link -->
                <span class="inline-flex items-center text-sm font-medium text-primary transition-all group-hover:gap-2">
                  <span>{{ $t('Lihat Detail') }}</span>
                  <svg
                    class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </template>
          </UiPortfolioCard>
        </div>

        <!-- Empty State - No Results from Filter/Search -->
        <div
          v-if="filteredPortfolios.length === 0 && portofolios?.length"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible="{ opacity: 1, scale: 1, transition: { duration: 400, ease: 'easeOut' } }"
          class="mx-auto max-w-md rounded-2xl border border-border bg-card/50 p-12 text-center backdrop-blur-sm"
        >
          <div class="mb-4 text-6xl">🔍</div>
          <h3 class="mb-2 text-xl font-semibold text-foreground">
            {{ $t('Tidak ada hasil') }}
          </h3>
          <p class="mb-6 text-muted-foreground">
            {{ $t('Coba ubah kata kunci pencarian atau filter kategori') }}
          </p>
          <button
            @click="searchQuery = ''; selectedCategory = 'All'"
            class="rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            {{ $t('Reset Filter') }}
          </button>
        </div>

        <!-- Empty State - No Portfolio Data -->
        <div
          v-if="!portofolios?.length"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible="{ opacity: 1, scale: 1, transition: { duration: 400, ease: 'easeOut' } }"
          class="mx-auto max-w-md rounded-2xl border border-border bg-card/50 p-12 text-center backdrop-blur-sm"
        >
          <div class="mb-4 text-6xl">📁</div>
          <h3 class="mb-2 text-xl font-semibold text-foreground">
            {{ $t('Belum ada portofolio') }}
          </h3>
          <p class="text-muted-foreground">
            {{ $t('Portofolio sedang dalam proses penambahan.') }}
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <UiCtaSection
      v-motion
      :initial="{ opacity: 0, scale: 0.95, y: 50 }"
      :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 600, ease: 'easeOut', delay: 100 } }"
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