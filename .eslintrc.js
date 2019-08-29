module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb'],
  globals: {},
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'prefer-destructuring': ['error', { object: false, array: false }],
    'import/no-unresolved': [0], // webpack build will fail instead
    'max-len': 'off',

    // React
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': [0, 'never'],

    // JSX
    'jsx-a11y/label-has-for': [0], // This is deprecated
    'jsx-a11y/label-has-associated-control': [0],
  },
  overrides: [
    // Add override for test files
    {
      files: ['**/*.test.js'],
      env: {
        jest: true,
      },
      plugins: ['jest'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      },
    },
  ],
};
