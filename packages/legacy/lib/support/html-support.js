
// ==========================================================
// html 支持
// ==========================================================

module.exports = {
  overrides: [
    {
      files: ["**/*.html", "**/*.htm", "**/*.php"],
      parser: "@html-eslint/parser",
      plugins: [
        // 检查和修复 html 文件中的 html 代码
        "@html-eslint/eslint-plugin",
        // 检查和修复 html 文件中的 JS 代码，即 <script> 中的代码
        // 仅仅提供技术支持，不包含任何规则，具体规则由 eslint.js 提供
        "eslint-plugin-html",
      ],
      // eslint-plugin-html 配置
      // 注意：为了使 eslint-plugin-html 插件正常工作，parser 必须是 "@html-eslint/parser"，不能是 require.resolve("@html-eslint/parser")
      settings: {
        "html/html-extensions": [".html", ".htm", ".php"],
        "html/javascript-tag-names": ["script"],
        // "html/javascript-mime-types": "/^(application|text)\\/(x-)?(javascript|babel|ecmascript-6|html)$/",
        "html/javascript-mime-types": ["text/javascript", "module"],
        "html/ignore-tags-without-type": false,
        "html/report-bad-indent": "warn",
        "html/indent": "+2",
      },
      // 规则
      rules: {
        // 此处不可删除，解决 html 中 <script> 换行问题
        "eol-last": "off",
        // 解决 HTML 注释（<!-- -->）引起 eslint 报错的问题
        "spaced-comment": "off",
      },
    },
  ],
};
