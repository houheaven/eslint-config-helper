
// ==========================================================
// 有益警告（Helpful Warnings）
// ==========================================================

module.exports = {
  rules: {
    // 禁止无效的导出（重复导出名称或默认值）
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md
    "import/export": "error",

    // 禁止导入被 JSDoc（@deprecated）、TomDoc（Deprecated:）标记为废弃的函数
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-deprecated.md
    "import/no-deprecated": "error",

    // 禁止空的命名导入块
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-empty-named-blocks.md
    "import/no-empty-named-blocks": "warn",

    // 禁止使用无关的包
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-extraneous-dependencies.md
    // paths are treated both as absolute paths, and relative to process.cwd()
    "import/no-extraneous-dependencies": ["off", {
      devDependencies: [
        "test/**", // tape, common npm pattern
        "tests/**", // also common npm pattern
        "spec/**", // mocha, rspec-like pattern
        "**/__tests__/**", // jest pattern
        "**/__mocks__/**", // jest pattern
        "test.{js,jsx}", // repos with a single test file
        "test-*.{js,jsx}", // repos with multiple top-level test files
        "**/*{.,_}{test,spec}.{js,jsx}", // tests where the extension or filename suffix denotes that it is a test
        "**/jest.config.js", // jest config
        "**/jest.setup.js", // jest setup
        "**/vue.config.js", // vue-cli config
        "**/webpack.config.js", // webpack config
        "**/webpack.config.*.js", // webpack config
        "**/rollup.config.js", // rollup config
        "**/rollup.config.*.js", // rollup config
        "**/gulpfile.js", // gulp config
        "**/gulpfile.*.js", // gulp config
        "**/Gruntfile{,.js}", // grunt config
        "**/protractor.conf.js", // protractor config
        "**/protractor.conf.*.js", // protractor config
        "**/karma.conf.js", // karma config
        "**/.eslintrc.js", // eslint config
      ],
      optionalDependencies: false,
    }],

    // 禁止使用易变的导出（var、let）
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    "import/no-mutable-exports": "error",

    // 禁止命名后的变量、函数作为默认导入的名称
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default.md
    "import/no-named-as-default": "error",

    // warn on accessing default export property names that are also named exports
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default-member.md
    "import/no-named-as-default-member": "error",
    
    // Reports modules without any exports, or with unused exports
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-unused-modules.md
    "import/no-unused-modules": ["error", {
      missingExports: false,              // 文件中没有任何导出 export
      unusedExports: true,                // 文件导出后，没有被项目其他文件所使用
      ignoreUnusedTypeExports: false,     // 是否忽略 TS 中未使用的类型声明
      ignoreExports: [],
      // src: [],
    }],
  },
};
