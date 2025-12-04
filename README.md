# @houheaven/eslint-config-helper

> Eslint 规则助手


## 安装

```sh
npm install --dev @houheaven/eslint-config-helper
```

请确保你已经安装了 `eslint`

## 用法

在 Eslint 配置文件中的 `"extends"` 数组里添加 `"@houheaven/eslint-config-helper"`

```js
// .eslintrc.js

module.exports = {
  extends: [
    // ... 其他配置
    "@houheaven/eslint-config-helper"
  ]
}
```

## 修改 Eslint 规则

Eslint 官网：http://eslint.org/  

在 Eslint 配置文件中的 `"rules"` 里添加规则配置。  

```js
// .eslintrc.js

module.exports = {
  rules: {
    "quotes": ["warn", "double"],
    "no-multiple-empty-lines": ["warn", {
      "max": 2,
      "maxBOF": 1,
      "maxEOF": 1
    }]
  }
};
```

## 更多

功能依赖：
- [`eslint`](https://www.npmjs.com/package/eslint)  
