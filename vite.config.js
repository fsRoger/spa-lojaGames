import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react-hot-toast',
        'react-leaflet',
        'qrcode.react',
        'leaflet'  // Adicionando 'leaflet' à lista de módulos externos
      ],
    },
  },
  optimizeDeps: {
    exclude: [
      'react-hot-toast',
      'react-leaflet',
      'qrcode.react',
      'leaflet'  // Adicionando 'leaflet' à lista de módulos excluídos
    ],
  },
});
