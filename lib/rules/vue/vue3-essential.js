
// ==========================================================
// 极其重要的规则（plugin:vue/vue3-essential）
// 严格程度：低
// - plugin:vue/base
// - common-essential
// ==========================================================

module.exports = {
  extends: [
    require.resolve("./common-base.js"),
    require.resolve("./common-essential.js"),
  ],
  rules: {
    // Vue3 专用 essential 规则
    
    // 禁止 data 使用废弃的对象定义方式
    // https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html
    "vue/no-deprecated-data-object-declaration": "error",

    // 禁止使用废弃的销毁生命周期（destroyed、beforeDestroy）
    // https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html
    "vue/no-deprecated-destroyed-lifecycle": "error",

    // 禁止使用废弃的 $listeners
    // https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html
    "vue/no-deprecated-dollar-listeners-api": "error",

    // 禁止使用废弃的 $scopedSlots
    // https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html
    "vue/no-deprecated-dollar-scopedslots-api": "error",

    // 禁止使用废弃的事件api（$on 等）
    // https://eslint.vuejs.org/rules/no-deprecated-events-api.html
    "vue/no-deprecated-events-api": "error",
    
    // 禁止使用废弃的过滤器语法
    // https://eslint.vuejs.org/rules/no-deprecated-filter.html
    "vue/no-deprecated-filter": "error",

    // 禁止使用废弃的 functional 模板（<template functional>）
    // https://eslint.vuejs.org/rules/no-deprecated-functional-template.html
    "vue/no-deprecated-functional-template": "error",

    // 禁止使用废弃的 html 标签 is 属性
    // https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html
    "vue/no-deprecated-html-element-is": "error",

    // 禁止使用废弃的 inline-template 属性
    // https://eslint.vuejs.org/rules/no-deprecated-inline-template.html
    "vue/no-deprecated-inline-template": "error",

    // 禁止使用废弃的 props 默认函数中访问 this
    // https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html
    "vue/no-deprecated-props-default-this": "error",

    // 禁止使用废弃的 RouterLink tag 属性
    // https://eslint.vuejs.org/rules/no-deprecated-router-link-tag-prop.html
    "vue/no-deprecated-router-link-tag-prop": "error",

    // 禁止使用废弃的 scope 属性
    // https://eslint.vuejs.org/rules/no-deprecated-scope-attribute.html
    "vue/no-deprecated-scope-attribute": "error",

    // 禁止使用废弃的 slot 属性
    // https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html
    "vue/no-deprecated-slot-attribute": "error",

    // 禁止使用废弃的 slot-scope 属性
    // https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html
    "vue/no-deprecated-slot-scope-attribute": "error",

    // 禁止使用废弃的 v-bind 指令的 .sync 修饰符
    // https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html
    "vue/no-deprecated-v-bind-sync": "error",

    // 禁止使用废弃的 v-is 指令
    // https://eslint.vuejs.org/rules/no-deprecated-v-is.html
    "vue/no-deprecated-v-is": "error",

    // 禁止使用废弃的 .native 修饰符
    // https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html
    "vue/no-deprecated-v-on-native-modifier": "error",

    // 禁止使用废弃的数字（键码）修饰符
    // https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html
    "vue/no-deprecated-v-on-number-modifiers": "error",

    // 禁止使用废弃的 Vue.config.keyCodes 配置
    // https://eslint.vuejs.org/rules/no-deprecated-vue-config-keycodes.html
    "vue/no-deprecated-vue-config-keycodes": "error",

    // 禁止把 expose、defineExpose 放在 await 异步函数之后
    // https://eslint.vuejs.org/rules/no-expose-after-await.html
    "vue/no-expose-after-await": "error",

    // 禁止把生命周期函数放在 await 异步函数之后
    // https://eslint.vuejs.org/rules/no-lifecycle-after-await.html
    "vue/no-lifecycle-after-await": "error",

    // 禁止把 watch 放在 await 异步函数之后
    // https://eslint.vuejs.org/rules/no-watch-after-await.html
    "vue/no-watch-after-await": "error",

    // <template v-for> 的 key 不能放在子元素上（放在自身）
    // https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html
    "vue/no-v-for-template-key-on-child": "error",

    // 强制从“vue”导入，而不是从“@vue/*”导入
    // https://eslint.vuejs.org/rules/prefer-import-from-vue.html
    "vue/prefer-import-from-vue": "error",

    // 强制 $slots 属性必须是一个函数
    // https://eslint.vuejs.org/rules/require-slots-as-functions.html
    "vue/require-slots-as-functions": "error",

    // <transition> 的内容必须有效
    // https://eslint.vuejs.org/rules/require-toggle-inside-transition.html
    "vue/require-toggle-inside-transition": "error",

    // 强制使用有效的 v-is
    // https://eslint.vuejs.org/rules/valid-v-is.html
    "vue/valid-v-is": "error",

    // 强制使用有效的 v-memo
    // https://eslint.vuejs.org/rules/valid-v-memo.html
    "vue/valid-v-memo": "error",
  },
};
