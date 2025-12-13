<template>
  <UHeader
    class="w-full lg:w-3/4 lg:mx-auto [&>div:first-child]:max-w-full [&>div:first-child]:px-0"
  >
    <template #title>
      <LayoutLogo />
    </template>
    <UNavigationMenu :items="items" />
    <template #right>
      <ColorModeButton />
      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/sonht113/nuxt4-boilerplate-for-starter"
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
import type { NavigationMenuItem } from "@nuxt/ui";
import ColorModeButton from "../common/ColorModeButton.vue";
import ROUTES from "../../constants/routes";

const route = useRoute();
const { locale, setLocale, locales, t } = useI18n();

const availableLocales = computed(() =>
  locales.value.filter(({ code }) => code !== locale.value)
);

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: t("header.home"),
    to: ROUTES.HOME,
    active: route.path.startsWith(ROUTES.HOME),
  },
  {
    label: t("header.components"),
    to: "https://ui.nuxt.com/docs/components",
    target: "_blank",
  },
  {
    label: t("header.figma"),
    to: "https://go.nuxt.com/figma-ui",
    target: "_blank",
  },
  {
    label: t("header.releases"),
    to: "https://github.com/sonht113",
    target: "_blank",
  },
]);

const handleChangeLocale = async (localeCode: "id" | "en") => {
  await setLocale(localeCode);
};
</script>
