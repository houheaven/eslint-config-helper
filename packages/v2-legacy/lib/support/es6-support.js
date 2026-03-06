
// ==========================================================
// Eslint ES6+ 支持
// ==========================================================

module.exports = {
  overrides: [
    {
      files: [
        // js 文件
        "**/*.js",
        // Nodejs CommonJS 模块文件
        "**/*.cjs",
        // Nodejs ESM 模块文件
        "**/*.mjs",
      ],
      plugins: [
        "@stylistic/eslint-plugin",
      ],
      // 定义环境变量
      env: {
        browser: true,          // 浏览器环境，启用浏览器环境的全局变量（window、document、navigator、alert 等）
        node: true,             // Node.js 环境，启用 Node.js 环境的全局变量和作用域规则（__dirname、__filename、process、global 等）
        commonjs: true,         // Node.js 环境，启用 CommonJS 的全局变量和作用域规则（require()、module、exports 等）
        amd: false,             // AMD 环境，启用 AMD 环境的全局变量和作用域规则（define()、require() 等）
        mocha: false,           // Mocha 环境，启用 Mocha 环境的全局变量和作用域规则（describe()、it()、before()、after() 等）
        jasmine: false,         // Jasmine 环境，启用 Jasmine 环境的全局变量和作用域规则（describe()、it()、beforeEach()、afterEach() 等）
        es6: true,              // 启用 ECMAScript 6 全局变量和作用域规则（let、const、class、import、export 等）
      },
      // 解析器配置
      parserOptions: {
        sourceType: "module",   // 指定代码的来源类型，"module" 表示 ESLint 会在 ECMAScript 模块的上下文中解析代码（即支持 import 和 export 语法）
        ecmaVersion: "latest",  // 指定 ECMAScript 版本，"latest" 表示使用最新的 ECMAScript 版本
        ecmaFeatures: {
          generators: false,
          objectLiteralDuplicateProperties: false,
          jsx: true,
        },
      },
    },
  ],
};
