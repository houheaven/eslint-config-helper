
module.exports = {
  // 防止 eslint 向上查找配置文件
  root: true,
  // 继承配置文件
  extends: [
    "../../lib/javascript-es6.js",
    "../../lib/import.js",
    "../../lib/typescript.js",
    // "../../lib/format-es6.js",
    // "../../lib/format-import.js",
    // "../../lib/format-typescript.js",
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
