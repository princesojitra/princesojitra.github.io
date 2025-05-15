import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative paths for all assets - this allows deployment to any path
  base: './',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
