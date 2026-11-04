import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 3000,
     proxy: {
      '/api': {
        target: 'https://white-seahorse-266682.hostingersite.com/api/v1', 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
  }}}
    });

