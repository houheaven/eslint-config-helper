
// ==========================================================
// @houheaven/eslint-config-helper/import
// ----------------------------------------------------------
// - eslint-plugin-import 定制规则
// ==========================================================

const utils = require("./utils/utils.js");

module.exports = {
  // 当 eslint-disable 注释配置未使用时，是否报错
  reportUnusedDisableDirectives: true,
  // 继承配置文件
  extends: [
    // eslint-plugin-import 支持
    "./support/import-support.js",
  ],
  // 规则
  rules: {
    // eslint-plugin-import 规则
    ...utils.rules.import,
  },
};
