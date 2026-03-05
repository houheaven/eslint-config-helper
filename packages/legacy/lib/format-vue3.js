
// ==========================================================
// @houheaven/eslint-config-helper/format-vue3
// ----------------------------------------------------------
// - eslint-plugin-vue 定制规则（warn）
// ==========================================================

const utils = require("@houheaven/eslint-config-helper-core");

module.exports = {
  // 当 eslint-disable 注释配置未使用时，是否报错
  reportUnusedDisableDirectives: false,
  // 继承配置文件
  extends: [
    // Vue3 支持
    "./support/vue3-support.js",
  ],
  // 规则
  rules: {
    // Vue3 规则（warn）
    ...utils.getWarnRules("vue3"),
  },
};
