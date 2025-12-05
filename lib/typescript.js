
// ======================================================================
// @houheaven/eslint-config-helper/typescript
// ----------------------------------------------------------------------
// - ./configs/eslint.js     : eslint 定制规则
// - ./configs/import.js     : eslint-plugin-import 定制规则
// - ./configs/typescript.js : @typescript-eslint/eslint-plugin 定制规则
// ======================================================================

module.exports = {
  overrides: [
    {
      files: ["*.ts", "**/*.ts"],
      extends: [
        "./configs/eslint.js",
        "./configs/import.js",
        "./configs/typescript.js",
      ],
      rules: {
        "class-methods-use-this": "off",
        "import/extensions": "off",
        "import/no-unresolved": "off",
      },
    },
    // {
    //   files: ["*.ts", "**/*.ts"],
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
