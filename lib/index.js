
module.exports = {
  extends: [
    "./rules/best-practices",
    "./rules/possible-errors",
    "./rules/node",
    "./rules/stylistic-issues",
    "./rules/variables",
    "./rules/es6",
    "./rules/imports",
    "./rules/strict-mode"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {},
};
