import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import analyze from "rollup-plugin-analyzer";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      plugins: [analyze({ limit: 10 })],
    },
  },
});
