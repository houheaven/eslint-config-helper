
// 文件首尾空行

"use strict";

module.exports = {
  rules: {
    // 要求或禁止文件末尾存在空行
    "eol-last": ["warn", "always"],
    // 禁止出现多行空行
    "no-multiple-empty-lines": ["warn", {
      "max": 2,
      "maxBOF": 1,
      "maxEOF": 1,
    }],
    // 禁用行尾空白
    "no-trailing-spaces": ["warn", {
      "skipBlankLines": true,
      "ignoreComments": false,
    }],
  },
};
