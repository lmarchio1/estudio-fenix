import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base relativo: funciona tanto en GitHub Pages (usuario.github.io/repo/)
// como en un dominio propio cuando lo conectemos.
export default defineConfig({
  base: './',
  plugins: [react()],
})
