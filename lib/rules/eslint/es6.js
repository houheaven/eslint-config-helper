
// ==========================================================
// ES6
// 这些规则只与 ES6 有关, 即通常所说的 ES2015
// ==========================================================

module.exports = {
  rules: {
    // ==========================================================
    // Possible Errors
    // 这些规则与 JavaScript 代码中可能的错误或逻辑错误有关
    // ==========================================================
    
    // 数组方法的回调函数必须有返回值（map、filter、reduce 等）
    "array-callback-return": ["error", {
      allowImplicit: false,
      checkForEach: true,
    }],

    // 要求在构造函数中调用 super()
    // 派生类的构造者必须调用 super()，非派生类的构造器不得调用 super()，如果不遵守这一点，JavaScript 引擎将引起运行时错误。
    // https://zh-hans.eslint.org/docs/latest/rules/constructor-super
    "constructor-super": "off",

    // 强制 getter 方法有返回值
    "getter-return": ["error", {
      // 不允许用 return 语句隐式返回 undefined
      allowImplicit: false,
    }],

    // 禁止使用异步函数作为 Promise 执行器
    "no-async-promise-executor": "error",

    // 禁止在循环内使用 await
    "no-await-in-loop": "error",

    // 禁止重新分配类成员
    // https://zh-hans.eslint.org/docs/latest/rules/no-class-assign
    "no-class-assign": "error",

    // 禁止对 const 变量重新赋值
    // https://zh-hans.eslint.org/docs/latest/rules/no-const-assign
    "no-const-assign": "error",

    // 在类的构造函数中，使用此规则禁用 return 语句
    // https://zh-hans.eslint.org/docs/latest/rules/no-constructor-return
    "no-constructor-return": "error",

    // 禁止类的成员（方法、属性）名称重复
    // https://zh-hans.eslint.org/docs/latest/rules/no-dupe-class-members
    "no-dupe-class-members": "error",

    // 禁止重复导入模块
    // 要求所有可以合并的单个模块的导入都在于一个 import 语句中
    // https://zh-hans.eslint.org/docs/latest/rules/no-duplicate-imports
    "no-duplicate-imports": "off",

    // 禁止空解构模式
    // https://zh-hans.eslint.org/docs/latest/rules/no-empty-pattern
    "no-empty-pattern": "error",

    // 禁止对导入的模块赋值
    // https://zh-hans.eslint.org/docs/latest/rules/no-import-assign
    "no-import-assign": "error",

    // Disallow new operators with global non-constructor functions
    // 此规则旨在阻止使用 new 操作符意外调用原生 JavaScript 全局函数（Symbol、BigInt）
    // https://zh-hans.eslint.org/docs/latest/rules/no-new-native-nonconstructor
    "no-new-native-nonconstructor": "error",

    // 禁止用 new 运算符意外地调用 Symbol
    // 这是错误语法，因为 Symbol 是一个原始值，不是对象
    // https://zh-hans.eslint.org/docs/latest/rules/no-new-symbol
    "no-new-symbol": "error",

    // 不允许从 Promise 执行者函数返回值
    // https://zh-hans.eslint.org/docs/latest/rules/no-promise-executor-return
    "no-promise-executor-return": "error",

    // 禁止在 setter 中返回值
    // https://zh-hans.eslint.org/docs/latest/rules/no-setter-return
    "no-setter-return": "error",

    // 禁止在字符串中使用模板文字占位符语法
    // https://zh-hans.eslint.org/docs/latest/rules/no-template-curly-in-string
    "no-template-curly-in-string": "error",

    // 禁止在 super() 之前使用 this 或 super
    // https://zh-hans.eslint.org/docs/latest/rules/no-this-before-super
    "no-this-before-super": "error",

    // 禁止不安全的可选链（?.）
    // 可选的链式（?.）表达式可以用 undefined 的返回值进行短路。因此，将一个已评估的选项链表达式作为一个函数、对象、数字等来处理，会导致 TypeError 或意外的结果。
    // 这条规则的目的是检测一些使用可选链的情况，这些情况不能防止运行时错误。
    // https://zh-hans.eslint.org/docs/latest/rules/no-unsafe-optional-chaining
    "no-unsafe-optional-chaining": ["error", {
      // 不允许对可选链式表达式进行算术运算（默认为 false）
      disallowArithmeticOperators: true,
    }],

    // 不允许 Class 存在未使用的私有成员（属性、方法）
    // https://zh-hans.eslint.org/docs/latest/rules/no-unused-private-class-members
    "no-unused-private-class-members": "error",

    // 禁止由于使用await或yield而导致竞争条件的赋值
    // https://zh-hans.eslint.org/docs/latest/rules/require-atomic-updates
    "require-atomic-updates": "error",

    // ==========================================================
    // Suggestions
    // 这些规则提出了做事的替代方法
    // ==========================================================
    
    // 强制对象中的 getter/setter 成对出现
    // https://zh-hans.eslint.org/docs/latest/rules/accessor-pairs
    "accessor-pairs": ["error", {
      setWithoutGet: true,
      getWithoutSet: true,
      enforceForClassMembers: true,
    }],

    // 箭头函数体周围的大括号风格
    // https://zh-hans.eslint.org/docs/latest/rules/arrow-body-style
    "arrow-body-style": ["warn", "as-needed", {
      requireReturnForObjectLiteral: false,
    }],

    // 强制类方法使用 "this"
    // https://zh-hans.eslint.org/docs/latest/rules/class-methods-use-this
    "class-methods-use-this": ["off", {
      exceptMethods: [],
      enforceForClassFields: false,
    }],

    // 强制默认参数放在最后
    // https://zh-hans.eslint.org/docs/latest/rules/default-param-last
    "default-param-last": "error",

    // 在对象文本和类中要求分组访问器对（getter/setter 配对出现）
    // https://zh-hans.eslint.org/docs/latest/rules/grouped-accessor-pairs
    "grouped-accessor-pairs": "error",

    // 每个文件强制 Class 类的最大数量
    // https://zh-hans.eslint.org/docs/latest/rules/max-classes-per-file
    "max-classes-per-file": ["error", 1],

    // 要求构造器函数首字母大写
    // https://zh-hans.eslint.org/docs/latest/rules/new-cap
    "new-cap": ["error", {
      newIsCap: true,
      newIsCapExceptions: [],
      newIsCapExceptionPattern: "^hh[A-Z]",
      capIsNew: false,
      capIsNewExceptions: ["Immutable.Map", "Immutable.Set", "Immutable.List"],
      capIsNewExceptionPattern: "",
      properties: false,
    }],

    // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    // https://zh-hans.eslint.org/docs/latest/rules/no-confusing-arrow
    "no-confusing-arrow": ["warn", {
      allowParens: true,
      onlyOneSimpleParam: false,
    }],

    // 禁止使用 __iterator__ 属性（应该使用 ECMAScript 6 迭代器和生成器来代替）
    // https://zh-hans.eslint.org/docs/latest/rules/no-iterator
    "no-iterator": "error",

    // 禁止在 exports 导出中使用指定的名称
    // https://zh-hans.eslint.org/docs/latest/rules/no-restricted-exports
    "no-restricted-exports": ["error", {
      restrictedNamedExports: [
        "default",      // use `export default` to provide a default export
        "then",         // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
      ],
    }],

    // 禁止 imports 导入指定的模块
    // https://zh-hans.eslint.org/docs/latest/rules/no-restricted-imports
    "no-restricted-imports": ["off", {
      paths: [],
      patterns: [],
    }],

    // 禁止无用的计算属性键
    // https://zh-hans.eslint.org/docs/latest/rules/no-useless-computed-key
    "no-useless-computed-key": ["warn", {
      enforceForClassMembers: true,
    }],

    // 禁止无用的构造函数
    // https://zh-hans.eslint.org/docs/latest/rules/no-useless-constructor
    "no-useless-constructor": "error",

    // 不允许重命名导入、导出以及以相同名称进行的解构赋值
    // https://zh-hans.eslint.org/docs/latest/rules/no-useless-rename
    "no-useless-rename": ["warn", {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],

    // 要求使用 let 或 const 而不是 var
    // https://zh-hans.eslint.org/docs/latest/rules/no-var
    "no-var": "warn",

    // 要求或禁止对象字面量的方法和属性简写语法
    // https://zh-hans.eslint.org/docs/latest/rules/object-shorthand
    "object-shorthand": ["warn", "properties", {
      avoidQuotes: true,
      // ignoreConstructors: false,
      // methodsIgnorePattern: "",
      // avoidExplicitReturnArrows: false,
    }],

    // 要求回调函数使用箭头函数
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-arrow-callback
    "prefer-arrow-callback": ["warn", {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],

    // 初始赋值后从未重新赋值的变量应该使用 const 声明
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-const
    "prefer-const": ["warn", {
      destructuring: "any",
      ignoreReadBeforeAssign: true,
    }],

    // 优先使用数组和对象解构
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-destructuring
    "prefer-destructuring": "off",
    // "prefer-destructuring": [
    //   "warn",
    //   {
    //     VariableDeclarator: {
    //       array: false,
    //       object: true,
    //     },
    //     AssignmentExpression: {
    //       array: true,
    //       object: false,
    //     },
    //   },
    //   {
    //     enforceForRenamedProperties: false,
    //   },
    // ],

    // 不允许调用 Math.pow，建议使用 ** 运算符代替
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-exponentiation-operator
    "prefer-exponentiation-operator": "warn",

    // 正则表达式中建议使用命名捕获组
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-named-capture-group
    "prefer-named-capture-group": "off",

    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-numeric-literals
    "prefer-numeric-literals": "warn",

    // 要求使用 Object.hasOwn() 方法而不是 Object.prototype.hasOwnProperty.call()
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-object-has-own
    "prefer-object-has-own": "warn",

    // 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-object-spread
    "prefer-object-spread": "off",
    // "prefer-object-spread": "warn",

    // 要求使用 Error 对象作为 Promise 拒绝的原因
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-promise-reject-errors
    "prefer-promise-reject-errors": ["error", {
      allowEmptyReject: true,
    }],

    // 要求使用 rest 参数而不是 arguments
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-rest-params
    "prefer-rest-params": "error",

    // 需要展开操作符而不是 .apply()
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-spread
    "prefer-spread": "error",

    // 要求使用模板文字进行字符串连接
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-template
    "prefer-template": "warn",

    // 要求 async 函数中含有 await 表达式
    // https://zh-hans.eslint.org/docs/latest/rules/require-await
    "require-await": "error",

    // 要求在正则表达式中使用 u、v 标志
    // https://zh-hans.eslint.org/docs/latest/rules/require-unicode-regexp
    "require-unicode-regexp": "error",

    // 要求生成器函数包含 yield 表达式
    // https://zh-hans.eslint.org/docs/latest/rules/require-yield
    "require-yield": "error",

    // 在模块内对导入声明进行强制排序
    // https://zh-hans.eslint.org/docs/latest/rules/sort-imports
    "sort-imports": ["off", {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
    }],

    // 要求在创建 Symbol 时要有描述
    // https://zh-hans.eslint.org/docs/latest/rules/symbol-description
    "symbol-description": "error",

    // ==========================================================
    // Layout and Formatting
    // 这些规则关心的是代码的外观而不是执行方式
    // ==========================================================

    // 要求箭头函数的参数使用圆括号
    // https://zh-hans.eslint.org/docs/latest/rules/arrow-parens
    "arrow-parens": ["warn", "as-needed"],

    // 要求箭头函数的箭头之前或之后有空格
    // https://zh-hans.eslint.org/docs/latest/rules/arrow-spacing
    "arrow-spacing": ["warn", {
      before: true,
      after: true,
    }],

    // 强制 generator 函数中 * 号周围使用一致的空格
    // https://zh-hans.eslint.org/docs/latest/rules/generator-star-spacing
    "generator-star-spacing": ["warn", {
      before: false,
      after: true,
    }],

    // 强制隐式返回的箭头函数体的位置
    // https://zh-hans.eslint.org/docs/latest/rules/implicit-arrow-linebreak
    "implicit-arrow-linebreak": ["warn", "beside"],

    // 类成员之间要求或禁止空行
    // https://zh-hans.eslint.org/docs/latest/rules/lines-between-class-members
    "lines-between-class-members": "off",

    // 强制剩余和扩展运算符及其表达式之间有空格
    // https://zh-hans.eslint.org/docs/latest/rules/rest-spread-spacing
    "rest-spread-spacing": ["warn", "never"],

    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    // https://zh-hans.eslint.org/docs/latest/rules/template-curly-spacing
    "template-curly-spacing": ["warn", "never"],

    // 要求或禁止在模板标记和它们的字面量之间有空格
    // https://zh-hans.eslint.org/docs/latest/rules/template-tag-spacing
    "template-tag-spacing": ["warn", "never"],

    // 强制在 yield* 表达式中 * 周围使用空格
    // https://zh-hans.eslint.org/docs/latest/rules/yield-star-spacing
    "yield-star-spacing": ["warn", {
      before: false,
      after: true,
    }],
  },
};
