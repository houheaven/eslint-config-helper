
// ==========================================================
// 风格指南（Style Guide）
// ==========================================================

module.exports = {
  rules: {
    // 一致的导入类型指定符样式
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/consistent-type-specifier-style.md
    "import/consistent-type-specifier-style": ["warn", "prefer-top-level"],

    // 动态导入时要求携带 webpackChunkName 注释
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/dynamic-import-chunkname.md
    "import/dynamic-import-chunkname": ["error", {
      importFunctions: [],
      webpackChunknameFormat: "[0-9a-zA-Z-_/.]+",
      allowEmpty: true,
    }],

    // export 要放在文件最后面
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/exports-last.md
    "import/exports-last": "error",

    // 文件后缀名
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/extensions.md
    "import/extensions": ["error", "always", {
      ignorePackages: true,
    }],

    // import 要放在文件最前面
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/first.md
    "import/first": "warn",

    // 一个文件中保留一个导出出口（易辨识、易维护）
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/group-exports.md
    "import/group-exports": "error",

    // import 要放在文件最前面（已废弃）
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md
    // deprecated: use `import/first`
    // "import/imports-first": "off",

    // 禁止模块有太多的依赖
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/max-dependencies.md
    "import/max-dependencies": ["off", {
      max: 10,
      ignoreTypeImports: true,
    }],

    // 强制在最后一个顶级导入 import 语句或 require 调用之后有一个或多个空行
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/newline-after-import.md
    "import/newline-after-import": ["off", {
      count: 1,
      exactCount: true,
      considerComments: false,
    }],

    // 要求默认导出的值必须先定义
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-anonymous-default-export.md
    "import/no-anonymous-default-export": ["off", {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false,
    }],

    // 禁止默认导出
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-default-export.md
    "import/no-default-export": "off",

    // 禁止在多个地方重复导入同一模块
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-duplicates.md
    "import/no-duplicates": ["warn", {
      "considerQueryString": true,
      "prefer-inline": false,
    }],

    // import 时不能使用 default 关键字
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-named-default.md
    "import/no-named-default": "error",

    // 禁止命名导出
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-named-export.md
    "import/no-named-export": "off",

    // 禁止命名空间（又名“通配符” *）导入
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-namespace.md
    "import/no-namespace": "warn",

    // 禁止未分配的导入
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-unassigned-import.md
    // importing for side effects is perfectly acceptable, if you need side effects.
    "import/no-unassigned-import": ["error", {
      allow: ["**/*.css", "**/*.less", "echarts/**/*.*"],
    }],

    // import 导入排序
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/order.md
    "import/order": ["warn", {
      groups: [
        "builtin",
        ["external", "internal"],
        // "parent",
        // "sibling",
        // "index",
        // "object",
        // "type",
      ],
    }],

    // 当一个模块只有一个导出时，更喜欢使用默认导出而不是命名导出
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/prefer-default-export.md
    "import/prefer-default-export": "error",
  },
};
