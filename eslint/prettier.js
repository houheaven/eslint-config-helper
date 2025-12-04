
"use strict";

const includeDeprecated = !process.env.ESLINT_CONFIG_PRETTIER_NO_DEPRECATED;

module.exports = {
  rules: {
    // 在某些情况下，可以使用以下规则，阅读 README 获取更多信息
    // 它们用“0”而不是“off”标记，以便脚本可以区分它们

    // 强制所有控制语句使用一致的括号风格
    "curly": 0,
    // 要求在注释周围有空行
    "lines-around-comment": 0,
    // 强制一行的最大长度
    "max-len": ["warn", {
      "code": 200,
      "tabWidth": 4,
      "comments": 200,
      "ignoreComments": false,
      "ignoreTrailingComments": true,
      "ignoreUrls": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true
    }],
    // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    "no-confusing-arrow": ["error", {
      "allowParens": true,
    }],
    // 禁止混合使用不同的操作符
    "no-mixed-operators": [
      "error",
      {
        "groups": [
          ["+", "-", "*", "/", "%", "**"],
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"]
        ],
        "allowSamePrecedence": true
      }
    ],
    // 禁用 tab
    "no-tabs": "error",
    // 禁止出现令人困惑的多行表达式
    "no-unexpected-multiline": "error",
    // 强制使用一致的反勾号、双引号或单引号
    "quotes": ["warn", "double", { "avoidEscape": true }],
    "@typescript-eslint/quotes": 0,
    "babel/quotes": 0,
    "vue/html-self-closing": 0,
    "vue/max-len": 0,

    // 以下的规则在使用Prettier时不需要启用

    // 在数组开括号后和闭括号前强制换行
    "array-bracket-newline": ["warn", "consistent"],
    // 强制数组方括号中使用一致的空格
    "array-bracket-spacing": ["error", "never"],
    // 强制数组元素间出现换行
    "array-element-newline": ["warn", "consistent"],
    // 要求箭头函数的参数使用圆括号
    "arrow-parens": ["warn", "as-needed"],
    // 要求箭头函数的箭头之前或之后有空格
    "arrow-spacing": ["warn", {
      "before": true,
      "after": true
    }],
    // 禁止或强制在代码块中开括号前和闭括号后有空格
    "block-spacing": ["warn", "always"],
    // 强制在代码块中使用一致的大括号风格
    "brace-style": ["warn", "stroustrup", { "allowSingleLine": true }],
    // 要求或禁止使用拖尾逗号（对象、数组、函数参数的最后一项后面是否允许有逗号）
    "comma-dangle": ["warn", {
      arrays: "never",
      objects: "always-multiline",
      imports: "never",
      exports: "never",
      functions: "never",
    }],
    // 强制在逗号前后使用一致的空格
    "comma-spacing": ["warn", {
      "before": false,
      "after": true,
    }],
    // 强制使用一致的逗号风格
    "comma-style": ["warn", "last", {
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
    // 强制在计算的属性的方括号中使用一致的空格
    "computed-property-spacing": ["warn", "never"],
    // 强制在点号之前和之后一致的换行
    "dot-location": ["warn", "property"],
    // 要求或禁止文件末尾存在空行
    "eol-last": ["warn", "always"],
    // 要求或禁止在函数标识符和其调用之间有空格
    "func-call-spacing": ["warn", "never"],
    // 函数调用参数换行符
    "function-call-argument-newline": ["warn", "consistent"],
    // 强制在函数括号内使用一致的换行
    "function-paren-newline": ["warn", "consistent"],
    // generator 函数中 * 号
    // "generator-star": "error",
    // 强制 generator 函数中 * 号周围使用一致的空格
    "generator-star-spacing": ["warn", {
      before: false,
      after: true,
    }],
    // 强制隐式返回的箭头函数体的位置
    "implicit-arrow-linebreak": ["warn", "beside"],
    // 强制使用一致的缩进
    "indent": ["error", 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: [
        "JSXElement", "JSXElement > *", "JSXAttribute", "JSXIdentifier", "JSXNamespacedName",
        "JSXMemberExpression", "JSXSpreadAttribute", "JSXExpressionContainer", "JSXOpeningElement",
        "JSXClosingElement", "JSXFragment", "JSXOpeningFragment", "JSXClosingFragment", "JSXText",
        "JSXEmptyExpression", "JSXSpreadChild"
      ],
      ignoreComments: false,
    }],
    // 强制在 JSX 属性中一致地使用双引号或单引号
    "jsx-quotes": ["warn", "prefer-double"],
    // 强制在对象字面量的键和值之间使用一致的空格
    "key-spacing": ["warn", { beforeColon: false, afterColon: true }],
    // 强制关键字周围空格的一致性
    "keyword-spacing": ["warn", {
      "before": true,
      "after": true,
      "overrides":{
        "if": {"after": false},
        "for": {"after": false},
        "while": {"after": false},
        "switch": {"after": false},
        "case": {"after": true},
        "catch": {"after": false},
        "return": {"after": true},
        "throw": {"after": true},
      },
    }],
    // 强制使用一致的换行符风格
    // Windows - "CRLF"
    // Unix、Linux - "LF"
    "linebreak-style": ["error", "unix"],
    // 要求或禁止在三元操作数中间换行
    // TODO: enable?
    "multiline-ternary": ["off", "never"],
    // 要求方法链中每个调用都有一个换行符
    "newline-per-chained-call": ["warn", { ignoreChainWithDepth: 4 }],
    // 强制或禁止调用无参构造函数时有圆括号
    "new-parens": ["error", "always"],
    // 禁止冗余的括号
    "no-extra-parens": ["error", "all", {
      "conditionalAssign": true,
      "nestedBinaryExpressions": false,
      "returnAssign": false,
      "ignoreJSX": "all", // delegate to eslint-plugin-react
      "enforceForArrowConditionals": false,
    }],
    // 禁止不必要的分号
    "no-extra-semi": "warn",
    // 禁止数字字面量中使用前导和末尾小数点
    "no-floating-decimal": "error",
    // 禁止空格和 tab 的混合缩进
    "no-mixed-spaces-and-tabs": "warn",
    // 禁止使用多个空格
    "no-multi-spaces": ["warn", {"ignoreEOLComments": true}],
    // 禁止出现多行空行
    "no-multiple-empty-lines": ["warn", {
      "max": 2,
      "maxBOF": 1,
      "maxEOF": 1,
    }],
    // 禁用行尾空格
    "no-trailing-spaces": ["warn", {
      "skipBlankLines": true,
      "ignoreComments": false,
    }],
    // 禁止属性前有空白
    "no-whitespace-before-property": "error",
    // 强制单个语句的位置
    "nonblock-statement-body-position": "off",
    "object-curly-newline": "off",
    // 强制大括号内换行符的一致性
    "object-curly-newline": ["error", {
      "ObjectExpression": { minProperties: 4, multiline: true, consistent: true },
      "ObjectPattern": { minProperties: 4, multiline: true, consistent: true },
      "ImportDeclaration": { minProperties: 4, multiline: true, consistent: true },
      "ExportDeclaration": { minProperties: 4, multiline: true, consistent: true },
    }],
    // 强制在花括号中使用一致的空格
    "object-curly-spacing": ["warn", "always", {
      "arraysInObjects": false,
      "objectsInObjects": true,
    }],
    // 强制将对象的属性放在不同的行上
    "object-property-newline": ["off", {
      "allowAllPropertiesOnSameLine": true,
    }],
    // 要求或禁止在变量声明周围换行
    "one-var-declaration-per-line": "off",
    // 强制操作符使用一致的换行符
    "operator-linebreak": ["off", "before", {overrides: {"=": "none"}}],
    // 要求或禁止块内填充
    "padded-blocks": "off",
    // 要求对象字面量属性名称用引号括起来
    "quote-props": ["warn", "consistent"],
    // 强制剩余和扩展运算符及其表达式之间有空格
    "rest-spread-spacing": ["error", "never"],
    // 要求或禁止使用分号代替 ASI
    "semi": ["error", "always"],
    // 强制分号之前和之后使用一致的空格
    "semi-spacing": ["error", { before: false, after: true }],
    // 强制分号的位置
    "semi-style": ["error", "last"],
    // 要求或禁止语句块之前的空格（代码块大括号前面是否需要空格）
    "space-before-blocks": ["warn", {
      "functions": "always",
      "keywords": "always",
      "classes": "always",
    }],
    // 强制在 function 的左括号之前使用一致的空格
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always",
    }],
    // 强制在圆括号内使用一致的空格
    "space-in-parens": ["error", "never"],
    // 要求中缀操作符周围有空格（+-*/?| etc.）
    "space-infix-ops": "error",
    // 强制在一元操作符前后使用一致的空格
    "space-unary-ops": ["error", {
      "words": true,
      "nonwords": false,
    }],
    // 强制在 switch 的冒号左右有空格
    "switch-colon-spacing": ["error", { after: true, before: false }],
    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    "template-curly-spacing": "error",
    // 要求或禁止在模板标记和它们的字面量之间有空格
    "template-tag-spacing": ["error", "never"],
    // 要求或禁止 Unicode 字节顺序标记 (BOM)
    "unicode-bom": ["off", "never"],
    // 要求 IIFE 使用括号括起来
    "wrap-iife": ["error", "outside", { functionPrototypeMethods: true }],
    // 要求正则表达式被括号括起来
    "wrap-regex": "off",
    // 强制在 yield* 表达式中 * 周围使用空格
    "yield-star-spacing": ["error", "both"],

    // 已废弃
    "no-arrow-condition": "off",
    "no-comma-dangle": "off",
    "no-reserved-keys": "off",
    "no-space-before-semi": "off",
    "no-wrap-func": "off",
    "space-after-function-name": "off",
    "space-after-keywords": "off",
    "space-before-function-parentheses": "off",
    "space-before-keywords": "off",
    "space-in-brackets": "off",
    "space-return-throw-case": "off",
    "space-unary-word-ops": "off",


    "@babel/object-curly-spacing": "off",
    "@babel/semi": "off",
    "@typescript-eslint/brace-style": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/comma-spacing": "off",
    "@typescript-eslint/func-call-spacing": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/keyword-spacing": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-extra-parens": "off",
    "@typescript-eslint/no-extra-semi": "off",
    "@typescript-eslint/object-curly-spacing": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/space-before-blocks": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/space-infix-ops": "off",
    "@typescript-eslint/type-annotation-spacing": "off",
    "babel/object-curly-spacing": "off",
    "babel/semi": "off",
    "flowtype/boolean-style": "off",
    "flowtype/delimiter-dangle": "off",
    "flowtype/generic-spacing": "off",
    "flowtype/object-type-curly-spacing": "off",
    "flowtype/object-type-delimiter": "off",
    "flowtype/quotes": "off",
    "flowtype/semi": "off",
    "flowtype/space-after-type-colon": "off",
    "flowtype/space-before-generic-bracket": "off",
    "flowtype/space-before-type-colon": "off",
    "flowtype/union-intersection-spacing": "off",
    "react/jsx-child-element-spacing": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-closing-tag-location": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-curly-spacing": "off",
    "react/jsx-equals-spacing": "off",
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    "react/jsx-max-props-per-line": "off",
    "react/jsx-newline": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-multi-spaces": "off",
    "react/jsx-tag-spacing": "off",
    "react/jsx-wrap-multilines": "off",
    "standard/array-bracket-even-spacing": "off",
    "standard/computed-property-even-spacing": "off",
    "standard/object-curly-even-spacing": "off",
    "unicorn/empty-brace-spaces": "off",
    "unicorn/no-nested-ternary": "off",
    "unicorn/number-literal-case": "off",
    "vue/array-bracket-newline": "off",
    "vue/array-bracket-spacing": "off",
    "vue/arrow-spacing": "off",
    "vue/block-spacing": "off",
    "vue/block-tag-newline": "off",
    "vue/brace-style": "off",
    "vue/comma-dangle": "off",
    "vue/comma-spacing": "off",
    "vue/comma-style": "off",
    "vue/dot-location": "off",
    "vue/func-call-spacing": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/html-closing-bracket-spacing": "off",
    "vue/html-end-tags": "off",
    "vue/html-indent": "off",
    "vue/html-quotes": "off",
    "vue/key-spacing": "off",
    "vue/keyword-spacing": "off",
    "vue/max-attributes-per-line": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/mustache-interpolation-spacing": "off",
    "vue/no-extra-parens": "off",
    "vue/no-multi-spaces": "off",
    "vue/no-spaces-around-equal-signs-in-attribute": "off",
    "vue/object-curly-newline": "off",
    "vue/object-curly-spacing": "off",
    "vue/object-property-newline": "off",
    "vue/operator-linebreak": "off",
    "vue/quote-props": "off",
    "vue/script-indent": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/space-in-parens": "off",
    "vue/space-infix-ops": "off",
    "vue/space-unary-ops": "off",
    "vue/template-curly-spacing": "off",

    ...(includeDeprecated && {
      // Deprecated since version 4.0.0.
      // https://github.com/eslint/eslint/pull/8286
      "indent-legacy": "off",
      // Deprecated since version 3.3.0.
      // https://eslint.org/docs/rules/no-spaced-func
      "no-spaced-func": "off",
      // Deprecated since version 7.0.0.
      // https://github.com/yannickcr/eslint-plugin-react/blob/master/CHANGELOG.md#700---2017-05-06
      "react/jsx-space-before-closing": "off",
    }),
  },
};
