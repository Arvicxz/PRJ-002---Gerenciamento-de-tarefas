import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'pages', // Diz ao Vite para procurar os HTMLs dentro de 'pages'
  build: {
    outDir: '../dist', // Joga o site pronto na pasta dist, fora de 'pages'
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'pages/index.html'),
        login: resolve(__dirname, 'pages/login.html'),
        recover: resolve(__dirname, 'pages/recover.html'),
        register: resolve(__dirname, 'pages/register.html'),
      },
    },
  },
});