
// ==========================================================
// 推荐的规则（通用）
// plugin:vue/recommended、plugin:vue/vue3-recommended 通用部分
// ==========================================================

module.exports = {
  rules: {
    // 属性排序
    // ==========================================================
    // - DEFINITION             e.g. 'is', 'v-is'
    // - GLOBAL                 e.g. 'id'
    // - OTHER_ATTR alias for [ATTR_DYNAMIC, ATTR_STATIC, ATTR_SHORTHAND_BOOL]:
    //   - ATTR_STATIC          e.g. 'prop="foo"', 'custom-prop="foo"'
    //   - ATTR_DYNAMIC         e.g. 'v-bind:prop="foo"', ':prop="foo"'
    //   - ATTR_SHORTHAND_BOOL  e.g. 'boolean-prop'
    // - TWO_WAY_BINDING        e.g. 'v-model'
    // - CONTENT                e.g. 'v-text', 'v-html'
    // - SLOT                   e.g. 'v-slot', 'slot'.
    // - OTHER_DIRECTIVES       e.g. 'v-custom-directive'
    // - RENDER_MODIFIERS       e.g. 'v-once', 'v-pre'
    // - LIST_RENDERING         e.g. 'v-for item in items'
    // - UNIQUE                 e.g. 'ref', 'key'
    // - CONDITIONALS           e.g. 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
    // - EVENTS                 e.g. '@click="functionCall"', 'v-on="event"'
    // ==========================================================
    // https://eslint.vuejs.org/rules/attributes-order.html
    "vue/attributes-order": ["warn", {
      "order": [
        "DEFINITION",
        "GLOBAL",
        "ATTR_STATIC",
        "ATTR_DYNAMIC",
        "ATTR_SHORTHAND_BOOL",
        "TWO_WAY_BINDING",
        "CONTENT",
        "SLOT",
        "OTHER_DIRECTIVES",
        "RENDER_MODIFIERS",
        "LIST_RENDERING",
        "UNIQUE",
        "CONDITIONALS",
        "EVENTS",
      ],
      "alphabetical": false,
      // "sortLineLength": false,
    }],

    // 强制组件顶级元素的顺序
    // https://eslint.vuejs.org/rules/block-order.html
    "vue/block-order": ["warn", {
      "order": [
        "docs",
        "i18n",
        "template",
        "script:not([setup])",
        "script[setup]",
        "style[scoped]",
        "style:not([scoped])",
      ],
    }],

    // 禁用不必要的 <template> 标签
    // https://eslint.vuejs.org/rules/no-lone-template.html
    "vue/no-lone-template": ["error", {
      "ignoreAccessible": false,
    }],

    // 不允许将多个参数传递给作用域插槽
    // https://eslint.vuejs.org/rules/no-multiple-slot-args.html
    "vue/no-multiple-slot-args": "error",

    // 禁止在 props 中使用 required 选项和默认值
    // https://eslint.vuejs.org/rules/no-required-prop-with-default.html
    "vue/no-required-prop-with-default": ["warn", {
      "autofix": true,
    }],

    // 禁止使用 v-html 来预防 XSS 攻击
    // https://eslint.vuejs.org/rules/no-v-html.html
    "vue/no-v-html": "off",

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
        "slots",
        "expose",
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

    // 禁止在 <template> 中使用 this
    // https://eslint.vuejs.org/rules/this-in-template.html
    "vue/this-in-template": ["warn", "never"],
  },
};
