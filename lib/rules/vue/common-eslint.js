
// ==========================================================
// 拓展规则（Extension Rules）
// 基于 eslint 部分基础规则，用于 <template> 内容规则校验、格式化
// ==========================================================

module.exports = {
  rules: {
    // 在数组开括号后和闭括号前强制换行
    "vue/array-bracket-newline": ["warn", "consistent"],

    // 强制数组方括号中使用一致的空格
    "vue/array-bracket-spacing": ["warn", "never"],
    
    // 禁止稀疏数组
    "vue/no-sparse-arrays": "error",

    // 要求箭头函数的箭头之前或之后有空格
    "vue/arrow-spacing": ["warn", {
      before: true,
      after: true,
    }],
    
    // 强制大括号内换行符的一致性
    "vue/object-curly-newline": ["warn", {
      ObjectExpression: "never",
      ObjectPattern: "never",
      ImportDeclaration: "never",
      ExportDeclaration: "never",
    }],

    // 强制在花括号中使用一致的空格
    "vue/object-curly-spacing": ["warn", "always", {
      arraysInObjects: true,
      objectsInObjects: true,
    }],

    // 强制将对象的属性放在不同的行上
    "vue/object-property-newline": ["off", {
      allowAllPropertiesOnSameLine: true,
    }],

    // 要求或禁止对象字面量的方法和属性简写语法
    "vue/object-shorthand": ["warn", "always", {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],

    // 要求对象字面量属性名称用引号括起来
    "vue/quote-props": ["warn", "consistent"],

    // 强制在对象字面量的键和值之间使用一致的空格
    "vue/key-spacing": ["warn", {
      beforeColon: false,
      afterColon: true,
    }],

    // 禁止或强制在代码块中开括号前和闭括号后有空格
    "vue/block-spacing": ["warn", "always"],

    // 强制在代码块中使用一致的大括号风格
    "vue/brace-style": ["warn", "stroustrup", { "allowSingleLine": true }],

    // 要求使用骆驼拼写法
    "vue/camelcase": ["off", {
      properties: "never",
      ignoreDestructuring: false,
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
      before: false,
      after: true,
    }],

    // 强制使用一致的逗号风格
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
    "vue/dot-location": ["warn", "property"],

    // 尽可能的使用点符号
    "vue/dot-notation": ["warn", { allowKeywords: true }],

    // 要求使用 === 和 !==
    "vue/eqeqeq": ["error", "always", { null: "ignore" }],

    // 要求或禁止在函数标识符和其调用之间有空格
    "vue/func-call-spacing": ["warn", "never"],

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

    // 强制一行的最大长度
    "vue/max-len": ["warn", {
      "code": 200,
      "comments": 200,
      "template": 200,
      "tabWidth": 2,
      "ignorePattern": "",
      "ignoreComments": false,
      "ignoreTrailingComments": false,
      "ignoreUrls": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true,
      "ignoreHTMLAttributeValues": true,
      "ignoreHTMLTextContents": true,
    }],

    // 禁止条件中的常量表达式
    "vue/no-constant-condition": "warn",

    // 禁止空的解构模式
    "vue/no-empty-pattern": "error",

    // 禁止冗余的括号
    "vue/no-extra-parens": ["off", "all", {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: "all", // delegate to eslint-plugin-react
      enforceForArrowConditionals: false,
    }],

    // 禁止不规则的空格
    "vue/no-irregular-whitespace": ["error", {
      "skipStrings": true,
      "skipComments": false,
      "skipRegExps": false,
      "skipTemplates": false,
      "skipHTMLAttributeValues": false,
      "skipHTMLTextContents": false,
    }],

    // 禁止失去精度的文字数字
    "vue/no-loss-of-precision": "error",

    // 禁用特定的语法
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

    // 禁止不必要的文字或模板文字串联
    "vue/no-useless-concat": "warn",

    // 强制操作符使用一致的换行符
    "vue/operator-linebreak": ["off", "before", { overrides: { "=": "none" } }],

    // 要求使用模板文字进行字符串连接
    "vue/prefer-template": "warn",

    // 强制在圆括号内使用一致的空格
    "vue/space-in-parens": ["warn", "never"],

    // 要求中缀操作符周围有空格（+-*/?| etc.）
    "vue/space-infix-ops": "warn",

    // 强制在一元操作符前后使用一致的空格
    "vue/space-unary-ops": ["warn", {
      words: true,
      nonwords: false,
    }],

    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    "vue/template-curly-spacing": "warn",
  },
};
