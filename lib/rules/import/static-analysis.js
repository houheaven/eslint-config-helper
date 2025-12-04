
// ==========================================================
// 静态分析（Static Analysis）
// ==========================================================

module.exports = {
  rules: {
    // 确保导入的文件/模块必须存在
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    "import/no-unresolved": ["error", {
      commonjs: true,
      caseSensitive: true,
    }],

    // 确保命名导入时，原模块中存在导出的值
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
    "import/named": "error",

    // 确保默认导入时，原模块中存在默认导出
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
    "import/default": "error",

    // 确保命名空间导入时，原模块中存在导出的值
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
    "import/namespace": "error",
    
    // 限制特定文件夹中的文件不能被导入
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
    "import/no-restricted-paths": "off",
    
    // 禁止使用绝对路径导入模块
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
    "import/no-absolute-path": "error",

    // 禁止 require() 使用表达式调用
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    "import/no-dynamic-require": "error",

    // 防止导入其他模块的子模块
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
    "import/no-internal-modules": ["off", {
      allow: [],
    }],

    // 禁止在导入时使用 webpack loader 语法
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    "import/no-webpack-loader-syntax": "error",

    // 禁止模块导入自身
    // https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-self-import.md
    "import/no-self-import": "error",

    // 禁止模块间的死循环相互导入
    // https://github.com/benmosher/eslint-plugin-import/blob/d81f48a2506182738409805f5272eff4d77c9348/docs/rules/no-cycle.md
    "import/no-cycle": ["error", { maxDepth: "∞" }],

    // 导入时防止出现不必要的路径部分
    // https://github.com/benmosher/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/no-useless-path-segments.md
    "import/no-useless-path-segments": ["error", { commonjs: true, noUselessIndex: true }],

    // 防止导入到相对父路径中的文件夹
    // https://github.com/benmosher/eslint-plugin-import/blob/c34f14f67f077acd5a61b3da9c0b0de298d20059/docs/rules/no-relative-parent-imports.md
    "import/no-relative-parent-imports": "off",

    // 防止通过相对路径导入包
    // https://github.com/benmosher/eslint-plugin-import/blob/1012eb951767279ce3b540a4ec4f29236104bb5b/docs/rules/no-relative-packages.md
    "import/no-relative-packages": "off",
  },
};
