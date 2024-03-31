import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path, { dirname } from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: {
      "@": path.resolve(__dirname, "/src"),
      "@components": `${path.resolve(__dirname, "/src/components")}`,
      "@api": `${path.resolve(__dirname, "/src/api")}`,
      "@type": `${path.resolve(__dirname, "/src/type")}`,
      "@assets": `${path.resolve(__dirname, "/src/assets")}`,
    },
  },
});
