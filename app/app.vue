<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>
