
// ==========================================================
// @houheaven/eslint-config-helper/es5
// ----------------------------------------------------------
// - Eslint ES5 定制规则
// ==========================================================

import utils from "@houheaven/eslint-config-helper-core";
import supportEs5 from "./supports/support-es5.js";

// 基础配置
const jsCommonConfig = {
  files: [
    // js 文件
    "**/*.js",
    // Nodejs CommonJS 模块文件
    "**/*.cjs",
    // Nodejs ESM 模块文件
    "**/*.mjs",
  ],
  linterOptions: {
    // 当 eslint-disable 注释配置未使用时，是否报错
    reportUnusedDisableDirectives: "warn",
  },
};

// 基础支持：校验 ES5 规则
const supportJsEs5 = {
  plugins: {
    ...supportEs5.plugins,
  },
  languageOptions: {
    ...supportEs5.languageOptions,
  },
  // 规则
  rules: {
    // Eslint ES5 规则
    ...utils.rules.es5,
  },
};

// 预设配置：校验 js 文件的 ES5 规则
const jsEs5Config = {
  name: "@houheaven/eslint-config-helper/es5",
  ...jsCommonConfig,
  ...supportJsEs5,
};

export default {
  supports: {
    es5: supportJsEs5,
  },
  configs: {
    es5: [
      jsEs5Config,
    ],
  },
};
