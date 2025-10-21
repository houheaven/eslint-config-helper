
// ==========================================================
// @houheaven/eslint-config-helper/format
// ----------------------------------------------------------
// 说明：代码格式化，功能非常的基础、安全
// - ./configs/format-es6.js  : js 定制规则
// - ./configs/format-html.js : html 定制规则
// ==========================================================

module.exports = {
  overrides: [
    {
      files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
      extends: [
        "./configs/format-es6.js",
      ],
    },
    {
      files: ["**/*.html", "**/*.htm", "**/*.php"],
      extends: [
        "./configs/format-html.js",
        "./configs/format-es6.js",
      ],
      rules: {
        // 此处不可删除，解决 html 中 <script> 换行问题
        "eol-last": "off",
        // 解决 HTML 注释（<!-- -->）引起 eslint 报错的问题
        "spaced-comment": "off",
      },
    },
  ],
};
