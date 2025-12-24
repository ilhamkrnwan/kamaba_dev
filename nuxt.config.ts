// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || "http://localhost:3000/api",
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://qinaryan.com",
    },
  },
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
          { code: "id", file: "id.json", iso: "id-ID", language: "id" },
          { code: "en", file: "en.json", iso: "en-US", language: "en" },
        ],
        seo: true,
        lazy: true,
        langDir: "languages/",
        defaultLocale: "id",
        strategy: "no_prefix",
        baseUrl: process.env.BASE_URL,
      },
    ],
    "@nuxt/image",
    "nuxt-og-image",
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/content",
    '@nuxtjs/google-fonts',
    '@vueuse/motion/nuxt',
  ],
  googleFonts: {
    families: {
      Baumans: true,
      Roboto: true 
    },
    display: 'swap' 
  },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
