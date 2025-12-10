
// ==========================================================
// @houheaven/eslint-config-helper/vue3-ts
// ----------------------------------------------------------
// - eslint-plugin-vue 定制规则
// ==========================================================

const utils = require("./utils/utils.js");

module.exports = {
  overrides: [
    {
      files: ["**/*.vue"],
      // 当 eslint-disable 注释配置未使用时，是否报错
      reportUnusedDisableDirectives: true,
      // 继承配置文件
      extends: [
        // Vue3 支持
        "./support/vue3-ts-support.js",
      ],
      // 规则
      rules: {
        // Vue3 规则
        ...utils.rules.vue,
        ...utils.rules.vue3,
        // @typescript-eslint/eslint-plugin 规则
        ...utils.rules.typescript,
      },
    },
  ],
};
