
const { es6, typescript, vue3, html } = require("@houheaven/eslint-config-helper");

module.exports = [
  ...es6,
  ...typescript,
  ...vue3,
  ...html,
  {
    files: ["**/*.js", "**/*.ts", "**/*.vue"],
    rules: {
      "no-console": "warn",
    },
  },
];
