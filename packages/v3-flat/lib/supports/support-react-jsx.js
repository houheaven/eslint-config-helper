
// ==========================================================
// @houheaven/eslint-config-helper/support-react-jsx
// ----------------------------------------------------------
// - 解析 JSX 文件（React 语法）
// ==========================================================

import globals from "globals";
import pluginStylistic from "@stylistic/eslint-plugin";
import pluginReact from "eslint-plugin-react";

const supportReactJsx = {
  plugins: {
    "react": pluginReact,
    "@stylistic": pluginStylistic,
  },
  languageOptions: {
    sourceType: "module",          // 指定代码的来源类型，"module" 表示 ESLint 会在 ECMAScript 模块的上下文中解析代码（即支持 import 和 export 语法）
    ecmaVersion: "latest",         // 指定 ECMAScript 版本，"latest" 表示使用最新的 ECMAScript 版本
    parserOptions: {
      sourceType: "module",        // 指定代码的来源类型，"module" 表示 ESLint 会在 ECMAScript 模块的上下文中解析代码（即支持 import 和 export 语法）
      ecmaVersion: "latest",       // 指定 ECMAScript 版本，"latest" 表示使用最新的 ECMAScript 版本
      ecmaFeatures: {
        jsx: true,                 // 启用 JSX 全局变量和作用域规则
      },
    },
    globals: {
      ...globals.browser,          // 浏览器环境，启用浏览器环境的全局变量（window、document、navigator、alert 等）
      ...globals.node,             // Node.js 环境，启用 Node.js 环境的全局变量和作用域规则（__dirname、__filename、process、global 等）
      ...globals.commonjs,         // Node.js 环境，启用 CommonJS 的全局变量和作用域规则（require()、module、exports 等）
      ...globals.es6,              // 启用 ECMAScript 6 全局变量和作用域规则（let、const、class、import、export 等）
    },
  },
  settings: {
    // ---------------- eslint-plugin-react 的语义字典 ----------------
    // 这里只是"告诉规则怎么理解你的代码"，不产生任何报错。
    "react": {
      // JSX 编译目标：<div/> => React.createElement(...)；用 h/preact 等自定义 pragma 时再改
      pragma: "React",
      // Fragment 名称：<>...</> => React.Fragment；改自定义 pragma 时同步改
      fragment: "Fragment",
      // React 版本：默认从 node_modules/react 自动探测，兼容 no-unsupported-features 等版本相关规则
      version: "detect",
    },
    // 供 react/prefer-exact-props 识别的 exact wrapper 函数
    // 注意：只有对象形式并显式声明 `exact: true` 的条目，才会被 prefer-exact-props 视为 "exact wrapper"（源码依据：propWrapper.getExactPropWrapperFunctions 中的 `func.exact === true` 过滤）。
    // 单纯字符串或不带 exact 的对象只会参与 `forbid-foreign-prop-types` 等宽松匹配。
    "propWrapperFunctions": [
      { property: "exact", exact: true },
      { property: "forbidExtraProps", exact: true },
    ],
  },
  rules: {},
};

export default supportReactJsx;
