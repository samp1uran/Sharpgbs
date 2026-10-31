import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import stylex from "@stylexjs/unplugin";

export default defineConfig(({ command }) => ({
  base: "/",
  plugins: [
    stylex.vite({
      dev: command === "serve",
      runtimeInjection: false,
      useCSSLayers: true,
    }),
    react(),
    tailwindcss(),
  ],
}));
