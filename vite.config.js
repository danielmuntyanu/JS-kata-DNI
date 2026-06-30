import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: "/JS-kata-DNI/",
  plugins: [
    tailwindcss(),
  ],
  test: {
    environment: 'jsdom'
  }
})