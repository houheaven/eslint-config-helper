
// ==========================================================
// 未分类规则（Uncategorized）
// ==========================================================

module.exports = {
  rules: {
    // 组件 API 风格
    // https://eslint.vuejs.org/rules/component-api-style.html
    "vue/component-api-style": ["off", ["script-setup", "composition", "composition-vue2", "options"]],
    // "vue/component-api-style": ["error", ["script-setup"]],

    // 强制 defineEmits 定义风格
    // https://eslint.vuejs.org/rules/define-emits-declaration.html
    "vue/define-emits-declaration": ["error", "type-based"],

    // 强制 defineEmits、defineProps 编译器宏的顺序
    // https://eslint.vuejs.org/rules/define-macros-order.html
    "vue/define-macros-order": ["warn", {
      "order": ["defineProps", "defineEmits"],
      // "order": ["definePage", "defineOptions", "defineModel", "defineProps", "defineEmits", "defineSlots"],
      // "defineExposeLast": true,
    }],

    // 强制 defineProps 定义风格
    // https://eslint.vuejs.org/rules/define-props-declaration.html
    "vue/define-props-declaration": ["error", "type-based"],

    // 强制 defineProps 解构风格
    // TODO This rule was introduced in eslint-plugin-vue v10.1.0
    // https://eslint.vuejs.org/rules/define-props-destructuring.html
    // "vue/define-props-destructuring": ["error", {
    //   "destructure": "always",
    // }],

    // 强制 nextTick 风格（Promise、callback）
    // https://eslint.vuejs.org/rules/next-tick-style.html
    "vue/next-tick-style": ["warn", "promise"],

    // 用于禁止从 'vue' 模块中显式导入 Vue 的编译器宏（compiler macros），如 defineProps 、 defineEmits 、 defineModel 、 defineSlots 、 defineExpose 等
    // TODO This rule was introduced in eslint-plugin-vue v10.0.0
    // https://eslint.vuejs.org/rules/no-import-compiler-macros.html
    // "vue/no-import-compiler-macros": "warn",

    // 禁止那些会导致 ref 对象值丢失响应性（reactivity）的用法
    // https://eslint.vuejs.org/rules/no-ref-object-reactivity-loss.html
    "vue/no-ref-object-reactivity-loss": "error",

    // 禁止异步调用受限方法
    // 这个规则的主要目的是禁止在 await 表达式之后调用指定的受限方法（restricted methods）。
    // 在 Vue 组件的 setup() 函数中，受限函数需要同步调用，以避免异步执行导致的问题。
    // 它特别适用于处理像国际化（i18n）或其他需要同步初始化的库的情况，如果在异步之后调用，可能会导致状态不一致或意外行为。
    // https://eslint.vuejs.org/rules/no-restricted-call-after-await.html
    "vue/no-restricted-call-after-await": [
      "error",
      {
        "module": "vue-i18n",
        "path": "useI18n",
      },
      // {
      //   "module": "some-library",
      //   "path": ["syncFunction", "anotherFunction"],
      // },
      // {
      //   "module": "default-module",
      //   "path": "default",  // 检查默认导出
      // },
    ],

    // 禁止在 setup 函数中使用那些会导致 props 对象值丢失响应性（reactivity）的用法
    // https://eslint.vuejs.org/rules/no-setup-props-reactivity-loss.html
    "vue/no-setup-props-reactivity-loss": "error",

    // 禁止在 Vue 指定的版本上使用不支持的语法
    // https://eslint.vuejs.org/rules/no-unsupported-features.html
    // "vue/no-unsupported-features": ["error", {
    //   "version": "^3.4.0",
    //   "ignores": [],
    // }],

    // 要求使用 defineOptions 定义组件选项
    // https://eslint.vuejs.org/rules/prefer-define-options.html
    "vue/prefer-define-options": "warn",

    // 强制使用 Vue 3.5 引入的新 API useTemplateRef() 来获取模板 refs，而不是传统的 ref() 或 shallowRef()
    // https://eslint.vuejs.org/rules/prefer-use-template-ref.html
    "vue/prefer-use-template-ref": "error",

    // 要求在组件中使用 slots 时，必须显式定义插槽（script setup、defineSlots 等）
    // https://eslint.vuejs.org/rules/require-explicit-slots.html
    "vue/require-explicit-slots": "error",

    // 要求使用 expose 暴露公共属性
    // https://eslint.vuejs.org/rules/require-expose.html
    "vue/require-expose": "error",

    // 要求在 Vue 组件中使用 defineProps、defineEmits、defineSlots、useSlots、useAttrs 等宏时，变量名必须符合指定的命名规范
    // https://eslint.vuejs.org/rules/require-macro-variable-name.html
    "vue/require-macro-variable-name": ["error", {
      "defineProps": "props",
      "defineEmits": "emit",
      "defineSlots": "slots",
      "useSlots": "slots",
      "useAttrs": "attrs",
    }],

    // 强制为对象属性添加类型声明
    // https://eslint.vuejs.org/rules/require-typed-object-prop.html
    "vue/require-typed-object-prop": "error",

    // 强制为 ref 变量添加类型声明
    // https://eslint.vuejs.org/rules/require-typed-ref.html
    "vue/require-typed-ref": "error",
  },
};
