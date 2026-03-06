
// ==========================================================
// import 支持
// ==========================================================

const importResolver = require("./import-bugfix.js");

module.exports = {
  plugins: ["eslint-plugin-import"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  settings: {
    "import/resolver": {
      ...importResolver,
    },
    "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },
    "import/ignore": ["node_modules", "\\.(coffee|scss|css|less|hbs|svg|json)$"],
    "import/docstyle": ["jsdoc", "tomdoc"],
  },
};
