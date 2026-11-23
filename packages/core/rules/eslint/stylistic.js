
// ==========================================================
// - @stylistic/eslint-plugin 定制规则
// ==========================================================

module.exports = {
  rules: {
    // 禁用行尾空白
    // 这条规则不允许在行末有尾随空格（空格、制表符和其他 Unicode 空白字符）
    // https://eslint.style/rules/no-trailing-spaces
    "@stylistic/no-trailing-spaces": ["warn", {
      skipBlankLines: true,
      ignoreComments: false,
    }],

    // 禁止出现多行空行
    // https://eslint.style/rules/no-multiple-empty-lines
    "@stylistic/no-multiple-empty-lines": ["warn", {
      max: 2,
      maxBOF: 1,
      maxEOF: 1,
    }],

    // 禁止冗余的括号
    // https://eslint.style/rules/no-extra-parens
    "@stylistic/no-extra-parens": ["warn", "all", {
      conditionalAssign: false,                     // 允许在条件测试表达式中的赋值周围加上括号
      returnAssign: false,                          // 允许在 return 语句中使用额外的小括号
      nestedBinaryExpressions: false,               // 允许在嵌套二进制表达式中使用额外的小括号
      ternaryOperandBinaryExpressions: false,       // 允许在三元运算符 ?: 的操作数周围添加额外的括号
      ignoreJSX: "all",                             // 允许在没有/所有/多行/单行 JSX 组件周围使用额外的小括号，delegate to eslint-plugin-react
      enforceForSequenceExpressions: false,         // 允许在序列表达式周围加上小括号
      enforceForFunctionPrototypeMethods: false,    // 允许在函数表达式的即时 .call 和 .apply 方法调用周围以及同一上下文中的函数表达式周围添加括号
      allowParensAfterCommentPattern: "",           // 允许在匹配正则表达式的注释前面加上额外的括号
      nestedConditionalExpressions: false,          // 允许在嵌套的条件表达式周围添加额外的小括号
    }],
  },
};
