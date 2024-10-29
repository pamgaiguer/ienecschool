module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always', { omitLastInOneLineBlock: true }],
    'no-console': 1,
    camelcase: ['warn'],
    eqeqeq: ['error', 'always'],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
  },
};
