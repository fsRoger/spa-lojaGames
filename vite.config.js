import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-hot-toast'],
      output: {
        manualChunks: {
          'react-hot-toast': ['react-hot-toast'],
        },
      },
    },

    resolve: {
      alias: {
        'react-hot-toast': './module.js',
      },
    },
  },
});
