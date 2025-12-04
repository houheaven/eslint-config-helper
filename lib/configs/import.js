
// ===============================================================================
// import/export 规则
// -------------------------------------------------------------------------------
// 包名：eslint-plugin-import
// 文档：https://www.npmjs.com/package/eslint-plugin-import
// ===============================================================================

const importResolver = require("./import-bugfix.js");

module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  extends: [
    "../rules/import/static-analysis.js",
    "../rules/import/helpful-warnings.js",
    "../rules/import/module-systems.js",
    "../rules/import/style-guide.js",
  ],
  plugins: [
    "import",
  ],
  settings: {
    "import/resolver": {
      ...importResolver,
    },
    "import/extensions": [
      ".js",
      ".jsx",
      ".mjs",
      ".ts",
      ".tsx",
    ],
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$",
    ],
  },
};
