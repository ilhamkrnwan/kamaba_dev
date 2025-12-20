<script setup lang="ts">
const { locale } = useI18n()
const route = useRoute()

interface PortofolioCollectionItem {
  path?: string
  title?: string
  description?: string
}

const { data: portofolios } = await useAsyncData<PortofolioCollectionItem[]>(
  () => `portofolio-${locale.value}`,
  () =>
    queryCollection('portofolio')
      .path(`/${locale.value}`)
      .all(),
  {
    watch: [locale],
  }
)

console.log("local value" + locale.value)
console.log(route.path)
console.log(portofolios)
</script>

<template>
  <main class="prose mx-auto py-10">
    <h1>Portofolio</h1>

    <article
      v-for="item in portofolios || []"
      :key="item.path"
      class="mb-8"
    >
      <NuxtLink :to="item.path?.replace(`/portofolio/${locale}`, '/portofolio')">
        <h2>{{ item.title }}</h2>
      </NuxtLink>

      <p class="text-gray-500">{{ item.description }}</p>
    </article>
  </main>
</template>
