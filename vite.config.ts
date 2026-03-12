import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],

  ssr: {
    noExternal: ["antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", "rc-select", "rc-tree", "rc-field-form"],
  },

  optimizeDeps: {
    include: ["antd", "rc-util"],
  },

  server: {
    host: "10.8.20.38",
    port: 3031,
  },
});
