import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],

  ssr: {
    noExternal: ["antd", "react-router", "react-router-dom"],
  },

  optimizeDeps: {
    include: ["antd"],
  },

  server: {
    host: "10.8.20.38",
    port: 3031,
    middlewareMode: false,
  },
});
