
// ===============================================================================
// @houheaven/eslint-config-helper/html
// -------------------------------------------------------------------------------
// - @html-eslint/eslint-plugin 定制规则
// ===============================================================================

import utils from "@houheaven/eslint-config-helper-core";
import supportHtml from "./supports/support-html.js";
import supportEs5 from "./supports/support-es5.js";
import supportEs6 from "./supports/support-es6.js";
import supportImport from "./supports/support-import.js";

// 基础配置
const htmlCommonConfig = {
  files: ["**/*.html", "**/*.htm", "**/*.php"],
  linterOptions: {
    // 当 eslint-disable 注释配置未使用时，是否报错
    reportUnusedDisableDirectives: "warn",
  },
};

// 基础支持：校验 html、ES5 规则
const supportHtmlEs5 = {
  plugins: {
    ...supportHtml.plugins,
    ...supportEs5.plugins,
  },
  languageOptions: {
    ...supportHtml.languageOptions,
    ...supportEs5.languageOptions,
  },
  settings: {
    ...supportHtml.settings,
  },
  // 规则
  rules: {
    // Eslint 基础规则
    ...utils.rules.es5,
    // html 规则
    ...supportHtml.rules,
    ...utils.rules.html,
  },
};

// 基础支持：校验 html、ES6 规则
const supportHtmlEs6 = {
  plugins: {
    ...supportHtml.plugins,
    ...supportEs6.plugins,
    ...supportImport.plugins,
  },
  languageOptions: {
    ...supportHtml.languageOptions,
    ...supportEs6.languageOptions,
  },
  settings: {
    ...supportHtml.settings,
    ...supportImport.settings,
  },
  // 规则
  rules: {
    // Eslint 基础规则
    ...utils.rules.es5,
    ...utils.rules.es6,
    // eslint-plugin-import 规则
    ...utils.rules.import,
    // html 规则
    ...supportHtml.rules,
    ...utils.rules.html,
  },
};

// 预设配置：校验 html 文件的 html、ES5 规则
const htmlEs5Config = {
  name: "@houheaven/eslint-config-helper/html-es5",
  ...htmlCommonConfig,
  ...supportHtmlEs5,
};

// 预设配置：校验 html 文件的 html、ES6 规则
const htmlEs6Config = {
  name: "@houheaven/eslint-config-helper/html-es6",
  ...htmlCommonConfig,
  ...supportHtmlEs6,
};

export default {
  supports: {
    htmlEs5: supportHtmlEs5,
    htmlEs6: supportHtmlEs6,
  },
  configs: {
    htmlEs5: [
      htmlEs5Config,
    ],
    htmlEs6: [
      htmlEs6Config,
    ],
  },
};
