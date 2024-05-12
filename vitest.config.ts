import { defineConfig } from 'vitest/config'
/// <reference types='vitest' />

export default defineConfig({
  test: {
    environment: 'jsdom',
    alias: {
      '@assets/': new URL('./src/assets/', import.meta.url).pathname
    }
  }
})
