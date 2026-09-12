
// ==========================================================
// @houheaven/eslint-config-helper/react
// ----------------------------------------------------------
// - eslint-plugin-react 定制规则
// ==========================================================

import utils from "@houheaven/eslint-config-helper-core";
import supportEs6 from "./supports/support-es6.js";
import supportImport from "./supports/support-import.js";
import supportReactJsx from "./supports/support-react-jsx.js";
import supportReactTsx from "./supports/support-react-tsx.js";

// 基础配置（JSX）
const reactJsxCommonConfig = {
  files: ["**/*.jsx"],
  linterOptions: {
    // 当 eslint-disable 注释配置未使用时，是否报错
    reportUnusedDisableDirectives: "warn",
  },
};

// 基础配置（TSX）
const reactTsxCommonConfig = {
  files: ["**/*.tsx"],
  linterOptions: {
    // 当 eslint-disable 注释配置未使用时，是否报错
    reportUnusedDisableDirectives: "warn",
  },
};

// 基础支持：校验 ES5、ES6、import、react 规则
const supportReactJsxConfig = {
  plugins: {
    ...supportEs6.plugins,
    ...supportImport.plugins,
    ...supportReactJsx.plugins,
  },
  languageOptions: {
    ...supportEs6.languageOptions,
    ...supportReactJsx.languageOptions,
  },
  settings: {
    ...supportImport.settings,
    ...supportReactJsx.settings,
  },
  rules: {
    // Eslint 基础规则
    ...utils.rules.es5,
    ...utils.rules.es6,
    // eslint-plugin-import 规则
    ...utils.rules.import,
    // React 规则
    ...supportReactJsx.rules,
    ...utils.rules.react,
    ...utils.rules.reactHooks,
  },
};

// 基础支持：校验 ES5、ES6、TypeScript、import、react 规则
const supportReactTsxConfig = {
  plugins: {
    ...supportEs6.plugins,
    ...supportImport.plugins,
    ...supportReactTsx.plugins,
  },
  languageOptions: {
    ...supportReactTsx.languageOptions,
    ...supportEs6.languageOptions,
  },
  settings: {
    ...supportImport.settings,
    ...supportReactTsx.settings,
  },
  rules: {
    // Eslint 基础规则
    ...utils.rules.es5,
    ...utils.rules.es6,
    // eslint-plugin-import 规则
    ...utils.rules.import,
    // React 规则
    ...supportReactTsx.rules,
    ...utils.rules.react,
    ...utils.rules.reactHooks,
    // @typescript-eslint/eslint-plugin 规则
    ...utils.rules.typescript,
  },
};

// 预设配置：校验 JSX 文件的 ES5、ES6、import、react 规则
const reactJsxConfig = {
  name: "@houheaven/eslint-config-helper/react",
  ...reactJsxCommonConfig,
  ...supportReactJsxConfig,
};

// 预设配置：校验 TSX 文件的 ES5、ES6、TypeScript、import、react 规则
const reactTsxConfig = {
  name: "@houheaven/eslint-config-helper/react-tsx",
  ...reactTsxCommonConfig,
  ...supportReactTsxConfig,
};

export default {
  supports: {
    reactJsx: supportReactJsxConfig,
    reactTsx: supportReactTsxConfig,
  },
  configs: {
    reactJsx: [
      reactJsxConfig,
    ],
    reactTsx: [
      reactTsxConfig,
    ],
  },
};
