import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
  '/usuarios': {
    target: 'http://localhost:8080',
    changeOrigin: true,
    secure: false,
    rewrite: path => path.replace(/^\/usuarios/, '/academico/usuarios')
  },
  '/notas': {
    target: 'http://localhost:8080',
    changeOrigin: true,
    secure: false,
    rewrite: path => path.replace(/^\/notas/, '/academico/notas')
  },
}

  },
})
