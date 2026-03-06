
// ===============================================================================
// eslint-plugin-import 插件的解析器（"import/resolver"）
// - 解决 Vue 中设置的别名（比如 @）无法被 import/no-unresolved 规则解析的问题
// - 解决 ts 文件无法被 import/extensions 规则解析的问题
// -------------------------------------------------------------------------------
// 依赖：eslint-import-resolver-node
// 作用：这是最基础、最标准的解析器。它遵循 Node.js 原生的模块解析机制
// - 查找 node_modules 中的依赖
// - 自动补全文件后缀（如 .js、.ts、.node）
// - 识别 index.js 作为目录入口
// -------------------------------------------------------------------------------
// 依赖：eslint-import-resolver-webpack
// 作用：让 ESLint 能够理解 Webpack 的配置
// - Webpack 允许配置 resolve.alias（别名，如 @ 指向 src ）
// - Webpack 允许配置 resolve.modules（自定义模块目录）
// - Webpack 允许配置省略特定的后缀（如 .vue , .jsx ）
// - 如果没有这个解析器，ESLint 会报错说找不到模块（ import/no-unresolved ），即使 Webpack 编译能通过。
// 场景：主要用于 Vue 2 (Vue CLI) 或 React (Create React App) 等基于 Webpack 构建的项目。
// 在当前场景中，它被用来读取 @vue/cli-service 的 Webpack 配置。
// -------------------------------------------------------------------------------
// 依赖：eslint-import-resolver-alias
// 作用：一个轻量级的解析器，专门用来处理路径别名（Alias），而不依赖庞大的 Webpack 配置。
// - 简单直接地告诉 ESLint：“当看到 @ 时，去 src 目录下找”。
// - 它不需要读取复杂的 webpack.config.js ，配置更简单、速度通常更快。
// 场景 ：
// - Vite 项目 ：Vite 不使用 Webpack，所以无法使用 Webpack 解析器。通常配合此包来解决 Vite 中的别名问题。
// - 非 Webpack 项目 ：任何使用了别名但没有 Webpack 的环境。
// - 在你的项目中，它主要用于 Vue 3 + Vite 的场景。
// ===============================================================================

const path = require("path");

const importResolver = {
  // eslint-import-resolver-node 配置项
  // 说明：
  // 使用包的绝对路径作为键名来注册解析器，这是一种防御性写法。
  // 在 Monorepo 或使用了 pnpm 等包管理器的项目中，依赖结构可能比较复杂，
  // 直接写字符串 "node" 有时可能导致 ESLint 找不到对应的解析器包，
  // 使用 require.resolve 可以确保准确找到该包。
  [require.resolve("eslint-import-resolver-node")]: {
    // 文件解析，Node 默认只会解析 js
    extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts", ".vue"],
  },
  // eslint-import-resolver-alias 配置项（字符串简写）
  // 别名解析
  alias: {
    map: [
      ["@", path.resolve(process.cwd(), "src")],
    ],
  },
};

// 针对 Vue CLI 项目
try {
  const vueCliConfig = require.resolve("@vue/cli-service/webpack.config.js");
  importResolver[require.resolve("eslint-import-resolver-webpack")] = {
    config: vueCliConfig,
  };
}
catch(e) {
  // ignore
}

module.exports = importResolver;
