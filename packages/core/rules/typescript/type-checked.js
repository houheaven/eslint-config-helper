
module.exports = {
  rules: {
    // 要求 await 表达式的操作数是一个 thenable 对象
    // 依赖：projectService
    // https://typescript-eslint.io/rules/await-thenable
    "@typescript-eslint/await-thenable": "error",

    // 要求在命名约定中使用一致的大小写
    // https://typescript-eslint.io/rules/naming-convention
    "@typescript-eslint/naming-convention": [
      "error",
      {
        // 普通变量
        // - 驼峰式（myVariableName）
        "selector": "variable",
        "format": ["strictCamelCase"],
      },
      {
        // 常量（const）
        // - 驼峰式（myConstantName）
        // - 大写+下划线（MY_CONSTANT）
        "selector": "variable",
        "modifiers": ["const"],
        "format": ["strictCamelCase", "UPPER_CASE"],
      },
      {
        // 布尔值
        // - 前缀+帕斯卡命名（isActive、hasError）
        "selector": "variable",
        "types": ["boolean"],
        "format": ["StrictPascalCase"],
        "prefix": ["is", "has"],
      },
      // {
      //   // 解构赋值变量
      //   "selector": "variable",
      //   "modifiers": ["destructured"],
      //   "format": null,
      // },
      {
        // 属性
        // - 驼峰式（myPropertyName）
        // - 严格帕斯卡命名（Vue 组件：MyComponent）
        "selector": "property",
        "format": ["strictCamelCase", "StrictPascalCase"],
      },
      {
        // 函数
        // - 驼峰式（getMyProperty、setMyProperty）
        // - 严格帕斯卡命名（JSX 组件：React）
        "selector": "function",
        "format": ["strictCamelCase", "StrictPascalCase"],
        // "custom": {
        //   "regex": "^(get|set|is)[A-Z]",
        //   "match": true,
        // },
      },
      {
        // 函数参数
        // - 驼峰式（myParameterName）
        "selector": "parameter",
        "format": ["camelCase"],
        "leadingUnderscore": "allow",
      },
      {
        // 类名
        // 允许 hh + StrictPascalCase (如 hhMyClass)
        "selector": "class",
        "format": ["camelCase"],
        "filter": {
          "regex": "^hh[A-Z]",
          "match": true,
        },
      },
      {
        // 类名
        // 默认强制使用 StrictPascalCase
        "selector": "class",
        "format": ["StrictPascalCase"],
      },
      // {
      //   // 类内部私有变量
      //   // 私有变量必须以下划线开头（_myPrivateVar）
      //   "selector": "classProperty",
      //   "modifiers": ["private"],
      //   "format": ["strictCamelCase"],
      //   "leadingUnderscore": "require",
      // },
      {
        // 类属性、类方法
        // - 驼峰式（myPropertyName）
        "selector": ["classProperty", "classMethod"],
        "format": ["strictCamelCase"],
        "leadingUnderscore": "forbid",
      },
      {
        // 接口
        // 强制接口名使用帕斯卡命名（MyInterface）
        "selector": "interface",
        "format": ["StrictPascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": false,
        },
      },
      {
        // 枚举、枚举成员
        // 强制枚举成员名使用帕斯卡命名（MyEnumMember）
        "selector": ["enum", "enumMember"],
        "format": ["StrictPascalCase"],
      },
    ],

    // 禁止使用数组删除操作符
    // https://typescript-eslint.io/rules/no-array-delete
    "@typescript-eslint/no-array-delete": "error",

    // 要求 .toString() 且 .toLocaleString() 仅在字符串化时提供有用信息的对象上调用
    // https://typescript-eslint.io/rules/no-base-to-string
    "@typescript-eslint/no-base-to-string": ["error", {
      checkUnknown: false,
      ignoredTypeNames: ["Error", "RegExp", "URL", "URLSearchParams"],
    }],

    // 禁止使用已弃用的标记 @deprecated
    // https://typescript-eslint.io/rules/no-deprecated
    "@typescript-eslint/no-deprecated": "error",

    // 禁止在没有 await 表达式的情况下使用 async 函数
    // https://typescript-eslint.io/rules/no-floating-promises
    "@typescript-eslint/no-floating-promises": "error",

    // 禁止使用 for-in 循环遍历数组
    // https://typescript-eslint.io/rules/no-for-in-array
    "@typescript-eslint/no-for-in-array": "error",

    // 禁止滥用 Promise
    // https://typescript-eslint.io/rules/no-misused-promises
    "@typescript-eslint/no-misused-promises": ["error", {
      checksConditionals: true,
      checksSpreads: true,
      checksVoidReturn: true,
    }],

    // 禁止滥用扩展运算符
    // https://typescript-eslint.io/rules/no-misused-spread
    "@typescript-eslint/no-misused-spread": "error",

    // 禁止在枚举中混合使用数字和字符串成员
    // https://typescript-eslint.io/rules/no-mixed-enums
    "@typescript-eslint/no-mixed-enums": "error",

    // 禁止对不执行任何操作或覆盖类型信息的联合和交集成员进行限制
    // https://typescript-eslint.io/rules/no-redundant-type-constituents
    "@typescript-eslint/no-redundant-type-constituents": "error",

    // 禁止不必要的条件表达式（类型始终为真值或假值的条件语句）
    // https://typescript-eslint.io/rules/no-unnecessary-condition
    "@typescript-eslint/no-unnecessary-condition": "error",

    // 禁止不必要的类型转换
    // https://typescript-eslint.io/rules/no-unnecessary-type-conversion
    "@typescript-eslint/no-unnecessary-type-conversion": "error",

    // 禁止不必要的类型参数
    // https://typescript-eslint.io/rules/no-unnecessary-type-parameters
    "@typescript-eslint/no-unnecessary-type-parameters": "error",

    // 禁止使用不安全的参数
    // https://typescript-eslint.io/rules/no-unsafe-argument
    "@typescript-eslint/no-unsafe-argument": "error",

    // 禁止使用不安全的赋值
    // https://typescript-eslint.io/rules/no-unsafe-assignment
    "@typescript-eslint/no-unsafe-assignment": "error",

    // 禁止使用不安全的调用（调用可能返回 any 类型的值）
    // https://typescript-eslint.io/rules/no-unsafe-call
    "@typescript-eslint/no-unsafe-call": "error",

    // 禁止使用不安全的枚举比较
    // https://typescript-eslint.io/rules/no-unsafe-enum-comparison
    "@typescript-eslint/no-unsafe-enum-comparison": "error",

    // 禁止使用不安全的成员访问
    // https://typescript-eslint.io/rules/no-unsafe-member-access
    "@typescript-eslint/no-unsafe-member-access": ["error", {
      allowOptionalChaining: true,
    }],

    // 禁止使用不安全的返回值
    // https://typescript-eslint.io/rules/no-unsafe-return
    "@typescript-eslint/no-unsafe-return": "error",

    // 禁止使用不安全的类型断言
    // https://typescript-eslint.io/rules/no-unsafe-type-assertion
    "@typescript-eslint/no-unsafe-type-assertion": "error",

    // 禁止使用不安全的一元减号
    // https://typescript-eslint.io/rules/no-unsafe-unary-minus
    "@typescript-eslint/no-unsafe-unary-minus": "error",

    // 要求使用 Array.find() 而不是 Array.filter()[0]
    // https://typescript-eslint.io/rules/prefer-find
    "@typescript-eslint/prefer-find": "error",

    // 要求使用空值合并运算符而不是逻辑或运算符
    // https://typescript-eslint.io/rules/prefer-nullish-coalescing
    "@typescript-eslint/prefer-nullish-coalescing": ["error", {
      ignoreTernaryTests: false,              // 三元表达式
      ignoreIfStatements: false,              // if 语句
      ignoreConditionalTests: true,           // 条件表达式
      ignoreMixedLogicalExpressions: false,   // 混合逻辑表达式
      ignoreBooleanCoercion: false,           // 布尔值强制转换
    }],

    // 要求将参数类型设为只读
    // https://typescript-eslint.io/rules/prefer-readonly-parameter-types
    "@typescript-eslint/prefer-readonly-parameter-types": "off",

    // 强制 get() 类型应可赋值给其等效 set() 类型
    // https://typescript-eslint.io/rules/related-getter-setter-pairs
    "@typescript-eslint/related-getter-setter-pairs": "error",

    // 要求对数组进行排序时提供比较函数
    // https://typescript-eslint.io/rules/require-array-sort-compare
    "@typescript-eslint/require-array-sort-compare": "error",

    // 要求加法运算的两个操作数必须是相同类型，并且为bigint, number, 或string
    // https://typescript-eslint.io/rules/restrict-plus-operands
    "@typescript-eslint/restrict-plus-operands": "error",

    // 要求模板字符串表达式的类型为字符串
    // https://typescript-eslint.io/rules/restrict-template-expressions
    "@typescript-eslint/restrict-template-expressions": "error",

    // 在布尔表达式中禁止某些类型
    // https://typescript-eslint.io/rules/strict-boolean-expressions
    "@typescript-eslint/strict-boolean-expressions": ["error", {
      allowAny: false,
      allowString: true,
      allowNumber: true,
      allowNullableObject: true,
      allowNullableBoolean: false,
      allowNullableEnum: false,
      allowNullableNumber: false,
      allowNullableString: true,
    }],

    // 要求 switch 语句包含默认分支
    // https://typescript-eslint.io/rules/switch-exhaustiveness-check
    "@typescript-eslint/switch-exhaustiveness-check": "error",

    // 要求方法绑定到类实例
    // https://typescript-eslint.io/rules/unbound-method
    "@typescript-eslint/unbound-method": "error",

    // 要求在 catch 子句中使用 unknown 类型而不是 any 类型
    // https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable
    "@typescript-eslint/use-unknown-in-catch-callback-variable": "error",
  },
};
