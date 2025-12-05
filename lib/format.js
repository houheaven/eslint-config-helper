
// ==========================================================
// @houheaven/eslint-config-helper/format
// ----------------------------------------------------------
// 说明：代码格式化，功能非常的基础、安全
// - ./configs/format-js.js   : js 定制规则
// - ./configs/format-vue.js  : vue 定制规则
// - ./configs/format-html.js : html 定制规则
// ==========================================================

module.exports = {
  extends: [
    "./configs/format-js.js",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.vue", "**/*.vue"],
      extends: [
        "./rules/vue/common-base.js",
        "./configs/format-vue.js",
      ],
      rules: {
        "indent": "off",
      },
    },
    {
      files: ["*.html", "**/*.html", "*.htm", "**/*.htm"],
      extends: [
        "./configs/format-html.js",
      ],
      rules: {
        "eol-last": ["warn", "never"],
      },
    },
  ],
};
