
// ==========================================================
// @houheaven/eslint-config-helper/eslint
// ----------------------------------------------------------
// - ./configs/eslint-es6.js : eslint ES6+ 定制规则
// - ./configs/import.js     : eslint-plugin-import 定制规则
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
      extends: [
        "./configs/eslint-es6.js",
        "./configs/import.js",
      ],
    },
  ],
};
