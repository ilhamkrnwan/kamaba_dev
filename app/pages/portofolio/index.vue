<script setup lang="ts">
const { t, locale } = useI18n()

const formatDate = (date: string) => {
  const localeMap: Record<string, string> = {
    'id': 'id-ID',
    'en': 'en-US'
  }
  return new Date(date).toLocaleDateString(localeMap[locale.value] || 'id-ID', { 
    year: 'numeric', 
    month: 'long' 
  })
}
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-black">
    <UContainer class="py-12 sm:py-20">
      <div class="mb-12 text-center">
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t('portofolio.judul') }}
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {{ $t('portofolio.subjudul') }}
        </p>
      </div>

      <div v-if="portofolios && portofolios.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard
          v-for="item in portofolios"
          :key="item._path"
          class="hover:shadow-xl transition-all duration-300 cursor-pointer"
          @click="$router.push(item._path)"
        >
          <template #header>
            <div class="aspect-video bg-gray-100 dark:bg-gray-800 rounded-t-lg overflow-hidden">
              <NuxtImg
                v-if="item.image"
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
                <UIcon name="i-lucide-image" class="w-16 h-16" />
              </div>
            </div>
          </template>

          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <UBadge color="primary" variant="subtle" size="xs">
                {{ item.category }}
              </UBadge>
              <span class="text-xs text-gray-500 dark:text-gray-400">
                {{ formatDate(item.date) }}
              </span>
            </div>

            <h3 class="text-xl font-semibold text-gray-900 dark:text-white line-clamp-1">
              {{ item.title }}
            </h3>

            <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {{ item.description }}
            </p>

            <div v-if="item.tags && item.tags.length > 0" class="flex flex-wrap gap-1 pt-2">
              <UBadge
                v-for="tag in item.tags.slice(0, 3)"
                :key="tag"
                color="neutral"
                variant="soft"
                size="xs"
              >
                {{ tag }}
              </UBadge>
              <UBadge v-if="item.tags.length > 3" color="neutral" variant="soft" size="xs">
                +{{ item.tags.length - 3 }}
              </UBadge>
            </div>
          </div>

          <template #footer>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500 dark:text-gray-400">
                {{ item.client }}
              </span>
              <UButton
                variant="ghost"
                size="xs"
                trailing-icon="i-lucide-arrow-right"
                @click.stop="$router.push(item._path)"
              >
                {{ $t('portofolio.lihatDetail') }}
              </UButton>
            </div>
          </template>
        </UCard>
      </div>

      <div v-else class="text-center py-20">
        <UIcon name="i-lucide-folder-open" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <p class="text-gray-600 dark:text-gray-400">
          {{ $t('portofolio.kosong') }}
        </p>
      </div>
    </UContainer>
  </div>
</template>
