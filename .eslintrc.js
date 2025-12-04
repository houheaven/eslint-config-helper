
module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  extends: [
    // "eslint:recommended",
    // "./index.js",
    "./vue2.js",
    // "./vue3.js",
    // "./html.js",
    // "./format.js",
  ],
  rules: {
    // rules
  },
  ignorePatterns: [
    "node_modules",
    // "demo",
    "!.eslintrc.js",
  ],
};
