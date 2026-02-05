import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  runtimeConfig: {
    public: {
      RESEND_API_KEY: process.env.NUXT_RESEND_API_KEY,
      NUXT_NAME: process.env.NUXT_NAME,
      NUXT_YEAR: process.env.NUXT_YEAR,
      NUXT_NUMBER: process.env.NUXT_NUMBER,
      NUXT_EMAIL: process.env.NUXT_EMAIL,
      NUXT_COUNTRY: process.env.NUXT_COUNTRY,
      NUXT_LANGUAGE: process.env.NUXT_LANGUAGE,
      NUXT_PICTURE: process.env.NUXT_PICTURE,
    },
  },
  modules: ["@formkit/nuxt"],
  formkit: {
    autoImport: true,
  },
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    plugins: [vuetify({ autoImport: true })],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: ["~/assets/css/main.css", "~/assets/css/animation.css"],
});
