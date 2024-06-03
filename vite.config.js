import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file

const __dirname = path.dirname(__filename); // get the name of the directory

import {
  resolve
} from "path";

const aliases = {
  '@crema': 'src/@crema',
  'core': 'src/core',
  'assets': 'src/assets',
  '@hook': 'src/@hook',
  'components': 'src/components',
  'features': 'src/features',
  'guards': 'src/guards',
  'pages': 'src/pages',
  'types': 'src/types',
};


const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [key, resolve(__dirname, value)]),
);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      external: [
        /^node:.*/,
        "react", // ignore react stuff
        "react-dom",
      ]
    },
    resolve: {
      alias: {
          ...resolvedAliases,
          './runtimeConfig': './runtimeConfig.browser',
          'jss-plugin-{}': 'jss-plugin-global'
      },
  },
  },
  
})
