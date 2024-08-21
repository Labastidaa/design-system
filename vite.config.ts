/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
  ],
  build: {
    target: "ES2020",
    sourcemap: false,
    rollupOptions: {
      // Exclude from build
      external: [
        'msw',
        'mockServiceWorker.js',
        '@mswjs/interceptors',
        'http',
        'https',
        'zlib',
        'stream',
        'url',
        'fs',
        'path',
        'node:async_hooks'
      ]
    } 
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
    conditions: ["browser", "node"],
  },
  
  server: {
    host: '0.0.0.0',
    port: 8080
  },
  preview: {
    host: '0.0.0.0',
    port: 8080,
    strictPort: true
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/vitest-setup.ts',
    exclude: [...configDefaults.exclude,'tests/*','src/mocks'],
    css: true,
    coverage: {
      reporter: ["text","lcov"]
    }
  }
})
