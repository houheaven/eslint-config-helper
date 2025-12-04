
// ==========================================================
// 推荐的规则（plugin:vue/recommended）
// 严格程度：高
// - plugin:vue/base
// - plugin:vue/essential
// - plugin:vue/strongly-recommended
// - common-recommended
// ==========================================================

module.exports = {
  extends: [
    require.resolve("./vue2-strongly-recommended.js"),
    require.resolve("./common-recommended.js"),
  ],
  rules: {},
};
