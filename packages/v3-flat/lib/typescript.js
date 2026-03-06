
// ==========================================================
// @houheaven/eslint-config-helper/typescript
// ----------------------------------------------------------
// - @typescript-eslint/eslint-plugin 定制规则
// ==========================================================

// 132 条规则
// 官方有很多种分类
// 配置分组：recommended、strict、stylistic
// 元数据分组：fixable、has-suggestions、type-checked、extension、deprecated
// 两类分组不能覆盖全部规则，部分规则还存在交叉，所以当前规则分类优先级如下：
// extension > fixable > type-checked > has-suggestions > other

import utils from "@houheaven/eslint-config-helper-core";
import supportEs6 from "./supports/support-es6.js";
import supportImport from "./supports/support-import.js";
import supportTypescript from "./supports/support-typescript.js";

// 基础配置
const tsCommonConfig = {
  files: ["**/*.ts"],
  linterOptions: {
    // 当 eslint-disable 注释配置未使用时，是否报错
    reportUnusedDisableDirectives: "warn",
  },
};

// 基础支持：校验 ES5、ES6、import、ts 规则
const supportTs = {
  plugins: {
    ...supportImport.plugins,
    ...supportTypescript.plugins,
  },
  languageOptions: {
    ...supportTypescript.languageOptions,
    ...supportEs6.languageOptions,
  },
  settings: {
    ...supportImport.settings,
  },
  // 规则
  rules: {
    // Eslint 基础规则
    ...utils.rules.es5,
    ...utils.rules.es6,
    // eslint-plugin-import 规则
    ...utils.rules.import,
    // @typescript-eslint/eslint-plugin 规则
    ...utils.rules.typescript,
  },
};

// 预设配置：校验 ts 文件的 ES5、ES6、import、ts 规则
const tsConfig = {
  name: "@houheaven/eslint-config-helper/typescript",
  ...tsCommonConfig,
  ...supportTs,
};

export default {
  supports: {
    typescript: supportTs,
  },
  configs: {
    typescript: [
      tsConfig,
    ],
  },
};
