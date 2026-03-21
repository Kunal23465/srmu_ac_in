import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    host: "0.0.0.0",
    port: 3031,
    allowedHosts: ["test.srmu.ac.in", ".srmu.ac.in"],
  },

  optimizeDeps: {
    include: ["antd", "@ant-design/icons", "@ant-design/icons-svg"],
  },

  ssr: {
    noExternal: [
      "antd",
      "@ant-design/icons",
      "@ant-design/icons-svg",
      "rc-input",
      "rc-util",
      "rc-field-form",
      "rc-pagination",
      "rc-picker",
      "rc-select",
      "rc-tree",
      "rc-table",
      "react-helmet-async",
    ],
  },

  build: {
    target: "node20",
    ssrManifest: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("antd") || id.includes("@ant-design") || id.includes("rc-")) {
              return "antd-vendor";
            }

            if (id.includes("@reduxjs/toolkit") || id.includes("react-redux") || id.includes("redux")) {
              return "redux-vendor";
            }

            if (id.includes("embla-carousel") || id.includes("framer-motion") || id.includes("react-countup")) {
              return "ui-vendor";
            }

            return "vendor";
          }

          return undefined;
        },
      },
    },
  },
});
