
// ==========================================================
// @houheaven/eslint-config-helper/support-react-tsx
// ----------------------------------------------------------
// - 解析 TSX 文件（React 语法）
// ==========================================================

import globals from "globals";
import pluginStylistic from "@stylistic/eslint-plugin";
import pluginTs from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import parserTs from "@typescript-eslint/parser";

const supportReactTsx = {
  plugins: {
    "react": pluginReact,
    "@typescript-eslint": pluginTs,
    "@stylistic": pluginStylistic,
  },
  languageOptions: {
    parser: parserTs,
    sourceType: "module",          // 指定代码的来源类型，"module" 表示 ESLint 会在 ECMAScript 模块的上下文中解析代码（即支持 import 和 export 语法）
    ecmaVersion: "latest",         // 指定 ECMAScript 版本，"latest" 表示使用最新的 ECMAScript 版本
    parserOptions: {
      sourceType: "module",        // 指定代码的来源类型，"module" 表示 ESLint 会在 ECMAScript 模块的上下文中解析代码（即支持 import 和 export 语法）
      ecmaVersion: "latest",       // 指定 ECMAScript 版本，"latest" 表示使用最新的 ECMAScript 版本
      ecmaFeatures: {
        jsx: true,                 // 启用 JSX 全局变量和作用域规则
      },
      // React 添加对 TypeScript 的支持
      extraFileExtensions: [".jsx", ".tsx"],
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

    // 如果组件被 observer / styled / memo 之类高阶函数包一层，就在这里登记
    // 否则 react/display-name、react/prop-types 等规则可能"看不见"里面的组件
    // componentWrapperFunctions: [],

    // 自定义"表单"组件：影响 react/form-has-action 等规则如何识别提交入口
    // formComponents: [],

    // 自定义"链接"组件：影响 jsx-no-target-blank、jsx-a11y/anchor-is-valid 等识别
    // 例如：{ name: "Link", linkAttribute: ["to", "href"] }
    // linkComponents: [],

    // "react": {
    //   "createClass": "createReactClass",      // 告诉插件"创建组件的工厂函数叫什么"。老代码里 React.createClass 被拆到独立包 create-react-class，插件需要知道这个函数名，才能把 createReactClass({...}) 识别成一个组件。
    //   "pragma": "React",                      // JSX 编译时对应的全局对象名。<div/> 会被编译成 React.createElement("div")，
    //                                           // 改为 "h" 或 "Preact" 等自定义 pragma 时要在这里改，否则 no-unused-vars 之类的规则会误判 React / 自定义 pragma 变量是"没用到的 import"。
    //   "fragment": "Fragment",                 // Fragment 的对应名。<>...</> 会被识别为 React.Fragment；如果你有自定义 pragma（比如 h + Fragment），也在这里改。
    //   "version": "detect",                    // React 版本。"detect" 让插件从 node_modules/react/package.json 自动读版本号。有些规则（如 react/no-unsupported-features、hooks 相关行为）要按版本区分。也可以硬编码成 "18.2"。
    //   "defaultVersion": "",                   // 当 detect 探测不到（比如项目里根本没装 react）时的兜底版本。空字符串意味着不设兜底，插件会用它自带的默认（一般是最新版）。
    //   "flowVersion": "0.53",                  // Flow 类型系统的版本（仅在你用 Flow 而不是 TS 时才有用），影响某些 propTypes / Flow 类型的解析行为。
    // },
    // // propTypes 的包装函数白名单
    // "propWrapperFunctions": [
    //   "forbidExtraProps",
    //   { "property": "freeze", "object": "Object" },
    //   { "property": "myFavoriteWrapper" },
    //   { "property": "forbidExtraProps", "exact": true },      // exact 表示这个包装器语义是"禁止未声明的 prop"
    // ],
    // // 组件包装函数，告诉插件"哪些函数返回的还是一个 React 组件"
    // "componentWrapperFunctions": [
    //   "observer", // `property`
    //   { "property": "styled" }, // `object` is optional
    //   { "property": "observer", "object": "Mobx" },
    //   { "property": "observer", "object": "<pragma>" }, // sets `object` to whatever value `settings.react.pragma` is set to
    // ],
    // // 自定义"表单"组件
    // // 有些项目不用原生 <form action="...">，而用自定义组件 <CustomForm endpoint="..."/>。像 react/form-has-action、以及安全类规则会关心"这个组件是否指定了提交地址"。formAttribute 就告诉插件"这个组件的『action』等价属性叫什么"，可以是字符串，也可以是数组（允许多个字段任选其一）。
    // "formComponents": [
    //   // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
    //   "CustomForm",
    //   { "name": "SimpleForm", "formAttribute": "endpoint" },
    //   { "name": "Form", "formAttribute": ["registerEndpoint", "loginEndpoint"] }, // allows specifying multiple properties if necessary
    // ],
    // // 自定义"链接"组件
    // // 很多项目不用 <a>，而是 <Link to="...">（React Router）或自研 <Hyperlink>。react/jsx-no-target-blank、jsx-a11y/anchor-is-valid 等规则要靠这个白名单才能识别"哪些组件本质上是链接"，linkAttribute 指明它的 href 对应属性叫什么。
    // "linkComponents": [
    //   // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
    //   "Hyperlink",
    //   { "name": "MyLink", "linkAttribute": "to" },
    //   { "name": "Link", "linkAttribute": ["to", "href"] }, // allows specifying multiple properties if necessary
    // ],
  },
  rules: {},
};

export default supportReactTsx;
