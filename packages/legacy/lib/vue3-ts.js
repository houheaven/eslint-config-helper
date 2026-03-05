
// ==========================================================
// @houheaven/eslint-config-helper/vue3-ts
// ----------------------------------------------------------
// - eslint-plugin-vue 定制规则
// ==========================================================

// 这个插件为当前类库提供”开箱即用“的能力，使用者无需手动安装当前库的依赖项
const utils = require("@houheaven/eslint-config-helper-core");

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
