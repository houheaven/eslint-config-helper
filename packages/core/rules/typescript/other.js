
module.exports = {
  rules: {
    // 要求函数重载签名必须连续排列
    // https://typescript-eslint.io/rules/adjacent-overload-signatures
    "@typescript-eslint/adjacent-overload-signatures": "error",

    // 要求函数返回类型
    // https://typescript-eslint.io/rules/explicit-function-return-type
    "@typescript-eslint/explicit-function-return-type": ["error", {
      allowExpressions: false,
      allowTypedFunctionExpressions: true,
      allowHigherOrderFunctions: true,
      allowDirectConstAssertionInArrowFunctions: true,
      allowConciseArrowFunctionExpressionsStartingWithVoid: false,
      allowFunctionsWithoutTypeParameters: false,
      allowedNames: [],
      allowIIFEs: false,
    }],

    // 要求模块边界的类型
    // https://typescript-eslint.io/rules/explicit-module-boundary-types
    "@typescript-eslint/explicit-module-boundary-types": ["error", {
      allowArgumentsExplicitlyTypedAsAny: false,
      allowDirectConstAssertionInArrowFunctions: true,
      allowedNames: [],
      allowHigherOrderFunctions: true,
      allowTypedFunctionExpressions: true,
      allowOverloadFunctions: false,
    }],

    // 要求成员排序
    // https://typescript-eslint.io/rules/member-ordering
    "@typescript-eslint/member-ordering": "off",

    // 禁止重复的枚举值
    // https://typescript-eslint.io/rules/no-duplicate-enum-values
    "@typescript-eslint/no-duplicate-enum-values": "error",

    // 禁止多余的类
    // https://typescript-eslint.io/rules/no-extraneous-class
    "@typescript-eslint/no-extraneous-class": ["error", {
      allowConstructorOnly: false,
      allowEmpty: false,
      allowStaticOnly: false,
      allowWithDecorator: false,
    }],

    // 禁止无效的 void 类型
    // https://typescript-eslint.io/rules/no-invalid-void-type
    "@typescript-eslint/no-invalid-void-type": ["error", {
      allowInGenericTypeArguments: true,
      allowAsThisParameter: false,
    }],

    // 禁止使用 new 操作符调用无参数构造函数
    // https://typescript-eslint.io/rules/no-misused-new
    "@typescript-eslint/no-misused-new": "error",

    // 禁止使用 namespace 关键字
    // https://typescript-eslint.io/rules/no-namespace
    "@typescript-eslint/no-namespace": ["error", {
      allowDeclarations: true,
      allowDefinitionFiles: true,
    }],

    // 禁止使用 require 导入，推荐使用 import 语句
    // https://typescript-eslint.io/rules/no-require-imports
    "@typescript-eslint/no-require-imports": ["error", {
      allow: [],
      allowAsImport: false,
    }],

    // 禁止使用 this 别名
    // https://typescript-eslint.io/rules/no-this-alias
    "@typescript-eslint/no-this-alias": ["error", {
      allowDestructuring: true,
      allowedNames: [],
    }],

    // 禁止不必要的参数属性赋值
    // https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment
    "@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",

    // 禁止不安全的声明合并
    // https://typescript-eslint.io/rules/no-unsafe-declaration-merging
    "@typescript-eslint/no-unsafe-declaration-merging": "error",

    // 禁止使用不安全的函数类型
    // https://typescript-eslint.io/rules/no-unsafe-function-type
    "@typescript-eslint/no-unsafe-function-type": "error",

    // 参数属性
    // https://typescript-eslint.io/rules/parameter-properties
    "@typescript-eslint/parameter-properties": ["error", {
      allow: [],
      prefer: "class-property",
    }],

    // 要求使用 for-of 循环
    // https://typescript-eslint.io/rules/prefer-for-of
    "@typescript-eslint/prefer-for-of": "error",

    // 要求所有枚举成员均为字面量值
    // https://typescript-eslint.io/rules/prefer-literal-enum-member
    "@typescript-eslint/prefer-literal-enum-member": ["error", {
      allowBitwiseExpressions: false,
    }],

    // 三斜线引用
    // https://typescript-eslint.io/rules/triple-slash-reference
    "@typescript-eslint/triple-slash-reference": ["error", {
      lib: "always",
      path: "never",
      types: "prefer-import",
    }],

    // 要求使用统一的函数签名
    // https://typescript-eslint.io/rules/unified-signatures
    "@typescript-eslint/unified-signatures": ["error", {
      ignoreDifferentlyNamedParameters: false,
      ignoreOverloadsWithDifferentJSDoc: false,
    }],
  },
};
