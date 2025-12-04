
// ==========================================================
// 风格指南（Style Guide）
// ==========================================================

module.exports = {
  rules: {
    // import 要放在文件最前面
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    "import/first": "warn",

    // import 要放在文件最前面（已废弃）
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md
    // deprecated: use `import/first`
    "import/imports-first": "off",

    // export 要放在文件最后面
    // https://github.com/benmosher/eslint-plugin-import/blob/98acd6afd04dcb6920b81330114e146dc8532ea4/docs/rules/exports-last.md
    "import/exports-last": "warn",

    // 禁止在多个地方重复导入同一模块
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    "import/no-duplicates": "off",

    // 禁止命名空间（又名“通配符” *）导入
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
    "import/no-namespace": "warn",

    // 文件后缀名
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    "import/extensions": ["warn", "always", {
      ignorePackages: true,
    }],

    // import 导入排序
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    "import/order": ["warn", {
      groups: [
        "builtin",
        ["external", "internal"],
      ],
    }],

    // 强制在最后一个顶级导入 import 语句或 require 调用之后有一个或多个空行
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    "import/newline-after-import": "off",

    // 当一个模块只有一个导出时，更喜欢使用默认导出而不是命名导出
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    "import/prefer-default-export": "warn",

    // 禁止模块有太多的依赖
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
    "import/max-dependencies": ["off", { max: 10 }],

    // 禁止未分配的导入
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
    // importing for side effects is perfectly acceptable, if you need side effects.
    "import/no-unassigned-import": ["error", {
      allow: ["**/*.css", "**/*.less", "echarts/**/*.*"],
    }],

    // import 时不能使用 default 关键字
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
    "import/no-named-default": "warn",

    // 禁止默认导出
    // https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-default-export.md
    "import/no-default-export": "off",

    // 禁止命名导出
    // https://github.com/benmosher/eslint-plugin-import/blob/1ec80fa35fa1819e2d35a70e68fb6a149fb57c5e/docs/rules/no-named-export.md
    "import/no-named-export": "off",

    // 要求默认导出的值必须先定义
    // https://github.com/benmosher/eslint-plugin-import/blob/d9b712ac7fd1fddc391f7b234827925c160d956f/docs/rules/no-anonymous-default-export.md
    "import/no-anonymous-default-export": ["off", {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false,
    }],

    // 一个文件中保留一个导出出口（易辨识、易维护）
    // https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/group-exports.md
    "import/group-exports": "warn",

    // 动态导入时要求携带 webpackChunkName 注释
    // https://github.com/benmosher/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/dynamic-import-chunkname.md
    "import/dynamic-import-chunkname": ["warn", {
      importFunctions: [],
      webpackChunknameFormat: "[0-9a-zA-Z-_/.]+",
    }],
  },
};
