import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const autoOptimizeImageTags = ({ types: t }: any) => ({
  name: "auto-optimize-image-tags",
  visitor: {
    JSXOpeningElement(path: any) {
      const nodeName = path.node.name;

      if (nodeName?.type !== "JSXIdentifier" || nodeName.name !== "img") {
        return;
      }

      const attrs = path.node.attributes;
      const hasAttribute = (name: string) => attrs.some((attr: any) => attr.type === "JSXAttribute" && attr.name?.name === name);

      const shouldSkipLazyLoading = hasAttribute("loading") || hasAttribute("data-no-lazy") || hasAttribute("fetchpriority") || hasAttribute("fetchPriority");

      if (!shouldSkipLazyLoading) {
        attrs.push(t.jsxAttribute(t.jsxIdentifier("loading"), t.stringLiteral("lazy")));
      }

      if (!hasAttribute("decoding")) {
        attrs.push(t.jsxAttribute(t.jsxIdentifier("decoding"), t.stringLiteral("async")));
      }
    },
  },
});

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react({
      babel: {
        plugins: [autoOptimizeImageTags],
      },
    }),
    tailwindcss(),
  ],

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
    target: isSsrBuild ? "node20" : "es2020",
    ssrManifest: !isSsrBuild,
    cssCodeSplit: true,
    minify: isSsrBuild ? false : "terser",
    cssMinify: isSsrBuild ? false : "lightningcss",
    terserOptions: isSsrBuild
      ? undefined
      : {
          compress: {
            passes: 3,
            drop_console: true,
            drop_debugger: true,
          },
          format: {
            comments: false,
          },
        },
    rollupOptions: {
      output: isSsrBuild
        ? {
            // SSR build outputs a single entry point to dist/server/entry-server.js
            entryFileNames: "entry-server.js",
            format: "es",
          }
        : {
            manualChunks(id) {
              if (id.includes("node_modules")) {
                if (id.includes("react-dom") || id.includes("react-router") || id.includes("scheduler") || id.includes("react-helmet-async")) {
                  return "react-runtime";
                }

                if (id.includes("antd") || id.includes("@ant-design") || id.includes("rc-")) {
                  return "antd-vendor";
                }

                if (id.includes("@reduxjs/toolkit") || id.includes("react-redux") || id.includes("redux")) {
                  return "redux-vendor";
                }

                if (id.includes("react-icons") || id.includes("lucide-react")) {
                  return "icons-vendor";
                }

                if (id.includes("formik") || id.includes("yup") || id.includes("react-select")) {
                  return "forms-vendor";
                }

                if (id.includes("axios")) {
                  return "network-vendor";
                }

                if (id.includes("@fancyapps")) {
                  return "media-vendor";
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
}));
