
// ==========================================================
// @houheaven/eslint-config-helper/format-typescript
// ----------------------------------------------------------
// - @typescript-eslint/eslint-plugin 定制规则（warn）
// ==========================================================

const utils = require("./utils/utils.js");

module.exports = {
  overrides: [
    {
      files: ["**/*.ts"],
      // 当 eslint-disable 注释配置未使用时，是否报错
      reportUnusedDisableDirectives: false,
      // 继承配置文件
      extends: [
        // Typescript 支持
        "./support/typescript-support.js",
      ],
      // 规则
      rules: {
        // Typescript 规则（warn）
        ...utils.getWarnRules("typescript"),
      },
    },
  ],
};
