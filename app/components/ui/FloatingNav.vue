<template>
  <Transition name="floating-nav">
    <div
      v-if="visible"
      :class="cn(
        'flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-4 py-2 items-center justify-center space-x-3',
        className
      )"
    >
      <!-- Logo -->
      <div class="flex items-center">
        <slot name="logo" />
      </div>

      <!-- Divider -->
      <div class="h-6 w-px bg-neutral-200 dark:bg-neutral-700" />
      
      <!-- Nav Items -->
      <NuxtLink
        v-for="(navItem, idx) in navItems"
        :key="`link-${idx}`"
        :to="navItem.link"
        :class="cn(
          'relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500'
        )"
      >
        <span class="block sm:hidden">
          <component :is="navItem.icon" v-if="navItem.icon" />
        </span>
        <span class="hidden sm:block text-sm">{{ navItem.name }}</span>
      </NuxtLink>

      <!-- Divider -->
      <div class="h-6 w-px bg-neutral-200 dark:bg-neutral-700" />
      
      <!-- Theme Button -->
      <ColorModeButton />

      <!-- Language Buttons -->
      <button
        v-for="locale in availableLocales"
        :key="locale.code"
        class="text-xs font-medium px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        @click="$emit('changeLocale', locale.code)"
      >
        {{ locale.code.toUpperCase() }}
      </button>

      <!-- Divider -->
      <div class="h-6 w-px bg-neutral-200 dark:bg-neutral-700" />
      
      <!-- Login Button -->
      <button 
        class="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
        @click="onLoginClick"
      >
        <span>Login</span>
        <span class="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
      </button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '../../utils/cn'
import ColorModeButton from '../common/ColorModeButton.vue'

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
  className?: string
  alwaysVisible?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  alwaysVisible: true
})

const emit = defineEmits<{
  login: []
  changeLocale: [localeCode: string]
}>()

// Always visible by default
const visible = ref(true)

const onLoginClick = () => {
  emit('login')
}
</script>

<style scoped>
.floating-nav-enter-active,
.floating-nav-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.floating-nav-enter-from,
.floating-nav-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
</style>
