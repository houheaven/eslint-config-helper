
module.exports = {
  // 防止 eslint 向上查找配置文件
  root: true,
  // 继承配置文件
  extends: [
    "@houheaven/eslint-config-helper/es6",
    "@houheaven/eslint-config-helper/import",
    "@houheaven/eslint-config-helper/typescript",
    // "@houheaven/eslint-config-helper/format-es6",
    // "@houheaven/eslint-config-helper/format-import",
    // "@houheaven/eslint-config-helper/format-typescript",
  ],
  rules: {
    // "@typescript-eslint/array-type": "off",
    // "@typescript-eslint/explicit-function-return-type": "off",
    // "@typescript-eslint/prefer-optional-chain": "off",
    // "@typescript-eslint/prefer-string-starts-ends-with": "off",
    // "@typescript-eslint/no-confusing-void-expression": "off",
    // "@typescript-eslint/prefer-reduce-type-parameter": "off",
    // "@typescript-eslint/prefer-function-type": "off",
  },
};
