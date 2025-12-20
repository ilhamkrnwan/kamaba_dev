<script setup lang="ts">
import GlowingEffect from '~/components/ui/GlowingEffect.vue'

const mobileMenuOpen = ref(false)
const { t } = useI18n()

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
  login: []
  changeLocale: [localeCode: string]
}>()

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const onCollaborateClick = () => {
  closeMobileMenu()
  navigateTo('/home#contact')
}

// Animation states for staggered menu items
const menuItemsVisible = ref(false)

watch(mobileMenuOpen, (isOpen) => {
  if (isOpen) {
    // Delay menu items animation slightly after container appears
    setTimeout(() => {
      menuItemsVisible.value = true
    }, 150)
  } else {
    menuItemsVisible.value = false
  }
})
</script>

<template>
  <div class="fixed top-0 inset-x-0 z-[5000] px-4 pt-4">
    <!-- Desktop Navigation -->
    <div class="hidden md:block max-w-4xl mx-auto">
      <GlowingEffect
        :spread="40"
        :glow="false"
        :disabled="false"
        :proximity="64"
        :inactive-zone="0.01"
        :border-width="1"
        class="rounded-full"
      >
        <div class="flex flex-row items-center justify-between rounded-full border border-neutral-200/50 dark:border-white/[0.1] dark:bg-neutral-950/80 bg-white/80 backdrop-blur-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-4 py-2.5">
          <!-- Logo -->
          <div class="flex items-center">
            <slot name="logo" />
          </div>

          <!-- Nav Items -->
          <div class="flex items-center gap-1">
            <NuxtLink
              v-for="(navItem, idx) in navItems"
              :key="`link-${idx}`"
              :to="navItem.link"
              class="group relative flex items-center gap-2 px-4 py-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all duration-300"
            >
              <!-- Hover background -->
              <span class="absolute inset-0 rounded-full bg-neutral-100/0 dark:bg-white/0 group-hover:bg-neutral-100 dark:group-hover:bg-white/10 transition-all duration-300 scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100" />
              
              <UIcon 
                v-if="navItem.icon" 
                :name="navItem.icon" 
                class="relative w-4 h-4 transition-transform duration-300 group-hover:scale-110" 
              />
              <span class="relative text-sm font-medium">{{ navItem.name }}</span>
            </NuxtLink>

            <!-- Divider -->
            <div class="w-px h-6 bg-neutral-200 dark:bg-neutral-700 mx-2" />

            <!-- Theme & Language Controls -->
            <div class="flex items-center gap-2">
              <UColorModeButton 
                class="!rounded-full hover:!bg-neutral-100 dark:hover:!bg-white/10 transition-colors duration-200"
              />
              
              <button
                v-for="locale in availableLocales"
                :key="locale.code"
                class="relative px-3 py-1.5 text-xs font-semibold rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-500 hover:bg-neutral-50 dark:hover:bg-white/5 transition-all duration-200"
                @click="$emit('changeLocale', locale.code)"
              >
                {{ locale.code.toUpperCase() }}
              </button>
            </div>

            <!-- CTA Button -->
            <button
              class="group relative ml-3 px-5 py-2 rounded-full overflow-hidden"
              @click="onCollaborateClick"
            >
              <!-- Gradient background -->
              <span class="absolute inset-0 bg-gradient-to-r from-[#050254] via-[#49042f] to-[#050254] transition-all duration-300 group-hover:scale-105" />
              <!-- Shine effect -->
              <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <!-- Text -->
              <span class="relative text-sm font-semibold text-white">
                {{ t('Mari Berkolaborasi!') }}
              </span>
            </button>
          </div>
        </div>
      </GlowingEffect>
    </div>

    <!-- Mobile Navigation -->
    <div class="md:hidden max-w-7xl mx-auto">
      <!-- Mobile Header -->
      <GlowingEffect
        :spread="40"
        :glow="false"
        :disabled="false"
        :proximity="64"
        :inactive-zone="0.01"
        :border-width="1"
        class="rounded-full"
      >
        <div class="flex items-center justify-between px-4 py-3 rounded-full border border-neutral-200/50 dark:border-white/[0.1] dark:bg-neutral-950/80 bg-white/80 backdrop-blur-xl shadow-lg">
          <div class="flex items-center">
            <slot name="logo" />
          </div>

          <!-- Hamburger Button with Animation -->
          <button
            class="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors duration-200"
            @click="toggleMobileMenu"
            aria-label="Toggle menu"
          >
            <div class="relative w-5 h-4 flex flex-col justify-center items-center">
              <span
                :class="[
                  'absolute w-5 h-0.5 bg-neutral-700 dark:bg-neutral-300 rounded-full transition-all duration-300 ease-out',
                  mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                ]"
              />
              <span
                :class="[
                  'absolute w-5 h-0.5 bg-neutral-700 dark:bg-neutral-300 rounded-full transition-all duration-300 ease-out',
                  mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                ]"
              />
              <span
                :class="[
                  'absolute w-5 h-0.5 bg-neutral-700 dark:bg-neutral-300 rounded-full transition-all duration-300 ease-out',
                  mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                ]"
              />
            </div>
          </button>
        </div>
      </GlowingEffect>

      <!-- Mobile Menu Dropdown -->
      <Transition
        enter-active-class="transition-all duration-400 ease-out"
        enter-from-class="opacity-0 -translate-y-4 scale-95"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 -translate-y-4 scale-95"
      >
        <div v-if="mobileMenuOpen" class="mt-3">
          <GlowingEffect
            :spread="60"
            :glow="false"
            :disabled="false"
            :proximity="80"
            :inactive-zone="0.01"
            :border-width="1"
            class="rounded-3xl"
          >
            <div class="rounded-3xl border border-neutral-200/50 dark:border-white/[0.1] dark:bg-neutral-950/95 bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div class="flex flex-col p-4 space-y-1">
                <!-- Nav Items with Staggered Animation -->
                <TransitionGroup
                  enter-active-class="transition-all duration-300 ease-out"
                  enter-from-class="opacity-0 translate-x-4"
                  enter-to-class="opacity-100 translate-x-0"
                  leave-active-class="transition-all duration-200 ease-in"
                  leave-from-class="opacity-100 translate-x-0"
                  leave-to-class="opacity-0 -translate-x-4"
                >
                  <NuxtLink
                    v-for="(navItem, idx) in navItems"
                    v-show="menuItemsVisible"
                    :key="`mobile-link-${idx}`"
                    :to="navItem.link"
                    :style="{ transitionDelay: `${idx * 50}ms` }"
                    class="group relative flex items-center gap-3 px-4 py-3.5 rounded-2xl text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white transition-all duration-200"
                    @click="closeMobileMenu"
                  >
                    <!-- Hover background -->
                    <span class="absolute inset-0 rounded-2xl bg-gradient-to-r from-neutral-100/0 to-neutral-100/0 dark:from-white/0 dark:to-white/0 group-hover:from-neutral-100 group-hover:to-neutral-50 dark:group-hover:from-white/10 dark:group-hover:to-white/5 transition-all duration-200" />
                    
                    <div class="relative flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/10 group-hover:bg-gradient-to-br group-hover:from-[#050254] group-hover:to-[#49042f] transition-all duration-200">
                      <UIcon 
                        v-if="navItem.icon" 
                        :name="navItem.icon" 
                        class="w-5 h-5 text-neutral-600 dark:text-neutral-300 group-hover:text-white transition-colors duration-200" 
                      />
                    </div>
                    <span class="relative text-base font-medium">{{ navItem.name }}</span>
                    
                    <!-- Arrow icon on hover -->
                    <UIcon 
                      name="lucide-chevron-right" 
                      class="relative w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-neutral-400 dark:text-neutral-500" 
                    />
                  </NuxtLink>
                </TransitionGroup>

                <!-- Separator -->
                <div 
                  v-show="menuItemsVisible" 
                  :style="{ transitionDelay: `${navItems.length * 50}ms` }"
                  class="my-3 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-700 to-transparent transition-all duration-300"
                />

                <!-- Settings Section -->
                <Transition
                  enter-active-class="transition-all duration-300 ease-out"
                  enter-from-class="opacity-0 translate-y-2"
                  enter-to-class="opacity-100 translate-y-0"
                >
                  <div 
                    v-show="menuItemsVisible" 
                    :style="{ transitionDelay: `${(navItems.length + 1) * 50}ms` }"
                    class="flex flex-col space-y-4 px-4 py-3"
                  >
                    <!-- Theme Toggle -->
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-3">
                        <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/10">
                          <UIcon name="lucide-sun" class="w-5 h-5 text-amber-500 dark:hidden" />
                          <UIcon name="lucide-moon" class="w-5 h-5 text-blue-400 hidden dark:block" />
                        </div>
                        <span class="text-sm font-medium text-neutral-600 dark:text-neutral-300">Theme</span>
                      </div>
                      <UColorModeButton class="!rounded-xl" />
                    </div>

                    <!-- Language Toggle -->
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-3">
                        <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/10">
                          <UIcon name="lucide-globe" class="w-5 h-5 text-[#3d39a1]" />
                        </div>
                        <span class="text-sm font-medium text-neutral-600 dark:text-neutral-300">Language</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <button
                          v-for="locale in availableLocales"
                          :key="locale.code"
                          class="px-4 py-2 text-xs font-semibold rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-[#070368] dark:hover:border-[#050254] hover:bg-violet-50 dark:hover:bg-[#050254]/10 transition-all duration-200"
                          @click="$emit('changeLocale', locale.code)"
                        >
                          {{ locale.code.toUpperCase() }}
                        </button>
                      </div>
                    </div>
                  </div>
                </Transition>

                <!-- Separator -->
                <div 
                  v-show="menuItemsVisible" 
                  :style="{ transitionDelay: `${(navItems.length + 2) * 50}ms` }"
                  class="my-3 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-700 to-transparent"
                />

                <!-- CTA Button -->
                <Transition
                  enter-active-class="transition-all duration-300 ease-out"
                  enter-from-class="opacity-0 scale-95"
                  enter-to-class="opacity-100 scale-100"
                >
                  <button
                    v-show="menuItemsVisible"
                    :style="{ transitionDelay: `${(navItems.length + 3) * 50}ms` }"
                    class="group relative w-full py-4 rounded-2xl overflow-hidden"
                    @click="onCollaborateClick"
                  >
                    <!-- Animated gradient background -->
                    <span class="absolute inset-0 bg-gradient-to-r from-[#050254] via-[#49042f] to-[#050254] group-active:scale-95 transition-transform duration-200" />
                    <!-- Shine effect -->
                    <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <!-- Glow -->
                    <span class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#050254] via-[#49042f] to-[#050254] blur-xl" />
                    <!-- Text -->
                    <span class="relative flex items-center justify-center gap-2 text-base font-semibold text-white">
                      <UIcon name="lucide-sparkles" class="w-5 h-5" />
                      {{ t('Mari Berkolaborasi!') }}
                    </span>
                  </button>
                </Transition>
              </div>
            </div>
          </GlowingEffect>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
/* Custom transition duration */
.duration-400 {
  transition-duration: 400ms;
}
</style>