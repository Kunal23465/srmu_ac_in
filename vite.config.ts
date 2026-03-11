import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  ssr: {
    noExternal: ["react-router", "react-router-dom"],
  },
  server: {
    host: "10.8.20.38",
    port: 3031,
    middlewareMode: false,
  },
});
