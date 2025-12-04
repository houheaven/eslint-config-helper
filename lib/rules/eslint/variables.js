
// ==========================================================
// Variables
// 这些规则与变量声明有关
// ==========================================================

// const confusingBrowserGlobals = require("confusing-browser-globals");

module.exports = {
  rules: {
    // enforce or disallow variable initializations at definition
    "init-declarations": "off",

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    "no-catch-shadow": "off",

    // disallow deletion of variables
    "no-delete-var": "error",

    // disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    "no-label-var": "error",

    // 禁用特定的全局变量
    // 'no-restricted-globals': [
    //   'error',
    //   {
    //     name: 'isFinite',
    //     message:
    //       'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
    //   },
    //   {
    //     name: 'isNaN',
    //     message:
    //       'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
    //   },
    // ].concat(confusingBrowserGlobals),
    "no-restricted-globals": "off",

    // disallow declaration of variables already declared in the outer scope
    "no-shadow": "error",

    // disallow shadowing of names such as arguments
    "no-shadow-restricted-names": "error",

    // 禁用未声明的变量
    // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undef": "error",

    // disallow use of undefined when initializing variables
    "no-undef-init": "error",

    // disallow use of undefined variable
    // https://eslint.org/docs/rules/no-undefined
    // TODO: enable?
    "no-undefined": "off",

    // 禁止定义变量后不使用
    "no-unused-vars": ["error", {
      vars: "all",
      args: "none",
      ignoreRestSiblings: true,
      caughtErrors: "none",
    }],

    // 禁止定义前使用
    "no-use-before-define": ["error", {
      functions: false,
      classes: true,
      variables: true,
    }],
  },
};
