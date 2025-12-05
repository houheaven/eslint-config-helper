
// ==========================================================
// 强烈推荐的规则（plugin:vue/vue3-strongly-recommended）
// ==========================================================

module.exports = {
  rules: {
    // $emit() 触发的事件必须在 emits 中声明
    // https://eslint.vuejs.org/rules/require-explicit-emits.html
    "vue/require-explicit-emits": ["error", {
      "allowProps": false,
    }],

    // 强制 v-on 事件名称的格式
    // https://eslint.vuejs.org/rules/v-on-event-hyphenation.html
    "vue/v-on-event-hyphenation": ["warn", "always", {
      "autofix": true,
      "ignore": [],
      "ignoreTags": [],
    }],
  },
};
