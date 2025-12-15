<script setup lang="ts">
const route = useRoute()
const { t, locale } = useI18n()

interface PortfolioItem {
  _path?: string
  title: string
  description: string
  image?: string
  category: string
  client: string
  date: string
  tags?: string[]
}

// Query content based on current locale
const { data: page } = await useAsyncData<PortfolioItem | null>(`portofolio-${route.params.slug}`, async () => {
  try {
    // @ts-ignore - queryContent is auto-imported by Nuxt Content
    const content = await queryContent('portofolio', locale.value as string, route.params.slug as string).findOne()
    return content as PortfolioItem
  } catch (error) {
    return null
  }
})

if (!page.value) {
  throw createError({ 
    statusCode: 404, 
    statusMessage: t('portofolio.tidakDitemukan') 
  })
}

useSeoMeta({
  title: page.value?.title || '',
  description: page.value?.description || '',
  ogTitle: page.value?.title || '',
  ogDescription: page.value?.description || '',
  ogImage: page.value?.image || '',
  twitterCard: 'summary_large_image'
})

// Query related posts in the same locale
const { data: relatedPosts } = await useAsyncData<PortfolioItem[]>('related-portofolio', async () => {
  try {
    // @ts-ignore - queryContent is auto-imported by Nuxt Content
    const posts = await queryContent('portofolio', locale.value as string)
      .where({ _path: { $ne: page.value?._path } })
      .limit(3)
      .find()
    return posts as PortfolioItem[]
  } catch (error) {
    return []
  }
})

const formatDate = (date: string) => {
  const localeMap: Record<string, string> = {
    'id': 'id-ID',
    'en': 'en-US'
  }
  return new Date(date).toLocaleDateString(localeMap[locale.value] || 'id-ID', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-black">
    <UContainer class="py-12 sm:py-20">
      <div class="max-w-4xl mx-auto">
        <UButton
          variant="ghost"
          icon="i-lucide-arrow-left"
          to="/portofolio"
          class="mb-8"
        >
          {{ $t('portofolio.kembali') }}
        </UButton>

        <article v-if="page" class="space-y-8">
          <header class="space-y-4">
            <div class="flex flex-wrap items-center gap-3">
              <UBadge color="primary" variant="subtle">
                {{ page?.category }}
              </UBadge>
              <span class="text-sm text-gray-600 dark:text-gray-400">
                {{ page?.date ? formatDate(page.date) : '' }}
              </span>
            </div>

            <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              {{ page?.title }}
            </h1>

            <p class="text-xl text-gray-600 dark:text-gray-400">
              {{ page?.description }}
            </p>

            <div class="flex items-center gap-2 text-sm">
              <UIcon name="i-lucide-building" class="w-5 h-5 text-gray-500" />
              <span class="text-gray-600 dark:text-gray-400">
                {{ $t('portofolio.klien') }}: <span class="font-medium text-gray-900 dark:text-white">{{ page?.client }}</span>
              </span>
            </div>

            <div v-if="page?.tags && page.tags.length > 0" class="flex flex-wrap gap-2 pt-2">
              <UBadge
                v-for="tag in page.tags"
                :key="tag"
                color="neutral"
                variant="soft"
              >
                {{ tag }}
              </UBadge>
            </div>
          </header>

          <div v-if="page?.image" class="aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
            <NuxtImg
              :src="page.image"
              :alt="page.title || ''"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <UDivider />

          <div class="prose prose-lg dark:prose-invert max-w-none
                      prose-headings:text-gray-900 dark:prose-headings:text-white
                      prose-p:text-gray-600 dark:prose-p:text-gray-400
                      prose-a:text-primary-600 dark:prose-a:text-primary-400
                      prose-strong:text-gray-900 dark:prose-strong:text-white
                      prose-code:text-gray-900 dark:prose-code:text-white
                      prose-li:text-gray-600 dark:prose-li:text-gray-400">
            <ContentRenderer :value="page" />
          </div>
        </article>

        <div v-if="relatedPosts && relatedPosts.length > 0" class="mt-16">
          <UDivider class="mb-8" />
          
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {{ $t('portofolio.lainnya') }}
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <UCard
              v-for="item in relatedPosts"
              :key="item._path"
              class="hover:shadow-lg transition-all duration-300 cursor-pointer"
              @click="$router.push(item._path || '')"
            >
              <div class="space-y-3">
                <UBadge color="primary" variant="subtle" size="xs">
                  {{ item.category }}
                </UBadge>

                <h3 class="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                  {{ item.title }}
                </h3>

                <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {{ item.description }}
                </p>

                <UButton
                  variant="ghost"
                  size="xs"
                  trailing-icon="i-lucide-arrow-right"
                  @click.stop="$router.push(item._path || '')"
                >
                  {{ $t('portofolio.lihatDetail') }}
                </UButton>
              </div>
            </UCard>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
