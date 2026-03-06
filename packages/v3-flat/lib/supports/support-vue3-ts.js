
// ==========================================================
// @houheaven/eslint-config-helper/support-vue3-ts
// ----------------------------------------------------------
// - 解析 Vue 文件（Vue3 + TypeScript 语法）
// ==========================================================

import globals from "globals";
import pluginStylistic from "@stylistic/eslint-plugin";
import pluginTs from "@typescript-eslint/eslint-plugin";
import pluginVue from "eslint-plugin-vue";
import parserVue from "vue-eslint-parser";
import parserTs from "@typescript-eslint/parser";

const supportVue3Ts = {
  plugins: {
    "vue": pluginVue,
    "@typescript-eslint": pluginTs,
    "@stylistic": pluginStylistic,
  },
  languageOptions: {
    parser: parserVue,
    sourceType: "module",          // 指定代码的来源类型，"module" 表示 ESLint 会在 ECMAScript 模块的上下文中解析代码（即支持 import 和 export 语法）
    ecmaVersion: "latest",         // 指定 ECMAScript 版本，"latest" 表示使用最新的 ECMAScript 版本
    parserOptions: {
      sourceType: "module",        // 指定代码的来源类型，"module" 表示 ESLint 会在 ECMAScript 模块的上下文中解析代码（即支持 import 和 export 语法）
      ecmaVersion: "latest",       // 指定 ECMAScript 版本，"latest" 表示使用最新的 ECMAScript 版本
      ecmaFeatures: {
        jsx: true,                 // 启用 JSX 全局变量和作用域规则
      },
      // Vue 添加对 TypeScript 的支持
      parser: parserTs,
      extraFileExtensions: [".vue"],
      project: [
        "**/tsconfig.json",
        "**/tsconfig.**.json",
      ],
    },
    globals: {
      ...globals.browser,          // 浏览器环境，启用浏览器环境的全局变量（window、document、navigator、alert 等）
      ...globals.node,             // Node.js 环境，启用 Node.js 环境的全局变量和作用域规则（__dirname、__filename、process、global 等）
      ...globals.commonjs,         // Node.js 环境，启用 CommonJS 的全局变量和作用域规则（require()、module、exports 等）
      ...globals.es6,              // 启用 ECMAScript 6 全局变量和作用域规则（let、const、class、import、export 等）
    },
  },
  processor: "vue/vue",
  rules: {
    "indent": "off",
    "max-len": "off",
    "no-irregular-whitespace": "off",
    // 禁止在 Vue 指定的版本上使用不支持的语法
    // https://eslint.vuejs.org/rules/no-unsupported-features.html
    "vue/no-unsupported-features": ["error", {
      "version": "^3.4.0",
      "ignores": [],
    }],
    // 禁止在 props 中使用保留关键字
    // https://eslint.vuejs.org/rules/no-reserved-props.html
    "vue/no-reserved-props": ["error", {
      "vueVersion": 3,
    }],
  },
};

export default supportVue3Ts;
