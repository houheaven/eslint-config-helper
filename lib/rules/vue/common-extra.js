
// ==========================================================
// 额外规则（Uncategorized）
// ==========================================================

module.exports = {
  rules: {
    // <script lang="xxx">
    // https://eslint.vuejs.org/rules/block-lang.html
    "vue/block-lang": "off",
    
    // 顶级块标签的换行
    // https://eslint.vuejs.org/rules/block-tag-newline.html
    "vue/block-tag-newline": ["warn", {
      "singleline": "always",
      "multiline": "always",
      "maxEmptyLines": 0,
      // "blocks": {
      //   "template": {
      //     "singleline": "always",
      //     "multiline": "always",
      //     "maxEmptyLines": 0,
      //   },
      //   "my-block": {
      //     "singleline": "always",
      //     // "multiline": "always" | "never" | "consistent" | "ignore",
      //     // "maxEmptyLines": 0,
      //   }
      // }
    }],

    // https://eslint.vuejs.org/rules/component-api-style.html
    "vue/component-api-style": "off",

    // 在 components 选项定义中，强制组件名称的大小写
    // https://eslint.vuejs.org/rules/component-options-name-casing.html
    "vue/component-options-name-casing": ["off", "PascalCase"],

    // 为 <template> 中的组件命名样式，强制执行特定的大小写
    // https://eslint.vuejs.org/rules/component-name-in-template-casing.html
    "vue/component-name-in-template-casing": ["warn", "kebab-case", {
      "registeredComponentsOnly": false,
      // "ignores": ["/^hh-/"],
    }],

    // 强制自定义事件名称的大小写
    // https://eslint.vuejs.org/rules/custom-event-name-casing.html
    "vue/custom-event-name-casing": ["warn", "kebab-case", {
      // "ignores": [],
    }],

    // 强制 defineEmits、defineProps 编译器宏的顺序
    // https://eslint.vuejs.org/rules/define-macros-order.html
    "vue/define-macros-order": ["warn", {
      "order": ["defineProps", "defineEmits"],
    }],

    // button 按钮的 type 属性是否可以省略
    // https://eslint.vuejs.org/rules/html-button-has-type.html
    "vue/html-button-has-type": ["off", {
      "button": true,
      "submit": true,
      "reset": true,
    }],

    // 在 html 注释中，强制统一换行
    // https://eslint.vuejs.org/rules/html-comment-content-newline.html
    "vue/html-comment-content-newline": [
      "warn",
      {
        "singleline": "never",
        "multiline": "always",
      },
      {
        "exceptions": [],
      },
    ],

    // 在 html 注释中，强制统一间距
    // https://eslint.vuejs.org/rules/html-comment-content-spacing.html
    "vue/html-comment-content-spacing": ["warn", "always", {
      "exceptions": [],
    }],

    // 在 html 注释中，强制统一缩进
    // https://eslint.vuejs.org/rules/html-comment-indent.html
    "vue/html-comment-indent": ["warn", 2],

    // https://eslint.vuejs.org/rules/match-component-file-name.html
    "vue/match-component-file-name": "off",

    // https://eslint.vuejs.org/rules/match-component-import-name.html
    "vue/match-component-import-name": "off",

    // 在 Vue 组件中的多行属性之间强制执行新行
    // https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html
    "vue/new-line-between-multi-line-property": ["off", {
      "minLineOfMultilineProperty": 2,
    }],

    // 强制 nextTick 中的回调方式（Promise、callback）
    // https://eslint.vuejs.org/rules/next-tick-style.html
    "vue/next-tick-style": ["off", "callback"],

    // 禁止在 <template> 中使用裸字符串
    // https://eslint.vuejs.org/rules/no-bare-strings-in-template.html
    "vue/no-bare-strings-in-template": "off",

    // 禁止给布尔类型的 props 设置默认值
    // https://eslint.vuejs.org/rules/no-boolean-default.html
    "vue/no-boolean-default": "off",

    // 当使用 v-bind="$attrs" 时，强制将 inheritAttrs 设置为 false
    // https://eslint.vuejs.org/rules/no-duplicate-attr-inheritance.html
    "vue/no-duplicate-attr-inheritance": "warn",

    // 不允许 <template> <script> <style> 为空
    // https://eslint.vuejs.org/rules/no-empty-component-block.html
    "vue/no-empty-component-block": "warn",

    // 不允许将多个对象传递给数组到类
    // https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html
    "vue/no-multiple-objects-in-class": "warn",

    // 不允许在您的组件属性中出现潜在的拼写错误
    // https://eslint.vuejs.org/rules/no-potential-component-option-typo.html
    "vue/no-potential-component-option-typo": ["error", {
      "presets": ["vue", "vue-router"],
      "custom": [],
      "threshold": 1,
    }],

    // 禁止使用特定的块元素
    // https://eslint.vuejs.org/rules/no-restricted-block.html
    "vue/no-restricted-block": "off",

    // 禁止异步调用受限方法
    // https://eslint.vuejs.org/rules/no-restricted-call-after-await.html
    "vue/no-restricted-call-after-await": "warn",

    // 禁止 Vue 组件中的特定类
    // https://eslint.vuejs.org/rules/no-restricted-class.html
    "vue/no-restricted-class": "off",

    // 禁止组件使用特定选项
    // https://eslint.vuejs.org/rules/no-restricted-component-options.html
    "vue/no-restricted-component-options": "off",

    // 禁止使用特定的自定义事件
    // https://eslint.vuejs.org/rules/no-restricted-custom-event.html
    "vue/no-restricted-custom-event": "off",

    // 禁止使用特定的 HTML 元素标签
    // https://eslint.vuejs.org/rules/no-restricted-html-elements.html
    "vue/no-restricted-html-elements": "off",

    // 禁止使用特定的 props
    // https://eslint.vuejs.org/rules/no-restricted-props.html
    "vue/no-restricted-props": "off",

    // 禁止使用特定的属性
    // https://eslint.vuejs.org/rules/no-restricted-static-attribute.html
    "vue/no-restricted-static-attribute": "off",

    // 禁止在 v-bind 中使用特定的参数
    // https://eslint.vuejs.org/rules/no-restricted-v-bind.html
    "vue/no-restricted-v-bind": "off",

    // 禁止在 style 属性中使用静态的样式
    // https://eslint.vuejs.org/rules/no-static-inline-styles.html
    "vue/no-static-inline-styles": ["warn", {
      "allowBinding": false,
    }],

    // 没有设置 rel="noopener noreferrer" 的元素，禁止使用 target="_blank"
    // https://eslint.vuejs.org/rules/no-template-target-blank.html
    "vue/no-template-target-blank": "off",
    
    // 禁止在 beforeRouteEnter 中使用 this
    // https://eslint.vuejs.org/rules/no-this-in-before-route-enter.html
    "vue/no-this-in-before-route-enter": "warn",
    
    // 禁止在 <template> 中使用未定义的组件
    // https://eslint.vuejs.org/rules/no-undef-components.html
    "vue/no-undef-components": "off",

    // 禁止使用未定义的属性
    // https://eslint.vuejs.org/rules/no-undef-properties.html
    "vue/no-undef-properties": "off",

    // 禁止在 Vue 指定的版本上使用不支持的语法
    // https://eslint.vuejs.org/rules/no-unsupported-features.html
    "vue/no-unsupported-features": ["error", {
      "version": "^2.6.0",
      "ignores": [],
    }],

    // 禁止未使用的属性
    // https://eslint.vuejs.org/rules/no-unused-properties.html
    "vue/no-unused-properties": ["warn", {
      "groups": ["props", "data", "computed", "methods"],
      "deepData": false,
      "ignorePublicMembers": false,
    }],

    // 禁止未使用的 refs
    // https://eslint.vuejs.org/rules/no-unused-refs.html
    "vue/no-unused-properties": "warn",

    // 禁止不必要的胡须插值（mustaches）
    // https://eslint.vuejs.org/rules/no-useless-mustaches.html
    "vue/no-useless-mustaches": ["warn", {
      "ignoreIncludesComment": false,
      "ignoreStringEscape": false,
    }],

    // 禁止不必要的 v-bind 指令
    // https://eslint.vuejs.org/rules/no-useless-v-bind.html
    "vue/no-useless-v-bind": ["warn", {
      "ignoreIncludesComment": false,
      "ignoreStringEscape": false,
    }],

    // 禁止使用 v-text 指令（推荐胡须插值方式）
    // https://eslint.vuejs.org/rules/no-v-text.html
    "vue/no-v-text": "warn",

    // 要求或禁止块之间的填充线
    // https://eslint.vuejs.org/rules/padding-line-between-blocks.html
    "vue/padding-line-between-blocks": ["warn", "always"],

    // https://eslint.vuejs.org/rules/prefer-prop-type-boolean-first.html
    "vue/prefer-prop-type-boolean-first": "warn",

    // 要求 <template> 中的静态类名位于单独的 class 属性中
    // https://eslint.vuejs.org/rules/prefer-separate-static-class.html
    "vue/prefer-separate-static-class": "warn",

    // https://eslint.vuejs.org/rules/prefer-true-attribute-shorthand.html
    "vue/prefer-true-attribute-shorthand": "off",

    // 要求组件直接导出
    // https://eslint.vuejs.org/rules/require-direct-export.html
    "vue/require-direct-export": ["warn", {
      "disallowFunctionalComponentFunction": false,
    }],

    // https://eslint.vuejs.org/rules/require-emit-validator.html
    "vue/require-emit-validator": "off",

    // 要求使用 expose 暴露公共属性
    // https://eslint.vuejs.org/rules/require-expose.html
    "vue/require-expose": "off",

    // 要求组件必须定义 name 属性
    // https://eslint.vuejs.org/rules/require-name-property.html
    "vue/require-name-property": "warn",

    // 在 <script> 中，强制统一缩进
    // https://eslint.vuejs.org/rules/script-indent.html
    "vue/script-indent": ["warn", 2, {
      "baseIndent": 1,
      "switchCase": 1,
      "ignores": [],
    }],

    // https://eslint.vuejs.org/rules/sort-keys.html
    "vue/sort-keys": "off",

    // 强制静态 class 类名排序
    // https://eslint.vuejs.org/rules/static-class-names-order.html
    "vue/static-class-names-order": "off",

    // 强制 v-for 指令的分隔符样式（使用 v-for="i in list"，而不是 v-for="i of list"）
    // https://eslint.vuejs.org/rules/v-for-delimiter-style.html
    "vue/v-for-delimiter-style": ["warn", "in"],

    // 在 v-on 指令绑定的回调事件中，如果没有参数，需要省略回调事件的括号
    // https://eslint.vuejs.org/rules/v-on-function-call.html
    "vue/v-on-function-call": ["warn", "never"],
  },
};
