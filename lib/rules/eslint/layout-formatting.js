
// ==========================================================
// Layout and Formatting
// 这些规则关心的是代码的外观而不是执行方式
// ==========================================================

module.exports = {
  rules: {
    // 在数组开括号后和闭括号前强制换行
    // https://zh-hans.eslint.org/docs/latest/rules/array-bracket-newline
    "array-bracket-newline": ["warn", "consistent"],

    // 强制数组方括号中使用一致的空格
    "array-bracket-spacing": ["warn", "never", {
      singleValue: false,
      objectsInArrays: false,
      arraysInArrays: false,
    }],

    // 强制数组元素间出现换行
    // https://zh-hans.eslint.org/docs/latest/rules/array-element-newline
    "array-element-newline": ["warn", "consistent"],

    // 禁止或强制在代码块中开括号前和闭括号后有空格
    // https://zh-hans.eslint.org/docs/latest/rules/block-spacing
    "block-spacing": ["warn", "always"],

    // 强制在代码块中使用一致的大括号风格
    // https://zh-hans.eslint.org/docs/latest/rules/brace-style
    "brace-style": ["warn", "stroustrup", {
      allowSingleLine: true,
    }],

    // 要求或禁止使用拖尾逗号（对象、数组、导入、导出、函数参数的最后一项后面是否允许有逗号）
    // https://zh-hans.eslint.org/docs/latest/rules/comma-dangle
    "comma-dangle": ["warn", {
      arrays: "always-multiline",
      objects: "always-multiline",
      imports: "always-multiline",
      exports: "always-multiline",
      functions: "never",
    }],

    // 强制在逗号前后使用一致的空格
    // https://zh-hans.eslint.org/docs/latest/rules/comma-spacing
    "comma-spacing": ["warn", {
      before: false,
      after: true,
    }],

    // 强制使用一致的逗号风格
    // https://zh-hans.eslint.org/docs/latest/rules/comma-style
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
    // https://zh-hans.eslint.org/docs/latest/rules/computed-property-spacing
    "computed-property-spacing": ["warn", "never"],

    // 强制在点号之前和之后一致的换行
    // https://zh-hans.eslint.org/docs/latest/rules/dot-location
    "dot-location": ["warn", "property"],

    // 要求或禁止文件末尾存在空行
    // https://zh-hans.eslint.org/docs/latest/rules/eol-last
    "eol-last": ["warn", "always"],

    // 要求或禁止在函数标识符和其调用之间有空格
    // https://zh-hans.eslint.org/docs/latest/rules/func-call-spacing
    "func-call-spacing": ["warn", "never"],

    // 函数调用参数换行符
    // https://zh-hans.eslint.org/docs/latest/rules/function-call-argument-newline
    "function-call-argument-newline": ["warn", "consistent"],

    // 强制在函数括号内使用一致的换行
    // https://zh-hans.eslint.org/docs/latest/rules/function-paren-newline
    "function-paren-newline": ["warn", "consistent"],

    // 强制使用一致的缩进
    // https://zh-hans.eslint.org/docs/latest/rules/indent
    "indent": ["warn", 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      StaticBlock: {
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false,
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
    }],

    // 强制在 JSX 属性中一致地使用双引号或单引号
    // https://zh-hans.eslint.org/docs/latest/rules/jsx-quotes
    "jsx-quotes": ["warn", "prefer-double"],

    // 强制在对象字面量的键和值之间使用一致的空格
    // https://zh-hans.eslint.org/docs/latest/rules/key-spacing
    "key-spacing": ["warn", {
      beforeColon: false,
      afterColon: true,
    }],

    // 强制关键字周围空格的一致性
    // https://zh-hans.eslint.org/docs/latest/rules/keyword-spacing
    "keyword-spacing": ["warn", {
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

    // enforce position of line comments
    // 不支持自动修复，后续开启改规则，可以设置为 error
    // https://zh-hans.eslint.org/docs/latest/rules/line-comment-position
    "line-comment-position": ["off", {
      position: "above",
      ignorePattern: "",
      applyDefaultPatterns: true,
    }],

    // 强制使用一致的换行符风格
    // Windows - "CRLF"
    // Unix、Linux - "LF"
    // https://zh-hans.eslint.org/docs/latest/rules/linebreak-style
    "linebreak-style": ["warn", "unix"],

    // 要求在注释周围有空行
    // 支持自动修复，后续开启改规则，可以设置为 warn
    "lines-around-comment": "off",

    // 强制一行的最大长度
    // https://zh-hans.eslint.org/docs/latest/rules/max-len
    "max-len": ["error", {
      code: 200,
      tabWidth: 2,
      comments: 200,
      ignorePattern: "",
      ignoreComments: false,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],

    // 强制限制每行允许的语句数量上限
    // 不支持自动修复，后续开启改规则，可以设置为 error
    // https://zh-hans.eslint.org/docs/latest/rules/max-statements-per-line
    "max-statements-per-line": ["off", {
      max: 1,
    }],

    // 要求或禁止在三元操作数中间换行
    // 支持自动修复，后续开启改规则，可以设置为 warn
    // https://zh-hans.eslint.org/docs/latest/rules/multiline-ternary
    "multiline-ternary": ["off", "never"],

    // 强制或禁止调用无参构造函数时有圆括号
    // https://zh-hans.eslint.org/docs/latest/rules/new-parens
    "new-parens": ["warn", "always"],

    // 要求方法链中每个调用都有一个换行符
    // https://zh-hans.eslint.org/docs/latest/rules/newline-per-chained-call
    "newline-per-chained-call": ["warn", {
      ignoreChainWithDepth: 4,
    }],

    // 禁止冗余的括号
    // https://zh-hans.eslint.org/docs/latest/rules/no-extra-parens
    "no-extra-parens": ["warn", "all", {
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

    // 禁止空格和 tab 的混合缩进
    "no-mixed-spaces-and-tabs": "error",

    // 禁止使用多个空格
    // https://zh-hans.eslint.org/docs/latest/rules/no-multi-spaces
    "no-multi-spaces": ["warn", {
      ignoreEOLComments: true,
      exceptions: {},
    }],

    // 禁止出现多行空行
    // https://zh-hans.eslint.org/docs/latest/rules/no-multiple-empty-lines
    "no-multiple-empty-lines": ["warn", {
      max: 2,
      maxBOF: 1,
      maxEOF: 1,
    }],

    // 禁用 tab
    "no-tabs": ["error", {
      allowIndentationTabs: false,    // 允许缩进使用 tab
    }],

    // 禁用行尾空白
    // 这条规则不允许在行末有尾随空格（空格、制表符和其他 Unicode 空白字符）
    "no-trailing-spaces": ["warn", {
      skipBlankLines: true,
      ignoreComments: false,
    }],

    // 禁止属性前有空白
    // https://zh-hans.eslint.org/docs/latest/rules/no-whitespace-before-property
    "no-whitespace-before-property": "warn",

    // 强制单个语句的位置
    // 这条规则的目的是为单行语句执行一个一致的位置
    // https://zh-hans.eslint.org/docs/latest/rules/nonblock-statement-body-position
    "nonblock-statement-body-position": ["warn", "any"],

    // 强制大括号内换行符的一致性
    // https://zh-hans.eslint.org/docs/latest/rules/object-curly-newline
    "object-curly-newline": ["warn", {
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
    // https://zh-hans.eslint.org/docs/latest/rules/object-curly-spacing
    "object-curly-spacing": ["warn", "always", {
      arraysInObjects: true,
      objectsInObjects: true,
    }],

    // 强制将对象的属性放在不同的行上
    // https://zh-hans.eslint.org/docs/latest/rules/object-property-newline
    "object-property-newline": ["warn", {
      allowAllPropertiesOnSameLine: true,
    }],

    // 强制操作符使用一致的换行符
    // https://zh-hans.eslint.org/docs/latest/rules/operator-linebreak
    "operator-linebreak": ["warn", "none", {
      overrides: { "=": "none" },
    }],

    // 要求或禁止块内填充
    // 这条规则使块内的空行填充一致
    // 支持自动修复，后续开启改规则，可以设置为 warn
    "padded-blocks": "off",

    // 要求或禁止语句之间的填充行
    // 支持自动修复，后续开启改规则，可以设置为 warn
    // https://zh-hans.eslint.org/docs/latest/rules/padding-line-between-statements
    "padding-line-between-statements": "off",

    // 强制使用一致的反勾号、双引号或单引号
    "quotes": ["warn", "double", {
      avoidEscape: true,
      allowTemplateLiterals: false,
    }],

    // 要求或禁止使用分号代替 ASI（自动分号插入）
    "semi": ["warn", "always", {
      omitLastInOneLineBlock: false,
    }],

    // 强制分号之前和之后使用一致的空格
    "semi-spacing": ["warn", {
      before: false,
      after: true,
    }],

    // 强制分号的位置
    // https://zh-hans.eslint.org/docs/latest/rules/semi-style
    "semi-style": ["warn", "last"],

    // 要求或禁止语句块之前的空格（代码块大括号前面是否需要空格）
    // https://zh-hans.eslint.org/docs/latest/rules/space-before-blocks
    "space-before-blocks": ["warn", {
      functions: "always",
      keywords: "always",
      classes: "always",
    }],

    // 强制在 function 的左括号之前使用一致的空格
    // https://zh-hans.eslint.org/docs/latest/rules/space-before-function-paren
    "space-before-function-paren": ["warn", {
      anonymous: "never",
      named: "never",
      asyncArrow: "always",
    }],

    // 强制在圆括号内使用一致的空格
    // https://zh-hans.eslint.org/docs/latest/rules/space-in-parens
    "space-in-parens": ["warn", "never", {
      exceptions: [],
    }],

    // 要求中缀操作符周围有空格（+-*/?| etc.）
    // https://zh-hans.eslint.org/docs/latest/rules/space-infix-ops
    "space-infix-ops": ["warn", {
      // 设置 int32Hint 选项为 true（默认为是 false），以允许写 a|0 时不留空格
      int32Hint: false,
    }],

    // 强制在一元操作符前后使用一致的空格
    // https://zh-hans.eslint.org/docs/latest/rules/space-unary-ops
    "space-unary-ops": ["warn", {
      words: true,              // 适用于单数词运算符，如 new, delete, typeof, void, yield
      nonwords: false,          // 适用于单数运算符，如 -, +, --, ++, !, !!
      overrides: {},
    }],

    // 强制在 switch 的冒号左右有空格
    // https://zh-hans.eslint.org/docs/latest/rules/switch-colon-spacing
    "switch-colon-spacing": ["warn", {
      after: true,
      before: false,
    }],

    // 要求或禁止 Unicode 字节顺序标记 (BOM)
    // 支持自动修复，后续开启改规则，可以设置为 warn
    // https://zh-hans.eslint.org/docs/latest/rules/unicode-bom
    "unicode-bom": ["off", "never"],

    // 要求 IIFE 使用括号括起来
    // 这条规则要求所有立即调用的函数表达式都要用圆括号包裹起来
    // https://zh-hans.eslint.org/docs/latest/rules/wrap-iife
    "wrap-iife": ["warn", "inside", {
      functionPrototypeMethods: true,
    }],

    // 要求正则表达式被括号括起来
    // 支持自动修复，后续开启改规则，可以设置为 warn
    "wrap-regex": "off",
  },
};
