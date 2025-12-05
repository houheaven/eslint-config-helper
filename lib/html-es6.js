
// ===============================================================================
// @houheaven/eslint-config-helper/html-es6
// -------------------------------------------------------------------------------
// - ./configs/html.js       : @html-eslint/eslint-plugin 定制规则
// - ./configs/eslint-es6.js : Eslint ES6+ 定制规则
// ===============================================================================

module.exports = {
  overrides: [
    {
      files: ["**/*.html", "**/*.htm", "**/*.php"],
      extends: [
        // 检查和修复 html 文件中的 html 代码
        "./configs/html.js",
        // 检查和修复 html 文件中的 JS 代码，即 <script> 中的代码
        "./configs/eslint-es6.js",
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
