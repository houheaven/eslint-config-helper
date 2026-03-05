
// ==========================================================
// 静态分析（Static Analysis）
// ==========================================================

module.exports = {
  rules: {
    // 确保默认导入时，原模块中存在默认导出
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/default.md
    "import/default": "error",

    // 在导入 Node.js 内置模块时，可以强制使用或省略 "node:" 协议。
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/enforce-node-protocol-usage.md
    "import/enforce-node-protocol-usage": ["warn", "never"],

    // 确保命名导入时，原模块中存在导出的值
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/named.md
    "import/named": "error",

    // 确保命名空间导入时，原模块中存在导出的值
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/namespace.md
    "import/namespace": ["error", {
      allowComputed: false,
    }],
    
    // 禁止使用绝对路径导入模块
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-absolute-path.md
    "import/no-absolute-path": "warn",

    // 禁止模块间的死循环相互导入
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-cycle.md
    "import/no-cycle": ["error", {
      maxDepth: "∞",
      ignoreExternal: true,
    }],

    // 禁止 require() 使用表达式调用
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-dynamic-require.md
    "import/no-dynamic-require": "error",

    // 防止导入其他模块的子模块
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-internal-modules.md
    "import/no-internal-modules": ["off", {
      allow: [],
    }],

    // 防止通过相对路径导入包
    // 适用于类似 monorepo 仓库中，不能通过相对路径来引入包
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-relative-packages.md
    "import/no-relative-packages": "off",

    // 防止导入到相对父路径中的文件夹
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-relative-parent-imports.md
    "import/no-relative-parent-imports": "off",

    // 限制特定文件夹中的文件不能被导入
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
    "import/no-restricted-paths": "off",

    // 禁止模块导入自身
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-self-import.md
    "import/no-self-import": "error",
    
    // 确保导入的文件/模块必须存在
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-unresolved.md
    "import/no-unresolved": ["error", {
      amd: true,
      commonjs: true,
      caseSensitive: true,
      caseSensitiveStrict: true,
      // ignore: [],
    }],

    // 导入时防止出现不必要的路径部分
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-useless-path-segments.md
    "import/no-useless-path-segments": ["warn", {
      commonjs: true,
      noUselessIndex: false,
    }],

    // 禁止在导入时使用 webpack loader 语法
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-webpack-loader-syntax.md
    "import/no-webpack-loader-syntax": "error",
  },
};
