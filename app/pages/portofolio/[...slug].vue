<script setup lang="ts">
import type { PortofolioCollectionItem } from '~/types'

const route = useRoute()
const { locale, t } = useI18n()
const { setArticleSeo } = useSeo()

// Get slug from route params
const slug = computed(() => {
  const params = route.params.slug
  if (Array.isArray(params)) {
    return params.join('/')
  }
  return params || ''
})

// Fetch current portfolio item
const { data: page, error } = await useAsyncData(
  `portofolio-${locale.value}-${slug.value}`,
  () =>
    queryCollection('portofolio')
      .path(`/portofolio/${locale.value}/${slug.value}`)
      .first(),
  {
    watch: [locale],
  }
)

// Fetch all portfolio items for navigation
const { data: allPortfolios } = await useAsyncData<PortofolioCollectionItem[]>(
  `portofolio-all-${locale.value}`,
  () =>
    queryCollection('portofolio')
      .select('path', 'title', 'image', 'category', 'date')
      .where('path', 'LIKE', `/portofolio/${locale.value}%`)
      .order('date', 'DESC')
      .all(),
  {
    watch: [locale],
  }
)

// Find prev and next projects
const currentIndex = computed(() => {
  if (!allPortfolios.value || !page.value) return -1
  return allPortfolios.value.findIndex(p => p.path === page.value?.path)
})

const prevProject = computed(() => {
  if (!allPortfolios.value || currentIndex.value <= 0) return null
  return allPortfolios.value[currentIndex.value - 1]
})

const nextProject = computed(() => {
  if (!allPortfolios.value || currentIndex.value < 0 || currentIndex.value >= allPortfolios.value.length - 1) return null
  return allPortfolios.value[currentIndex.value + 1]
})

// Handle 404
if (error.value || !page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: t('Portofolio tidak ditemukan'),
    fatal: true
  })
}

// Set SEO
watchEffect(() => {
  if (page.value) {
    setArticleSeo({
      title: page.value.title || 'Portofolio',
      description: page.value.description,
      image: page.value.image,
      date: page.value.date,
      tags: page.value.tags,
      category: page.value.category,
      author: 'NataKarsa Team'
    })
  }
})
</script>

<template>
  <main class="min-h-screen">
    <template v-if="page">
      <!-- Hero Section -->
      <PortfolioDetailHero
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
        :title="page.title || ''"
        :description="page.description"
        :image="page.image"
        :category="page.category"
        :date="page.date"
        :status="page.status"
        :client="page.client"
      />

      <!-- Content Section -->
      <section class="py-8 md:py-12">
        <div class="container mx-auto px-4">
          <div class="mx-auto max-w-6xl">
            <div class="grid lg:grid-cols-12 gap-8 lg:gap-12">
              <!-- Main Content -->
              <div 
                v-motion
                :initial="{ opacity: 0, y: 30 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut', delay: 100 } }"
                class="lg:col-span-8"
              >
                <PortfolioDetailContent :content="page" />
              </div>

              <!-- Sidebar -->
              <div 
                v-motion
                :initial="{ opacity: 0, x: 30 }"
                :visible="{ opacity: 1, x: 0, transition: { duration: 600, ease: 'easeOut', delay: 200 } }"
                class="lg:col-span-4"
              >
                <PortfolioDetailMeta
                  :services="page.services"
                  :tags="page.tags"
                  :client="page.client"
                  :industry="page.industry"
                  :status="page.status"
                  :date="page.date"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Navigation Section -->
      <PortfolioNavigation
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut', delay: 300 } }"
        :prev-project="prevProject"
        :next-project="nextProject"
      />

      <!-- CTA Section -->
      <UiCtaSection
        id="contact-cta"
        v-motion
        :initial="{ opacity: 0, scale: 0.95, y: 50 }"
        :visible="{ opacity: 1, scale: 1, y: 0, transition: { duration: 600, ease: 'easeOut', delay: 100 } }"
        :title="$t('Tertarik dengan Hasil Karya Kami?')"
        :description="$t('Mari diskusikan proyek Anda bersama kami. Kami siap membantu mewujudkan ide-ide inovatif Anda.')"
        :badge="$t('Mari Berkolaborasi')"
        badge-icon="i-lucide-sparkles"
        :primary-button-text="$t('Hubungi Kami')"
        primary-icon="i-lucide-message-circle"
        :secondary-button-text="$t('Lihat Portofolio Lainnya')"
        secondary-icon="i-lucide-folder-open"
        @primary-click="navigateTo('/home#contact')"
        @secondary-click="navigateTo('/portofolio')"
      />
    </template>
  </main>
</template>
