import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

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
  },
});
