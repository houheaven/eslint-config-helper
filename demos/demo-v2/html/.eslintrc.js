
module.exports = {
  // 防止 eslint 向上查找配置文件
  root: true,
  // 定义环境变量
  env: {
    commonjs: true,         // 临时添加，为了解决当前配置文件（.eslintrc.js）报错的问题，当前文件采用了 commonjs 语法（module.exports）
  },
  // 继承配置文件
  extends: [
    "@houheaven/eslint-config-helper/es6",
    "@houheaven/eslint-config-helper/import",
    "@houheaven/eslint-config-helper/html",
    // "@houheaven/eslint-config-helper/format-es6",
    // "@houheaven/eslint-config-helper/format-import",
    // "@houheaven/eslint-config-helper/format-html",
  ],
  overrides: [
    {
      files: [
        "eslint-plugin-html/demo-es5.html",
        "test/html-es5.html",
        "test/es5.js",
      ],
      extends: [
        "@houheaven/eslint-config-helper/es5",
        "@houheaven/eslint-config-helper/html",
        // "@houheaven/eslint-config-helper/format-es5",
        // "@houheaven/eslint-config-helper/format-html",
      ],
      rules: {
        "no-var": "off",
      },
    },
  ],
  rules: {
    // "no-trailing-spaces": "off",
    // "@html-eslint/no-extra-spacing-attrs": "off",
    // "@html-eslint/require-attrs": "off",
    // "@html-eslint/no-trailing-spaces": "off",
    // "@html-eslint/no-extra-spacing-text": "off",
  },
};
