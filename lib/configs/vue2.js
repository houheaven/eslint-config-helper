
// ==========================================================
// Vue2 全部规则
// ----------------------------------------------------------
// - plugin:vue/base
// - plugin:vue/essential
// - plugin:vue/strongly-recommended
// - plugin:vue/recommended
// - common-extra
// - common-eslint
// ==========================================================

module.exports = {
  extends: [
    "../rules/vue/vue2-recommended.js",
    "../rules/vue/common-extra.js",
    "../rules/vue/common-eslint.js",
  ],
  rules: {
    "indent": "off",
    "max-len": "off",
    "no-irregular-whitespace": "off",
    "vue/no-unsupported-features": ["error", {
      "version": "^2.6.0",
      "ignores": [],
    }],
  },
};
