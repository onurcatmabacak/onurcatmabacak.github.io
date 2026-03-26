import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  return {
    // Explicitly set base to '/' for onurcatmabacak.github.io
    base: '/', 
    plugins: [react(), tailwindcss()],
    define: {
      // Added a fallback empty string to prevent "undefined" errors
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || ""),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    // Added build options to ensure the output folder is correct
    build: {
      outDir: 'dist',
    }
  };
});
