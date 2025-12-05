
// ==========================================================
// 未分类规则（Uncategorized）
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

    // 为 <template> 中的组件命名样式，强制执行特定的大小写
    // https://eslint.vuejs.org/rules/component-name-in-template-casing.html
    "vue/component-name-in-template-casing": ["warn", "kebab-case", {
      "registeredComponentsOnly": false,
      // "ignores": ["/^hh-/"],
    }],

    // 在 components 选项定义中，强制组件名称的大小写
    // https://eslint.vuejs.org/rules/component-options-name-casing.html
    "vue/component-options-name-casing": ["off", "PascalCase"],

    // 强制自定义事件名称的大小写
    // https://eslint.vuejs.org/rules/custom-event-name-casing.html
    "vue/custom-event-name-casing": ["error", "kebab-case", {
      // "ignores": [],
    }],

    // 强制规定 <style> 标签上允许使用的属性（attribute）
    // https://eslint.vuejs.org/rules/enforce-style-attribute.html
    "vue/enforce-style-attribute": ["error", {
      "allow": ["scoped", "module", "plain"],
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

    // 强制组件文件名与组件名称匹配
    // https://eslint.vuejs.org/rules/match-component-file-name.html
    "vue/match-component-file-name": "off",

    // 强制组件导入名称与组件名称匹配
    // https://eslint.vuejs.org/rules/match-component-import-name.html
    "vue/match-component-import-name": "off",

    // 限制 Vue SFC 块中最多可包含的语句数量
    // 专门针对 Vue 单文件组件（SFC）中的主要块（如 <template> 、 <script> 和 <style> ），限制每个块的最大行数。
    // 目的是保持组件代码简洁、可读，避免单个块过长导致维护困难。
    // https://eslint.vuejs.org/rules/max-lines-per-block.html
    "vue/max-lines-per-block": ["off", {
      "template": 100,          // <template> 块最大 100 行
      "script": 200,            // <script> 块最大 200 行
      "style": 150,             // <style> 块最大 150 行
      "skipBlankLines": true,   // 是否忽略空行（true 表示忽略空行，只计算非空行）
    }],

    // 限制 Vue 组件中 props 的数量
    // https://eslint.vuejs.org/rules/max-props.html
    "vue/max-props": ["off", {
      "maxProps": 10,          // 每个组件最多 10 个 props
    }],

    // 限制 Vue 组件中模板的深度
    // https://eslint.vuejs.org/rules/max-template-depth.html
    "vue/max-template-depth": ["off", {
      "maxDepth": 4,          // 每个组件模板的最大深度为 4
    }],

    // 在 Vue 组件中的多行属性之间强制执行新行
    // https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html
    "vue/new-line-between-multi-line-property": ["off", {
      "minLineOfMultilineProperty": 2,
    }],

    // 禁止在 <template> 中使用裸字符串
    // https://eslint.vuejs.org/rules/no-bare-strings-in-template.html
    "vue/no-bare-strings-in-template": "off",

    // 禁止给布尔类型的 props 设置默认值
    // https://eslint.vuejs.org/rules/no-boolean-default.html
    "vue/no-boolean-default": ["error", "default-false"],

    // 当使用 v-bind="$attrs" 时，强制将 inheritAttrs 设置为 false
    // https://eslint.vuejs.org/rules/no-duplicate-attr-inheritance.html
    "vue/no-duplicate-attr-inheritance": ["error", {
      "checkMultiRootNodes": false,
    }],

    // 禁止在 <template> 中使用重复的类名
    // TODO This rule was introduced in eslint-plugin-vue v10.6.0
    // https://eslint.vuejs.org/rules/no-duplicate-class-names.html
    // "vue/no-duplicate-class-names": "warn",

    // 不允许 <template> <script> <style> 为空
    // https://eslint.vuejs.org/rules/no-empty-component-block.html
    "vue/no-empty-component-block": "warn",

    // 不允许将多个对象传递给数组到类
    // https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html
    "vue/no-multiple-objects-in-class": "error",

    // 禁止在 v-if 或 v-else-if 中使用否定条件
    // TODO This rule was introduced in eslint-plugin-vue v10.4.0
    // https://eslint.vuejs.org/rules/no-negated-v-if-condition.html
    // "vue/no-negated-v-if-condition": "error",

    // 防止在组件属性中出现潜在的拼写错误
    // https://eslint.vuejs.org/rules/no-potential-component-option-typo.html
    "vue/no-potential-component-option-typo": ["error", {
      "presets": ["vue", "vue-router"],
      "custom": [],
      "threshold": 1,     // 触发警告的阈值，值为 1 表示允许 1 个字符差异，值越小，规则越严格
    }],

    // 禁止使用特定的块元素
    // https://eslint.vuejs.org/rules/no-restricted-block.html
    "vue/no-restricted-block": [
      "off",
      {
        "element": "style",
        "message": "Do not use <style> block in this project.",
      },
      {
        "element": "foo",
        "message": "Do not use <foo> block in this project.",
      },
      {
        "element": "/forbidden/",
        "message": "Do not use blocks that include `forbidden` in their name.",
      },
    ],

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
    "vue/no-restricted-html-elements": [
      "error",
      // {
      //   "element": ["a", "RouterLink"],
      //   "message": "Prefer the use of <NuxtLink> component",
      // },
      {
        "element": "marquee",
        "message": "Do not use deprecated HTML tags",
      },
    ],

    // 禁止使用特定的 props
    // https://eslint.vuejs.org/rules/no-restricted-props.html
    "vue/no-restricted-props": "off",

    // 禁止使用特定的属性
    // https://eslint.vuejs.org/rules/no-restricted-static-attribute.html
    "vue/no-restricted-static-attribute": "off",

    // 禁止在 v-bind 中使用特定的参数
    // https://eslint.vuejs.org/rules/no-restricted-v-bind.html
    "vue/no-restricted-v-bind": "off",

    // 禁止使用特定的事件
    // https://eslint.vuejs.org/rules/no-restricted-v-on.html
    "vue/no-restricted-v-on": "off",

    // 禁止在根组件上使用 v-if 或 v-else-if
    // https://eslint.vuejs.org/rules/no-root-v-if.html
    "vue/no-root-v-if": "error",

    // 禁止在 style 属性中使用静态的样式
    // https://eslint.vuejs.org/rules/no-static-inline-styles.html
    "vue/no-static-inline-styles": ["error", {
      "allowBinding": false,
    }],

    // 没有设置 rel="noopener noreferrer" 的元素，禁止使用 target="_blank"
    // https://eslint.vuejs.org/rules/no-template-target-blank.html
    "vue/no-template-target-blank": "off",
    
    // 禁止在 beforeRouteEnter 中使用 this
    // https://eslint.vuejs.org/rules/no-this-in-before-route-enter.html
    "vue/no-this-in-before-route-enter": "error",
    
    // 禁止在 <template> 中使用未定义的组件
    // https://eslint.vuejs.org/rules/no-undef-components.html
    "vue/no-undef-components": "off",

    // 禁止使用未定义的属性
    // https://eslint.vuejs.org/rules/no-undef-properties.html
    "vue/no-undef-properties": "off",

    // 禁止未使用的事件声明
    // https://eslint.vuejs.org/rules/no-unused-emit-declarations.html
    "vue/no-unused-emit-declarations": "error",

    // 禁止未使用的属性
    // https://eslint.vuejs.org/rules/no-unused-properties.html
    "vue/no-unused-properties": ["error", {
      "groups": ["props", "data", "computed", "methods", "setup"],
      "deepData": false,
      "ignorePublicMembers": false,
    }],

    // 禁止未使用的 refs
    // https://eslint.vuejs.org/rules/no-unused-refs.html
    "vue/no-unused-refs": "error",

    // 禁止在 v-for 中使用 v-else 或 v-else-if
    // https://eslint.vuejs.org/rules/no-use-v-else-with-v-for.html
    "vue/no-use-v-else-with-v-for": "error",

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
    "vue/no-v-text": "error",

    // 要求或禁止块之间的空行
    // https://eslint.vuejs.org/rules/padding-line-between-blocks.html
    "vue/padding-line-between-blocks": ["warn", "always"],

    // 要求或禁止标签之间的空行
    // https://eslint.vuejs.org/rules/padding-line-between-tags.html
    "vue/padding-line-between-tags": ["off", [
      { "blankLine": "always", "prev": "*", "next": "*" },
    ]],

    // 要求或禁止组件定义中的空行
    // https://eslint.vuejs.org/rules/padding-lines-in-component-definition.html
    "vue/padding-lines-in-component-definition": "off",

    // 要求 prop 类型定义中，boolean 类型的 prop 必须放在第一个位置
    // https://eslint.vuejs.org/rules/prefer-prop-type-boolean-first.html
    "vue/prefer-prop-type-boolean-first": "error",

    // 要求 <template> 中的静态类名位于单独的 class 属性中
    // https://eslint.vuejs.org/rules/prefer-separate-static-class.html
    "vue/prefer-separate-static-class": "warn",

    // 要求在 v-bind 中使用 true 作为属性值时，使用属性简写
    // https://eslint.vuejs.org/rules/prefer-true-attribute-shorthand.html
    "vue/prefer-true-attribute-shorthand": "off",

    // 要求组件默认导出（如果组件定义方式不是 <script setup>）
    // https://eslint.vuejs.org/rules/require-default-export.html
    "vue/require-default-export": "error",

    // 要求组件直接导出
    // https://eslint.vuejs.org/rules/require-direct-export.html
    "vue/require-direct-export": ["error", {
      "disallowFunctionalComponentFunction": true,
    }],

    // 要求在组件中使用 emit 时，必须定义验证函数
    // https://eslint.vuejs.org/rules/require-emit-validator.html
    "vue/require-emit-validator": "off",

    // 要求组件必须定义 name 属性
    // https://eslint.vuejs.org/rules/require-name-property.html
    "vue/require-name-property": "error",

    // 要求在组件中定义 prop 时，必须添加注释
    // https://eslint.vuejs.org/rules/require-prop-comment.html
    "vue/require-prop-comment": "off",

    // 要求组件名称符合指定的命名规范
    // https://eslint.vuejs.org/rules/restricted-component-names.html
    "vue/restricted-component-names": "off",

    // 在 <script> 中，强制统一缩进
    // https://eslint.vuejs.org/rules/script-indent.html
    "vue/script-indent": ["warn", 2, {
      "baseIndent": 1,
      "switchCase": 1,
      "ignores": [],
    }],

    // 要求插槽名称符合指定的命名规范
    // https://eslint.vuejs.org/rules/slot-name-casing.html
    "vue/slot-name-casing": ["error", "kebab-case"],

    // 要求组件的 props 按字母顺序排序
    // https://eslint.vuejs.org/rules/sort-keys.html
    "vue/sort-keys": "off",

    // 强制静态 class 类名排序
    // https://eslint.vuejs.org/rules/static-class-names-order.html
    "vue/static-class-names-order": "off",

    // 强制 v-for 指令的分隔符样式（使用 v-for="i in list"，而不是 v-for="i of list"）
    // https://eslint.vuejs.org/rules/v-for-delimiter-style.html
    "vue/v-for-delimiter-style": ["warn", "in"],

    // 要求在 v-if 或 v-else-if 中使用 key 指令
    // https://eslint.vuejs.org/rules/v-if-else-key.html
    "vue/v-if-else-key": "off",

    // 要求在 v-on 指令绑定的回调事件中，使用标准的事件处理函数风格
    // https://eslint.vuejs.org/rules/v-on-handler-style.html
    "vue/v-on-handler-style": ["warn", "inline"],
  },
};
