
module.exports = {
  rules: {
    // 强制使用一致的换行符风格
    // Windows - "CRLF"
    // Unix、Linux - "LF"
    "linebreak-style": ["warn", "unix"],
    // 强制在花括号中使用一致的空格
    "object-curly-spacing": ["warn", "always", {
      "arraysInObjects": false,
      "objectsInObjects": true,
    }],
    // 要求对象字面量属性名称用引号括起来
    "quote-props": ["warn", "consistent"],
    // 要求或禁止使用拖尾逗号（对象、数组、函数参数的最后一项后面是否允许有逗号）
    "comma-dangle": ["warn", {
      arrays: "never",
      objects: "always-multiline",
      imports: "never",
      exports: "never",
      functions: "never",
    }],
    // 强制在对象字面量的键和值之间使用一致的空格
    "key-spacing": ["warn", {
      beforeColon: false,
      afterColon: true,
    }],
  },
};
