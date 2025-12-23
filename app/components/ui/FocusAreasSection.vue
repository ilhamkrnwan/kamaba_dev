<template>
  <section class="py-20 md:py-32">
    <div class="container mx-auto px-4">
      <UiSectionHeading
        :title="title"
        :subtitle="subtitle"
        :badge="badge"
        size="md"
        :show-line="true"
      />

      <!-- Bento Grid Custom Layout -->
      <div class="mx-auto max-w-6xl mt-12 md:mt-16">
        <!-- Grid Container -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Card 1: Full Web Development -->
          <div
            class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            <div class="relative z-10">
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Full Web<br />Development
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                One-stop Website Development Solution.
              </p>
            </div>
            <div class="mt-8">
              <div class="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-xl flex items-center justify-center">
                <UIcon name="i-lucide-globe" class="text-6xl text-gray-400 dark:text-gray-600" />
              </div>
            </div>
          </div>

          <!-- Card 2: AI & ML Solutions -->
          <div
            class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            <div class="relative z-10">
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                AI & ML Solutions
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                AI/ML consulting and model dev, Data analysis, Performance tracking
              </p>
            </div>
            <div class="mt-8">
              <div class="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-xl flex items-center justify-center">
                <UIcon name="i-lucide-cpu" class="text-6xl text-gray-400 dark:text-gray-600" />
              </div>
            </div>
          </div>

          <!-- Card 3: App Development Package -->
          <div
            class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            <div class="relative z-10">
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                App Development<br />Package
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Provide customized mobile application development services to enhance user experience
              </p>
            </div>
            <div class="mt-8">
              <div class="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-xl flex items-center justify-center">
                <UIcon name="i-lucide-smartphone" class="text-6xl text-gray-400 dark:text-gray-600" />
              </div>
            </div>
          </div>

          <!-- Card 4: Product Development (Spans 2 columns on large screens) -->
          <div
            class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 lg:col-span-2 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div class="relative z-10">
                <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Product Development<br />(Cooperation)
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Provide innovative product solutions
                </p>
              </div>
              <div>
                <div class="aspect-[16/10] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-xl flex items-center justify-center">
                  <UIcon name="i-lucide-lightbulb" class="text-6xl text-gray-400 dark:text-gray-600" />
                </div>
              </div>
            </div>
          </div>

          <!-- Card 5: Cybersecurity Services -->
          <div
            class="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            <div class="relative z-10">
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Cybersecurity<br />services
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Protect digital assets and reduce security risks
              </p>
            </div>
            <div class="mt-8">
              <div class="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-xl flex items-center justify-center">
                <UIcon name="i-lucide-shield-check" class="text-6xl text-gray-400 dark:text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  badge?: string
}

withDefaults(defineProps<Props>(), {
  title: 'We Offer Custom Digital Services to Build on Your Ideas',
  subtitle: 'Comprehensive technology solutions tailored to your business needs',
  badge: 'Services',
})
</script>

<style scoped>
/* Smooth hover transitions */
.group:hover {
  transform: translateY(-4px);
}

/* Icon animations */
.group:hover :deep(.iconify) {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
</style>
