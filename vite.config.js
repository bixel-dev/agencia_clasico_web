import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/agencia_clasico_web/' : '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
