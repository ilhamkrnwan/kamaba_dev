// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || "http://localhost:3000/api",
    },
  },
  // ssr: true,
  routeRules: {
    "/": { redirect: "/home" },
  },
  alias: {
    "@": "/",
    "@components": "./app/components",
    "@composables": "./composables",
    "@constants": "./constants",
    "@stores": "./stores",
    "@types": "./types",
    "@utils": "./utils",
    "@modules": "./modules",
    "@assets": "./app/assets",
    "@layouts": "./app/layouts",
    "@pages": "./app/pages",
    "@i18n": "./i18n",
  },
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
