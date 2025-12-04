
// ==========================================================
// @houheaven/eslint-config-helper
// ----------------------------------------------------------
// - ./lib/configs/eslint.js : eslint 定制规则
// - ./lib/configs/import.js : eslint-plugin-import 定制规则
// ==========================================================

module.exports = {
  extends: [
    "./lib/configs/eslint.js",
    "./lib/configs/import.js",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
