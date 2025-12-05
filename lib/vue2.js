
// ===============================================================================
// @houheaven/eslint-config-helper/vue2
// -------------------------------------------------------------------------------
// - ./configs/eslint.js          : eslint 定制规则
// - ./configs/import.js          : eslint-plugin-import 定制规则
// - ./configs/vue2.js            : eslint-plugin-vue 定制规则
// - ./rules/vuejs-accessibility  : eslint-plugin-vuejs-accessibility 定制规则
// ===============================================================================

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
        "./configs/vue2.js",
        "./rules/vuejs-accessibility",
      ],
    },
  ],
};
