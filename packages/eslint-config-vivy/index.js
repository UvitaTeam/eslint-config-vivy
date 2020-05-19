module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:jest/recommended",
  ],
  plugins: ["@typescript-eslint", "prettier", "jest", "react"],
  rules: {
    "class-methods-use-this": 0,
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "prettier/prettier": ["error"],
    "import/extensions": 0,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
};
