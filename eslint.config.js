import globals from 'globals';
import jsPlugin from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        ignores: ['node_modules/**', 'dist/**', '*.config.js'],
        languageOptions: {
            globals: globals.browser,
            parser: tsParser,
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            ...jsPlugin.configs.recommended.rules,
            ...tsPlugin.configs.recommended.rules,
        },
    },
];
