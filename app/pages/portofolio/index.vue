<script setup lang="ts">
const { locale, t } = useI18n()

interface PortofolioCollectionItem {
  path?: string
  title?: string
  description?: string
  image?: string
  category?: string
  tags?: string[]
  date?: string
}

const { data: portofolios } = await useAsyncData<PortofolioCollectionItem[]>(
  `portofolio-${locale.value}`,
  () =>
    queryCollection('portofolio')
      .select('path', 'title', 'description', 'image')
      .where('path', 'LIKE', `/portofolio/${locale.value}%`)
      .all(),
  {
    watch: [locale],
  }
)

const getPortofolioLink = (path?: string) => {
  return path?.replace(`/portofolio/${locale.value}`, '/portofolio') || '#'
}

useSeoMeta({
  title: t('Portofolio - QINARYAN'),
  description: t('Lihat hasil karya dan proyek yang telah kami kerjakan'),
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-20 md:pt-32">
      <div class="container mx-auto px-4">
        <UiSectionHeading
          :title="$t('Portofolio Kami')"
          :subtitle="$t('Lihat hasil karya dan proyek yang telah kami kerjakan untuk berbagai klien dan organisasi.')"
          :badge="$t('Karya Kami')"
          size="lg"
          :gradient="true"
          :show-line="true"
        />
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="pb-12 md:pb-20">
      <div class="container mx-auto px-4">
        <UiBentoGrid :columns="3" class="mx-auto max-w-7xl">
          <UiBentoCard
            v-for="(item, index) in portofolios || []"
            :key="item.path"
            :title="item.title || ''"
            :description="item.description || ''"
            :image="item.image"
            :badge="item.category"
            :link="getPortofolioLink(item.path)"
            :link-text="$t('Lihat Detail')"
            :size="index === 0 ? 'large' : 'normal'"
            class="group"
          >
            <template #footer>
              <div class="flex flex-wrap items-center justify-between gap-2">
                <!-- Tags -->
                <div v-if="item.tags?.length" class="flex flex-wrap gap-1">
                  <span
                    v-for="tag in item.tags.slice(0, 3)"
                    :key="tag"
                    class="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary"
                  >
                    {{ tag }}
                  </span>
                </div>
                <!-- Link -->
                <NuxtLink
                  :to="getPortofolioLink(item.path)"
                  class="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
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
                </NuxtLink>
              </div>
            </template>
          </UiBentoCard>
        </UiBentoGrid>

        <!-- Empty State -->
        <div
          v-if="!portofolios?.length"
          class="mx-auto max-w-md rounded-2xl border border-border bg-card/50 p-12 text-center backdrop-blur-sm"
        >
          <div class="mb-4 text-6xl">📁</div>
          <h3 class="mb-2 text-xl font-semibold text-foreground">{{ $t('Belum ada portofolio') }}</h3>
          <p class="text-muted-foreground">{{ $t('Portofolio sedang dalam proses penambahan.') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
