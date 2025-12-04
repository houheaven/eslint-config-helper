
// ==========================================================
// 推荐的规则（通用）
// plugin:vue/recommended、plugin:vue/vue3-recommended 通用部分
// ==========================================================

module.exports = {
  rules: {
    // 强制组件顶级元素的顺序
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

    // 属性排序
    // https://eslint.vuejs.org/rules/attributes-order.html
    "vue/attributes-order": ["off", {
      "order": [
        "DEFINITION",
        "GLOBAL",
        "OTHER_ATTR",
        "OTHER_DIRECTIVES",
        "TWO_WAY_BINDING",
        "CONTENT",
        "RENDER_MODIFIERS",
        ["LIST_RENDERING", "UNIQUE", "SLOT"],
        "EVENTS",
        "CONDITIONALS",
      ],
      "alphabetical": false,
    }],
    
    // 强制组件中属性的排序
    // https://eslint.vuejs.org/rules/order-in-components.html
    "vue/order-in-components": ["warn", {
      "order": [
        "el",
        "name",
        "key",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        ["provide", "inject"],
        "ROUTER_GUARDS",
        "layout",
        "middleware",
        "validate",
        "scrollToTop",
        "transition",
        "loading",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "emits",
        "setup",
        "asyncData",
        "data",
        "fetch",
        "head",
        "computed",
        "watch",
        "watchQuery",
        "LIFECYCLE_HOOKS",
        "methods",
        ["template", "render"],
        "renderError",
      ],
    }],

    // https://eslint.vuejs.org/rules/no-lone-template.html
    "vue/no-lone-template": "warn",

    // 不允许将多个参数传递给作用域插槽
    // https://eslint.vuejs.org/rules/no-multiple-slot-args.html
    "vue/no-multiple-slot-args": "warn",

    // 禁止使用 v-html 来预防 XSS 攻击
    // https://eslint.vuejs.org/rules/no-v-html.html
    "vue/no-v-html": "off",

    // 禁止在 <template> 中使用 this
    // https://eslint.vuejs.org/rules/this-in-template.html
    "vue/this-in-template": "warn",
  },
};
