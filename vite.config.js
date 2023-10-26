import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import raw from "vite-raw-plugin";

export default defineConfig({
  plugins: [
    vue(),
    raw({
      fileRegex: /\.md$/
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});