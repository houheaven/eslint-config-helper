
module.exports = {
  rules: {
    // 规范数组的类型注释方式 T[] 或 Array<T>
    // https://typescript-eslint.io/rules/array-type
    "@typescript-eslint/array-type": ["warn", {
      default: "array",
      readonly: "array",
    }],

    // 禁止使用 tslint 注释
    // https://typescript-eslint.io/rules/ban-tslint-comment
    "@typescript-eslint/ban-tslint-comment": "warn",

    // 一致的泛型构造函数类型
    // https://typescript-eslint.io/rules/consistent-generic-constructors
    "@typescript-eslint/consistent-generic-constructors": ["warn", "type-annotation"],

    // 一致的索引对象类型
    // https://typescript-eslint.io/rules/consistent-indexed-object-style
    "@typescript-eslint/consistent-indexed-object-style": ["warn", "record"],

    // 一致的类型断言风格
    // https://typescript-eslint.io/rules/consistent-type-assertions
    "@typescript-eslint/consistent-type-assertions": ["error", {
      // assertionStyle: "never",
      assertionStyle: "as",
      objectLiteralTypeAssertions: "allow-as-parameter",
      arrayLiteralTypeAssertions: "allow-as-parameter",
    }],

    // 一致的类型定义风格
    // https://typescript-eslint.io/rules/consistent-type-definitions
    "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],

    // 一致的类型导出风格
    // 依赖：parserServices
    // https://typescript-eslint.io/rules/consistent-type-exports
    "@typescript-eslint/consistent-type-exports": ["warn", {
      fixMixedExportsWithInlineTypeSpecifier: false,
    }],

    // 一致的类型导入风格
    // https://typescript-eslint.io/rules/consistent-type-imports
    "@typescript-eslint/consistent-type-imports": ["warn", {
      prefer: "type-imports",
      fixStyle: "separate-type-imports",
      disallowTypeAnnotations: true,
    }],

    // 一致的成员可访问性
    // https://typescript-eslint.io/rules/explicit-member-accessibility
    "@typescript-eslint/explicit-member-accessibility": "off",

    // 一致的方法签名风格
    // https://typescript-eslint.io/rules/method-signature-style
    "@typescript-eslint/method-signature-style": ["warn", "property"],

    // 禁止令人困惑的 void 表达式
    // https://typescript-eslint.io/rules/no-confusing-void-expression
    "@typescript-eslint/no-confusing-void-expression": ["warn", {
      ignoreArrowShorthand: false,
      ignoreVoidOperator: false,
      ignoreVoidReturningFunctions: false,
    }],

    // 禁止重复的类型组成部分
    // 依赖：parserServices
    // https://typescript-eslint.io/rules/no-duplicate-type-constituents
    "@typescript-eslint/no-duplicate-type-constituents": ["warn", {
      ignoreIntersections: false,
      ignoreUnions: false,
    }],

    // 禁止动态删除属性
    // https://typescript-eslint.io/rules/no-dynamic-delete
    "@typescript-eslint/no-dynamic-delete": "warn",

    // 禁止显式 any 类型
    // https://typescript-eslint.io/rules/no-explicit-any
    "@typescript-eslint/no-explicit-any": ["error", {
      fixToUnknown: false,
      ignoreRestArgs: false,
    }],

    // 禁止额外的非空断言
    // https://typescript-eslint.io/rules/no-extra-non-null-assertion
    "@typescript-eslint/no-extra-non-null-assertion": "warn",

    // 禁止导入类型副作用
    // https://typescript-eslint.io/rules/no-import-type-side-effects
    "@typescript-eslint/no-import-type-side-effects": "warn",

    // 禁止可推断的类型
    // https://typescript-eslint.io/rules/no-inferrable-types
    "@typescript-eslint/no-inferrable-types": ["warn", {
      ignoreParameters: false,
      ignoreProperties: false,
    }],

    // 禁止无意义的 void 表达式
    // 依赖：parserServices
    // https://typescript-eslint.io/rules/no-meaningless-void-operator
    "@typescript-eslint/no-meaningless-void-operator": ["warn", {
      checkNever: false,
    }],

    // 禁止使用某些类型
    // https://typescript-eslint.io/rules/no-restricted-types
    "@typescript-eslint/no-restricted-types": "off",

    // 禁止不必要的布尔值字面量比较
    // https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["warn", {
      allowComparingNullableBooleansToTrue: true,
      allowComparingNullableBooleansToFalse: true,
    }],

    // 禁止不必要的类型限定符
    // https://typescript-eslint.io/rules/no-unnecessary-qualifier
    "@typescript-eslint/no-unnecessary-qualifier": "warn",

    // 禁止不必要的模板表达式
    // https://typescript-eslint.io/rules/no-unnecessary-template-expression
    "@typescript-eslint/no-unnecessary-template-expression": "warn",

    // 禁止不必要的类型参数
    // https://typescript-eslint.io/rules/no-unnecessary-type-arguments
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",

    // 禁止不必要的类型断言
    // https://typescript-eslint.io/rules/no-unnecessary-type-assertion
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",

    // 禁止无意义的空导出
    // https://typescript-eslint.io/rules/no-useless-empty-export
    "@typescript-eslint/no-useless-empty-export": "warn",

    // 禁止包装对象类型
    // https://typescript-eslint.io/rules/no-wrapper-object-types
    "@typescript-eslint/no-wrapper-object-types": "warn",

    // 非空类型断言风格
    // https://typescript-eslint.io/rules/non-nullable-type-assertion-style
    "@typescript-eslint/non-nullable-type-assertion-style": "warn",

    // 推荐使用 as const 断言
    // https://typescript-eslint.io/rules/prefer-as-const
    "@typescript-eslint/prefer-as-const": "warn",

    // 推荐使用函数类型而不是接口
    // https://typescript-eslint.io/rules/prefer-function-type
    "@typescript-eslint/prefer-function-type": "warn",

    // 推荐使用 includes 而不是 indexOf
    // https://typescript-eslint.io/rules/prefer-includes
    "@typescript-eslint/prefer-includes": "warn",

    // 推荐使用 namespace 而不是 module
    // https://typescript-eslint.io/rules/prefer-namespace-keyword
    "@typescript-eslint/prefer-namespace-keyword": "warn",

    // 推荐使用可选链而不是短路表达式
    // https://typescript-eslint.io/rules/prefer-optional-chain
    "@typescript-eslint/prefer-optional-chain": ["warn", {
      allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing: false,
      checkAny: true,
      checkBigInt: true,
      checkBoolean: true,
      checkNumber: true,
      checkString: true,
      checkUnknown: true,
      requireNullish: false,
    }],

    // 推荐使用只读类型
    // https://typescript-eslint.io/rules/prefer-readonly
    "@typescript-eslint/prefer-readonly": ["off", {
      onlyInlineLambdas: false,
    }],

    // 推荐使用 reduce 类型参数
    // https://typescript-eslint.io/rules/prefer-reduce-type-parameter
    "@typescript-eslint/prefer-reduce-type-parameter": "warn",

    // 推荐使用 RegExp.exec 而不是 String.match
    // https://typescript-eslint.io/rules/prefer-regexp-exec
    "@typescript-eslint/prefer-regexp-exec": "warn",

    // 推荐使用返回 this 类型
    // https://typescript-eslint.io/rules/prefer-return-this-type
    "@typescript-eslint/prefer-return-this-type": "off",

    // 推荐使用 startsWith 和 endsWith 方法
    // https://typescript-eslint.io/rules/prefer-string-starts-ends-with
    "@typescript-eslint/prefer-string-starts-ends-with": ["warn", {
      allowSingleElementEquality: "never",
    }],

    // 推荐使用异步函数
    // https://typescript-eslint.io/rules/promise-function-async
    "@typescript-eslint/promise-function-async": ["warn", {
      allowAny: true,
      allowedPromiseNames: [],
      checkArrowFunctions: true,
      checkFunctionDeclarations: true,
      checkFunctionExpressions: true,
      checkMethodDeclarations: true,
    }],

    // 推荐返回 await
    // https://typescript-eslint.io/rules/return-await
    "@typescript-eslint/return-await": ["off", "in-try-catch"],
  },
};
