
module.exports = {
  rules: {
    // 强制类方法使用 "this"
    // https://typescript-eslint.io/rules/class-methods-use-this
    // 注意：必须禁用基础规则，否则扩展规则会报告错误
    "class-methods-use-this": "off",
    "@typescript-eslint/class-methods-use-this": ["off", {
      exceptMethods: [],
      enforceForClassFields: false,
      ignoreOverrideMethods: false,
      ignoreClassesThatImplementAnInterface: false,
    }],

    // 要求返回语句要么始终指定值，要么从不指定值
    // https://typescript-eslint.io/rules/consistent-return
    "consistent-return": "off",
    "@typescript-eslint/consistent-return": ["error", {
      treatUndefinedAsUnspecified: true,
    }],

    // 强制默认参数放在最后
    // https://typescript-eslint.io/rules/default-param-last
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error",

    // 尽可能的使用点符号
    // 依赖：parserServices
    // https://typescript-eslint.io/rules/dot-notation
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": ["warn", {
      allowKeywords: true,
      allowPattern: "",
      // TS 拓展项
      allowPrivateClassPropertyAccess: false,
      allowProtectedClassPropertyAccess: false,
      allowIndexSignaturePropertyAccess: false,
    }],

    // 在变量声明时是否要初始化
    // https://typescript-eslint.io/rules/init-declarations
    "init-declarations": "off",
    "@typescript-eslint/init-declarations": ["error", "always"],

    // 强制规定了函数定义中参数的最大数量
    // https://typescript-eslint.io/rules/max-params
    "max-params": "off",
    "@typescript-eslint/max-params": "off",

    // 不允许使用数组构造函数
    // https://typescript-eslint.io/rules/no-array-constructor
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "warn",

    // 禁止类的成员（方法、属性）名称重复
    // https://typescript-eslint.io/rules/no-dupe-class-members
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error",

    // 禁止空函数
    // https://typescript-eslint.io/rules/no-empty-function
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": ["error", {
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
        // TS 拓展项
        // "private-constructors",       // 私有构造函数
        // "protected-constructors",     // 受保护的构造函数
        // "decoratedFunctions",         // 装饰器函数
        // "overrideMethods",            // 重写方法
      ],
    }],

    // 禁止使用 eval() 等方法
    // 依赖：parserServices
    // https://typescript-eslint.io/rules/no-implied-eval
    "no-implied-eval": "off",
    "@typescript-eslint/no-implied-eval": "error",

    // 禁止在全局作用域中使用 this
    // https://typescript-eslint.io/rules/no-invalid-this
    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": "error",

    // 不允许在循环语句中包含不安全引用的函数声明
    // https://typescript-eslint.io/rules/no-loop-func
    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": "error",

    // 禁止使用“魔数”
    // “魔数“是在代码中多次出现的数字，没有明确的含义，它们最好被命名的常量所取代
    // https://typescript-eslint.io/rules/no-magic-numbers
    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": "off",

    // 禁止重复声明变量
    // https://typescript-eslint.io/rules/no-redeclare
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": ["error", {
      builtinGlobals: true,
      // TS 拓展项
      ignoreDeclarationMerge: true,
    }],

    // 禁止 imports 导入指定的模块
    // https://typescript-eslint.io/rules/no-restricted-imports
    "no-restricted-imports": "off",
    "@typescript-eslint/no-restricted-imports": "off",

    // 禁止变量声明掩盖在外部作用域中声明的变量
    // https://typescript-eslint.io/rules/no-shadow
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error", {
      builtinGlobals: true,
      hoist: "all",
      allow: ["name"],
      ignoreOnInitialization: true,
      // TS 拓展项
      ignoreTypeValueShadow: true,
      ignoreFunctionTypeParameterNameValueShadow: true,
    }],

    // 禁止未使用的表达式
    // https://typescript-eslint.io/rules/no-unused-expressions
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": ["error", {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: false,
      enforceForJSX: true,
      // ignoreDirectives: true,
    }],

    // 不允许 Class 存在未使用的私有成员（属性、方法）
    // https://typescript-eslint.io/rules/no-unused-private-class-members
    "no-unused-private-class-members": "off",
    "@typescript-eslint/no-unused-private-class-members": "error",

    // 不允许未使用的变量
    // https://typescript-eslint.io/rules/no-unused-vars
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", {
      vars: "all",
      varsIgnorePattern: "",
      args: "after-used",                                                 // 参数相关
      argsIgnorePattern: "^_|^(evt|err)\\d*$|^(resolve|reject)$",         // 指定了不检查使用情况的例外情况：参数的名称与 regexp 模式相匹配。例如，名称以下划线开头的变量。
      caughtErrors: "none",
      caughtErrorsIgnorePattern: "^_|^(e|err|error)\\d*$",                // try-catch 代码块
      destructuredArrayIgnorePattern: "",                                 // 数组解构相关
      ignoreRestSiblings: true,
    }],

    // 禁止定义前使用
    // https://typescript-eslint.io/rules/no-use-before-define
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error", {
      functions: false,
      classes: true,
      variables: true,
      allowNamedExports: false,
      // TS 拓展项
      enums: true,
      typedefs: true,
      ignoreTypeReferences: true,
    }],

    // 禁止无用的构造函数
    // https://typescript-eslint.io/rules/no-useless-constructor
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",

    // 禁止抛出原始值
    // https://typescript-eslint.io/rules/only-throw-error
    "no-throw-literal": "off",
    "@typescript-eslint/only-throw-error": "error",

    // 优先使用数组和对象解构
    // https://typescript-eslint.io/rules/prefer-destructuring
    "prefer-destructuring": "off",
    "@typescript-eslint/prefer-destructuring": "off",

    // 要求使用 Error 对象作为 Promise 拒绝的原因
    // https://typescript-eslint.io/rules/prefer-promise-reject-errors
    "prefer-promise-reject-errors": "off",
    "@typescript-eslint/prefer-promise-reject-errors": ["error", {
      allowEmptyReject: true,
      // TS 拓展项
      allowThrowingAny: false,
      allowThrowingUnknown: false,
    }],

    // 要求 async 函数中含有 await 表达式
    // 依赖：parserServices
    // https://typescript-eslint.io/rules/require-await
    "require-await": "off",
    "@typescript-eslint/require-await": "error",
  },
};
