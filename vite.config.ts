import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Vercel serves from the domain root; GitHub Pages serves from a /repo-name/
  // subpath. Vercel sets VERCEL=1 automatically during its builds, so this
  // picks the right base without any manual per-platform config.
  base: process.env.VERCEL ? '/' : '/colossal-website/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
  },
})
