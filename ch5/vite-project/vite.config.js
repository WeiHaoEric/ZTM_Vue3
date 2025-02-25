import { defineConfig } from "vite";
import { eslint } from "vite-plugins-eslint";

export default defineConfig({
  plugins: [eslint()],
});
