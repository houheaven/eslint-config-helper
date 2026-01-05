
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

const utils = require("./utils/utils.js");

module.exports = {
  // 当 eslint-disable 注释配置未使用时，是否报错
  reportUnusedDisableDirectives: true,
  // 继承配置文件
  extends: [
    // Typescript 支持
    "./support/ts-support.js",
  ],
  // 规则
  rules: {
    // @typescript-eslint/eslint-plugin 规则
    ...utils.rules.typescript,
  },
  overrides: [
    // {
    //   files: ["**/*.ts"],
    //   parser: "@babel/eslint-parser",
    //   parserOptions: {
    //     sourceType: "module",
    //     babelOptions: {
    //       plugins: [
    //         [
    //           // 支持 ES7 新特性：装饰器
    //           "@babel/plugin-proposal-decorators",
    //           { version: "2023-01" }
    //         ],
    //       ],
    //     },
    //   },
    //   rules: {
    //     "class-methods-use-this": "off",
    //   },
    // },
  ],
};
