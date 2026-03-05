const { rules: EslintRules } = require("@houheaven/eslint-config-helper-core");
const globals = require("globals");

// 插件
const pluginVue = require("eslint-plugin-vue");
const pluginTs = require("@typescript-eslint/eslint-plugin");
const parserTs = require("@typescript-eslint/parser");
const pluginImport = require("eslint-plugin-import");
const pluginHtml = require("@html-eslint/eslint-plugin");
const parserHtml = require("@html-eslint/parser");
const pluginStylistic = require("@stylistic/eslint-plugin");

// ==========================================================
// 基础配置 (ES6+)
// ==========================================================
const es6 = [
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      import: pluginImport,
      "@stylistic": pluginStylistic,
    },
    rules: {
      ...EslintRules.es6,
      ...EslintRules.import,
    },
  },
];

// ==========================================================
// TypeScript 配置
// ==========================================================
const typescript = [
  ...es6,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: true,
      },
    },
    plugins: {
      "@typescript-eslint": pluginTs,
      "@stylistic": pluginStylistic,
    },
    rules: {
      ...EslintRules.typescript,
    },
  },
];

// ==========================================================
// Vue 3 配置
// ==========================================================
const vue3 = [
  ...pluginVue.configs["flat/essential"], // 使用 Vue 官方的 Flat Config 预设作为基础
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: parserTs,
        extraFileExtensions: [".vue"],
        ecmaVersion: "latest",
        sourceType: "module",
        project: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      // vue 插件已经在 pluginVue.configs 中引入
      "@typescript-eslint": pluginTs,
      "@stylistic": pluginStylistic,
    },
    rules: {
      ...EslintRules.vue3,
      ...EslintRules["vue3-ts"],
    },
  },
];

// ==========================================================
// HTML 配置
// ==========================================================
const html = [
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: parserHtml,
    },
    plugins: {
      "@html-eslint": pluginHtml,
    },
    rules: {
      ...EslintRules.html,
    },
  },
];

module.exports = {
  es6,
  typescript,
  vue3,
  html,
};