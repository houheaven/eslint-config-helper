
// ===============================================================================
// @houheaven/eslint-config-helper/vue2
// -------------------------------------------------------------------------------
// - ./lib/configs/eslint.js          : eslint 定制规则
// - ./lib/configs/import.js          : eslint-plugin-import 定制规则
// - ./lib/configs/vue2.js            : eslint-plugin-vue 定制规则
// - ./lib/rules/vuejs-accessibility  : eslint-plugin-vuejs-accessibility 定制规则
// ===============================================================================

module.exports = {
  extends: [
    "./lib/configs/eslint.js",
    "./lib/configs/import.js",
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
        "./lib/configs/vue2.js",
        "./lib/rules/vuejs-accessibility",
      ],
    },
  ],
};
