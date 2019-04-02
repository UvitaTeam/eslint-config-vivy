module.exports = {
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
  }
}
