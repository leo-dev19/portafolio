import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portafolio/', // cambia esto si tu repo se llama distinto
  plugins: [react()],
});
