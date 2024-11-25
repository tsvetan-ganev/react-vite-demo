import { defineConfig } from 'vitest/config';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test-setup.ts',
    coverage: {
      provider: 'istanbul',
      exclude: ['src/mocks/**', 'public/**'],
    },
  },
});
