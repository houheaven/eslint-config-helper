
// ==========================================================
// @houheaven/eslint-config-helper/format
// ----------------------------------------------------------
// - Eslint ES5 格式化规则（warn）
// - Eslint ES6+ 格式化规则（warn）
// ==========================================================

const utils = require("@houheaven/eslint-config-helper-core");

module.exports = {
  // 当 eslint-disable 注释配置未使用时，是否报错
  reportUnusedDisableDirectives: false,
  // 继承配置文件
  extends: [
    // Eslint ES6 支持
    "./support/es6-support.js",
  ],
  // 规则
  rules: {
    // Eslint ES6 规则（warn）
    ...utils.getWarnRules("es5"),
    ...utils.getWarnRules("es6"),
  },
};
