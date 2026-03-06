
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
  },
};
