
module.exports = {
  rules: {
    // 禁止使用 @ts-ignore、@ts-nocheck、@ts-check、@ts-expect-error‌ 等注释
    // @ts-nocheck‌ ‌- 禁用整个文件的类型检查
    // @ts-check‌ ‌- 启用整个文件的类型检查（默认开启）
    // @ts-ignore‌ ‌- 忽略下一行代码的类型检查错误
    // @ts-expect-error‌ ‌- 预期下一行代码会报错，但编译通过，用于测试类型错误边界（如类型断言失败）
    // https://typescript-eslint.io/rules/ban-ts-comment
    "@typescript-eslint/ban-ts-comment": ["error", {
      "ts-check": true,
      "ts-nocheck": false,
      "ts-ignore": false,
      "ts-expect-error": true,
    }],

    // 要求类字面量属性的样式
    // https://typescript-eslint.io/rules/class-literal-property-style
    "@typescript-eslint/class-literal-property-style": ["warn", "fields"],

    // 禁止使用令人混淆的非空断言
    // https://typescript-eslint.io/rules/no-confusing-non-null-assertion
    "@typescript-eslint/no-confusing-non-null-assertion": "error",

    // 禁止使用空对象类型
    // https://typescript-eslint.io/rules/no-empty-object-type
    "@typescript-eslint/no-empty-object-type": ["error", {
      "allowInterfaces": "never",
      "allowObjectTypes": "never",
      "allowWithName": "",
    }],

    // 禁止使用非空断言的空值合并运算符
    // https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",

    // 禁止使用非空断言的可选链
    // https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",

    // 禁止使用非空断言
    // https://typescript-eslint.io/rules/no-non-null-assertion
    "@typescript-eslint/no-non-null-assertion": "error",

    // 禁止使用不必要的类型约束
    // https://typescript-eslint.io/rules/no-unnecessary-type-constraint
    "@typescript-eslint/no-unnecessary-type-constraint": "error",

    // 要求枚举成员初始化器
    // https://typescript-eslint.io/rules/prefer-enum-initializers
    "@typescript-eslint/prefer-enum-initializers": "error",
  },
};
