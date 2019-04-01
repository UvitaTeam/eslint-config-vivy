module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "babel-eslint",
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  rules: {
    "class-methods-use-this": 0,
    "import/prefer-default-export": 0,
    "prettier/prettier": ["error"]
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
    "atob": false,
    "btoa": false
  }
}
