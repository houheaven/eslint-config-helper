
// ==========================================================
// @houheaven/eslint-config-helper/format-import
// ----------------------------------------------------------
// - eslint-plugin-import 格式化规则（warn）
// ==========================================================

const utils = require("@houheaven/eslint-config-helper-core");

module.exports = {
  // 当 eslint-disable 注释配置未使用时，是否报错
  reportUnusedDisableDirectives: false,
  // 继承配置文件
  extends: [
    // eslint-plugin-import 支持
    "./support/import-support.js",
  ],
  // 规则
  rules: {
    // eslint-plugin-import 规则（warn）
    ...utils.getWarnRules("import"),
  },
};
