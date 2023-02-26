// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      title: "KIT's WordPress Blog",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // we can use anywhere inside the project
  runtimeConfig: {
    public : {
      wpApiUrl: process.env.WP_URI,
    }
  }
});
