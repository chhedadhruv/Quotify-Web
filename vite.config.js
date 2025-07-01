import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // SEO and Performance Optimizations
  build: {
    // Generate source maps for better debugging
    sourcemap: true,
    
    // Optimize chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['react-icons']
        }
      }
    },
    
    // Enable CSS code splitting
    cssCodeSplit: true,
    
    // Minify for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  
  // Performance optimizations
  server: {
    // Enable compression
    compress: true,
    // Handle SPA routing in development
    historyApiFallback: true,
  },
  
  // SEO-friendly static assets
  assetsInclude: ['**/*.xml', '**/*.txt']
})
