<script setup lang="ts">
import GlowingEffect from '~/components/ui/GlowingEffect.vue'

const { t } = useI18n()
const year = new Date().getFullYear()

const socialLinks = [
  { icon: 'lucide-instagram', label: 'Instagram', href: 'https://instagram.com/ilhamkrnwan__' },
  { icon: 'lucide-phone', label: 'Phone', href: 'https://wa.me/6287761296676' },
  { icon: 'lucide-github', label: 'GitHub', href: 'https://github.com/ilhamkrnwan' },
  { icon: 'lucide-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/ilham-kurniawan-9667891b7/' },
]

const pageLinks = [
  { name: t('Beranda'), link: '/home' },
  { name: t('Portofolio'), link: '/portofolio' },
]

const supportLinks = [
  { name: 'FAQ', link: '/home#faq' },
  { name: t('Hubungi Kami'), link: '/home#contact' },
]
</script>

<template>
  <footer class="relative border-t border-neutral-200/50 dark:border-white/[0.1] bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl">
    <!-- Background gradient decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-[#050254]/10 to-[#49042f]/10 blur-3xl" />
      <div class="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-[#49042f]/10 to-[#050254]/10 blur-3xl" />
    </div>

    <div class="relative max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

        <!-- LOGO & INFO -->
        <div class="md:col-span-5 space-y-6">
          <GlowingEffect
            :spread="40"
            :glow="false"
            :disabled="false"
            :proximity="64"
            :inactive-zone="0.01"
            :border-width="1"
            class="rounded-2xl"
          >
            <div class="p-6 rounded-2xl border border-neutral-200/50 dark:border-white/[0.1] bg-neutral-50/50 dark:bg-neutral-900/50">
              <NuxtLinkLocale to="/" class="flex items-center gap-3 mb-4">
                <NuxtImg src="/NataKarsa.png" width="30" height="20" alt="NataKarsa" class="rounded-xl" />
                <p class="font-['Baumans'] text-2xl text-neutral-800 dark:text-white">
                  NataKarsa
                </p>
              </NuxtLinkLocale>

              <p class="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                {{ t('Komunitas pengembang digital yang berfokus pada pengembangan teknologi modern untuk kebutuhan pendidikan, organisasi, dan masyarakat.') }}
              </p>

              <div class="space-y-2">
                <div class="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                  <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-100 dark:bg-white/10">
                    <UIcon name="lucide-map-pin" class="w-4 h-4 text-[#3d39a1]" />
                  </div>
                  <span>Sleman, DI Yogyakarta</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                  <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-100 dark:bg-white/10">
                    <UIcon name="lucide-mail" class="w-4 h-4 text-[#3d39a1]" />
                  </div>
                  <span>NataKarsa@gmail.com</span>
                </div>
              </div>
            </div>
          </GlowingEffect>
        </div>

        <!-- SPACER -->
        <div class="hidden md:block md:col-span-1" />

        <div class="md:col-span-6 grid grid-cols-2 md:flex md:flex-row gap-8 md:gap-0">
          <!-- NAVIGATION LINKS -->
          <div class="w-full md:w-1/2">
            <h3 class="text-sm font-semibold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="w-8 h-0.5 bg-gradient-to-r from-[#050254] to-[#49042f] rounded-full" />
              {{ t('Beranda') }}
            </h3>
            <ul class="space-y-3">
              <li v-for="(link, idx) in pageLinks" :key="idx">
                <NuxtLink 
                  :to="link.link"
                  class="group flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all duration-200"
                >
                  <UIcon 
                    name="lucide-chevron-right" 
                    class="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#3d39a1]" 
                  />
                  <span class="group-hover:translate-x-1 transition-transform duration-200">{{ link.name }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- SUPPORT LINKS & SOCIAL LINKS -->
          <div class="w-full md:w-1/2">
            <h3 class="text-sm font-semibold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="w-8 h-0.5 bg-gradient-to-r from-[#050254] to-[#49042f] rounded-full" />
              Support
            </h3>
            <ul class="space-y-3">
              <li v-for="(link, idx) in supportLinks" :key="idx">
                <NuxtLink 
                  :to="link.link"
                  class="group flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all duration-200"
                >
                  <UIcon 
                    name="lucide-chevron-right" 
                    class="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#3d39a1]" 
                  />
                  <span class="group-hover:translate-x-1 transition-transform duration-200">{{ link.name }}</span>
                </NuxtLink>
              </li>
            </ul>

            <!-- Social Links -->
            <div class="mt-8">
              <h3 class="text-sm font-semibold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                <span class="w-8 h-0.5 bg-gradient-to-r from-[#050254] to-[#49042f] rounded-full" />
                Social
              </h3>
              <div class="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <a 
                  v-for="(social, idx) in socialLinks" 
                  :key="idx"
                  :href="social.href"
                  :aria-label="social.label"
                  class="group flex items-center justify-center w-10 h-10 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-white/5 hover:bg-gradient-to-br hover:from-[#050254] hover:to-[#49042f] hover:border-transparent transition-all duration-300"
                >
                  <UIcon 
                    :name="social.icon" 
                    class="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-white transition-colors duration-200" 
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- BOTTOM BAR -->
    <div class="relative border-t border-neutral-200/50 dark:border-white/[0.1]">
      <div class="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <!-- Copyright -->
          <p class="text-sm text-neutral-500 dark:text-neutral-500 text-center md:text-left">
            © {{ year }} NataKarsa. All rights reserved.
          </p>

          <!-- CTA Button -->
          <button
            class="group relative px-6 py-2.5 rounded-full overflow-hidden"
            @click="navigateTo('/home#contact')"
          >
            <span class="absolute inset-0 bg-gradient-to-r from-[#050254] via-[#49042f] to-[#050254] transition-all duration-300 group-hover:scale-105" />
            <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span class="relative flex items-center gap-2 text-sm font-semibold text-white">
              <UIcon name="lucide-sparkles" class="w-4 h-4" />
              {{ t('Mari Berkolaborasi!') }}
            </span>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>
  