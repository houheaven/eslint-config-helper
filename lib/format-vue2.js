
// ==========================================================
// @houheaven/eslint-config-helper/format-vue2
// ----------------------------------------------------------
// 说明：代码格式化，功能非常的基础、安全
// - ./configs/format-es6.js    : js 定制规则
// - ./configs/format-import.js : import 定制规则
// - ./configs/format-vue2.js   : vue 定制规则
// ==========================================================

module.exports = {
  overrides: [
    {
      files: ["**/*.vue"],
      extends: [
        "./configs/format-es6.js",
        "./configs/format-import.js",
        "./configs/format-vue2.js",
      ],
      rules: {
        "indent": "off",
        "max-len": "off",
        "no-irregular-whitespace": "off",
      },
    },
  ],
};
