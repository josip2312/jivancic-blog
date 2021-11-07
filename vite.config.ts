import { defineConfig } from "vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
  plugins: [
    Components({
      dts: true,
      dirs: ["src/components", ".vitepress/theme"],
    }),
  ],
});
