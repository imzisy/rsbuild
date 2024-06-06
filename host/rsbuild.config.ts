import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";
const deps = require("./package.json").dependencies;
const path = require("path");

export default defineConfig({
  moduleFederation: {
    options: {
      name: "host",
      remotes: {
        "remote": 'remote@http://localhost:3000/remoteEntry.js',
      },    
      shared: {
        vue: {
          eager: true,
          singleton: true,
          requiredVersion: deps.vue,
        },
      }
    },
  },
  plugins: [pluginVue()],
  server: {
    port: 3001,
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

});
