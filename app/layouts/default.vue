<template>
  <div class="relative min-h-screen">
    <!-- Animated grid background -->
    <div
      class="pointer-events-none fixed inset-0 z-0 select-none bg-[size:40px_40px] bg-repeat"
      :class="[
        'dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]',
        'bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]'
      ]"
    />
    <AppFloatingNavbar />
    <div class="relative z-10 w-full mx-auto min-h-screen">
      <slot />
    </div>
    <LayoutFooter />
  </div>
</template>
