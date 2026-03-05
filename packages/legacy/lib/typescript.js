
// ==========================================================
// @houheaven/eslint-config-helper/typescript
// ----------------------------------------------------------
// - @typescript-eslint/eslint-plugin 定制规则
// ==========================================================

// 这个插件为当前类库提供”开箱即用“的能力，使用者无需手动安装当前库的依赖项
require("@rushstack/eslint-patch/modern-module-resolution");

// 132 条规则
// 官方有很多种分类
// 配置分组：recommended、strict、stylistic
// 元数据分组：fixable、has-suggestions、type-checked、extension、deprecated
// 两类分组不能覆盖全部规则，部分规则还存在交叉，所以当前规则分类优先级如下：
// extension > fixable > type-checked > has-suggestions > other

const utils = require("@houheaven/eslint-config-helper-core");

module.exports = {
  // Typescript 规则很多是类型感知规则，需要访问 TypeScript 类型系统（即需要配置 parserOptions）
  // typescript-support.js 作用域是 TS 文件，如果没有 overrides 限制，utils.rules.typescript 规则会应用到所有文件
  // 其他类型的文件没有经过 parserOptions 处理，就会导致报错，因此此处必须使用 overrides 嵌套
  overrides: [
    {
      files: ["**/*.ts"],
      // 当 eslint-disable 注释配置未使用时，是否报错
      reportUnusedDisableDirectives: true,
      // 继承配置文件
      extends: [
        // Typescript 支持
        "./support/typescript-support.js",
      ],
      rules: {
        // @typescript-eslint/eslint-plugin 规则
        ...utils.rules.typescript,
      },
    },
  ],
};
