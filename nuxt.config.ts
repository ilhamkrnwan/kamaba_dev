// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,
  modules: [
    [
      "@nuxtjs/i18n",
      {
        locales: [
          { code: "vi", file: "vi.ts", iso: "vi-VN", language: "vi" },
          { code: "en", file: "en.ts", iso: "en-US", language: "en" },
        ],
        seo: true,
        lazy: true,
        langDir: "locales/",
        defaultLocale: "en",
        strategy: "no_prefix",
        baseUrl: process.env.BASE_URL,
      },
    ],
    "@nuxt/image",
    "nuxt-og-image",
    "@nuxt/eslint",
    "@nuxt/ui",
  ],
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
