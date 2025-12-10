
// ==========================================================
// @houheaven/eslint-config-helper/eslint-es5
// ----------------------------------------------------------
// - Eslint ES5 定制规则
// ==========================================================

const utils = require("./utils/utils.js");

module.exports = {
  // 当 eslint-disable 注释配置未使用时，是否报错
  reportUnusedDisableDirectives: true,
  // 继承配置文件
  extends: [
    // Eslint ES5 支持
    "./support/es5-support.js",
  ],
  // 规则
  rules: {
    // Eslint ES5 规则
    ...utils.rules.es5,
  },
};
