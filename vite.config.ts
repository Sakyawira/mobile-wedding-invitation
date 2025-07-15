import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mobile-wedding-invitation/',
  plugins: [react(), tsconfigPaths(), svgr()],
  build: {
    // Optimize for mobile devices
    target: 'es2015', // Better mobile browser support
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 0, // Don't inline assets to allow compression
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          animations: ['aos', 'js-confetti'],
          gallery: ['photoswipe', 'react-photoswipe-gallery'],
        },
        assetFileNames: (assetInfo) => {
          // Add hash to images for better caching
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name ?? '')) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
  optimizeDeps: {
    // Pre-bundle these dependencies
    include: ['react', 'react-dom', 'aos', 'js-confetti'],
  },
  // Add image optimization through Vite's asset handling
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg', '**/*.webp'],
});
