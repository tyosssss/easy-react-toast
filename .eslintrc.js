module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true
  },
  globals: {},
  rules: {
    'no-console': 'off',
    'no-unsafe-negation': 'error',
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used'
      }
    ],

    'jsx-quotes': ['error', 'prefer-double'],
    'react/no-deprecated': ['error']
  },
  plugins: ['react']
}
