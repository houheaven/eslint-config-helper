
// ===============================================================================
// 修复 Vue 中设置的别名（比如 @）无法被 import/no-unresolved 规则解析的问题
// -------------------------------------------------------------------------------
// Vue2
// 方案：设置解析器（"import/resolver"），用来解析 Vue - webpack 中设置的别名
// 依赖：eslint-import-resolver-node、eslint-import-resolver-webpack
// -------------------------------------------------------------------------------
// Vue3
// 方案：设置解析器（"import/resolver"），用来解析 Vue - vite 中设置的别名
// 依赖：eslint-import-resolver-alias
// ===============================================================================

const importResolver = {
  [require.resolve("eslint-import-resolver-node")]: {},
};

try {
  const vueCliConfig = require.resolve("@vue/cli-service/webpack.config.js");
  importResolver[require.resolve("eslint-import-resolver-webpack")] = {
    config: vueCliConfig,
  };
}
catch(e) {
  // ignore
}

// Vue3 Vite alias
const path = require("path");
importResolver["alias"] = {
  map: [
    ["@", path.resolve(process.cwd(), "src")],
  ],
};

module.exports = importResolver;
