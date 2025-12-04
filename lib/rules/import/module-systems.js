
// ==========================================================
// 模块系统（Module Systems）
// ==========================================================

module.exports = {
  rules: {
    // Warn if a module could be mistakenly parsed as a script by a consumer
    // leveraging Unambiguous JavaScript Grammar
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
    // this should not be enabled until this proposal has at least been *presented* to TC39.
    // At the moment, it"s not a thing.
    "import/unambiguous": "off",

    // 禁用 require()
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    "import/no-commonjs": "off",

    // 禁用 AMD require/define
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
    "import/no-amd": "error",

    // 禁用 Node.js 内置模块
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
    "import/no-nodejs-modules": "error",
    
    // 除了主模块以外，在使用 CommonJS 导出的任何文件中都不能使用 import 声明
    // https://github.com/benmosher/eslint-plugin-import/blob/1012eb951767279ce3b540a4ec4f29236104bb5b/docs/rules/no-import-module-exports.md
    "import/no-import-module-exports": ["error", {
      exceptions: [],
    }],

  },
};
