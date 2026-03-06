
const { getRules } = require("@houheaven/eslint-config-helper/utils");

module.exports = {
  // 防止 eslint 向上查找配置文件
  root: true,
  // 继承配置文件
  extends: [
    "@houheaven/eslint-config-helper/support-es5",
    "@houheaven/eslint-config-helper/support-es6",
    "@houheaven/eslint-config-helper/support-import",
    "@houheaven/eslint-config-helper/support-typescript",
    "@houheaven/eslint-config-helper/support-html",
    // "@houheaven/eslint-config-helper/support-vue2",
    // "@houheaven/eslint-config-helper/support-vue3",
    "@houheaven/eslint-config-helper/support-vue3-ts",
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
      "vue/require-expose",
      "@stylistic/member-delimiter-style",
      "@typescript-eslint/no-unsafe-unary-minus",
      "@typescript-eslint/prefer-enum-initializers",
      "@typescript-eslint/consistent-type-definitions",
      // "@typescript-eslint/no-unnecessary-boolean-literal-compare",
      // "@typescript-eslint/no-unnecessary-condition",
      // "@typescript-eslint/prefer-nullish-coalescing",
      // "@typescript-eslint/strict-boolean-expressions",
      // "@typescript-eslint/no-mixed-enums",
      // "@typescript-eslint/no-unsafe-call",
      // "@typescript-eslint/no-unsafe-assignment",
    ]),
  },
};
