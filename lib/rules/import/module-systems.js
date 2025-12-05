
// ==========================================================
// 模块系统（Module Systems）
// ==========================================================

module.exports = {
  rules: {
    // 禁用 AMD require/define
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-amd.md
    "import/no-amd": "error",

    // 禁用 commonjs require()
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-commonjs.md
    "import/no-commonjs": "off",

    // 除了主模块以外，在使用 CommonJS 导出的任何文件中都不能使用 import 声明
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-import-module-exports.md
    "import/no-import-module-exports": ["error", {
      exceptions: [],
    }],

    // 禁用 Node.js 内置模块
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-nodejs-modules.md
    "import/no-nodejs-modules": ["off", {
      "allow": ["path"],
    }],

    // 强制导入模块时使用绝对路径或相对路径，而不是别名或别名路径
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/unambiguous.md
    "import/unambiguous": "off",
    
  },
};
