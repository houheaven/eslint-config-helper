
// ===============================================================================
// import 代码格式化
// ===============================================================================

const importResolver = require("./import-bugfix.js");
const getWarnRules = require("./format-utils.js");
const formatRules = {
  ...require("../rules/import/helpful-warnings.js").rules,
  ...require("../rules/import/module-systems.js").rules,
  ...require("../rules/import/static-analysis.js").rules,
  ...require("../rules/import/style-guide.js").rules,
};

module.exports = {
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  plugins: [
    "eslint-plugin-import",
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
    "import/docstyle": ["jsdoc", "tomdoc"],
  },
  rules: {
    // import 相关的 warn 级别规则（自动导入）
    ...getWarnRules(formatRules),
  },
};
