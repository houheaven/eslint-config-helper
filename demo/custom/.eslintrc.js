
const { getRules } = require("../../lib/utils/utils.js");

module.exports = {
  // 防止 eslint 向上查找配置文件
  root: true,
  // 继承配置文件
  extends: [
    "../../lib/support/es5-support.js",
    "../../lib/support/es6-support.js",
    "../../lib/support/import-support.js",
    "../../lib/support/typescript-support.js",
    "../../lib/support/html-support.js",
    // "../../lib/support/vue2-support.js",
    // "../../lib/support/vue3-support.js",
    "../../lib/support/vue3-ts-support.js",
  ],
  // 定义规则
  rules: {
    ...getRules([
      "quotes",
      "no-var",
      "camelcase",
      "no-fallthrough",
      "object-shorthand",
      "import/no-empty-named-blocks",
      "@html-eslint/quotes",
      "@html-eslint/id-naming-convention",
      "vue/v-bind-style",
      "vue/no-static-inline-styles",
      "vue/no-boolean-default",
      "vue/no-shared-component-data",
      "vue/valid-v-memo",
      "vue/prefer-import-from-vue",
      "@stylistic/member-delimiter-style",
      "@typescript-eslint/no-unsafe-unary-minus",
      "@typescript-eslint/prefer-enum-initializers",
      "@typescript-eslint/consistent-type-definitions",
    ]),
  },
};
