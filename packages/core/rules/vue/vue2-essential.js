
// ==========================================================
// 极其重要的规则（Vue2 专用）
// plugin:vue/essential
// ==========================================================

module.exports = {
  rules: {
    // 禁止在 v-model 中使用自定义修饰符
    // https://eslint.vuejs.org/rules/no-custom-modifiers-on-v-model.html
    "vue/no-custom-modifiers-on-v-model": "error",

    // 在 <template> 中，只允许存在一个根节点
    // https://eslint.vuejs.org/rules/no-multiple-template-root.html
    "vue/no-multiple-template-root": "error",

    // 禁止在 props 中使用保留关键字
    // https://eslint.vuejs.org/rules/no-reserved-props.html
    // "vue/no-reserved-props": ["error", {
    //   "vueVersion": 2,
    // }],

    // 在 <template v-for> 上不允许使用 key
    // https://eslint.vuejs.org/rules/no-v-for-template-key.html
    "vue/no-v-for-template-key": "error",
    
    // 在自定义组件中，禁止给 v-model 添加参数
    // https://eslint.vuejs.org/rules/no-v-model-argument.html
    "vue/no-v-model-argument": "error",

    // 自定义 model 选项时，必须使用有效的键名（只能使用 prop、event）
    // https://eslint.vuejs.org/rules/valid-model-definition.html
    "vue/valid-model-definition": "error",

    // v-bind 指令的修饰符必须有效
    // https://eslint.vuejs.org/rules/valid-v-bind-sync.html
    "vue/valid-v-bind-sync": "error",

    // 强制使用有效的 v-cloak 指令
    // https://eslint.vuejs.org/rules/valid-v-cloak.html
    "vue/valid-v-cloak": "error",
  },
};
