
// ==========================================================
// Vue3 全部规则
// ----------------------------------------------------------
// - plugin:vue/base
// - plugin:vue/vue3-essential
// - plugin:vue/vue3-strongly-recommended
// - plugin:vue/vue3-recommended
// - common-extra
// - common-eslint
// ==========================================================

module.exports = {
  extends: [
    "../rules/vue/vue3-recommended.js",
    "../rules/vue/common-extra.js",
    "../rules/vue/common-eslint.js",
  ],
  rules: {
    "indent": "off",
    "max-len": "off",
    "no-irregular-whitespace": "off",
    "vue/no-unsupported-features": ["error", {
      "version": "^3.2.0",
      "ignores": [],
    }],
  },
};
