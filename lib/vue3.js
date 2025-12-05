
// ==========================================================
// @houheaven/eslint-config-helper/vue3
// ----------------------------------------------------------
// - ./configs/eslint-es6.js : eslint 定制规则
// - ./configs/import.js     : eslint-plugin-import 定制规则
// - ./configs/vue3.js       : eslint-plugin-vue 定制规则
// ==========================================================

module.exports = {
  overrides: [
    {
      files: ["**/*.vue"],
      extends: [
        "./configs/eslint-es6.js",
        "./configs/import.js",
        "./configs/vue3.js",
      ],
      rules: {
        "indent": "off",
        "max-len": "off",
        "no-irregular-whitespace": "off",
        // 禁止在 Vue 指定的版本上使用不支持的语法
        // https://eslint.vuejs.org/rules/no-unsupported-features.html
        "vue/no-unsupported-features": ["error", {
          "version": "^3.4.0",
          "ignores": [],
        }],
        // 禁止在 props 中使用保留关键字
        // https://eslint.vuejs.org/rules/no-reserved-props.html
        "vue/no-reserved-props": ["error", {
          "vueVersion": 3,
        }],
      },
    },
  ],
};
