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
          { code: "id", file: "id.ts", iso: "id-ID", language: "id" },
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
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      // Mengambil font Baumans (alternatif Bauhaus)
      Baumans: true,
      // Opsional: Font pendamping untuk body text
      Roboto: true 
    },
    display: 'swap' // Performa loading lebih baik
  },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
