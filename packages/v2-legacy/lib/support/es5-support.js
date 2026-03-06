
// ==========================================================
// Eslint ES5 支持
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
        jquery: true,           // jQuery 环境，启用 jQuery 环境的全局变量和作用域规则（$、jQuery 等）
      },
      // 解析器配置
      parserOptions: {
        sourceType: "script",   // 指定代码的来源类型，"script"（默认）表示 ESLint 会在全局作用域的脚本上下文中解析代码
        ecmaVersion: 5,         // 指定 ECMAScript 版本，5 表示 ECMAScript 5
      },
    },
  ],
};
