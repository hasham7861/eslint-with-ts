module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
       'eslint:recommended',
       'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
       ecmaVersion: 2020,
       sourceType: 'module',
       project: './tsconfig.json',
    },
    rules: {
       '@typescript-eslint/strict-boolean-expressions': 'error',
       "@typescript-eslint/no-unnecessary-condition": "error"
    },
};