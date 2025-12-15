<script setup lang="ts">
import FloatingNav from '~/components/ui/FloatingNav.vue'

const { locale, setLocale, locales, t } = useI18n()

const availableLocales = computed(() =>
  locales.value.filter(({ code }) => code !== locale.value)
)

const navItems = computed(() => [
  {
    name: "Home",
    link: "/home",
    icon: "lucide-home",
  },
  {
    name: "Portofolio",
    link: "/portofolio",
    icon: "lucide-folder-open",
  }
])

const handleChangeLocale = async (localeCode: string) => {
  await setLocale(localeCode as "id" | "en")
}
</script>

<template>
  <div class="relative w-full">
    <FloatingNav 
      :nav-items="navItems"
      :available-locales="availableLocales"
      @login="$router.push('/login')"
      @change-locale="handleChangeLocale"
    >
      <template #logo>
        <LayoutLogo />
      </template>
    </FloatingNav>
  </div>
</template>