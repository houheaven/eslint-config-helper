
// ==========================================================
// @houheaven/eslint-config-helper/es6
// ----------------------------------------------------------
// - Eslint ES5 定制规则
// - Eslint ES6+ 定制规则
// - eslint-plugin-import 定制规则
// ==========================================================

import utils from "@houheaven/eslint-config-helper-core";
import supportEs6 from "./supports/support-es6.js";
import supportImport from "./supports/support-import.js";

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

// 基础支持：校验 ES5、ES6、import 规则
const supportJsEs6 = {
  plugins: {
    ...supportImport.plugins,
    ...supportEs6.plugins,
  },
  languageOptions: {
    ...supportEs6.languageOptions,
  },
  settings: {
    ...supportImport.settings,
  },
  // 规则
  rules: {
    // Eslint ES6 规则
    ...utils.rules.es5,
    ...utils.rules.es6,
    // eslint-plugin-import 规则
    ...utils.rules.import,
  },
};

// 预设配置：校验 js 文件的 ES5、ES6、import 规则
const jsEs6Config = {
  name: "@houheaven/eslint-config-helper/es6",
  ...jsCommonConfig,
  ...supportJsEs6,
};

export default {
  supports: {
    es6: supportJsEs6,
  },
  configs: {
    es6: [
      jsEs6Config,
    ],
  },
};
