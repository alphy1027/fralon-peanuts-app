import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
      /* '@assets': '/src/assets',
      '@components': '/src/components',
      '@config': '/src/config',
      '@contexts': '/src/contexts',
      '@hooks': '/src/hooks',
      '@layouts': '/src/layouts',
      '@lib': '/src/lib',
      '@pages': '/src/pages',
      '@routes': '/src/routes',
      '@services': '/src/services',
      '@types': '/src/types',
      '@utils': '/src/utils', */
    },
  }
})
