import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";

export default defineConfig({
  plugins: [
    pluginVue(),
  ],
  tools: {
    postcss: (options) => {
    },
  },
  source: {
    include: ["src/**/*.{vue,js,ts,jsx,tsx,css,scss,sass,less,styl}"],
  },
});