import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Manually split vendor chunks
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Create separate chunk for each dependency in node_modules
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    },
    // Increase chunk size warning limit to 1000kB (or any value you prefer)
    chunkSizeWarningLimit: 1000
  }
})
