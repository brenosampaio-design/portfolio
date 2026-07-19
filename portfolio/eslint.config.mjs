import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  ...nextVitals,
  {
    rules: {
      // These components intentionally synchronize UI state with browser APIs
      // and route transitions. Refactoring them is outside this security pass.
      'react-hooks/set-state-in-effect': 'off',
      // This legacy rule assumes the Pages Router; fonts are declared in the
      // root App Router layout and covered by the production CSP.
      '@next/next/no-page-custom-font': 'off',
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'tmp/**',
    'next-env.d.ts',
  ]),
]);
