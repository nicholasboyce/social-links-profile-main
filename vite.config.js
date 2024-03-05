import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(__dirname, 'client'),
  base: '/social-links-profile-main/',
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'client/index.html')
    }
  },
  plugins: [react()],
})
