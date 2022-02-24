import {defineConfig} from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';

import shopifyConfig from './shopify.config';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {include: ['@headlessui/react']},
  plugins: [hydrogen(shopifyConfig)],
});