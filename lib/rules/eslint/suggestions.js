
// ==========================================================
// Suggestions
// 这些规则提出了做事的替代方法
// ==========================================================

module.exports = {
  rules: {
    // 在定义的范围内强制使用变量
    // https://zh-hans.eslint.org/docs/latest/rules/block-scoped-var
    "block-scoped-var": "error",

    // 要求使用骆驼拼写法
    // https://zh-hans.eslint.org/docs/latest/rules/camelcase
    "camelcase": ["error", {
      properties: "always",             // always 执行属性名称的骆驼大写风格
      ignoreDestructuring: false,       // false 对非结构化的标识符执行驼峰大写风格
      ignoreImports: false,             // false 对 ES2015 导入执行骆驼大写风格
      ignoreGlobals: false,             // false 对全局变量执行骆驼大写风格
      allow: [],
    }],

    // 强制或禁止注释首字母大写
    // https://zh-hans.eslint.org/docs/latest/rules/capitalized-comments
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

    // 强制实现程序中允许的最大循环复杂度
    // https://zh-hans.eslint.org/docs/latest/rules/complexity
    "complexity": ["error", {
      max: 100,
    }],

    // 要求返回语句要么始终指定值，要么从不指定值
    // https://zh-hans.eslint.org/docs/latest/rules/consistent-return
    "consistent-return": ["error", {
      treatUndefinedAsUnspecified: true,
    }],

    // 在捕获当前执行上下文时，应确保命名的一致性
    // https://zh-hans.eslint.org/docs/latest/rules/consistent-this
    "consistent-this": ["error", "that"],

    // 强制所有控制语句使用一致的括号风格
    // https://zh-hans.eslint.org/docs/latest/rules/curly
    "curly": ["off", "multi-or-nest"],

    // 要求 switch 语句中有 default 分支
    // https://zh-hans.eslint.org/docs/latest/rules/default-case
    "default-case": ["off", {
      commentPattern: "^no default$",
    }],

    // 强制 switch 语句中的 default 子句放在最后
    // https://zh-hans.eslint.org/docs/latest/rules/default-case-last
    "default-case-last": "off",

    // 尽可能的使用点符号
    // https://zh-hans.eslint.org/docs/latest/rules/dot-notation
    "dot-notation": ["warn", {
      allowKeywords: true,
      allowPattern: "",
    }],

    // 要求使用 === 和 !==
    // https://zh-hans.eslint.org/docs/latest/rules/eqeqeq
    "eqeqeq": ["warn", "always", { null: "ignore" }],

    // 要求函数名称与分配给它们的变量或属性的名称相匹配
    // https://zh-hans.eslint.org/docs/latest/rules/func-name-matching
    "func-name-matching": ["off", "always", {
      includeCommonJSModuleExports: false,
      considerPropertyDescriptor: true,
    }],

    // 要求函数表达式要有一个函数名称
    // https://zh-hans.eslint.org/docs/latest/rules/func-names
    "func-names": "off",

    // 强制一致使用函数声明或表达式
    // https://zh-hans.eslint.org/docs/latest/rules/func-style
    "func-style": ["off", "declaration"],

    // 要求 for-in 循环中有一个 if 语句
    // 在使用 for in 遍历对象时，会把从原型链继承来的属性也包括进来，这样会导致意想不到的项出现
    // https://zh-hans.eslint.org/docs/latest/rules/guard-for-in
    "guard-for-in": "error",

    // 禁止使用指定的标识符
    // https://zh-hans.eslint.org/docs/latest/rules/id-denylist
    "id-denylist": "off",

    // 强制变量等标识符的最小和最大长度
    "id-length": "off",

    // 要求变量等标识符定义时需要匹配指定的正则表达式
    "id-match": "off",

    // 在变量声明时是否要初始化
    // https://zh-hans.eslint.org/docs/latest/rules/init-declarations
    "init-declarations": ["error", "always"],

    // 要求或禁止逻辑赋值运算符简写
    "logical-assignment-operators": ["warn", "never"],

    // 指定块语句的最大嵌套深度
    "max-depth": ["error", 4],

    // 每个文件强制代码的最大行数
    // https://zh-hans.eslint.org/docs/latest/rules/max-lines
    "max-lines": ["off", {
      max: 300,
      skipBlankLines: true,
      skipComments: true,
    }],

    // 每个函数强制代码的最大行数
    // https://zh-hans.eslint.org/docs/latest/rules/max-lines-per-function
    "max-lines-per-function": ["off", {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    }],

    // 指定回调函数的最大嵌套深度
    "max-nested-callbacks": "off",

    // 强制规定了函数定义中参数的最大数量
    // https://zh-hans.eslint.org/docs/latest/rules/max-params
    "max-params": ["off", 3],

    // 强制规定了功能块中允许的最大语句数
    "max-statements": ["off", 10],

    // 强制使用星号样式的多行注释
    // https://zh-hans.eslint.org/docs/latest/rules/multiline-comment-style
    "multiline-comment-style": ["off", "starred-block"],

    // 禁用 alert、confirm 和 prompt
    // https://zh-hans.eslint.org/docs/latest/rules/no-alert
    "no-alert": "off",

    // 不允许使用数组构造函数
    // https://zh-hans.eslint.org/docs/latest/rules/no-array-constructor
    "no-array-constructor": "error",

    // 禁用按位运算符
    // https://zh-hans.eslint.org/docs/latest/rules/no-bitwise
    "no-bitwise": "error",

    // 禁止使用 arguments.caller 或 arguments.callee
    // https://zh-hans.eslint.org/docs/latest/rules/no-caller
    "no-caller": "error",

    // 不允许在 case 分句中进行词汇声明
    // https://zh-hans.eslint.org/docs/latest/rules/no-case-declarations
    "no-case-declarations": "off",
    
    // 禁用 console
    // https://zh-hans.eslint.org/docs/latest/rules/no-console
    "no-console": "off",

    // 禁止使用 continue 语句
    // https://zh-hans.eslint.org/docs/latest/rules/no-continue
    "no-continue": "off",

    // 不允许对变量使用 delete 运算符
    // delete 运算符的目的是为了从一个对象中删除一个属性。在一个变量上使用 delete 运算符可能会导致意外的行为。
    "no-delete-var": "error",

    // 禁止在正则表达式的开头显式地使用等号
    // 正则表达式文字开头的字符 /= 可能与除法赋值运算符混淆
    // https://zh-hans.eslint.org/docs/latest/rules/no-div-regex
    "no-div-regex": "warn",

    // 禁止 if 语句中 return 语句之后有 else 块
    // https://zh-hans.eslint.org/docs/latest/rules/no-else-return
    "no-else-return": "off",
    // "no-else-return": ["error", { allowElseIf: false }],

    // 禁用空块语句
    "no-empty": ["error", { "allowEmptyCatch": true }],

    // 不允许空函数
    // https://zh-hans.eslint.org/docs/latest/rules/no-empty-function
    "no-empty-function": ["error", {
      allow: [
        // "functions",                  // 普通函数
        // "arrowFunctions",             // 箭头函数
        // "generatorFunctions",         // 生成器函数
        // "methods",                    // 类的方法和对象字面的方法缩写
        // "generatorMethods",           // 带有生成器的对象字面的类方法和方法速记
        // "getters",                    // 获取器
        // "setters",                    // 设置器
        // "constructors",               // 类的构造函数
        // "asyncFunctions",             // 异步函数
        // "asyncMethods",               // 异步类方法和对象字面的方法缩写
      ],
    }],

    // 禁止空静态块
    "no-empty-static-block": "error",

    // 在没有类型检查运算符（== 或 !=）的情况下与 null 比较，可能会产生意想不到的结果，因为在与 null 和 undefined 的值比较时，比较结果将为真
    // https://zh-hans.eslint.org/docs/latest/rules/no-eq-null
    "no-eq-null": "error",

    // 禁止使用 eval()
    // https://zh-hans.eslint.org/docs/latest/rules/no-eval
    "no-eval": "error",

    // 不允许扩展原生类型
    // https://zh-hans.eslint.org/docs/latest/rules/no-extend-native
    "no-extend-native": "error",

    // 禁止不必要的函数绑定 .bind()
    // https://zh-hans.eslint.org/docs/latest/rules/no-extra-bind
    "no-extra-bind": "warn",

    // 禁止不必要的布尔转换
    // https://zh-hans.eslint.org/docs/latest/rules/no-extra-boolean-cast
    "no-extra-boolean-cast": "warn",

    // 禁止不必要的标签
    // https://zh-hans.eslint.org/docs/latest/rules/no-extra-label
    "no-extra-label": "warn",

    // 禁止不必要的分号
    // https://zh-hans.eslint.org/docs/latest/rules/no-extra-semi
    "no-extra-semi": "warn",

    // 禁止数字字面量中使用前导和末尾小数点
    // https://zh-hans.eslint.org/docs/latest/rules/no-floating-decimal
    "no-floating-decimal": "warn",

    // 禁止对原生对象或只读全局变量进行重新赋值
    // https://zh-hans.eslint.org/docs/latest/rules/no-global-assign
    "no-global-assign": ["error", { exceptions: [] }],

    // 禁止对变量使用隐式类型转换
    // https://zh-hans.eslint.org/docs/latest/rules/no-implicit-coercion
    "no-implicit-coercion": ["off", {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],

    // 禁止在全局作用域中使用 var 或命名函数
    // https://zh-hans.eslint.org/docs/latest/rules/no-implicit-globals
    "no-implicit-globals": "off",

    // 禁止使用 eval() 等方法
    // https://zh-hans.eslint.org/docs/latest/rules/no-implied-eval
    "no-implied-eval": "error",

    // 禁止与代码在同一行的注释
    // https://zh-hans.eslint.org/docs/latest/rules/no-inline-comments
    "no-inline-comments": "off",

    // 禁止在全局作用域中使用 this
    // https://zh-hans.eslint.org/docs/latest/rules/no-invalid-this
    "no-invalid-this": "error",

    // 不允许标签与变量名称相同
    // https://zh-hans.eslint.org/docs/latest/rules/no-label-var
    "no-label-var": "error",

    // 不允许带标签的语句
    // https://zh-hans.eslint.org/docs/latest/rules/no-labels
    "no-labels": ["error", {
      allowLoop: false,
      allowSwitch: false,
    }],

    // 不允许不必要的嵌套块
    // https://zh-hans.eslint.org/docs/latest/rules/no-lone-blocks
    "no-lone-blocks": "error",

    // 禁止 if 作为唯一的语句出现在 else 语句中
    // https://zh-hans.eslint.org/docs/latest/rules/no-lonely-if
    "no-lonely-if": "off",
    // "no-lonely-if": "warn",

    // 不允许在循环语句中包含不安全引用的函数声明
    // https://zh-hans.eslint.org/docs/latest/rules/no-loop-func
    "no-loop-func": "error",

    // 禁止使用“魔数”
    // “魔数“是在代码中多次出现的数字，没有明确的含义，它们最好被命名的常量所取代
    // https://zh-hans.eslint.org/docs/latest/rules/no-magic-numbers
    "no-magic-numbers": ["off", {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],

    // 禁止混合使用不同的操作符
    // https://zh-hans.eslint.org/docs/latest/rules/no-mixed-operators
    "no-mixed-operators": ["off", {
      groups: [
        ["+", "-", "*", "/", "%", "**"],
        ["&", "|", "^", "~", "<<", ">>", ">>>"],
        ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
        ["&&", "||"],
        ["in", "instanceof"],
      ],
      allowSamePrecedence: true,
    }],

    // 禁止连续赋值
    // https://zh-hans.eslint.org/docs/latest/rules/no-multi-assign
    "no-multi-assign": ["error", {
      ignoreNonDeclaration: false,
    }],

    // 禁止使用多行字符串
    // 在 JavaScript 中，可以通过在换行前使用斜线来创建多行字符串
    // https://zh-hans.eslint.org/docs/latest/rules/no-multi-str
    "no-multi-str": "error",

    // if 语句和三元表达式中不允许使用否定条件
    // https://zh-hans.eslint.org/docs/latest/rules/no-negated-condition
    "no-negated-condition": "off",

    // 禁用嵌套的三元表达式
    "no-nested-ternary": "off",

    // 禁止使用 new 以避免产生副作用
    // https://zh-hans.eslint.org/docs/latest/rules/no-new
    "no-new": "off",

    // 不允许使用 new Function() 来创建函数
    // https://zh-hans.eslint.org/docs/latest/rules/no-new-func
    "no-new-func": "error",

    // 不允许使用 new Object() 来创建对象
    // https://zh-hans.eslint.org/docs/latest/rules/no-new-object
    "no-new-object": "error",

    // 禁止使用 new String()、new Number() 或 new Boolean() 来创建字符串、数字或布尔值
    // https://zh-hans.eslint.org/docs/latest/rules/no-new-wrappers
    "no-new-wrappers": "error",

    // 禁止在字符串字面量中使用八进制转义序列（\8、\9）
    // https://zh-hans.eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
    "no-nonoctal-decimal-escape": "error",

    // 不允许八进制字头（0 开头的数字）
    // https://zh-hans.eslint.org/docs/latest/rules/no-octal
    "no-octal": "error",

    // 从 ECMAScript 5 规范开始，字符串中的八进制转义序列已被废弃，不应使用。应该使用 Unicode 转义序列。
    // https://zh-hans.eslint.org/docs/latest/rules/no-octal-escape
    "no-octal-escape": "error",

    // 禁止对函数参数再赋值
    // rule: https://zh-hans.eslint.org/docs/latest/rules/no-param-reassign.html
    "no-param-reassign": "off",
    // "no-param-reassign": ["error", {
    //   props: true,
    //   ignorePropertyModificationsFor: [
    //     "acc", // for reduce accumulators
    //     "accumulator", // for reduce accumulators
    //     "e", // for e.returnvalue
    //     "ctx", // for Koa routing
    //     "context", // for Koa routing
    //     "req", // for Express requests
    //     "request", // for Express requests
    //     "res", // for Express responses
    //     "response", // for Express responses
    //     "$scope", // for Angular 1 scopes
    //     "staticContext", // for ReactRouter context
    //   ],
    // }],

    // 禁用一元操作符 ++ 和 --
    // https://zh-hans.eslint.org/docs/latest/rules/no-plusplus
    "no-plusplus": "off",

    // 禁止使用 __proto__ 属性
    // __proto__ 属性在 ECMAScript 3.1 中已经被废弃，不应该在代码中使用。使用 Object.getPrototypeOf 和 Object.setPrototypeOf 代替。
    // https://zh-hans.eslint.org/docs/latest/rules/no-proto
    "no-proto": "error",

    // 禁止重复声明变量
    // https://zh-hans.eslint.org/docs/latest/rules/no-redeclare
    "no-redeclare": ["error", {
      builtinGlobals: true,
    }],

    // 禁止正则表达式中出现多个空格
    "no-regex-spaces": "warn",

    // 禁用特定的全局变量
    "no-restricted-globals": "off",
    // "no-restricted-globals": [
    //   "error",
    //   {
    //     name: "isFinite",
    //     message: "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite",
    //   },
    //   {
    //     name: "isNaN",
    //     message: "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan",
    //   },
    // ].concat(confusingBrowserGlobals),

    // 禁止使用特定对象的特定属性
    // https://zh-hans.eslint.org/docs/latest/rules/no-restricted-properties
    "no-restricted-properties": [
      "error",
      {
        object: "arguments",
        property: "callee",
        message: "arguments.callee is deprecated",
      },
      {
        object: "global",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "self",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "window",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "global",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        object: "self",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        object: "window",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        property: "__defineGetter__",
        message: "Please use Object.defineProperty instead.",
      },
      {
        property: "__defineSetter__",
        message: "Please use Object.defineProperty instead.",
      },
      {
        object: "Math",
        property: "pow",
        message: "Use the exponentiation operator (**) instead.",
      },
    ],

    // 禁用特定的语法
    // https://zh-hans.eslint.org/docs/latest/rules/no-restricted-syntax
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

    // 禁止在 return 语句中使用赋值语句
    // https://zh-hans.eslint.org/docs/latest/rules/no-return-assign
    "no-return-assign": ["error", "always"],

    // 禁止使用 `javascript:` urls.
    // 比如：location.href = "javascript:void(0)";
    // https://zh-hans.eslint.org/docs/latest/rules/no-script-url
    "no-script-url": "error",

    // 禁止使用逗号运算符
    // https://zh-hans.eslint.org/docs/latest/rules/no-sequences
    "no-sequences": "error",

    // 禁止变量声明掩盖在外部作用域中声明的变量
    // https://zh-hans.eslint.org/docs/latest/rules/no-shadow
    "no-shadow": ["error", {
      builtinGlobals: true,
      hoist: "all",
      allow: ["name"],
      ignoreOnInitialization: true,
    }],

    // disallow shadowing of names such as arguments
    "no-shadow-restricted-names": "error",

    // 禁止使用三元运算符
    "no-ternary": "off",

    // restrict what can be thrown as an exception
    // https://zh-hans.eslint.org/docs/latest/rules/no-throw-literal
    "no-throw-literal": "error",

    // 禁止将 undefined 赋值给变量
    "no-undef-init": "error",

    // 禁止使用 undefined
    // https://zh-hans.eslint.org/docs/latest/rules/no-undefined
    "no-undefined": "error",

    // 禁止标识符中有悬空下划线
    // https://zh-hans.eslint.org/docs/latest/rules/no-underscore-dangle
    "no-underscore-dangle": "off",
    // "no-underscore-dangle": ["error", {
    //   allow: [],
    //   allowAfterThis: false,
    //   allowAfterSuper: false,
    //   enforceInMethodNames: true,
    // }],

    // 禁止使用不必要的三元运算符
    // 比如：`a || b` 代替 `a ? a : b`
    // https://zh-hans.eslint.org/docs/latest/rules/no-unneeded-ternary
    "no-unneeded-ternary": ["warn", {
      defaultAssignment: false,
    }],

    // 禁止未使用过的表达式
    // https://zh-hans.eslint.org/docs/latest/rules/no-unused-expressions
    "no-unused-expressions": ["error", {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: false,
      enforceForJSX: true,
      // ignoreDirectives: true,
    }],

    // 禁止未使用的标签
    // https://zh-hans.eslint.org/docs/latest/rules/no-unused-labels
    "no-unused-labels": "warn",

    // 禁止不必要的 .call() .apply()
    // https://zh-hans.eslint.org/docs/latest/rules/no-useless-call
    "no-useless-call": "off",

    // 禁止不必要的 catch 子句
    // https://zh-hans.eslint.org/docs/latest/rules/no-useless-catch
    "no-useless-catch": "error",

    // 禁止不必要的文字或模板文字串联
    // https://zh-hans.eslint.org/docs/latest/rules/no-useless-concat
    "no-useless-concat": "error",

    // 禁止不必要的转义字符
    // https://zh-hans.eslint.org/docs/latest/rules/no-useless-escape
    "no-useless-escape": "error",

    // 禁止冗余的 return 语句
    // https://zh-hans.eslint.org/docs/latest/rules/no-useless-return
    "no-useless-return": "warn",

    // 禁止使用 void 运算符
    // https://zh-hans.eslint.org/docs/latest/rules/no-void
    "no-void": "error",

    // disallow usage of configurable warning terms in comments: e.g. todo
    // https://zh-hans.eslint.org/docs/latest/rules/no-warning-comments
    "no-warning-comments": ["off", {
      terms: ["todo", "fixme", "xxx"],
      location: "start",
    }],

    // 禁止使用 with 语句
    // https://zh-hans.eslint.org/docs/latest/rules/no-with
    "no-with": "error",

    // 强制函数中的变量要么一起声明要么分开声明
    // https://zh-hans.eslint.org/docs/latest/rules/one-var
    "one-var": "off",

    // 要求或禁止在变量声明周围换行
    // https://zh-hans.eslint.org/docs/latest/rules/one-var-declaration-per-line
    "one-var-declaration-per-line": "off",

    // 尽可能要求或允许使用赋值运算符简写
    // https://zh-hans.eslint.org/docs/latest/rules/operator-assignment
    "operator-assignment": ["warn", "always"],

    // 不允许使用 RegExp 构造函数，转而使用常规表达式字面量
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-regex-literals
    "prefer-regex-literals": ["error", {
      disallowRedundantWrapping: true,
    }],

    // 要求对象字面量属性名称用引号括起来
    // https://zh-hans.eslint.org/docs/latest/rules/quote-props.html
    "quote-props": ["warn", "consistent"],

    // 当使用 parseInt() 函数时，要求必须有基数
    // https://zh-hans.eslint.org/docs/latest/rules/radix
    "radix": ["error", "as-needed"],

    // 要求对象键名进行排序
    "sort-keys": ["off", "asc", {
      caseSensitive: false,
      natural: true,
    }],

    // 要求对同一声明块中的变量进行排序
    "sort-vars": "off",

    // 要求或禁止在注释前有空白 (space 或 tab)
    // https://zh-hans.eslint.org/docs/latest/rules/spaced-comment
    "spaced-comment": ["warn", "always", {
      line: {
        exceptions: ["-", "+"],
        markers: ["=", "!", "/"], // space here to support sprockets directives, slash for TS /// comments
      },
      block: {
        exceptions: ["-", "+"],
        markers: ["=", "!", ":", "::"], // space here to support sprockets directives and flow comment types
        balanced: true,
      },
    }],

    // 要求或禁止严格模式指令（"use strict";）
    "strict": ["off", "never"],

    // 要求在包裹作用域的最上方使用 var 定义变量
    // https://zh-hans.eslint.org/docs/latest/rules/vars-on-top
    "vars-on-top": "off",

    // 要求或禁止 “Yoda” 条件
    // 尤达条件之所以被命名为尤达，是因为条件的字面量值在前，而变量在后
    // https://zh-hans.eslint.org/docs/latest/rules/yoda
    "yoda": ["off", "never", {
      exceptRange: true,
    }],

  },
};
