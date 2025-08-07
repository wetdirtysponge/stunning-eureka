import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Заменить на /ИМЯ-РЕПО/ для GitHub Pages
const base = 'https://wetdirtysponge.github.io/stunning-eureka/'

export default defineConfig({
  base,
  plugins: [react()]
})
