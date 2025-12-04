
// ==========================================================
// Eslint ES5 规则
// ==========================================================

module.exports = {
  env: {
    browser: true,
    jquery: true,
  },
  parserOptions: {
    ecmaVersion: 5,
    sourceType: "script",
  },
  extends: [
    "../rules/eslint/best-practices.js",
    "../rules/eslint/possible-errors.js",
    "../rules/eslint/stylistic-issues.js",
    "../rules/eslint/strict-mode.js",
    "../rules/eslint/variables.js",
    // "../rules/eslint/node.js",
    // "../rules/eslint/es6.js",
  ].map(require.resolve),
};
