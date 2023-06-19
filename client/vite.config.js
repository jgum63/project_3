import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
      // '/graphql': "http://localhost:" + process.env.PORT || 'http://localhost:3001',
      '/graphql': 'http://localhost:3001',
    }
  }
})
