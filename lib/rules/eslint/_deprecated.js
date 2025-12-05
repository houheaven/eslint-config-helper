
// 这些规则已根据废弃政策被弃用，并被更新的规则所取代

// module.exports = {
//   rules: {
//     "callback-return": "",               // [ ✅ 已使用 ]
//     "global-require": "",                // [ ✅ 已使用 ]
//     "handle-callback-err": "",           // [ ✅ 已使用 ]
//     "id-blacklist": "",                  // [ ❌ 未使用 ] 替换为 id-denylist
//     "indent-legacy": "",                 // [ ❌ 未使用 ] 替换为 indent
//     "lines-around-directive": "",        // [ ✅ 已使用 ] 替换为 padding-line-between-statements
//     "newline-after-var": "",             // [ ✅ 已使用 ] 替换为 padding-line-between-statements
//     "newline-before-return": "",         // [ ✅ 已使用 ] 替换为 padding-line-between-statements
//     "no-buffer-constructor": "",         // [ ✅ 已使用 ]
//     "no-catch-shadow": "",               // [ ✅ 已使用 ] 替换为 no-shadow
//     "no-mixed-requires": "",             // [ ✅ 已使用 ]
//     "no-native-reassign": "",            // [ ✅ 已使用 ] 替换为 no-global-assign
//     "no-negated-in-lhs": "",             // [ ✅ 已使用 ] 替换为 no-unsafe-negation
//     "no-new-require": "",                // [ ✅ 已使用 ]
//     "no-path-concat": "",                // [ ✅ 已使用 ]
//     "no-process-env": "",                // [ ✅ 已使用 ]
//     "no-process-exit": "",               // [ ✅ 已使用 ]
//     "no-restricted-modules": "",         // [ ✅ 已使用 ]
//     "no-return-await": "",               // [ ✅ 已使用 ]
//     "no-spaced-func": "",                // [ ❌ 未使用 ] 替换为 func-call-spacing
//     "no-sync": "",                       // [ ✅ 已使用 ]
//     "prefer-reflect": "",                // [ ✅ 已使用 ]
//     "require-jsdoc": "",                 // [ ✅ 已使用 ]
//     "valid-jsdoc": "",                   // [ ✅ 已使用 ]
//   },
// };

module.exports = {
  rules: {
    // enforce return after a callback
    // ❌ 已废弃
    "callback-return": "off",

    // 强制在模块顶部调用
    // ❌ 已废弃
    // https://zh-hans.eslint.org/docs/latest/rules/global-require
    "global-require": "off",

    // enforces error handling in callbacks (node environment)
    // ❌ 已废弃
    "handle-callback-err": "off",

    // require or disallow newlines around directives
    // ❌ 已废弃
    // https://zh-hans.eslint.org/docs/latest/rules/lines-around-directive
    "lines-around-directive": ["error", {
      before: "always",
      after: "always",
    }],

    // allow/disallow an empty newline after var statement
    // ❌ 已废弃
    "newline-after-var": "off",

    // https://zh-hans.eslint.org/docs/latest/rules/newline-before-return
    // ❌ 已废弃
    "newline-before-return": "off",

    // disallow use of the Buffer() constructor
    // ❌ 已废弃
    // https://zh-hans.eslint.org/docs/latest/rules/no-buffer-constructor
    "no-buffer-constructor": "error",

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    // ❌ 已废弃
    "no-catch-shadow": "off",

    // disallow mixing regular variable and require declarations
    // ❌ 已废弃
    "no-mixed-requires": ["off", false],
    
    // deprecated in favor of no-global-assign
    // ❌ 已废弃
    // https://zh-hans.eslint.org/docs/latest/rules/no-native-reassign
    "no-native-reassign": "off",

    // disallow negation of the left operand of an in expression
    // deprecated in favor of no-unsafe-negation
    // ❌ 已废弃
    "no-negated-in-lhs": "off",

    // disallow use of new operator with the require function
    // ❌ 已废弃
    "no-new-require": "error",

    // disallow string concatenation with __dirname and __filename
    // ❌ 已废弃
    // https://zh-hans.eslint.org/docs/latest/rules/no-path-concat
    "no-path-concat": "error",

    // disallow use of process.env
    // ❌ 已废弃
    "no-process-env": "off",

    // disallow process.exit()
    // ❌ 已废弃
    "no-process-exit": "off",

    // restrict usage of specified node modules
    // ❌ 已废弃
    "no-restricted-modules": "off",

    // disallow redundant `return await`
    // ❌ 已废弃
    // https://zh-hans.eslint.org/docs/latest/rules/no-return-await
    "no-return-await": "error",

    // disallow use of synchronous methods (off by default)
    // ❌ 已废弃
    "no-sync": "off",

    // suggest using Reflect methods where applicable
    // ❌ 已废弃
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-reflect
    "prefer-reflect": "off",

    // do not require jsdoc
    // ❌ 已废弃
    // https://zh-hans.eslint.org/docs/latest/rules/require-jsdoc
    "require-jsdoc": "off",

    // ensure JSDoc comments are valid
    // ❌ 已废弃
    // https://zh-hans.eslint.org/docs/latest/rules/valid-jsdoc
    "valid-jsdoc": "off",
  },
};
