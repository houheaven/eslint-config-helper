
// ==========================================================
// @houheaven/eslint-config-helper/support-es6
// ----------------------------------------------------------
// - 解析 ES6+ 语法
// ==========================================================

import globals from "globals";
import pluginStylistic from "@stylistic/eslint-plugin";

const supportEs6 = {
  plugins: {
    "@stylistic": pluginStylistic,
  },
  languageOptions: {
    sourceType: "module",          // 指定代码的来源类型，"module" 表示 ESLint 会在 ECMAScript 模块的上下文中解析代码（即支持 import 和 export 语法）
    ecmaVersion: "latest",         // 指定 ECMAScript 版本，"latest" 表示使用最新的 ECMAScript 版本
    // ecmaFeatures: {
    //   generators: false,
    //   objectLiteralDuplicateProperties: false,
    //   jsx: true,
    // },
    globals: {
      ...globals.browser,          // 浏览器环境，启用浏览器环境的全局变量（window、document、navigator、alert 等）
      ...globals.node,             // Node.js 环境，启用 Node.js 环境的全局变量和作用域规则（__dirname、__filename、process、global 等）
      ...globals.commonjs,         // Node.js 环境，启用 CommonJS 的全局变量和作用域规则（require()、module、exports 等）
      ...globals.amd,              // AMD 环境，启用 AMD 环境的全局变量和作用域规则（define()、require() 等）
      ...globals.mocha,            // Mocha 环境，启用 Mocha 环境的全局变量和作用域规则（describe()、it()、before()、after() 等）
      ...globals.jasmine,          // Jasmine 环境，启用 Jasmine 环境的全局变量和作用域规则（describe()、it()、beforeEach()、afterEach() 等）
      ...globals.es6,              // 启用 ECMAScript 6 全局变量和作用域规则（let、const、class、import、export 等）
    },
  },
};

export default supportEs6;
