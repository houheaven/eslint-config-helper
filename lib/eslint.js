
// ==========================================================
// @houheaven/eslint-config-helper
// ----------------------------------------------------------
// - ./configs/eslint.js : eslint 定制规则
// - ./configs/import.js : eslint-plugin-import 定制规则
// ==========================================================

module.exports = {
  extends: [
    "./configs/eslint.js",
    "./configs/import.js",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
