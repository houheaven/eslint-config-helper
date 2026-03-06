
// ==========================================================
// @houheaven/eslint-config-helper/vue3
// ----------------------------------------------------------
// - eslint-plugin-vue 定制规则
// ==========================================================

import utils from "@houheaven/eslint-config-helper-core";
import supportEs6 from "./supports/support-es6.js";
import supportImport from "./supports/support-import.js";
import supportVue3 from "./supports/support-vue3.js";
import supportVue3Ts from "./supports/support-vue3-ts.js";

// 基础配置
const vueCommonConfig = {
  files: ["**/*.vue"],
  linterOptions: {
    // 当 eslint-disable 注释配置未使用时，是否报错
    reportUnusedDisableDirectives: "warn",
  },
};

// 基础支持：校验 ES5、ES6、import、vue3 规则
const supportVue3Config = {
  plugins: {
    ...supportEs6.plugins,
    ...supportImport.plugins,
    ...supportVue3.plugins,
  },
  languageOptions: {
    ...supportVue3.languageOptions,
    ...supportEs6.languageOptions,
  },
  settings: {
    ...supportImport.settings,
  },
  processor: supportVue3.processor,
  rules: {
    // Eslint 基础规则
    ...utils.rules.es5,
    ...utils.rules.es6,
    // eslint-plugin-import 规则
    ...utils.rules.import,
    // Vue3 规则
    ...supportVue3.rules,
    ...utils.rules.vue,
    ...utils.rules.vue3,
  },
};

// 基础支持：校验 ES5、ES6、import、vue3-ts 规则
const supportVue3TsConfig = {
  plugins: {
    ...supportEs6.plugins,
    ...supportImport.plugins,
    ...supportVue3Ts.plugins,
  },
  languageOptions: {
    ...supportEs6.languageOptions,
    ...supportVue3Ts.languageOptions,
  },
  settings: {
    ...supportImport.settings,
  },
  processor: supportVue3Ts.processor,
  rules: {
    // Eslint 基础规则
    ...utils.rules.es5,
    ...utils.rules.es6,
    // eslint-plugin-import 规则
    ...utils.rules.import,
    // Vue3 规则
    ...supportVue3Ts.rules,
    ...utils.rules.vue,
    ...utils.rules.vue3,
    // @typescript-eslint/eslint-plugin 规则
    ...utils.rules.typescript,
  },
};

// 预设配置：校验 Vue3 文件的 ES5、ES6、import、vue3 规则
const vue3Config = {
  name: "@houheaven/eslint-config-helper/vue3",
  ...vueCommonConfig,
  ...supportVue3Config,
};

// 预设配置：校验 Vue3 + TypeScript 文件的 ES5、ES6、import、vue3-ts 规则
const vue3TsConfig = {
  name: "@houheaven/eslint-config-helper/vue3-ts",
  ...vueCommonConfig,
  ...supportVue3TsConfig,
};

export default {
  supports: {
    vue3: supportVue3Config,
    vue3Ts: supportVue3TsConfig,
  },
  configs: {
    vue3: [
      vue3Config,
    ],
    vue3Ts: [
      vue3TsConfig,
    ],
  },
};
