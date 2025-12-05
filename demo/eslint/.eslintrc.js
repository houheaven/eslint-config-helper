
/* eslint-env commonjs -- 注释配置 eslint 环境变量 */

module.exports = {
  // 防止 eslint 向上查找配置文件
  root: true,
  globals: {
    '$': true,
    globalsCustomVar1: true,
    globalsCustomVar2: "writable",  // 旧值：true
    globalsCustomVar3: "readonly",  // 旧值：false、readable
    Promise: "off",
  },
  // 定义环境变量
  env: {
    commonjs: true,         // 临时添加，为了解决当前配置文件（.eslintrc.js）报错的问题，当前文件采用了 commonjs 语法（module.exports）
    browser: true,
  },
  // 解析器配置
  parserOptions: {
    sourceType: "module",   // 指定代码的来源类型，"module" 表示 ESLint 会在 ECMAScript 模块的上下文中解析代码（即支持 import 和 export 语法）
    ecmaVersion: "latest",  // 指定 ECMAScript 版本，"latest" 表示使用最新的 ECMAScript 版本
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },
  // 继承配置文件
  extends: [
    // "../../lib/javascript-es5.js",
    "eslint:all",
  ],
  // 定义规则
  rules: {
    "sort-keys": "off",
    "capitalized-comments": "off",
    "id-length": "off",
    "no-undef": "off",
    "no-console": "off",
    "multiline-comment-style": "off",
    "no-inline-comments": "off",
    "line-comment-position": "off",
  },
  // 忽略文件
  ignorePatterns: [
    "node_modules",
    "eslint-ignore.js",
    "!.eslintrc.js",
  ],
};
