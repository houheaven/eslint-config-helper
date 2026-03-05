
// ==========================================================
// @houheaven/eslint-config-helper/import
// ----------------------------------------------------------
// - eslint-plugin-import 定制规则
// ==========================================================

// 这个插件为当前类库提供”开箱即用“的能力，使用者无需手动安装当前库的依赖项
require("@rushstack/eslint-patch/modern-module-resolution");

const utils = require("@houheaven/eslint-config-helper-core");

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
