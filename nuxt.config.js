import { apiEndpoint } from "./sm.json";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "medallia-test",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    "~/assets/css/fonts.css",
    "~/assets/css/reset.css",
    "~/assets/scss/main.scss",
  ],

  styleResources: {
    scss: "./assets/scss/settings.scss",
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  buildModules: ["@nuxtjs/prismic"],
  prismic: {
    endpoint: apiEndpoint,
    modern: true,
    /* see configuration for more */
  },
  build: {
    transpile: ["@prismicio/vue"],
  },
};
