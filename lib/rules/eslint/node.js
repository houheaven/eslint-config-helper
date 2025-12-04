
// ==========================================================
// Node.js and CommonJS
// 这些规则是关于Node.js 或 在浏览器中使用CommonJS 的
// ==========================================================

module.exports = {
  env: {
    node: true,
  },
  rules: {
    // enforce return after a callback
    "callback-return": "off",

    // 强制在模块顶部调用
    // https://eslint.org/docs/rules/global-require
    "global-require": "off",

    // enforces error handling in callbacks (node environment)
    "handle-callback-err": "off",

    // disallow use of the Buffer() constructor
    // https://eslint.org/docs/rules/no-buffer-constructor
    "no-buffer-constructor": "error",

    // disallow mixing regular variable and require declarations
    "no-mixed-requires": ["off", false],

    // disallow use of new operator with the require function
    "no-new-require": "error",

    // disallow string concatenation with __dirname and __filename
    // https://eslint.org/docs/rules/no-path-concat
    "no-path-concat": "error",

    // disallow use of process.env
    "no-process-env": "off",

    // disallow process.exit()
    "no-process-exit": "off",

    // restrict usage of specified node modules
    "no-restricted-modules": "off",

    // disallow use of synchronous methods (off by default)
    "no-sync": "off",
  },
};
