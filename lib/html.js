
// ===============================================================================
// @houheaven/eslint-config-helper/html
// -------------------------------------------------------------------------------
// - @html-eslint/eslint-plugin 定制规则
// ===============================================================================

const utils = require("./utils/utils.js");

module.exports = {
  // 当 eslint-disable 注释配置未使用时，是否报错
  reportUnusedDisableDirectives: true,
  // 继承配置文件
  extends: [
    // html 支持
    "./support/html-support.js",
  ],
  // 规则
  rules: {
    // html 规则
    ...utils.rules.html,
  },
};
