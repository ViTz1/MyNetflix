import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
=======

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
>>>>>>> d15e6c1d71f4a3a836457217589183c03c0e4c92
})
