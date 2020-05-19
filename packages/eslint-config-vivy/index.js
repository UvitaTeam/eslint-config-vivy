module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:react/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['prettier', 'jest', 'react'],
  rules: {
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.ts', '.jsx'] }],
    'prettier/prettier': ['error'],
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
}
