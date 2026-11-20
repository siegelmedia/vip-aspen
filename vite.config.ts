import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ isSsrBuild }) => ({
  server: {
    host: "::",
    port: Number(process.env.PORT) || 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // dist-ssr is only ever imported by the build script; it needs no copy of public/.
    copyPublicDir: !isSsrBuild,
    rollupOptions: {
      output: isSsrBuild
        ? {}
        : {
            manualChunks: {
              vendor: ["react", "react-dom", "react-router-dom"],
              ui: ["framer-motion", "lucide-react"],
            },
          },
    },
  },
  // The build-time server render (src/entry-server.tsx) runs in Node, which
  // cannot load these two as externals: react-helmet-async ships CommonJS
  // without named-export hints, and react-router-dom/server has no file
  // extension for Node to resolve. Bundling them into dist-ssr sidesteps both.
  ssr: {
    noExternal: ["react-helmet-async", "react-router-dom"],
  },
}));
