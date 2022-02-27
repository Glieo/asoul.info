import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData: `@use "./src/styles/index.scss" as *;`,
      },
    },
  },

  plugins: [
    vue(),
    VitePWA({
      includeAssets: [
        "404.html",
        "robots.txt",
        "favicon.ico",
        "browserconfig.xml",
        "img/favicon.svg",
        "img/favicon_404.ico",
        "img/favicon-16x16.png",
        "img/favicon-32x32.png",
        "img/mstile-150x150.png",
        "img/apple-touch-icon.png",
      ],
      manifest: {
        name: "A-Soul Info",
        short_name: "A-Soul Info",
        description: "A website that displays information about A-Soul.",
        theme_color: "#ffffff",
        icons: [
          {
            src: "img/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "img/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "img/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
    AutoImport({
      resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    }),
  ],

  base: "./",
  build: {
    assetsInlineLimit: 262144,
  },
  server: {
    host: true,
  },
});
