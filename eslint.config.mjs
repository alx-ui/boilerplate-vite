import alxConfig from '@ialexanderbrito/eslint-config/react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...alxConfig,
  {
    name: 'project/ignores',
    ignores: [
      'dist/**',
      'build/**',
      'coverage/**',
      '.husky/**',
      '.agents/**',
      '.cursor/**',
    ],
  },
  {
    name: 'project/rules',
    rules: {
      // Adicione suas regras customizadas aqui
    },
  },
];
