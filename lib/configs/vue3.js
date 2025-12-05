
// ==========================================================
// Vue3 全部规则
// ----------------------------------------------------------
// - plugin:vue/base
// - plugin:vue/vue3-essential
// - plugin:vue/vue3-strongly-recommended
// - plugin:vue/vue3-recommended
// - common-uncategorized
// - common-extension
// ==========================================================

module.exports = {
  plugins: ["eslint-plugin-vue"],
  parser: require.resolve("vue-eslint-parser"),
  parserOptions: {
    sourceType: "module",   // 指定代码的来源类型，"module" 表示 ESLint 会在 ECMAScript 模块的上下文中解析代码（即支持 import 和 export 语法）
    ecmaVersion: "latest",  // 指定 ECMAScript 版本，"latest" 表示使用最新的 ECMAScript 版本
  },
  env: {
    browser: true,
    es6: true,
  },
  // 当 eslint-disable 注释配置未使用时，是否报错
  reportUnusedDisableDirectives: true,
  extends: [
    "../rules/vue/common-base.js",
    "../rules/vue/common-essential.js",
    "../rules/vue/common-strongly-recommended.js",
    "../rules/vue/common-recommended.js",
    "../rules/vue/common-uncategorized.js",
    "../rules/vue/common-extension.js",
    "../rules/vue/vue3-essential.js",
    "../rules/vue/vue3-strongly-recommended.js",
    "../rules/vue/vue3-uncategorized.js",
  ],
};
