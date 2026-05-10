import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** DAM URLs in the app use `/bunnings-media/...`; this forwards to media.bunnings.com.au (same-origin for StackBlitz COEP). */
const bunningsMediaProxy = {
  "/bunnings-media": {
    target: "https://media.bunnings.com.au",
    changeOrigin: true,
    secure: true,
    rewrite: (path: string) => path.replace(/^\/bunnings-media/, ""),
  },
};

export default defineConfig({
  plugins: [react()],
  server: { proxy: bunningsMediaProxy },
  preview: { proxy: bunningsMediaProxy },
});
