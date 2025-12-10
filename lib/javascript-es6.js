
// ==========================================================
// @houheaven/eslint-config-helper/eslint
// ----------------------------------------------------------
// - Eslint ES5 定制规则
// - Eslint ES6+ 定制规则
// ==========================================================

const utils = require("./utils/utils.js");

module.exports = {
  // 当 eslint-disable 注释配置未使用时，是否报错
  reportUnusedDisableDirectives: true,
  // 继承配置文件
  extends: [
    // Eslint ES6 支持
    "./support/es6-support.js",
  ],
  // 规则
  rules: {
    // Eslint ES6 规则
    ...utils.rules.es5,
    ...utils.rules.es6,
  },
};
