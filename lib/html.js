
// ===============================================================================
// @houheaven/eslint-config-helper/html
// -------------------------------------------------------------------------------
// - ./configs/eslint-es5.j       : Eslint ES5 定制规则
// - ./configs/html.js            : @html-eslint/eslint-plugin 定制规则
// ===============================================================================

module.exports = {
  extends: [
    "./configs/eslint-es5.js",
  ],
  overrides: [
    {
      files: ["*.html", "**/*.html", "*.htm", "**/*.htm"],
      extends: ["./configs/html.js"],
      rules: {
        // 此处不可删除，解决 html 中 <script> 换行问题
        "eol-last": ["warn", "never"],
      },
    },
    {
      files: ["*.html", "**/*.html", "*.htm", "**/*.htm"],
      plugins: ["eslint-plugin-html"],
      rules: {
        // 此处不可删除，解决 html 中 <script> 换行问题
        "eol-last": "off",
        "space-before-function-paren": "off",
      },
    },
  ],
};
