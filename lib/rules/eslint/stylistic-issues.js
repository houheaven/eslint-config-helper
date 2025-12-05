
// ==========================================================
// Stylistic Issues
// 这些规则是关于风格指南的，而且是非常主观的
// ==========================================================

module.exports = {
  rules: {
    // 在数组开括号后和闭括号前强制换行
    // https://eslint.org/docs/rules/array-bracket-newline
    "array-bracket-newline": ["warn", "consistent"],

    // 强制数组元素间出现换行
    // https://eslint.org/docs/rules/array-element-newline
    "array-element-newline": ["warn", "consistent"],

    // 强制数组方括号中使用一致的空格
    "array-bracket-spacing": ["warn", "never"],

    // 禁止或强制在代码块中开括号前和闭括号后有空格
    // https://eslint.org/docs/rules/block-spacing
    "block-spacing": ["warn", "always"],

    // 强制在代码块中使用一致的大括号风格
    "brace-style": ["warn", "stroustrup", { "allowSingleLine": true }],

    // 要求使用骆驼拼写法
    "camelcase": ["off", {
      properties: "never",
      ignoreDestructuring: false,
    }],

    // enforce or disallow capitalization of the first letter of a comment
    // https://eslint.org/docs/rules/capitalized-comments
    "capitalized-comments": ["off", "never", {
      line: {
        ignorePattern: ".*",
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: ".*",
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    }],

    // 要求或禁止使用拖尾逗号（对象、数组、导入、导出、函数参数的最后一项后面是否允许有逗号）
    "comma-dangle": ["warn", {
      arrays: "always-multiline",
      objects: "always-multiline",
      imports: "always-multiline",
      exports: "always-multiline",
      functions: "never",
    }],

    // 强制在逗号前后使用一致的空格
    "comma-spacing": ["warn", {
      before: false,
      after: true,
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

    // enforces consistent naming when capturing the current execution context
    "consistent-this": "off",

    // 要求或禁止文件末尾存在空行
    "eol-last": ["warn", "always"],

    // 函数调用参数换行符
    // https://eslint.org/docs/rules/function-call-argument-newline
    "function-call-argument-newline": ["warn", "consistent"],

    // 要求或禁止在函数标识符和其调用之间有空格
    // https://eslint.org/docs/rules/func-call-spacing
    "func-call-spacing": ["warn", "never"],

    // requires function names to match the name of the variable or property to which they are
    // assigned
    // https://eslint.org/docs/rules/func-name-matching
    "func-name-matching": ["off", "always", {
      includeCommonJSModuleExports: false,
      considerPropertyDescriptor: true,
    }],

    // 要求函数表达式要有一个函数名称
    // https://eslint.org/docs/rules/func-names
    "func-names": "off",

    // enforces use of function declarations or expressions
    // https://eslint.org/docs/rules/func-style
    // TODO: enable
    "func-style": ["off", "expression"],

    // 强制在函数括号内使用一致的换行
    // https://eslint.org/docs/rules/function-paren-newline
    "function-paren-newline": ["warn", "consistent"],

    // disallow specified identifiers
    // https://eslint.org/docs/rules/id-denylist
    "id-denylist": "off",

    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    "id-length": "off",

    // require identifiers to match the provided regular expression
    "id-match": "off",

    // 强制隐式返回的箭头函数体的位置
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    "implicit-arrow-linebreak": ["warn", "beside"],

    // 强制使用一致的缩进
    // https://eslint.org/docs/rules/indent
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
        "JSXElement",
        "JSXElement > *",
        "JSXAttribute",
        "JSXIdentifier",
        "JSXNamespacedName",
        "JSXMemberExpression",
        "JSXSpreadAttribute",
        "JSXExpressionContainer",
        "JSXOpeningElement",
        "JSXClosingElement",
        "JSXFragment",
        "JSXOpeningFragment",
        "JSXClosingFragment",
        "JSXText",
        "JSXEmptyExpression",
        "JSXSpreadChild",
      ],
      ignoreComments: false,
    }],

    // 强制在 JSX 属性中一致地使用双引号或单引号
    // https://eslint.org/docs/rules/jsx-quotes
    "jsx-quotes": ["warn", "prefer-double"],

    // 强制在对象字面量的键和值之间使用一致的空格
    "key-spacing": ["warn", {
      beforeColon: false,
      afterColon: true,
    }],

    // 强制关键字周围空格的一致性
    "keyword-spacing": ["warn", {
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

    // enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    // TODO: enable?
    "line-comment-position": ["off", {
      position: "above",
      ignorePattern: "",
      applyDefaultPatterns: true,
    }],

    // 强制使用一致的换行符风格
    // Windows - "CRLF"
    // Unix、Linux - "LF"
    // https://eslint.org/docs/rules/linebreak-style
    "linebreak-style": ["warn", "unix"],

    // require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: false }],

    // 要求在注释周围有空行
    "lines-around-comment": "off",

    // require or disallow newlines around directives
    // https://eslint.org/docs/rules/lines-around-directive
    "lines-around-directive": ["error", {
      before: "always",
      after: "always",
    }],

    // specify the maximum depth that blocks can be nested
    "max-depth": ["off", 4],

    // 强制一行的最大长度
    // https://eslint.org/docs/rules/max-len
    "max-len": ["warn", {
      "code": 200,
      "tabWidth": 2,
      "comments": 200,
      "ignoreComments": false,
      "ignoreTrailingComments": true,
      "ignoreUrls": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true,
    }],

    // specify the max number of lines in a file
    // https://eslint.org/docs/rules/max-lines
    "max-lines": ["off", {
      max: 300,
      skipBlankLines: true,
      skipComments: true,
    }],

    // enforce a maximum function length
    // https://eslint.org/docs/rules/max-lines-per-function
    "max-lines-per-function": ["off", {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    }],

    // specify the maximum depth callbacks can be nested
    "max-nested-callbacks": "off",

    // limits the number of parameters that can be used in the function declaration.
    "max-params": ["off", 3],

    // specify the maximum number of statement allowed in a function
    "max-statements": ["off", 10],

    // restrict the number of statements per line
    // https://eslint.org/docs/rules/max-statements-per-line
    "max-statements-per-line": ["off", { max: 1 }],

    // enforce a particular style for multiline comments
    // https://eslint.org/docs/rules/multiline-comment-style
    "multiline-comment-style": ["off", "starred-block"],

    // 要求或禁止在三元操作数中间换行
    // https://eslint.org/docs/rules/multiline-ternary
    "multiline-ternary": ["off", "never"],

    // 要求构造器函数首字母大写
    // https://eslint.org/docs/latest/rules/new-cap
    "new-cap": ["warn", {
      newIsCap: true,
      newIsCapExceptions: [],
      newIsCapExceptionPattern: "^hh[A-Z]",
      capIsNew: false,
      capIsNewExceptions: ["Immutable.Map", "Immutable.Set", "Immutable.List"],
    }],

    // 强制或禁止调用无参构造函数时有圆括号
    // https://eslint.org/docs/rules/new-parens
    "new-parens": ["error", "always"],

    // allow/disallow an empty newline after var statement
    "newline-after-var": "off",

    // https://eslint.org/docs/rules/newline-before-return
    "newline-before-return": "off",

    // 要求方法链中每个调用都有一个换行符
    // https://eslint.org/docs/rules/newline-per-chained-call
    "newline-per-chained-call": ["warn", { ignoreChainWithDepth: 4 }],

    // disallow use of the Array constructor
    "no-array-constructor": "error",

    // 禁用按位运算符
    // https://eslint.org/docs/rules/no-bitwise
    "no-bitwise": "off",
    // "no-bitwise": "error",

    // disallow use of the continue statement
    // https://eslint.org/docs/rules/no-continue
    "no-continue": "error",

    // disallow comments inline after code
    "no-inline-comments": "off",

    // 禁止 if 作为唯一的语句出现在 else 语句中
    // https://eslint.org/docs/rules/no-lonely-if
    "no-lonely-if": "off",
    // "no-lonely-if": "error",

    // 禁止混合使用不同的操作符
    // https://eslint.org/docs/rules/no-mixed-operators
    "no-mixed-operators": [
      "off",
      {
        "groups": [
          ["+", "-", "*", "/", "%", "**"],
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"],
        ],
        "allowSamePrecedence": true,
      },
    ],

    // 禁止空格和 tab 的混合缩进
    "no-mixed-spaces-and-tabs": "warn",

    // 禁止连续赋值
    // https://eslint.org/docs/rules/no-multi-assign
    "no-multi-assign": "off",
    // "no-multi-assign": ["error"],

    // 禁止出现多行空行
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    "no-multiple-empty-lines": ["warn", {
      "max": 2,
      "maxBOF": 1,
      "maxEOF": 1,
    }],

    // disallow negated conditions
    // https://eslint.org/docs/rules/no-negated-condition
    "no-negated-condition": "off",

    // 禁用嵌套的三元表达式
    "no-nested-ternary": "off",
    // "no-nested-ternary": "error",

    // disallow use of the Object constructor
    "no-new-object": "error",

    // 禁用一元操作符 ++ 和 --
    // https://eslint.org/docs/rules/no-plusplus
    "no-plusplus": "off",
    // "no-plusplus": "error",

    // 禁用特定的语法
    // https://eslint.org/docs/rules/no-restricted-syntax
    "no-restricted-syntax": [
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

    // 禁用 tab
    "no-tabs": "warn",

    // disallow the use of ternary operators
    "no-ternary": "off",

    // 禁用行尾空白
    "no-trailing-spaces": ["warn", {
      "skipBlankLines": true,
      "ignoreComments": false,
    }],

    // 禁止标识符中有悬空下划线
    // https://eslint.org/docs/rules/no-underscore-dangle
    "no-underscore-dangle": "off",
    // "no-underscore-dangle": ["error", {
    //   allow: [],
    //   allowAfterThis: false,
    //   allowAfterSuper: false,
    //   enforceInMethodNames: true,
    // }],

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // https://eslint.org/docs/rules/no-unneeded-ternary
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],

    // 禁止属性前有空白
    // https://eslint.org/docs/rules/no-whitespace-before-property
    "no-whitespace-before-property": "error",

    // 强制单个语句的位置
    // https://eslint.org/docs/rules/nonblock-statement-body-position
    "nonblock-statement-body-position": "off",

    // 强制在花括号中使用一致的空格
    // https://eslint.org/docs/rules/object-curly-spacing
    "object-curly-spacing": ["warn", "always", {
      arraysInObjects: true,
      objectsInObjects: true,
    }],

    // 强制大括号内换行符的一致性
    // https://eslint.org/docs/rules/object-curly-newline
    "object-curly-newline": ["warn", {
      ObjectExpression: { minProperties: 40, multiline: true, consistent: true },
      ObjectPattern: "never",
      ImportDeclaration: "never",
      ExportDeclaration: "always",
    }],

    // 强制将对象的属性放在不同的行上
    // https://eslint.org/docs/rules/object-property-newline
    "object-property-newline": ["off", {
      allowAllPropertiesOnSameLine: false,
    }],

    // 强制函数中的变量要么一起声明要么分开声明
    "one-var": "off",
    // "one-var": ["error", "never"],

    // 要求或禁止在变量声明周围换行
    // https://eslint.org/docs/rules/one-var-declaration-per-line
    "one-var-declaration-per-line": "off",

    // require assignment operator shorthand where possible or prohibit it entirely
    // https://eslint.org/docs/rules/operator-assignment
    "operator-assignment": ["error", "always"],

    // 强制操作符使用一致的换行符
    // https://eslint.org/docs/rules/operator-linebreak
    "operator-linebreak": ["off", "before", { overrides: { "=": "none" } }],

    // 要求或禁止块内填充
    "padded-blocks": "off",

    // Require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    "padding-line-between-statements": "off",

    // Disallow the use of Math.pow in favor of the ** operator
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    "prefer-exponentiation-operator": "error",

    // 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展
    // https://eslint.org/docs/rules/prefer-object-spread
    "prefer-object-spread": "off",
    // "prefer-object-spread": "error",

    // 要求对象字面量属性名称用引号括起来
    // https://eslint.org/docs/rules/quote-props.html
    "quote-props": ["warn", "consistent"],

    // 强制使用一致的反勾号、双引号或单引号
    "quotes": ["warn", "double", { "avoidEscape": true }],

    // do not require jsdoc
    // https://eslint.org/docs/rules/require-jsdoc
    "require-jsdoc": "off",

    // 要求或禁止使用分号代替 ASI
    "semi": ["error", "always"],

    // 强制分号之前和之后使用一致的空格
    "semi-spacing": ["error", { before: false, after: true }],

    // 强制分号的位置
    // https://eslint.org/docs/rules/semi-style
    "semi-style": ["error", "last"],

    // requires object keys to be sorted
    "sort-keys": ["off", "asc", { caseSensitive: false, natural: true }],

    // sort variables within the same declaration block
    "sort-vars": "off",

    // 要求或禁止语句块之前的空格（代码块大括号前面是否需要空格）
    // https://eslint.org/docs/latest/rules/space-before-blocks
    "space-before-blocks": ["warn", {
      functions: "always",
      keywords: "always",
      classes: "always",
    }],

    // 强制在 function 的左括号之前使用一致的空格
    // https://eslint.org/docs/rules/space-before-function-paren
    "space-before-function-paren": ["warn", {
      anonymous: "never",
      named: "never",
      asyncArrow: "always",
    }],

    // 强制在圆括号内使用一致的空格
    "space-in-parens": ["warn", "never"],

    // 要求中缀操作符周围有空格（+-*/?| etc.）
    "space-infix-ops": "warn",

    // 强制在一元操作符前后使用一致的空格
    // https://eslint.org/docs/rules/space-unary-ops
    "space-unary-ops": ["warn", {
      words: true,
      nonwords: false,
    }],

    // 要求或禁止在注释前有空白 (space 或 tab)
    // require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    "spaced-comment": "off",
    // "spaced-comment": ["error", "always", {
    //   line: {
    //     exceptions: ["-", "+"],
    //     markers: ["=", "!", "/"], // space here to support sprockets directives, slash for TS /// comments
    //   },
    //   block: {
    //     exceptions: ["-", "+"],
    //     markers: ["=", "!", ":", "::"], // space here to support sprockets directives and flow comment types
    //     balanced: true,
    //   }
    // }],

    // 强制在 switch 的冒号左右有空格
    // https://eslint.org/docs/rules/switch-colon-spacing
    "switch-colon-spacing": ["error", { after: true, before: false }],

    // 要求或禁止在模板标记和它们的字面量之间有空格
    // https://eslint.org/docs/rules/template-tag-spacing
    "template-tag-spacing": ["error", "never"],

    // 要求或禁止 Unicode 字节顺序标记 (BOM)
    // https://eslint.org/docs/rules/unicode-bom
    "unicode-bom": ["off", "never"],

    // 要求正则表达式被括号括起来
    "wrap-regex": "off",
  },
};
