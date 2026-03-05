
module.exports = {
  rules: {
    // 禁止空接口
    // https://typescript-eslint.io/rules/no-empty-interface
    "@typescript-eslint/no-empty-interface": ["warn", {
      allowSingleExtends: false,
    }],

    // 禁止失去精度的文字数字
    // https://typescript-eslint.io/rules/no-loss-of-precision
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": "error",

    // 禁止使用类型别名
    // https://typescript-eslint.io/rules/no-type-alias
    "@typescript-eslint/no-type-alias": ["error", {
      allowAliases: "in-unions",
      allowCallbacks: "never",
      allowConditionalTypes: "always",
      allowConstructors: "always",
      allowLiterals: "always",
      allowMappedTypes: "always",
      allowTupleTypes: "always",
      allowGenerics: "always",
    }],

    // 要求在某些地方添加类型注解
    // https://typescript-eslint.io/rules/typedef
    "@typescript-eslint/typedef": ["error", {
      arrayDestructuring: false,
      arrowParameter: false,
      memberVariableDeclaration: false,
      objectDestructuring: false,
      parameter: false,
      propertyDeclaration: false,
      variableDeclaration: false,
      variableDeclarationIgnoreFunction: false,
    }],
  },
};
