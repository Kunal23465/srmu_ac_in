import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

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

  optimizeDeps: {
    include: ["antd", "@ant-design/icons", "@ant-design/icons-svg"],
  },

  build: {
    target: "node20",
  },

  server: {
    host: "0.0.0.0",
    port: 3031,
  },
});
