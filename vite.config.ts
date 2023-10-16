/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ typescript: true })],
  server: {
    host: true,
    strictPort: true,
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTest.ts',
    coverage: {
      all: true,
      include: ["src/**/*.tsx", "src/**/*.ts"],
      reportsDirectory: './test-coverage',
      reporter: ['text', 'json', 'html'],
      provider: 'istanbul'
    },
  },
})
