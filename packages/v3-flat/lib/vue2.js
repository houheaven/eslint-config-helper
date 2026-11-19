// ==========================================================
// @houheaven/eslint-config-helper/vue2
// ----------------------------------------------------------
// - eslint-plugin-vue 定制规则
// ==========================================================

import utils from "@houheaven/eslint-config-helper-core";
import supportEs6 from "./supports/support-es6.js";
import supportImport from "./supports/support-import.js";
import supportVue2 from "./supports/support-vue2.js";
import supportVue2Ts from "./supports/support-vue2-ts.js";

// 基础配置
const vueCommonConfig = {
  files: ["**/*.vue"],
  linterOptions: {
    // 当 eslint-disable 注释配置未使用时，是否报错
    reportUnusedDisableDirectives: "warn",
  },
};

// 基础支持：校验 ES5、ES6、import、vue2 规则
const supportVue2Config = {
  plugins: {
    ...supportEs6.plugins,
    ...supportImport.plugins,
    ...supportVue2.plugins,
  },
  languageOptions: {
    ...supportVue2.languageOptions,
    ...supportEs6.languageOptions,
  },
  settings: {
    ...supportImport.settings,
  },
  processor: supportVue2.processor,
  rules: {
    // Eslint 基础规则
    ...utils.rules.es5,
    ...utils.rules.es6,
    // eslint-plugin-import 规则
    ...utils.rules.import,
    // Vue2 规则
    ...supportVue2.rules,
    ...utils.rules.vue,
    ...utils.rules.vue2,
  },
};

// 基础支持：校验 ES5、ES6、import、vue2-ts 规则
const supportVue2TsConfig = {
  plugins: {
    ...supportEs6.plugins,
    ...supportImport.plugins,
    ...supportVue2Ts.plugins,
  },
  languageOptions: {
    ...supportEs6.languageOptions,
    ...supportVue2Ts.languageOptions,
  },
  settings: {
    ...supportImport.settings,
  },
  processor: supportVue2Ts.processor,
  rules: {
    // Eslint 基础规则
    ...utils.rules.es5,
    ...utils.rules.es6,
    // eslint-plugin-import 规则
    ...utils.rules.import,
    // Vue2 规则
    ...supportVue2Ts.rules,
    ...utils.rules.vue,
    ...utils.rules.vue2,
    // @typescript-eslint/eslint-plugin 规则
    ...utils.rules.typescript,
  },
};

// 预设配置：校验 vue2 文件的 ES5、ES6、import、vue2 规则
const vue2Config = {
  name: "@houheaven/eslint-config-helper/vue2",
  ...vueCommonConfig,
  ...supportVue2Config,
};

// 预设配置：校验 Vue2 + TypeScript 文件的 ES5、ES6、import、vue2-ts 规则
const vue2TsConfig = {
  name: "@houheaven/eslint-config-helper/vue2-ts",
  ...vueCommonConfig,
  ...supportVue2TsConfig,
};

export default {
  supports: {
    vue2: supportVue2Config,
    vue2Ts: supportVue2TsConfig,
  },
  configs: {
    vue2: [
      vue2Config,
    ],
    vue2Ts: [
      vue2TsConfig,
    ],
  },
};
