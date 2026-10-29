import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // three.js dans son propre fichier : mieux mis en cache entre deux déploiements
      output: { manualChunks: { three: ['three'] } },
    },
    chunkSizeWarningLimit: 800, // three.js fait ~600 Ko minifié, c'est normal
  },
})
