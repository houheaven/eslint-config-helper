
// ==========================================================
// @houheaven/eslint-config-helper/support-es5
// ----------------------------------------------------------
// - 解析 ES5 语法
// ==========================================================

import globals from "globals";
import pluginStylistic from "@stylistic/eslint-plugin";

const supportEs5 = {
  plugins: {
    "@stylistic": pluginStylistic,
  },
  languageOptions: {
    sourceType: "script",         // 指定代码的来源类型，"script"（默认）表示 ESLint 会在全局作用域的脚本上下文中解析代码
    ecmaVersion: 5,               // 指定 ECMAScript 版本，5 表示 ECMAScript 5
    globals: {
      ...globals.browser,         // 浏览器环境，启用浏览器环境的全局变量（window、document、navigator、alert 等）
      ...globals.jquery,          // jQuery 环境，启用 jQuery 环境的全局变量和作用域规则（$、jQuery 等）
    },
  },
};

export default supportEs5;
