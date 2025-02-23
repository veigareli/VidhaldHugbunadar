import tsParser from '@typescript-eslint/parser';
import customRules from './eslint-rules/index.js';

export default [
  // Configuration for TypeScript files
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        // If you have a tsconfig.json, you can add it here:
        project: './tsconfig.json',
      },
    },
    // You can add any TypeScript-specific rules here
    rules: {},
  },
  // Configuration for JavaScript files and custom rules
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      'custom-rules': customRules,
    },
    rules: {
      'custom-rules/camel-case-functions': ['error'],
      'custom-rules/no-moment': ['error'],
      'custom-rules/no-console-log': ['error'],
    },
  },
];
