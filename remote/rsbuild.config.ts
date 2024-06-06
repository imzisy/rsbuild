import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";
const deps = require("./package.json").dependencies;
const path = require("path");

export default defineConfig({
  plugins: [pluginVue()],
  server: {
    port: 3000,
  },
  tools: {
    rspack: {
      output: {
        publicPath: "/",
      },
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "src"),
        },
      },
    },
  },
  moduleFederation: {
    options: {
      name: 'remote',
      exposes: {
        './Button': './src/Button',
      },
      filename: 'remoteEntry.js',
      shared: {
        vue: {
          eager: true,
          singleton: true,
          requiredVersion: deps.vue,
        },
      }
    },
  },
});
