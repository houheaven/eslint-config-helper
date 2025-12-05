
// ==========================================================
// @houheaven/eslint-config-helper/vue3
// ----------------------------------------------------------
// - ./configs/eslint.js : eslint 定制规则
// - ./configs/import.js : eslint-plugin-import 定制规则
// - ./configs/vue3.js   : eslint-plugin-vue 定制规则
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
  rules: {},
  overrides: [
    {
      files: ["*.vue", "**/*.vue"],
      extends: [
        "./configs/vue3.js",
      ],
    },
  ],
};
