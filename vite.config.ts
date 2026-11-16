import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

export default defineConfig({
  root: "frontend",
  plugins: [react()],
  build: {
    outDir: fileURLToPath(new URL("./dist", import.meta.url)),
    emptyOutDir: true,
  },
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: true,
    allowedHosts: ["terminal.local"],
    proxy: {
      // A browser calls /api on Vite; Vite forwards it to Express.
      "/api": { target: `http://127.0.0.1:${process.env.PORT || 3001}`, changeOrigin: true },
    },
  },
});
