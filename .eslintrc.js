
module.exports = {
  root: true,
  extends: [
    // "eslint:recommended",
    // "./lib/javascript-es5.js",
    "./lib/javascript-es6.js",
    // "./lib/typescript.js",
    // "./lib/vue2.js",
    // "./lib/vue3.js",
    // "./lib/html.js",
    // "./lib/format-es5.js",
    // "./lib/format-es6.js",
  ],
  rules: {
    "import/no-commonjs": "off",
  },
  ignorePatterns: [
    "node_modules",
    "!.eslintrc.js",
  ],
};
