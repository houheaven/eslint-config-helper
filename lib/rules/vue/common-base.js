
// ==========================================================
// 基础规则（plugin:vue/base）
// 说明：Vue2、Vue3 中最基础的规则
// ==========================================================

module.exports = {
  parser: require.resolve("vue-eslint-parser"),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    browser: true,
    es6: true,
  },
  plugins: ["vue"],
  rules: {
    // 在 <template> 中支持 eslint 注释指令
    // https://eslint.vuejs.org/rules/comment-directive.html
    "vue/comment-directive": ["warn", {
      "reportUnusedDisableDirectives": true,
    }],
    
    // 防止 JSX 中使用的变量被标记为未使用
    // https://eslint.vuejs.org/rules/jsx-uses-vars.html
    "vue/jsx-uses-vars": "error",
  },
};
