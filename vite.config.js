import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 產品路徑、開發中
  // eslint-disable-next-line no-undef
  base: process.env.NODE_ENV === 'production' ? '/first_react/' : '/',
  plugins: [react()],
})
