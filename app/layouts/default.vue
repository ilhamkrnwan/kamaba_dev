<template>
  <div class="relative min-h-screen overflow-x-hidden overflow-y-auto">
    <!-- Animated Background Component -->
    <CommonAnimatedBackground />
    <AppFloatingNavbar />
    <main class="relative z-10 w-full mx-auto">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>
