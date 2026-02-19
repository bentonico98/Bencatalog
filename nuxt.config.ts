import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL,
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_APP_BASE_URL,
    },
  },
  modules: ["@formkit/nuxt"],
  formkit: {
    autoImport: true,
    configFile: "./formkit.config.ts",
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
