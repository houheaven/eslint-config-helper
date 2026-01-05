
module.exports = {
  // 防止 eslint 向上查找配置文件
  root: true,
  // 定义环境变量
  env: {
    commonjs: true,         // 临时添加，为了解决当前配置文件（.eslintrc.js）报错的问题，当前文件采用了 commonjs 语法（module.exports）
  },
  // 继承配置文件
  extends: [
    "../../lib/javascript-es5.js",
    // "../../lib/format-es5.js",
  ],
};
