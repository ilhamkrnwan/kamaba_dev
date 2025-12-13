<template>
  <div class="relative w-full">
    <FloatingNav 
      :nav-items="navItems"
      :available-locales="availableLocales"
      @login="handleLogin"
      @change-locale="handleChangeLocale"
    >
      <template #logo>
        <LayoutLogo />
      </template>
    </FloatingNav>
  </div>
</template>

<script setup lang="ts">
import FloatingNav from '~/components/ui/FloatingNav.vue'
import ROUTES from '~/constants/routes'

const { locale, setLocale, locales, t } = useI18n()

const availableLocales = computed(() =>
  locales.value.filter(({ code }) => code !== locale.value)
)

const IconHome = defineComponent({
  template: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>'
})

const IconUser = defineComponent({
  template: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
})

const IconMessage = defineComponent({
  template: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
})

const navItems = computed(() => [
  {
    name: t("header.home"),
    link: ROUTES.HOME,
    icon: IconHome,
  },
  {
    name: "About",
    link: "/about",
    icon: IconUser,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: IconMessage,
  },
])

const handleLogin = () => {
  navigateTo('/login')
}

const handleChangeLocale = async (localeCode: string) => {
  await setLocale(localeCode)
}
</script>

