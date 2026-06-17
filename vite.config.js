import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
        Navbar: resolve(__dirname, './src/components/Navbar.jsx'),
        Mycart: resolve(__dirname, './src/components/Mycart.jsx'),
      },
    },
  },
});
