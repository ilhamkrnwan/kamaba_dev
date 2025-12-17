<script setup lang="ts">
const mobileMenuOpen = ref(false)
import GlowingEffect from '~/components/ui/GlowingEffect.vue'

export interface NavItem {
  name: string
  link: string
  icon?: any
}

export interface LocaleItem {
  code: string
  name?: string
}

interface Props {
  navItems: NavItem[]
  availableLocales: LocaleItem[]
}

defineProps<Props>()

const emit = defineEmits<{
  AboutUs: []
  changeLocale: [localeCode: string]
}>()

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const onAboutUsClick = () => {
  closeMobileMenu()
  emit('AboutUs')
}
</script>

<template>
  <div class="fixed top-0 inset-x-0 z-50000 px-4 pt-2">
    <div class="hidden md:block max-w-full mx-auto">
      <GlowingEffect class="flex flex-row items-center justify-between rounded-full border border-transparent dark:border-white/[0.2] dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-6 py-3">
        <div class="flex items-center">
          <slot name="logo"/>
        </div>

        <div class="flex items-center gap-1 max-w-3xl">
        <NuxtLink
          v-for="(navItem, idx) in navItems"
          :key="`link-${idx}`"
          :to="navItem.link"
          class="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 px-4 py-2 rounded-full hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80 transition-all duration-200"
        >
          <UIcon v-if="navItem.icon" :name="navItem.icon" class="w-4 h-4" />
          <span class="text-sm cursor-pointer">{{ navItem.name }}</span>
        </NuxtLink>

        <UDivider orientation="vertical" class="mx-2" />

        <UColorModeButton />

        <UDivider orientation="vertical" class="mx-2" />

        <UButtonGroup size="xs" orientation="horizontal">
          <UButton
            v-for="locale in availableLocales"
            :key="locale.code"
            variant="outline"
            :label="locale.code.toUpperCase()"
            @click="$emit('changeLocale', locale.code)"
          />
        </UButtonGroup>

        <UDivider orientation="vertical" class="mx-2" />

        <UButton
          variant="outline"
          size="lg"
          label="About Us"
          @click="onAboutUsClick"
            ABOUT US
        />
        </div>
      </GlowingEffect>
    </div>

    <div class="md:hidden max-w-7xl mx-auto">
      <GlowingEffect class="flex items-center justify-between px-4 py-3 mx-auto rounded-full border border-transparent dark:border-white/[0.2] dark:bg-black bg-white shadow-lg">
        <div class="flex items-center">
          <slot name="logo" />
        </div>

        <UButton
          :icon="mobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
          variant="ghost"
          size="lg"
          square
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        />
      </GlowingEffect>

      <Transition name="mobile-menu">
        <div
          v-if="mobileMenuOpen"
          v-motion
          :initial="{ opacity: 0, y: -20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 300, ease: 'easeOut' } }"
          :leave="{ opacity: 0, y: -20, transition: { duration: 200, ease: 'easeIn' } }"
          class="mt-3"
        >
          <GlowingEffect class="rounded-3xl border border-transparent dark:border-white/[0.2] dark:bg-black bg-white shadow-xl overflow-hidden">
          <div class="flex flex-col p-4 space-y-1">
            <NuxtLink
              v-for="(navItem, idx) in navItems"
              :key="`mobile-link-${idx}`"
              :to="navItem.link"
              @click="closeMobileMenu"
              class="relative dark:text-neutral-50 text-neutral-700 px-4 py-3 rounded-xl hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80 transition-all duration-200 font-medium"
            >
              {{ navItem.name }}
            </NuxtLink>

            <UDivider class="my-2" />

            <div class="flex flex-col space-y-3 px-4 py-2">
              <div class="flex items-center justify-between">
                <span class="text-sm text-neutral-600 dark:text-neutral-400 font-medium">Theme</span>
                <UColorModeButton />
              </div>

              <div class="flex items-center justify-between">
                <span class="text-sm text-neutral-600 dark:text-neutral-400 font-medium">Language</span>
                <UButtonGroup size="xs" orientation="horizontal">
                  <UButton
                    v-for="locale in availableLocales"
                    :key="locale.code"
                    variant="outline"
                    :label="locale.code.toUpperCase()"
                    @click="$emit('changeLocale', locale.code)"
                  />
                </UButtonGroup>
              </div>
            </div>

            <UDivider class="my-2" />

            <UButton
              block
              variant="outline"
              label="About Us"
              @click="onAboutUsClick"
                ABOUT US
            />
          </div>
          </GlowingEffect>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>