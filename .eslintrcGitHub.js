module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-plusplus': 'off',
    'import/no-dynamic-require': 'off',
    'no-console': 'off',
    'no-promise-executor-return': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
};
