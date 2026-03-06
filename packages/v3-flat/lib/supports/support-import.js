
// ==========================================================
// @houheaven/eslint-config-helper/support-import
// ----------------------------------------------------------
// - 解析 import 规则
// ==========================================================

import pluginImport from "eslint-plugin-import";

const supportImport = {
  plugins: {
    "import": pluginImport,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
    "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
    "import/external-module-folders": ["node_modules", "node_modules/@types"],
    "import/ignore": ["node_modules", "\\.(coffee|scss|css|less|hbs|svg|json)$"],
    "import/docstyle": ["jsdoc", "tomdoc"],
  },
};

export default supportImport;
