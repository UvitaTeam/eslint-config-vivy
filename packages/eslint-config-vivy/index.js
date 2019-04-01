module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    "jest/globals": true
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    "plugin:jest/recommended"
],
  "plugins": [
    "prettier",
    "jest"
  ],
  rules: {
    "class-methods-use-this": 0,
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "prettier/prettier": ["error"],
    "no-underscore-dangle": 0,
    "import/no-extraneous-dependencies": false
  },
   globals: {
    "window": false,
    "document": false,
    "it": false,
    "describe": false,
    "expect": false,
    "beforeEach": false,
    "before": false,
    "afterEach": false,
    "afterAll": false,
    "btoa": false,
    "atob": false,
    "localStorage": false,
    "fetch": false,
    "Blob": false,
    "URLSearchParams": false,
    "navigator": false,
  }
}
