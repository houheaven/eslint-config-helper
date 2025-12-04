
// ==========================================================
// 强烈推荐的规则（plugin:vue/vue3-strongly-recommended）
// 严格程度：中
// - plugin:vue/base
// - plugin:vue/vue3-essential
// - common-strongly-recommended
// ==========================================================

module.exports = {
  extends: [
    require.resolve("./vue3-essential.js"),
    require.resolve("./common-strongly-recommended.js"),
  ],
  rules: {
    // $emit() 触发的事件必须在 emits 中声明
    // https://eslint.vuejs.org/rules/require-explicit-emits.html
    "vue/require-explicit-emits": "warn",

    // 强制 v-on 事件名称的格式
    // https://eslint.vuejs.org/rules/v-on-event-hyphenation.html
    "vue/v-on-event-hyphenation": "warn",
  },
};
