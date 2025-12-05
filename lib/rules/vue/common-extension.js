
// ==========================================================
// 拓展规则（Extension Rules）
// 基于 eslint 部分基础规则，用于 <template> 内容规则校验、格式化
// ==========================================================

module.exports = {
  rules: {
    // 在数组开括号后和闭括号前强制换行
    // https://eslint.vuejs.org/rules/array-bracket-newline.html
    "vue/array-bracket-newline": ["warn", "consistent"],

    // 强制数组方括号中使用一致的空格
    // https://eslint.vuejs.org/rules/array-bracket-spacing.html
    "vue/array-bracket-spacing": ["warn", "never", {
      singleValue: false,
      objectsInArrays: false,
      arraysInArrays: false,
    }],

    // 强制数组元素间出现换行
    // https://eslint.vuejs.org/rules/array-element-newline.html
    "vue/array-element-newline": ["warn", "consistent"],
    
    // 要求箭头函数的箭头之前或之后有空格
    // https://eslint.vuejs.org/rules/arrow-spacing.html
    "vue/arrow-spacing": ["warn", {
      before: true,
      after: true,
    }],
    
    // 禁止或强制在代码块中开括号前和闭括号后有空格
    // https://eslint.vuejs.org/rules/block-spacing.html
    "vue/block-spacing": ["warn", "always"],

    // 强制在代码块中使用一致的大括号风格
    // https://eslint.vuejs.org/rules/brace-style.html
    "vue/brace-style": ["warn", "stroustrup", {
      allowSingleLine: true,
    }],

    // 要求使用骆驼拼写法
    // https://eslint.vuejs.org/rules/camelcase.html
    "vue/camelcase": ["error", {
      properties: "always",
      ignoreDestructuring: false,
    }],

    // 要求或禁止使用拖尾逗号（对象、数组、导入、导出、函数参数的最后一项后面是否允许有逗号）
    // https://eslint.vuejs.org/rules/comma-dangle.html
    "vue/comma-dangle": ["warn", {
      arrays: "always-multiline",
      objects: "always-multiline",
      imports: "always-multiline",
      exports: "always-multiline",
      functions: "never",
    }],

    // 强制在逗号前后使用一致的空格
    // https://eslint.vuejs.org/rules/comma-spacing.html
    "vue/comma-spacing": ["warn", {
      before: false,
      after: true,
    }],

    // 强制使用一致的逗号风格
    // https://eslint.vuejs.org/rules/comma-style.html
    "vue/comma-style": ["warn", "last", {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    }],

    // 强制在点号之前和之后一致的换行
    // https://eslint.vuejs.org/rules/dot-location.html
    "vue/dot-location": ["warn", "property"],

    // 尽可能的使用点符号
    // https://eslint.vuejs.org/rules/dot-notation.html
    "vue/dot-notation": ["warn", {
      allowKeywords: true,
      allowPattern: "",
    }],

    // 要求使用 === 和 !==
    // https://eslint.vuejs.org/rules/eqeqeq.html
    "vue/eqeqeq": ["warn", "always", { null: "ignore" }],

    // 要求或禁止在函数标识符和其调用之间有空格
    // https://eslint.vuejs.org/rules/func-call-spacing.html
    "vue/func-call-spacing": ["warn", "never"],

    // 强制在对象字面量的键和值之间使用一致的空格
    // https://eslint.vuejs.org/rules/key-spacing.html
    "vue/key-spacing": ["warn", {
      beforeColon: false,
      afterColon: true,
    }],

    // 强制关键字周围空格的一致性
    // https://eslint.vuejs.org/rules/keyword-spacing.html
    "vue/keyword-spacing": ["warn", {
      before: true,
      after: true,
      overrides: {
        if: { after: true },
        for: { after: false },
        while: { after: false },
        switch: { after: false },
        case: { after: true },
        catch: { after: false },
        return: { after: true },
        throw: { after: true },
      },
    }],

    // 强制一行的最大长度
    // https://eslint.vuejs.org/rules/max-len.html
    "vue/max-len": ["error", {
      code: 200,
      tabWidth: 2,
      comments: 200,
      template: 200,
      ignorePattern: "",
      ignoreComments: false,
      ignoreTrailingComments: false,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
      ignoreHTMLAttributeValues: true,
      ignoreHTMLTextContents: true,
    }],

    // 要求或禁止在三元操作数中间换行
    // https://eslint.vuejs.org/rules/multiline-ternary.html
    "vue/multiline-ternary": ["off", "never"],

    // 禁止在 Vue 组件中使用 console
    // https://eslint.vuejs.org/rules/no-console.html
    "vue/no-console": "off",

    // 禁止条件中的常量表达式
    // https://eslint.vuejs.org/rules/no-constant-condition.html
    "vue/no-constant-condition": "error",

    // 禁止空的解构模式
    // https://eslint.vuejs.org/rules/no-empty-pattern.html
    "vue/no-empty-pattern": "error",

    // 禁止冗余的括号
    // https://eslint.vuejs.org/rules/no-extra-parens.html
    "vue/no-extra-parens": ["warn", "all", {
      conditionalAssign: false,                     // 允许在条件测试表达式中的赋值周围加上括号
      returnAssign: false,                          // 允许在 return 语句中使用额外的小括号
      nestedBinaryExpressions: false,               // 允许在嵌套二进制表达式中使用额外的小括号
      ternaryOperandBinaryExpressions: false,       // 允许在三元运算符 ?: 的操作数周围添加额外的括号
      ignoreJSX: "all",                             // 允许在没有/所有/多行/单行 JSX 组件周围使用额外的小括号，delegate to eslint-plugin-react
      enforceForArrowConditionals: false,           // 允许在作为箭头函数主体的三元表达式周围添加小括号
      enforceForSequenceExpressions: false,         // 允许在序列表达式周围加上小括号
      enforceForNewInMemberExpressions: false,      // 允许在成员表达式中的 new 表达式周围使用额外的小括号
      enforceForFunctionPrototypeMethods: false,    // 允许在函数表达式的即时 .call 和 .apply 方法调用周围以及同一上下文中的函数表达式周围添加括号
      allowParensAfterCommentPattern: "",           // 允许在匹配正则表达式的注释前面加上额外的括号
    }],

    // 禁止隐式类型转换
    // https://eslint.vuejs.org/rules/no-implicit-coercion.html
    "vue/no-implicit-coercion": ["off", {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],

    // 禁止不规则的空格
    // https://eslint.vuejs.org/rules/no-irregular-whitespace.html
    "vue/no-irregular-whitespace": ["error", {
      skipStrings: true,
      skipComments: false,
      skipRegExps: false,
      skipTemplates: false,
      skipHTMLAttributeValues: false,
      skipHTMLTextContents: false,
    }],

    // 禁止失去精度的文字数字
    // https://eslint.vuejs.org/rules/no-loss-of-precision.html
    "vue/no-loss-of-precision": "error",

    // if 语句和三元表达式中不允许使用否定条件
    // https://eslint.vuejs.org/rules/no-negated-condition.html
    "vue/no-negated-condition": "off",

    // 禁用特定的语法
    // https://eslint.vuejs.org/rules/no-restricted-syntax.html
    "vue/no-restricted-syntax": [
      "off",
      {
        selector: "ForInStatement",
        message: "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "ForOfStatement",
        message: "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
      },
      {
        selector: "LabeledStatement",
        message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],

    // 禁止使用稀疏数组
    // 稀疏数组包含空槽，最常见的原因是在数组字面中使用了多个逗号（比如：[,,]）
    // https://eslint.vuejs.org/rules/no-sparse-arrays.html
    "vue/no-sparse-arrays": "error",

    // 禁止不必要的文字或模板文字串联
    // https://eslint.vuejs.org/rules/no-useless-concat.html
    "vue/no-useless-concat": "error",

    // 强制大括号内换行符的一致性
    // https://eslint.vuejs.org/rules/object-curly-newline.html
    "vue/object-curly-newline": ["warn", {
      // 对象字面量
      ObjectExpression: {
        multiline: true,
        consistent: true,
      },
      // 解构赋值
      ObjectPattern: {
        multiline: true,
        consistent: true,
      },
      // 导入模块
      ImportDeclaration: {
        multiline: true,
        consistent: true,
      },
      // 导出模块
      ExportDeclaration: {
        multiline: true,
        minProperties: 1,
      },
    }],

    // 强制在花括号中使用一致的空格
    // https://eslint.vuejs.org/rules/object-curly-spacing.html
    "vue/object-curly-spacing": ["warn", "always", {
      arraysInObjects: true,
      objectsInObjects: true,
    }],

    // 强制将对象的属性放在不同的行上
    // https://eslint.vuejs.org/rules/object-property-newline.html
    "vue/object-property-newline": ["warn", {
      allowAllPropertiesOnSameLine: true,
    }],

    // 要求或禁止对象字面量的方法和属性简写语法
    // https://eslint.vuejs.org/rules/object-shorthand.html
    "vue/object-shorthand": ["warn", "always", {
      avoidQuotes: true,
      ignoreConstructors: false,
      methodsIgnorePattern: "",
      avoidExplicitReturnArrows: true,
    }],

    // 强制操作符使用一致的换行符
    // https://eslint.vuejs.org/rules/operator-linebreak.html
    "vue/operator-linebreak": ["warn", "none", {
      overrides: { "=": "none" },
    }],

    // 要求使用模板文字进行字符串连接
    // https://eslint.vuejs.org/rules/prefer-template.html
    "vue/prefer-template": "warn",

    // 要求对象字面量属性名称用引号括起来
    // https://eslint.vuejs.org/rules/quote-props.html
    "vue/quote-props": ["warn", "consistent"],

    // 强制在圆括号内使用一致的空格
    // https://eslint.vuejs.org/rules/space-in-parens.html
    "vue/space-in-parens": ["warn", "never", {
      exceptions: [],
    }],

    // 要求中缀操作符周围有空格（+-*/?| etc.）
    // https://eslint.vuejs.org/rules/space-infix-ops.html
    "vue/space-infix-ops": ["warn", {
      // 设置 int32Hint 选项为 true（默认为是 false），以允许写 a|0 时不留空格
      int32Hint: false,
    }],

    // 强制在一元操作符前后使用一致的空格
    // https://eslint.vuejs.org/rules/space-unary-ops.html
    "vue/space-unary-ops": ["warn", {
      words: true,              // 适用于单数词运算符，如 new, delete, typeof, void, yield
      nonwords: false,          // 适用于单数运算符，如 -, +, --, ++, !, !!
      overrides: {},
    }],

    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    // https://eslint.vuejs.org/rules/template-curly-spacing.html
    "vue/template-curly-spacing": ["warn", "never"],
  },
};
