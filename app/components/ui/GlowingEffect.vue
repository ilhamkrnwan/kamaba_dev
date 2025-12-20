<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

/**
 * GlowingEffect - Inspired by Aceternity UI
 * A border glowing effect that adapts to any container or card
 */

interface Props {
  blur?: number
  inactiveZone?: number
  proximity?: number
  spread?: number
  variant?: 'default' | 'white'
  glow?: boolean
  disabled?: boolean
  movementDuration?: number
  borderWidth?: number
}

const props = withDefaults(defineProps<Props>(), {
  blur: 0,
  inactiveZone: 0.7,
  proximity: 0,
  spread: 20,
  variant: 'default',
  glow: false,
  disabled: false,
  movementDuration: 2,
  borderWidth: 1
})

const containerRef = ref<HTMLDivElement | null>(null)
const lastPosition = ref({ x: 0, y: 0 })
const animationFrameRef = ref<number>(0)
const angleAnimationRef = ref<number>(0)
const startAngle = ref(0)
const isActive = ref(false)

const handleMove = (e?: MouseEvent | PointerEvent | { x: number; y: number }) => {
  if (!containerRef.value || props.disabled) return

  if (animationFrameRef.value) {
    cancelAnimationFrame(animationFrameRef.value)
  }

  animationFrameRef.value = requestAnimationFrame(() => {
    const element = containerRef.value
    if (!element) return

    const { left, top, width, height } = element.getBoundingClientRect()
    const mouseX = e && 'x' in e ? e.x : (e as MouseEvent)?.clientX ?? lastPosition.value.x
    const mouseY = e && 'y' in e ? e.y : (e as MouseEvent)?.clientY ?? lastPosition.value.y

    if (e) {
      lastPosition.value = { x: mouseX, y: mouseY }
    }

    const center = [left + width * 0.5, top + height * 0.5]
    const distanceFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1])
    const inactiveRadius = 0.5 * Math.min(width, height) * props.inactiveZone

    if (distanceFromCenter < inactiveRadius) {
      isActive.value = false
      return
    }

    const activeCheck =
      mouseX > left - props.proximity &&
      mouseX < left + width + props.proximity &&
      mouseY > top - props.proximity &&
      mouseY < top + height + props.proximity

    isActive.value = activeCheck

    if (!activeCheck) return

    const currentAngle = startAngle.value
    let targetAngle = (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI + 90

    const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180
    const newAngle = currentAngle + angleDiff

    // Cancel previous animation
    if (angleAnimationRef.value) {
      cancelAnimationFrame(angleAnimationRef.value)
    }

    // Animate to new angle
    const startTime = performance.now()
    const duration = props.movementDuration * 1000
    const animateAngle = (time: number) => {
      const elapsed = time - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      startAngle.value = currentAngle + (newAngle - currentAngle) * eased
      
      if (progress < 1) {
        angleAnimationRef.value = requestAnimationFrame(animateAngle)
      }
    }
    angleAnimationRef.value = requestAnimationFrame(animateAngle)
  })
}

const handlePointerMove = (e: PointerEvent) => handleMove(e)
const handleScroll = () => handleMove()

onMounted(() => {
  if (props.disabled) return
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.body.addEventListener('pointermove', handlePointerMove, { passive: true })
})

onUnmounted(() => {
  if (animationFrameRef.value) {
    cancelAnimationFrame(animationFrameRef.value)
  }
  if (angleAnimationRef.value) {
    cancelAnimationFrame(angleAnimationRef.value)
  }
  window.removeEventListener('scroll', handleScroll)
  document.body.removeEventListener('pointermove', handlePointerMove)
})

const gradientStyle = computed(() => {
  if (props.variant === 'white') {
    return `repeating-conic-gradient(
      from 236.84deg at 50% 50%,
      rgba(255,255,255,0.8),
      rgba(255,255,255,0.8) calc(25% / 5)
    )`
  }
  return `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
    radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
    radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%), 
    radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
    repeating-conic-gradient(
      from 236.84deg at 50% 50%,
      #dd7bbb 0%,
      #d79f1e calc(25% / 5),
      #5a922c calc(50% / 5), 
      #4c7894 calc(75% / 5),
      #dd7bbb calc(100% / 5)
    )`
})

const cssVars = computed(() => ({
  '--blur': `${props.blur}px`,
  '--spread': props.spread,
  '--start': startAngle.value,
  '--active': (isActive.value || props.glow) ? 1 : 0,
  '--glowingeffect-border-width': `${props.borderWidth}px`,
  '--gradient': gradientStyle.value
}))
</script>

<template>
  <div class="relative">
    <!-- Fallback border when disabled -->
    <div
      :class="[
        'pointer-events-none absolute -inset-px rounded-[inherit] border opacity-0 transition-opacity duration-300',
        glow && 'opacity-100',
        variant === 'white' && 'border-white/20',
        variant === 'default' && 'border-neutral-200 dark:border-neutral-800',
        disabled && '!block'
      ]"
    />
    
    <!-- Glowing effect container -->
    <div
      ref="containerRef"
      :style="cssVars"
      :class="[
        'pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity duration-300',
        glow && 'opacity-100',
        blur > 0 && 'blur-[var(--blur)]',
        disabled && '!hidden'
      ]"
    >
      <div class="glow-inner rounded-[inherit]" />
    </div>
    
    <slot />
  </div>
</template>

<style scoped>
.glow-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

.glow-inner::after {
  content: "";
  position: absolute;
  inset: calc(-1 * var(--glowingeffect-border-width));
  border-radius: inherit;
  border: var(--glowingeffect-border-width) solid transparent;
  background: var(--gradient);
  background-attachment: fixed;
  opacity: var(--active);
  transition: opacity 0.3s ease;
  
  /* Modern mask syntax */
  mask-clip: padding-box, border-box;
  mask-composite: intersect;
  mask-image: linear-gradient(#0000, #0000), 
    conic-gradient(
      from calc((var(--start) - var(--spread)) * 1deg),
      transparent 0deg,
      #fff,
      transparent calc(var(--spread) * 2deg)
    );
  
  /* Webkit fallback */
  -webkit-mask-clip: padding-box, border-box;
  -webkit-mask-composite: source-in;
  -webkit-mask-image: linear-gradient(#0000, #0000), 
    conic-gradient(
      from calc((var(--start) - var(--spread)) * 1deg),
      transparent 0deg,
      #fff,
      transparent calc(var(--spread) * 2deg)
    );
}
</style>