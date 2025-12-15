<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtRouteAnnouncer />
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
