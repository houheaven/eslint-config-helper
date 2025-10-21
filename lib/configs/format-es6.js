
// ==========================================================
// ES6 文件代码格式化
// ==========================================================

const getWarnRules = require("./format-utils.js");
const formatRules = {
  ...require("../rules/eslint/layout-formatting.js").rules,
  ...require("../rules/eslint/suggestions.js").rules,
  ...require("../rules/eslint/es6.js").rules,
};

module.exports = {
  // 定义环境变量
  env: {
    browser: true,          // 浏览器环境，启用浏览器环境的全局变量（window、document、navigator、alert 等）
    node: true,             // Node.js 环境，启用 Node.js 环境的全局变量和作用域规则（__dirname、__filename、process、global 等）
    commonjs: true,         // Node.js 环境，启用 CommonJS 的全局变量和作用域规则（require()、module、exports 等）
    amd: false,             // AMD 环境，启用 AMD 环境的全局变量和作用域规则（define()、require() 等）
    mocha: false,           // Mocha 环境，启用 Mocha 环境的全局变量和作用域规则（describe()、it()、before()、after() 等）
    jasmine: false,         // Jasmine 环境，启用 Jasmine 环境的全局变量和作用域规则（describe()、it()、beforeEach()、afterEach() 等）
  },
  // 解析器配置
  parserOptions: {
    sourceType: "module",   // 指定代码的来源类型，"module" 表示 ESLint 会在 ECMAScript 模块的上下文中解析代码（即支持 import 和 export 语法）
    ecmaVersion: "latest",  // 指定 ECMAScript 版本，"latest" 表示使用最新的 ECMAScript 版本
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },
  // 当 eslint-disable 注释配置未使用时，是否报错
  reportUnusedDisableDirectives: true,
  // 规则
  rules: {
    // ES6 相关的 warn 级别规则（自动导入）
    ...getWarnRules(formatRules),
  },
};
