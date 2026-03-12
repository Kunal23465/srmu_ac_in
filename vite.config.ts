import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  ssr: {
    noExternal: ["antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", "rc-tree", "rc-table", "rc-field-form", "rc-input", "rc-select", "rc-textarea", "rc-tooltip"],
  },

  build: {
    rollupOptions: {
      external: [],
    },
  },
});
