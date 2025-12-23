<template>
  <div class="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden">
    <!-- Grid Pattern -->
    <div
      class="absolute inset-0 bg-[size:40px_40px] bg-repeat"
      :class="[
        'dark:bg-[linear-gradient(to_right,oklch(0.274_0.006_286.033)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.274_0.006_286.033)_1px,transparent_1px)]',
        'bg-[linear-gradient(to_right,oklch(0.92_0.004_286.32)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.92_0.004_286.32)_1px,transparent_1px)]'
      ]"
    />

    <!-- Top Left Gradient Blob - Navy Blue -->
    <div
      class="absolute -top-40 -left-40 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-[#2c3e5f]/35 via-[#2c3e5f]/18 to-transparent blur-3xl dark:from-[#2c3e5f]/28 dark:via-[#2c3e5f]/12"
    />

    <!-- Top Right Gradient Blob - Burgundy/Maroon -->
    <div
      class="absolute -top-20 -right-20 h-[450px] w-[450px] rounded-full bg-gradient-to-bl from-[#8b2f39]/30 via-[#8b2f39]/15 to-transparent blur-3xl dark:from-[#8b2f39]/25 dark:via-[#8b2f39]/10"
    />

    <!-- Bottom Left Gradient Blob - Navy Blue -->
    <div
      class="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#2c3e5f]/30 via-[#3d5170]/18 to-transparent blur-3xl dark:from-[#2c3e5f]/25 dark:via-[#3d5170]/12"
    />

    <!-- Bottom Right Gradient Blob - Burgundy/Maroon -->
    <div
      class="absolute -bottom-40 -right-40 h-[550px] w-[550px] rounded-full bg-gradient-to-tl from-[#8b2f39]/35 via-[#a43d49]/18 to-transparent blur-3xl dark:from-[#8b2f39]/28 dark:via-[#a43d49]/12"
    />

    <!-- Center Subtle Glow -->
    <div
      class="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-[#2c3e5f]/12 via-[#8b2f39]/6 to-transparent blur-2xl dark:from-[#2c3e5f]/10 dark:via-[#8b2f39]/5"
    />

    <!-- Animated Floating Orbs -->
    <div
      class="animate-float-slow absolute left-1/4 top-1/3 h-2.5 w-2.5 rounded-full bg-[#2c3e5f]/50 blur-sm dark:bg-[#2c3e5f]/35"
    />
    <div
      class="animate-float-medium absolute right-1/3 top-1/4 h-3 w-3 rounded-full bg-[#8b2f39]/45 blur-sm dark:bg-[#8b2f39]/30"
    />
    <div
      class="animate-float-fast absolute bottom-1/3 left-1/3 h-2.5 w-2.5 rounded-full bg-[#2c3e5f]/45 blur-sm dark:bg-[#2c3e5f]/30"
    />

    <!-- Top gradient fade -->
    <div
      class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-white/80 to-transparent dark:from-gray-950 dark:via-gray-950/80"
    />

    <!-- Bottom gradient fade -->
    <div
      class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-gray-950 dark:via-gray-950/80"
    />
  </div>
</template>

<script setup lang="ts">
// Animated background component with grid pattern and gradient effects
</script>

<style scoped>
/* Radial gradient utility */
.bg-gradient-radial {
  background: radial-gradient(circle, var(--tw-gradient-stops));
}

/* Floating animations */
@keyframes float-slow {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-20px) translateX(10px);
  }
  50% {
    transform: translateY(-10px) translateX(-10px);
  }
  75% {
    transform: translateY(-30px) translateX(5px);
  }
}

@keyframes float-medium {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(-15px) translateX(-15px);
  }
  66% {
    transform: translateY(-25px) translateX(10px);
  }
}

@keyframes float-fast {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(-5px);
  }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 6s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-fast 4s ease-in-out infinite;
}
</style>
