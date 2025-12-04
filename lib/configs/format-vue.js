
// ==========================================================
// Vue 文件代码格式化
// ==========================================================

module.exports = {
  extends: [
    "../rules/vue/common-base",
  ],
  rules: {
    // template、script、style 多行显示
    "vue/block-tag-newline": ["warn", {
      "singleline": "always",
      "multiline": "always",
      "maxEmptyLines": 0,
    }],

    // 在 <template> 中，强制统一缩进
    "vue/html-indent": ["warn", 2, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": [],
    }],

    // 在 <script> 中，强制统一缩进
    "vue/script-indent": ["warn", 2, {
      "baseIndent": 1,
      "switchCase": 1,
      "ignores": [],
    }],
    
    // 在 html 属性中，强制统一引号
    "vue/html-quotes": ["warn", "double", { "avoidEscape": true }],

    // 强制标签自闭合
    "vue/html-self-closing": ["warn", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always",
      },
      "svg": "always",
      "math": "always",
    }],

    // 规定标签的右尖括号（>）是否有空格
    "vue/html-closing-bracket-spacing": ["warn", {
      "startTag": "never",
      "endTag": "never",
      "selfClosingTag": "always",
    }],
    
    // 要求箭头函数的箭头之前或之后有空格
    "vue/arrow-spacing": ["warn", {
      before: true,
      after: true,
    }],

    // 标签内不能出现多个空格
    "vue/no-multi-spaces": ["warn", {
      "ignoreProperties": false,
    }],

    // 要求或禁止使用拖尾逗号（对象、数组、导入、导出、函数参数的最后一项后面是否允许有逗号）
    "vue/comma-dangle": ["warn", {
      arrays: "always-multiline",
      objects: "always-multiline",
      imports: "always-multiline",
      exports: "always-multiline",
      functions: "never",
    }],

    // 强制在逗号前后使用一致的空格
    "vue/comma-spacing": ["warn", {
      "before": false,
      "after": true,
    }],

    // 强制在对象字面量的键和值之间使用一致的空格
    "vue/key-spacing": ["warn", {
      beforeColon: false,
      afterColon: true,
    }],

    // 在 html 注释中，强制统一缩进
    "vue/html-comment-indent": ["warn", 2],

    // 在 mustache 胡须插值中强制统一间距
    "vue/mustache-interpolation-spacing": ["warn", "always"],

    // 要求使用 === 和 !==
    // "vue/eqeqeq": ["error", "always", { null: "ignore" }],

    // 要求使用模板文字进行字符串连接
    "vue/prefer-template": "warn",

    // 强制关键字周围空格的一致性
    "vue/keyword-spacing": ["warn", {
      "before": true,
      "after": true,
      "overrides": {
        "if": { "after": true },
        "for": { "after": false },
        "while": { "after": false },
        "switch": { "after": false },
        "case": { "after": true },
        "catch": { "after": false },
        "return": { "after": true },
        "throw": { "after": true },
      },
    }],

    // 强制在花括号中使用一致的空格
    "vue/object-curly-spacing": ["warn", "always", {
      arraysInObjects: true,
      objectsInObjects: true,
    }],

    // 强制大括号内换行符的一致性
    "vue/object-curly-newline": ["warn", {
      ObjectExpression: "never",
      ObjectPattern: "never",
      ImportDeclaration: "never",
      ExportDeclaration: "never",
    }],

    // 强制数组方括号中使用一致的空格
    "vue/array-bracket-spacing": ["warn", "never"],

    // 为模板中的组件命名样式强制执行特定的大小写
    "vue/component-name-in-template-casing": ["warn", "kebab-case", {
      "registeredComponentsOnly": false,
      // "ignores": ["/^hh-/"],
    }],

    // =================================================================================

    // // 在数组开括号后和闭括号前强制换行
    // "vue/array-bracket-newline": ["warn", "consistent"],

    // // 禁止或强制在代码块中开括号前和闭括号后有空格
    // "vue/block-spacing": ["warn", "always"],

    // 强制在代码块中使用一致的大括号风格
    "vue/brace-style": ["warn", "stroustrup", { "allowSingleLine": true }],

    // // 强制在点号之前和之后一致的换行
    // "vue/dot-location": ["warn", "property"],

    // // 强制第一个属性的显示位置
    // "vue/first-attribute-linebreak": ["warn", {
    //   "singleline": "ignore",
    //   "multiline": "below",
    // }],

    // // 强制每行属性的数量
    // "vue/max-attributes-per-line": ["warn", {
    //   "singleline": { "max": 4 },
    //   "multiline": { "max": 1 },
    // }],

    // 属性名称使用连字符（"-"）进行连接
    "vue/attribute-hyphenation": "warn",

    // 强制自定义事件名称的大小写
    "vue/custom-event-name-casing": ["warn", "kebab-case", {
      // "ignores": [],
    }],

    // // button 按钮的 type 属性是否可以省略
    // "vue/html-button-has-type": ["off", {
    //   "button": true,
    //   "submit": true,
    //   "reset": true,
    // }],

    // // 规定标签的右尖括号（>）是否要换行
    // "vue/html-closing-bracket-newline": ["warn", {
    //   "singleline": "never",
    //   "multiline": "always",
    // }],

    // // 在 html 注释中，强制统一换行
    // "vue/html-comment-content-newline": [
    //   "warn",
    //   {
    //     "singleline": "never",
    //     "multiline": "always",
    //   },
    //   {
    //     "exceptions": [],
    //   },
    // ],

    // 在 html 注释中，强制统一间距
    "vue/html-comment-content-spacing": ["warn", "always", {
      "exceptions": [],
    }],

    // // 禁止不必要的胡须插值（mustaches）
    // "vue/no-useless-mustaches": ["warn", {
    //   "ignoreIncludesComment": false,
    //   "ignoreStringEscape": false,
    // }],

    // // 禁止不必要的 v-bind 指令
    // "vue/no-useless-v-bind": ["warn", {
    //   "ignoreIncludesComment": false,
    //   "ignoreStringEscape": false,
    // }],

    // // 要求或禁止块之间的填充线
    // "vue/padding-line-between-blocks": ["warn", "always"],

    // // 要求 <template> 中的静态类名位于单独的 class 属性中
    // "vue/prefer-separate-static-class": "warn",
    
    // // 强制 v-for 指令的分隔符样式（使用 v-for="i in list"，而不是 v-for="i of list"）
    // "vue/v-for-delimiter-style": ["warn", "in"],

    // 在 v-on 指令绑定的回调事件中，如果没有参数，需要省略回调事件的括号
    "vue/v-on-function-call": ["warn", "never"],
    
    // // 在单行元素的内容之前和之后需要换行符
    // "vue/singleline-html-element-content-newline": ["off", {
    //   "ignoreWhenEmpty": true,
    //   "ignoreWhenNoAttributes": true,
    //   // "ignores": ["pre", "textarea", ...INLINE_ELEMENTS]
    // }],

    // 在多行元素的内容之前和之后需要换行符
    "vue/multiline-html-element-content-newline": ["warn", {
      "ignoreWhenEmpty": true,
      "allowEmptyLines": false,
      // "ignores": ["pre", "textarea", ...INLINE_ELEMENTS],
    }],

    // 属性中的等号周围不允许有空格
    "vue/no-spaces-around-equal-signs-in-attribute": "warn",

    // 强制在圆括号内使用一致的空格
    "vue/space-in-parens": ["warn", "never"],

    // 要求中缀操作符周围有空格（+-*/?| etc.）
    "vue/space-infix-ops": "warn",

    // // 强制在一元操作符前后使用一致的空格
    // "vue/space-unary-ops": ["warn", {
    //   words: true,
    //   nonwords: false,
    // }],

    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    "vue/template-curly-spacing": "warn",
    
    // // 强制操作符使用一致的换行符
    // "vue/operator-linebreak": ["off", "before", { overrides: { "=": "none" } }],

    // // 要求或禁止在函数标识符和其调用之间有空格
    // "vue/func-call-spacing": ["warn", "never"],

    // // 禁止冗余的括号
    // "vue/no-extra-parens": ["off", "all", {
    //   conditionalAssign: true,
    //   nestedBinaryExpressions: false,
    //   returnAssign: false,
    //   ignoreJSX: "all", // delegate to eslint-plugin-react
    //   enforceForArrowConditionals: false,
    // }],

    // // 强制 defineEmits、defineProps 编译器宏的顺序
    // "vue/define-macros-order": ["warn", {
    //   "order": ["defineProps", "defineEmits"],
    // }],
  },
};
