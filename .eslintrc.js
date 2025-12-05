
module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    sourceType: "module",
  },
  extends: [
    // "eslint:recommended",
    // "./lib/eslint.js",
    "./lib/vue2.js",
    // "./lib/vue3.js",
    // "./lib/html.js",
    // "./lib/format.js",
  ],
  rules: {
    // rules
  },
  ignorePatterns: [
    "node_modules",
    "demo",
    "!.eslintrc.js",
  ],
};
