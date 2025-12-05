
// ==========================================================
// @houheaven/eslint-config-helper/eslint-es5
// ----------------------------------------------------------
// - ./configs/eslint-es5.js : eslint ES5 定制规则
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
        "./configs/eslint-es5.js",
      ],
    },
  ],
};
