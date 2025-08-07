
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/stunning-eureka/', // 👈 очень важно!
  plugins: [react()]
})
