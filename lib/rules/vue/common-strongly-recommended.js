
// =============================================================================
// 强烈推荐的规则（通用）
// plugin:vue/strongly-recommended、plugin:vue/vue3-strongly-recommended 通用部分
// =============================================================================

module.exports = {
  rules: {
    // 属性名称使用连字符（"-"）进行连接
    // https://eslint.vuejs.org/rules/attribute-hyphenation.html
    "vue/attribute-hyphenation": "warn",

    // 强制组件命名的格式
    // https://eslint.vuejs.org/rules/component-definition-name-casing.html
    "vue/component-definition-name-casing": ["warn", "kebab-case"],

    // 强制第一个属性的显示位置
    // https://eslint.vuejs.org/rules/first-attribute-linebreak.html
    "vue/first-attribute-linebreak": ["warn", {
      "singleline": "ignore",
      "multiline": "below",
    }],

    // 规定标签的右尖括号（>）是否要换行
    // https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
    "vue/html-closing-bracket-newline": ["warn", {
      "singleline": "never",
      "multiline": "always",
    }],

    // 规定标签的右尖括号（>）是否有空格
    // https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html
    "vue/html-closing-bracket-spacing": ["warn", {
      "startTag": "never",
      "endTag": "never",
      "selfClosingTag": "always",
    }],

    // 强制必须有结束标签
    // https://eslint.vuejs.org/rules/html-end-tags.html
    "vue/html-end-tags": "warn",

    // 在 <template> 中，强制统一缩进
    // https://eslint.vuejs.org/rules/html-indent.html
    "vue/html-indent": ["warn", 2, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": [],
    }],

    // 在 html 属性中，强制统一引号
    // https://eslint.vuejs.org/rules/html-quotes.html
    "vue/html-quotes": ["warn", "double", { "avoidEscape": true }],
    
    // 强制标签自闭合
    // https://eslint.vuejs.org/rules/html-self-closing.html
    "vue/html-self-closing": ["warn", {
      "html": {
        "normal": "never",
        "void": "always",
        "component": "always",
      },
      "svg": "always",
      "math": "always",
    }],

    // 强制每行属性的数量
    // https://eslint.vuejs.org/rules/max-attributes-per-line.html
    "vue/max-attributes-per-line": ["warn", {
      "singleline": { "max": 4 },
      "multiline": { "max": 1 },
    }],

    // 在单行元素的内容之前和之后需要换行符
    // https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html
    "vue/singleline-html-element-content-newline": ["off", {
      "ignoreWhenEmpty": true,
      "ignoreWhenNoAttributes": true,
      // "ignores": ["pre", "textarea", ...INLINE_ELEMENTS]
    }],

    // 在多行元素的内容之前和之后需要换行符
    // https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html
    "vue/multiline-html-element-content-newline": ["warn", {
      "ignoreWhenEmpty": true,
      "allowEmptyLines": false,
      // "ignores": ["pre", "textarea", ...INLINE_ELEMENTS],
    }],

    // 在 mustache 胡须插值中强制统一间距
    // https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html
    "vue/mustache-interpolation-spacing": ["warn", "always"],

    // 标签内不能出现多个空格
    // https://eslint.vuejs.org/rules/no-multi-spaces.html
    "vue/no-multi-spaces": ["warn", {
      "ignoreProperties": false,
    }],

    // 属性中的等号周围不允许有空格
    // https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html
    "vue/no-spaces-around-equal-signs-in-attribute": "warn",

    // 作用域内外声明的变量不能冲突
    // https://eslint.vuejs.org/rules/no-template-shadow.html
    "vue/no-template-shadow": "error",

    // 强制一个文件只能有一个组件
    // https://eslint.vuejs.org/rules/one-component-per-file.html
    "vue/one-component-per-file": "off",

    // 强制组件 prop 命名的格式
    // https://eslint.vuejs.org/rules/prop-name-casing.html
    "vue/prop-name-casing": ["warn", "camelCase"],

    // 强制组件 prop 必须配置默认值（default）
    // https://eslint.vuejs.org/rules/require-default-prop.html
    "vue/require-default-prop": "warn",

    // 强制组件 prop 必须配置类型值（type）
    // https://eslint.vuejs.org/rules/require-prop-types.html
    "vue/require-prop-types": "warn",

    // 强制 v-bind 指令的风格
    // https://eslint.vuejs.org/rules/v-bind-style.html
    "vue/v-bind-style": ["warn", "shorthand"],

    // 强制 v-on 指令的风格
    // https://eslint.vuejs.org/rules/v-on-style.html
    "vue/v-on-style": ["warn", "shorthand"],

    // 强制 v-slot 指令的风格
    // https://eslint.vuejs.org/rules/v-slot-style.html
    "vue/v-slot-style": "warn",
  },
};
