<template>
  <UHeader>
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>
    <UNavigationMenu :items="items" />
    <template #right>
      <ColorModeButton />
      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/sonht113/nuxt-boilerplate-for-starter"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
      <UButton
        v-for="{ code: localeCode } in availableLocales"
        :key="localeCode"
        color="primary"
        variant="outline"
        class="cursor-pointer"
        size="sm"
        @click="handleChangeLocale(localeCode)"
      >
        {{ localeCode.toUpperCase() }}
      </UButton>
    </template>
  </UHeader>
</template>
<script setup lang="ts">
// Components
import ColorModeButton from "../common/ColorModeButton.vue";
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();
const { locale, setLocale, locales } = useI18n();

const availableLocales = computed(() =>
  locales.value.filter(({ code }) => code !== locale.value)
);

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Docs",
    to: "/docs/getting-started",
    active: route.path.startsWith("/docs/getting-started"),
  },
  {
    label: "Components",
    to: "/docs/components",
    active: route.path.startsWith("/docs/components"),
  },
  {
    label: "Figma",
    to: "https://go.nuxt.com/figma-ui",
    target: "_blank",
  },
  {
    label: "Releases",
    to: "https://github.com/sonht113",
    target: "_blank",
  },
]);

const handleChangeLocale = async (localeCode: "vi" | "en") => {
  await setLocale(localeCode);
};
</script>
