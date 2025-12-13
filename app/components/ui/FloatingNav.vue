<template>
  <Transition name="floating-nav">
    <div
      v-if="visible"
      :class="cn(
        'flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4',
        className
      )"
    >
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
      
      <button 
        class="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
        @click="onLoginClick"
      >
        <span>Login</span>
        <span class="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
      </button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '../../utils/cn'

export interface NavItem {
  name: string
  link: string
  icon?: any
}

interface Props {
  navItems: NavItem[]
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  className: ''
})

const emit = defineEmits<{
  login: []
}>()

const visible = ref(false)
let lastScrollY = 0
let ticking = false

const updateNavVisibility = () => {
  const scrollY = window.scrollY
  const scrollThreshold = window.innerHeight * 0.05

  if (scrollY < scrollThreshold) {
    visible.value = false
  } else {
    const direction = scrollY - lastScrollY
    
    if (direction < 0) {
      // Scrolling up
      visible.value = true
    } else {
      // Scrolling down
      visible.value = false
    }
  }

  lastScrollY = scrollY
  ticking = false
}

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(updateNavVisibility)
    ticking = true
  }
}

const onLoginClick = () => {
  emit('login')
}

onMounted(() => {
  lastScrollY = window.scrollY
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
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
