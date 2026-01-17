<script setup lang="ts">
import FloatingBadge from './components/layout/FloatingBadge.vue';

const { t } = useI18n();
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtRouteAnnouncer />
    <NuxtLayout>
      <FloatingBadge/>
      <NuxtPage />
    </NuxtLayout>
</template>
