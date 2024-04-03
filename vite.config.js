import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-hot-toast'], // Lista de módulos externos
    },
  },
  optimizeDeps: {
    exclude: ['react-hot-toast'], // Excluindo react-hot-toast da otimização
  },
});
