<script setup lang="ts">
const route = useRoute()
const { locale } = useI18n()

const slug = 'kamaba-yogyakarta'

const { data: page } = await useAsyncData(
  () => `portofolio-${locale.value}-${slug}`,
  () =>
    queryCollection('content')
      .path(`/portofolio/${locale.value}/${slug}`)
      .first(),
  {
    watch: [locale],
  }
)
</script>

<template>
<main class="prose mx-auto py-10">
<h1>{{ page?.title }}</h1>
<p class="text-gray-500">{{ page?.description }}</p>


<ContentRenderer v-if="page" :value="page" />
</main>
</template>