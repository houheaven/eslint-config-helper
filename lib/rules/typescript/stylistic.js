
// ==========================================================
// - @stylistic/eslint-plugin 定制规则
// ==========================================================

module.exports = {
  rules: {
    // 要求或禁止在成员之间使用分号
    // https://eslint.style/rules/member-delimiter-style
    "@stylistic/member-delimiter-style": ["warn", {
      multiline: {
        delimiter: "semi",
        requireLast: true,
      },
      singleline: {
        delimiter: "semi",
        requireLast: true,
      },
      multilineDetection: "brackets",
    }],

    // 要求或禁止在类型注解周围使用空格
    // https://eslint.style/rules/type-annotation-spacing
    "@stylistic/type-annotation-spacing": ["warn", {
      before: true,
      after: true,
      overrides: {
        colon: {
          before: false,
        },
      },
    }],
  },
};
