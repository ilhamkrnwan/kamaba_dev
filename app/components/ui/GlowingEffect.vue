<script setup lang="ts">
interface Props {
  glowOpacity?: number
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  glowOpacity: 0.6,
  disabled: false
})

const containerRef = ref<HTMLElement | null>(null)
const mouseX = ref(0)
const mouseY = ref(0)
const isHovering = ref(false)

const handleMouseMove = (e: MouseEvent) => {
  if (props.disabled || !containerRef.value) return
  
  const rect = containerRef.value.getBoundingClientRect()
  mouseX.value = e.clientX - rect.left
  mouseY.value = e.clientY - rect.top
  isHovering.value = true
}

const handleMouseLeave = () => {
  isHovering.value = false
}
</script>

<template>
  <div 
    ref="containerRef"
    class="relative"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="pointer-events-none absolute -inset-[1px] rounded-[inherit] opacity-0 transition-opacity duration-500"
      :style="{
        opacity: isHovering && !disabled ? glowOpacity : 0,
        background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.1), transparent 40%)`
      }"
    />
    
    <slot />
  </div>
</template>