// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxtjs/i18n",
  ],
  nitro: {
    firebase: {
      gen: 2,
    },
  },
  i18n: {
    // Module Options
    lazy: true, // Carga perezosa de traducciones
    langDir: "locales", // Directorio donde están los archivos de traducción
    strategy: "no_prefix", // Usa prefijos de URL para locales, excepto para el locale predeterminado
    defaultLocale: "en", // Idioma predeterminado
    locales: [
      { code: "en", iso: "en-US", file: "en.json" }, // Inglés
      { code: "es", iso: "es-CO", file: "es.json" }, // Español
    ],
  },
  build: {
    transpile: ["vuetify"], // Asegúrate de que Vuetify se transpile adecuadamente
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
    },
  },
});
