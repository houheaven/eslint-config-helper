
// ==========================================================
// html 文件代码格式化
// ==========================================================

const getWarnRules = require("./format-utils.js");
const formatRules = {
  ...require("../rules/html/best-practice.js").rules,
  ...require("../rules/html/style.js").rules,
};

module.exports = {
  parser: "@html-eslint/parser",
  plugins: [
    // 检查和修复 html 文件中的 html 代码
    "@html-eslint/eslint-plugin",
    // 检查和修复 html 文件中的 JS 代码，即 <script> 中的代码
    // 仅仅提供技术支持，不包含任何规则，具体规则由 eslint.js 提供
    "eslint-plugin-html",
  ],
  // eslint-plugin-html 配置
  settings: {
    "html/html-extensions": [".html", ".htm", ".php"],
    "html/javascript-tag-names": ["script"],
    // "html/javascript-mime-types": "/^(application|text)\\/(x-)?(javascript|babel|ecmascript-6|html)$/",
    "html/javascript-mime-types": ["text/javascript", "module"],
    "html/ignore-tags-without-type": false,
    "html/report-bad-indent": "warn",
    "html/indent": "+2",
  },
  // 当 eslint-disable 注释配置未使用时，是否报错
  reportUnusedDisableDirectives: true,
  // 规则
  rules: {
    // html 相关的 warn 级别规则（自动导入）
    ...getWarnRules(formatRules),
  },
};
