
module.exports = {
  rules: {

    // 强制组件顶级元素的顺序
    // Replaced by "vue/block-order"
    // Deprecated in version: v9.16.0
    // Removed in version: v10.0.0
    // https://eslint.vuejs.org/rules/component-tags-order.html
    "vue/component-tags-order": ["warn", {
      "order": [
        "docs",
        "template",
        "script:not([setup])",
        "script[setup]",
        "style:not([scoped])",
        "style[scoped]",
        "i18n",
      ],
    }],

    // 强制组件的 data 属性是一个函数返回对象的形式
    // Replaced by "vue/no-setup-props-reactivity-loss"
    // Deprecated in version: v9.17.0
    // Removed in version: v10.0.0
    // https://eslint.vuejs.org/rules/no-setup-props-destructure.html
    "vue/no-setup-props-destructure": "error",
    
    // 在 v-on 指令绑定的回调事件中，如果没有参数，需要省略回调事件的括号
    // Replaced by "vue/v-on-handler-style"
    // Deprecated in version: v9.7.0
    // Removed in version: v10.0.0
    // https://eslint.vuejs.org/rules/v-on-function-call.html
    "vue/v-on-function-call": ["warn", "always"],

  },
};
