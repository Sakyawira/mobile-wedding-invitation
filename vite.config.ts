import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mobile-wedding-invitation/',
  plugins: [react(), tsconfigPaths(), svgr()],
  build: {
    // Optimize build for mobile
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['aos'],
          ui: ['@emotion/react', '@emotion/styled'],
          gallery: ['photoswipe', 'react-photoswipe-gallery'],
          maps: ['react-naver-maps'],
          utils: ['js-confetti'],
        },
      },
    },
    // Compress assets
    assetsInlineLimit: 4096,
    // Optimize chunk size
    chunkSizeWarningLimit: 500,
  },
  optimizeDeps: {
    // Pre-bundle these dependencies
    include: ['react', 'react-dom', 'aos'],
    // Force optimization of CJS modules
    force: true,
  },
  // Enable gzip compression
  server: {
    fs: {
      allow: ['..'],
    },
  },
});
