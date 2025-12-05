
// ==========================================================
// Eslint ES5 规则
// ==========================================================

module.exports = {
  // 定义环境变量
  env: {
    browser: true,          // 浏览器环境，启用浏览器环境的全局变量（window、document、navigator、alert 等）
    jquery: true,           // jQuery 环境，启用 jQuery 环境的全局变量和作用域规则（$、jQuery 等）
  },
  // 解析器配置
  parserOptions: {
    sourceType: "script",   // 指定代码的来源类型，"script"（默认）表示 ESLint 会在全局作用域的脚本上下文中解析代码
    ecmaVersion: 5,         // 指定 ECMAScript 版本，5 表示 ECMAScript 5
  },
  // 继承配置文件
  extends: [
    "../rules/eslint/possible-errors.js",
    "../rules/eslint/layout-formatting.js",
    "../rules/eslint/suggestions.js",
  ].map(require.resolve),
  // 当 eslint-disable 注释配置未使用时，是否报错
  reportUnusedDisableDirectives: true,
};
