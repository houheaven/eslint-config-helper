
// ==========================================================
// 强烈推荐的规则（plugin:vue/strongly-recommended）
// 严格程度：中
// - plugin:vue/base
// - plugin:vue/essential
// - common-strongly-recommended
// ==========================================================

module.exports = {
  extends: [
    require.resolve("./vue2-essential.js"),
    require.resolve("./common-strongly-recommended.js"),
  ],
  rules: {},
};
