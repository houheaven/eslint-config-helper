
module.exports = {
  rules: {
    // 禁止使用 var 导入
    // 替换为 "@typescript-eslint/no-require-imports"
    // https://typescript-eslint.io/rules/no-var-requires
    "@typescript-eslint/no-var-requires": ["error", {
      allow: [],
    }],

    // 推荐使用 TS 期望错误
    // https://typescript-eslint.io/rules/prefer-ts-expect-error
    "@typescript-eslint/prefer-ts-expect-error": "off",

    // 排序类型组成部分
    // 取而代之：
    // - perfectionist/sort-intersection-types
    // - perfectionist/sort-union-types
    // https://typescript-eslint.io/rules/sort-type-constituents
    "@typescript-eslint/sort-type-constituents": "off",

    // 禁止使用某些类型
    // 移除：typescript-eslint v8
    // 替换为
    // - "@typescript-eslint/no-empty-object-type"
    // - "@typescript-eslint/no-unsafe-function-type"
    // - "@typescript-eslint/no-wrapper-object-types"
    // https://typescript-eslint.io/rules/ban-types
    "@typescript-eslint/ban-types": "error",

    // TypeScript ESLint 宣布弃用所有格式化规则（如缩进、空格、分号等），并推荐用户迁移至 ESLint Stylistic 项目。
    // 此举是响应 ESLint 核心团队对格式化规则的统一管理策略。
    // - 2023 年 12 月 25 日发布的 v6.16.0 版本首次标记这些规则为“弃用”。
    // - 当前版本（v6）仍保留规则功能，仅添加弃用提示（不影响现有项目）。
    // - v7 版本（下一个主版本）将完全删除这些规则。
    "@typescript-eslint/block-spacing": "off",
    "@typescript-eslint/brace-style": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/comma-spacing": "off",
    "@typescript-eslint/func-call-spacing": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/key-spacing": "off",
    "@typescript-eslint/keyword-spacing": "off",
    "@typescript-eslint/lines-around-comment": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-extra-parens": "off",
    "@typescript-eslint/no-extra-semi": "off",
    "@typescript-eslint/padding-line-between-statements": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/space-before-blocks": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/space-infix-ops": "off",
    "@typescript-eslint/type-annotation-spacing": "off",
  },
};
