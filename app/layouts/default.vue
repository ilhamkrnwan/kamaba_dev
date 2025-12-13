<template>
  <div>
    <AppFloatingNavbar />
    <main class="min-h-[calc(100vh-129px)] p-4">
      <div class="w-full lg:w-3/4 lg:mx-auto">
        <slot />
      </div>
    </main>
    <LayoutFooter />
  </div>
</template>
