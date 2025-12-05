
// ==========================================================
// 极其重要的规则（通用）
// plugin:vue/essential、plugin:vue/vue3-essential 通用部分
// ==========================================================

module.exports = {
  rules: {
    // 组件名称必须是多词组合
    // https://eslint.vuejs.org/rules/multi-word-component-names.html
    "vue/multi-word-component-names": "off",
    
    // watch 中禁止使用箭头函数
    // https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html
    "vue/no-arrow-functions-in-watch": "error",
    
    // computed 中禁用异步操作
    // https://eslint.vuejs.org/rules/no-async-in-computed-properties.html
    "vue/no-async-in-computed-properties": "error",
    
    // 使用了 v-html、v-text 的元素不能含有子内容（会被覆盖）
    // https://eslint.vuejs.org/rules/no-child-content.html
    "vue/no-child-content": "error",
    
    // 禁止在 data 中使用 computed 属性（初始化时序问题）
    // https://eslint.vuejs.org/rules/no-computed-properties-in-data.html
    "vue/no-computed-properties-in-data": "error",

    // 字段名称不能重复
    // https://eslint.vuejs.org/rules/no-dupe-keys.html
    "vue/no-dupe-keys": "error",

    // 在 v-if / v-else-if 链条中，不能出现重复的条件
    // https://eslint.vuejs.org/rules/no-dupe-v-else-if.html
    "vue/no-dupe-v-else-if": "error",

    // 在元素标签中，禁止出现重复的属性
    // https://eslint.vuejs.org/rules/no-duplicate-attributes.html
    "vue/no-duplicate-attributes": ["error", {
      "allowCoexistClass": true,
      "allowCoexistStyle": true,
    }],

    // 禁止组件 props 值的突变（必须使用 emit 修改 props 值）
    // 它的目的是为了防止在子组件中直接修改从父组件传递过来的 props。
    // 在 Vue 的设计理念中，数据流应该是单向的（父组件 -> 子组件）。
    // 如果子组件需要更新数据，它应该通过触发事件（ $emit ）来通知父组件，由父组件来决定是否以及如何更改数据。
    // 直接修改 prop 会让数据流变得混乱，难以追踪和维护。
    // https://eslint.vuejs.org/rules/no-mutating-props.html
    "vue/no-mutating-props": ["error", {
      // false - 规则会进行“深度检查”。不仅禁止对 prop 本身进行重新赋值，也禁止修改 prop 对象的属性或数组的内容。例如， this.myProp.name = 'new name' 或 this.myArrayProp.push(1) 都会被标记为错误。
      // true  - 规则只会进行“浅层检查”。它只禁止对 prop 变量本身进行重新赋值。但是，它 允许 修改 prop 对象内部的属性或数组的内容。这在某些场景下可以提供更大的灵活性，但同时也带来了一定的风险，因为它破坏了单向数据流的严格性。
      "shallowOnly": false,
    }],

    // 在 <template> 中，不允许出现语法错误的代码
    // https://eslint.vuejs.org/rules/no-parsing-error.html
    "vue/no-parsing-error": ["error", {
      "abrupt-closing-of-empty-comment": true,
      "absence-of-digits-in-numeric-character-reference": true,
      "cdata-in-html-content": true,
      "character-reference-outside-unicode-range": true,
      "control-character-in-input-stream": true,
      "control-character-reference": true,
      "eof-before-tag-name": true,
      "eof-in-cdata": true,
      "eof-in-comment": true,
      "eof-in-tag": true,
      "incorrectly-closed-comment": true,
      "incorrectly-opened-comment": true,
      "invalid-first-character-of-tag-name": true,
      "missing-attribute-value": true,
      "missing-end-tag-name": true,
      "missing-semicolon-after-character-reference": true,
      "missing-whitespace-between-attributes": true,
      "nested-comment": true,
      "noncharacter-character-reference": true,
      "noncharacter-in-input-stream": true,
      "null-character-reference": true,
      "surrogate-character-reference": true,
      "surrogate-in-input-stream": true,
      "unexpected-character-in-attribute-name": true,
      "unexpected-character-in-unquoted-attribute-value": true,
      "unexpected-equals-sign-before-attribute-name": true,
      "unexpected-null-character": true,
      "unexpected-question-mark-instead-of-tag-name": true,
      "unexpected-solidus-in-tag": true,
      "unknown-named-character-reference": true,
      "end-tag-with-attributes": true,
      "duplicate-attribute": true,
      "end-tag-with-trailing-solidus": true,
      "non-void-html-element-start-tag-with-trailing-solidus": false,
      "x-invalid-end-tag": true,
      "x-invalid-namespace": true,
    }],

    // 组件名称不能为保留的元素标签名
    // 比如：html/div、vue2/transition、vue3/teleport 等
    // https://eslint.vuejs.org/rules/no-reserved-component-names.html
    "vue/no-reserved-component-names": ["error", {
      "disallowVueBuiltInComponents": true,
      "disallowVue3BuiltInComponents": true,
      "htmlElementCaseSensitive": true,
    }],

    // 禁止重写保留关键字
    // https://eslint.vuejs.org/rules/no-reserved-keys.html
    "vue/no-reserved-keys": "error",

    // 强制组件的 data 必须为函数
    // https://eslint.vuejs.org/rules/no-shared-component-data.html
    "vue/no-shared-component-data": "warn",

    // 不允许计算属性中的副作用
    // https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html
    "vue/no-side-effects-in-computed-properties": "error",

    // 在 <template> 上不允许使用 key
    // https://eslint.vuejs.org/rules/no-template-key.html
    "vue/no-template-key": "error",

    // 禁止在 textarea 标签中使用 Mustache 语法（即 {{ }} 插值）
    // https://eslint.vuejs.org/rules/no-textarea-mustache.html
    // mustache 语法介绍：https://zhuanlan.zhihu.com/p/36572041
    "vue/no-textarea-mustache": "error",

    // 禁止组件定义后不使用
    // https://eslint.vuejs.org/rules/no-unused-components.html
    "vue/no-unused-components": ["error", {
      // true - 如果一个组件仅通过变量在动态组件 <component :is="componentName"> 中被引用，视为有效
      "ignoreWhenBindingPresent": true,
    }],

    // 禁止 v-for 指令 或 scope 属性中出现未使用的变量定义
    // https://eslint.vuejs.org/rules/no-unused-vars.html
    "vue/no-unused-vars": "error",

    // 这条规则的目的是 防止将计算属性（computed property）当作方法（method）来调用
    // https://eslint.vuejs.org/rules/no-use-computed-property-like-method.html
    "vue/no-use-computed-property-like-method": "error",

    // 禁止在同一个元素标签上使用 v-for、v-if
    // https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
    "vue/no-use-v-if-with-v-for": ["error", {
      "allowUsingIterationVar": false,
    }],

    // 禁止在 <template> 上使用无效的属性
    // https://eslint.vuejs.org/rules/no-useless-template-attributes.html
    "vue/no-useless-template-attributes": "error",
    
    // 禁止在组件上使用 v-text / v-html
    // https://eslint.vuejs.org/rules/no-v-text-v-html-on-component.html
    "vue/no-v-text-v-html-on-component": "error",

    // 使用 <component> 元素时，必须使用 v-bind:is
    // https://eslint.vuejs.org/rules/require-component-is.html
    "vue/require-component-is": "error",

    // 要求 prop 中的 type 必须是构造函数
    // https://eslint.vuejs.org/rules/require-prop-type-constructor.html
    "vue/require-prop-type-constructor": "warn",

    // 要求 render 函数必须有一个返回值
    // https://eslint.vuejs.org/rules/require-render-return.html
    "vue/require-render-return": "error",

    // 要求 v-for 指令必须含有 v-bind:key
    // https://eslint.vuejs.org/rules/require-v-for-key.html
    "vue/require-v-for-key": "error",

    // 强制 props 中的 default 值必须有效（数组、对象必须是函数类型）
    // https://eslint.vuejs.org/rules/require-valid-default-prop.html
    "vue/require-valid-default-prop": "error",

    // 在计算属性中必须存在返回语句
    // https://eslint.vuejs.org/rules/return-in-computed-property.html
    "vue/return-in-computed-property": ["error", {
      "treatUndefinedAsUnspecified": true,
    }],

    // 强制在emits验证器中存在返回语句
    // https://eslint.vuejs.org/rules/return-in-emits-validator.html
    "vue/return-in-emits-validator": "error",

    // 在 v-on 上强制 exact 修饰符的用法
    // https://eslint.vuejs.org/rules/use-v-on-exact.html
    "vue/use-v-on-exact": "error",

    // 强制使用有效的属性名
    // https://eslint.vuejs.org/rules/valid-attribute-name.html
    "vue/valid-attribute-name": "error",

    // 强制使用有效的 nextTick 函数回调
    // https://eslint.vuejs.org/rules/valid-next-tick.html
    "vue/valid-next-tick": "warn",

    // 强制使用有效的 template 根节点
    // https://eslint.vuejs.org/rules/valid-template-root.html
    "vue/valid-template-root": "error",
    
    // 强制使用有效的 v-bind 指令
    // https://eslint.vuejs.org/rules/valid-v-bind.html
    "vue/valid-v-bind": "error",

    // 强制使用有效的 v-else-if 指令
    // https://eslint.vuejs.org/rules/valid-v-else-if.html
    "vue/valid-v-else-if": "error",

    // 强制使用有效的 v-else 指令
    // https://eslint.vuejs.org/rules/valid-v-else.html
    "vue/valid-v-else": "error",

    // 强制使用有效的 v-for 指令
    // https://eslint.vuejs.org/rules/valid-v-for.html
    "vue/valid-v-for": "error",

    // 强制使用有效的 v-html 指令
    // https://eslint.vuejs.org/rules/valid-v-html.html
    "vue/valid-v-html": "error",
    
    // 强制使用有效的 v-if 指令
    // https://eslint.vuejs.org/rules/valid-v-if.html
    "vue/valid-v-if": "error",
    
    // 强制使用有效的 v-model 指令
    // https://eslint.vuejs.org/rules/valid-v-model.html
    "vue/valid-v-model": "error",
    
    // 强制使用有效的 v-on 指令
    // https://eslint.vuejs.org/rules/valid-v-on.html
    "vue/valid-v-on": "error",
    
    // 强制使用有效的 v-once 指令
    // https://eslint.vuejs.org/rules/valid-v-once.html
    "vue/valid-v-once": "error",
    
    // 强制使用有效的 v-pre 指令
    // https://eslint.vuejs.org/rules/valid-v-pre.html
    "vue/valid-v-pre": "error",
    
    // 强制使用有效的 v-show 指令
    // https://eslint.vuejs.org/rules/valid-v-show.html
    "vue/valid-v-show": "error",
    
    // 强制使用有效的 v-slot 指令
    // https://eslint.vuejs.org/rules/valid-v-slot.html
    "vue/valid-v-slot": "error",
    
    // 强制使用有效的 v-text 指令
    // https://eslint.vuejs.org/rules/valid-v-text.html
    "vue/valid-v-text": "error",
  },
};
