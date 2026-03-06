
// ==========================================================
// @houheaven/eslint-config-helper/support-typescript
// ----------------------------------------------------------
// - 解析 Typescript 文件
// ==========================================================

import pluginStylistic from "@stylistic/eslint-plugin";
import pluginTypescript from "@typescript-eslint/eslint-plugin";
import parserTypescript from "@typescript-eslint/parser";

const supportTypescript = {
  plugins: {
    "@typescript-eslint": pluginTypescript,
    "@stylistic": pluginStylistic,
  },
  languageOptions: {
    // Typescript 规则很多是类型感知规则，需要访问 TypeScript 类型系统（即需要配置 parserOptions）
    parser: parserTypescript,
    parserOptions: {
      ecmaVersion: "latest",
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
};

export default supportTypescript;
