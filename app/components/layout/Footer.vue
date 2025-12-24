<!--
  Footer Component
  TODO:
  - [ ] Add social media links (Twitter, LinkedIn, Instagram)
  - [ ] Add navigation links (About, Contact, Privacy Policy)
  - [ ] Add language switcher
  - [ ] Add theme toggle button
  - [ ] Make footer responsive for mobile
  - [ ] Add sitemap links
  - [ ] Add company logo/branding
-->
<script setup lang="ts">
  const year = new Date().getFullYear()
  </script>
  
  <template>
    <UFooter class="relative border-t border-solid border-white/10 bg-gray-100 dark:bg-gray-900">
      <!-- TOP CONTENT -->
      <div class="max-w-7xl mx-auto px-2 py-2">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
  
          <!-- LOGO & ADDRESS -->
          <div class="space-y-2">
            <NuxtImg src="/qinaryan.png" width="40" height="40" alt="qinaryan" />
              <p class="font-['Baumans'] text-xl text-muted dark:text-white items-center">
                QINARYAN
              </p>
  
            <p class="text-sm text-muted dark:text-white leading-relaxed max-w-sm">
              Gedung Fakultas,
              Sleman, DI Yogyakarta
            </p>
  
            <p class="text-sm text-muted dark:text-white">
              Qinaryan@gmail.com
            </p>
          </div>
  
          <!-- EMPTY SPACER (IMPORTANT) -->
          <div class="hidden md:block"></div>
  
          <!-- PAGE -->
          <div>
            <h3 class="font-semibold mb-4">Page</h3>
            <ul class="space-y-3 text-sm text-muted dark:text-white">
              <li><NuxtLink class="hover:text-black dark:hover:text-gray-400" to="#">About Us</NuxtLink></li>
              <li><NuxtLink class="hover:text-black dark:hover:text-gray-400" to="#">Our Services</NuxtLink></li>
              <li><NuxtLink class="hover:text-black dark:hover:text-gray-400" to="#">Portfolio</NuxtLink></li>
            </ul>
          </div>
  
          <!-- SUPPORT -->
          <div>
            <h3 class="font-semibold mb-4">Support</h3>
            <ul class="space-y-3 text-sm text-muted dark:text-white">
              <li><NuxtLink class="hover:text-black dark:hover:text-gray-400" to="#">FAQs</NuxtLink></li>
              <li><NuxtLink class="hover:text-black dark:hover:text-gray-400" to="#">Contact</NuxtLink></li>
              <li><NuxtLink class="hover:text-black dark:hover:text-gray-400" to="#">Privacy and Policy</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>
  
      <!-- DIVIDER -->
      <div class="border-t border-white/10"></div>
  
      <!-- BOTTOM BAR -->
      <template #bottom>
        <p class="text-muted text-sm justify-self-center-safe dark:text-white ">
          © {{ year }} Copyright - Qinaryan. All rights reserved.
        </p>
      </template>
  
      <template #right>
        <div class="grid md:grid-cols-2 items-center gap-4 px-4 py-4">
          <UButton
            icon="i-simple-icons-instagram"
            variant="ghost"
            color="neutral"
            aria-label="Instagram"
          />
          <UButton
            icon="i-heroicons-phone"
            variant="ghost"
            color="neutral"
            aria-label="Phone"
          />
          <UButton
            icon="i-simple-icons-github"
            variant="ghost"
            color="neutral"
            aria-label="GitHub"
          />
          <UButton
            icon="i-simple-icons-linkedin"
            variant="ghost"
            color="neutral"
            aria-label="LinkedIn"
          />
        </div>
      </template>
    </UFooter>
  </template>
  