
// ==========================================================
// Typescript 支持
// ==========================================================

module.exports = {
  overrides: [
    {
      files: ["**/*.ts"],
      plugins: [
        "@typescript-eslint/eslint-plugin",
        "@stylistic/eslint-plugin",
      ],
      parser: require.resolve("@typescript-eslint/parser"),
      parserOptions: {
        sourceType: "module",
        // 零配置方案
        // - 自动适配项目中的 tsconfig.json 配置文件
        // - 不需要指定具体路径，让 ESLint 自动查找
        // 方案一：优先使用用户项目的 tsconfig.json
        // project: true,
        // 方案二：projectService 作为降级方案
        projectService: true,
      },
    },
  ],
};
