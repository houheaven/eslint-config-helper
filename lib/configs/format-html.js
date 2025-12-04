
// ==========================================================
// html 文件代码格式化
// ==========================================================

module.exports = {
  parser: "@html-eslint/parser",
  plugins: ["@html-eslint"],
  rules: {
    // 要求设置 <!DOCTYPE html> 文档申明
    "@html-eslint/require-doctype": "warn",

    // 要求标签闭合
    "@html-eslint/require-closing-tags": ["warn", { selfClosing: "always" }],

    // 强制使用一致的引号
    "@html-eslint/quotes": ["warn", "double"],

    // 禁止出现多个空行
    "@html-eslint/no-multiple-empty-lines": ["warn", { max: 2 }],
  },
};
