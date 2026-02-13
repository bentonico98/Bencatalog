import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  runtimeConfig: {
    public: {
      RESEND_API_KEY: process.env.NUXT_RESEND_API_KEY,
      name: process.env.NUXT_NAME,
      year: process.env.NUXT_YEAR,
      number: process.env.NUXT_NUMBER,
      email: process.env.NUXT_EMAIL,
      sender: process.env.NUXT_SENDER_EMAIL,
      country: process.env.NUXT_COUNTRY,
      language: process.env.NUXT_LANGUAGE,
      picture: process.env.NUXT_PICTURE,
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
