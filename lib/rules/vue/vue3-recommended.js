
// ==========================================================
// 推荐的规则（plugin:vue/vue3-recommended）
// 严格程度：高
// - plugin:vue/base
// - plugin:vue/vue3-essential
// - plugin:vue/vue3-strongly-recommended
// - common-recommended
// ==========================================================

module.exports = {
  extends: [
    require.resolve("./vue3-strongly-recommended.js"),
    require.resolve("./common-recommended.js"),
  ],
  rules: {},
};
