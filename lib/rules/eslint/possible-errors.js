
// ==========================================================
// Possible Errors
// 这些规则与 JavaScript 代码中可能的错误或逻辑错误有关
// ==========================================================

module.exports = {
  rules: {
    // Enforce “for” loop update clause moving the counter in the right direction
    // https://eslint.org/docs/rules/for-direction
    // "for-direction": "error",

    // Enforces that a return statement is present in property getters
    // https://eslint.org/docs/rules/getter-return
    // "getter-return": ["error", { allowImplicit: true }],

    // disallow using an async function as a Promise executor
    // https://eslint.org/docs/rules/no-async-promise-executor
    // "no-async-promise-executor": "error",

    // Disallow await inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    // "no-await-in-loop": "error",

    // Disallow comparisons to negative zero
    // https://eslint.org/docs/rules/no-compare-neg-zero
    // "no-compare-neg-zero": "error",

    // disallow assignment in conditional expressions
    // "no-cond-assign": ["error", "always"],

    // 禁用 console
    "no-console": "off",

    // 禁止条件中的常量表达式
    "no-constant-condition": "warn",

    // disallow control characters in regular expressions
    // "no-control-regex": "error",

    // 禁用 debugger
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    // disallow duplicate arguments in functions
    // "no-dupe-args": "error",

    // Disallow duplicate conditions in if-else-if chains
    // https://eslint.org/docs/rules/no-dupe-else-if
    // "no-dupe-else-if": "error",

    // disallow duplicate keys when creating object literals
    // "no-dupe-keys": "error",

    // disallow a duplicate case label.
    // "no-duplicate-case": "error",

    // disallow empty statements
    // "no-empty": "error",

    // disallow the use of empty character classes in regular expressions
    // "no-empty-character-class": "error",

    // disallow assigning to the exception in a catch block
    // "no-ex-assign": "error",

    // 禁止不必要的布尔转换
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    "no-extra-boolean-cast": "off",

    // 禁止冗余的括号
    // https://eslint.org/docs/rules/no-extra-parens
    "no-extra-parens": ["off", "all", {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: "all", // delegate to eslint-plugin-react
      enforceForArrowConditionals: false,
    }],

    // 禁止不必要的分号
    "no-extra-semi": "warn",

    // disallow overwriting functions written as function declarations
    // "no-func-assign": "error",

    // https://eslint.org/docs/rules/no-import-assign
    // "no-import-assign": "error",

    // disallow function or variable declarations in nested blocks
    // "no-inner-declarations": "error",

    // disallow invalid regular expression strings in the RegExp constructor
    // "no-invalid-regexp": "error",

    // 禁止不规则的空格
    "no-irregular-whitespace": ["error", {
      "skipStrings": true,
      "skipComments": false,
      "skipRegExps": false,
      "skipTemplates": false,
    }],

    // 禁止失去精度的文字数字
    // https://eslint.org/docs/rules/no-loss-of-precision
    "no-loss-of-precision": "error",

    // Disallow characters which are made with multiple code points in character class syntax
    // https://eslint.org/docs/rules/no-misleading-character-class
    // "no-misleading-character-class": "error",

    // disallow the use of object properties of the global object (Math and JSON) as functions
    // "no-obj-calls": "error",

    // Disallow returning values from Promise executor functions
    // https://eslint.org/docs/rules/no-promise-executor-return
    // "no-promise-executor-return": "error",

    // disallow use of Object.prototypes builtins directly
    // https://eslint.org/docs/rules/no-prototype-builtins
    // "no-prototype-builtins": "error",

    // disallow multiple spaces in a regular expression literal
    // "no-regex-spaces": "error",

    // Disallow returning values from setters
    // https://eslint.org/docs/rules/no-setter-return
    // "no-setter-return": "error",

    // 禁止稀疏数组
    "no-sparse-arrays": "error",

    // 禁止在字符串中使用模板文字占位符语法
    // https://eslint.org/docs/rules/no-template-curly-in-string
    "no-template-curly-in-string": "error",

    // 禁止出现令人困惑的多行表达式
    // https://eslint.org/docs/rules/no-unexpected-multiline
    "no-unexpected-multiline": "error",

    // disallow unreachable statements after a return, throw, continue, or break statement
    // "no-unreachable": "error",

    // Disallow loops with a body that allows only one iteration
    // https://eslint.org/docs/rules/no-unreachable-loop
    // "no-unreachable-loop": ["error", {
    //   ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
    // }],

    // disallow return/throw/break/continue inside finally blocks
    // https://eslint.org/docs/rules/no-unsafe-finally
    // "no-unsafe-finally": "error",

    // disallow negating the left operand of relational operators
    // https://eslint.org/docs/rules/no-unsafe-negation
    // "no-unsafe-negation": "error",

    // disallow use of optional chaining in contexts where the undefined value is not allowed
    // https://eslint.org/docs/rules/no-unsafe-optional-chaining
    // "no-unsafe-optional-chaining": ["error", { disallowArithmeticOperators: true }],

    // Disallow Unused Private Class Members
    // https://eslint.org/docs/rules/no-unused-private-class-members
    // TODO: enable once eslint 7 is dropped (which is semver-major)
    // "no-unused-private-class-members": "off",

    // Disallow useless backreferences in regular expressions
    // https://eslint.org/docs/rules/no-useless-backreference
    // "no-useless-backreference": "error",

    // disallow negation of the left operand of an in expression
    // deprecated in favor of no-unsafe-negation
    // "no-negated-in-lhs": "off",

    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // https://eslint.org/docs/rules/require-atomic-updates
    // note: not enabled because it is very buggy
    // "require-atomic-updates": "off",

    // disallow comparisons with the value NaN
    // "use-isnan": "error",

    // ensure JSDoc comments are valid
    // https://eslint.org/docs/rules/valid-jsdoc
    // "valid-jsdoc": "off",

    // ensure that the results of typeof are compared against a valid string
    // https://eslint.org/docs/rules/valid-typeof
    // "valid-typeof": ["error", { requireStringLiterals: true }],
  },
};
