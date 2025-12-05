
# @houheaven/eslint-config-helper

> Eslint 规则助手  
> 主要功能是处理 html、JavaScript、Vue 中的语法校验、代码格式化


## 特点  
- 内置了 `Eslint`，并对其规则进行了优化
- 内置了 `eslint-plugin-import`，并对其规则进行了优化
- 内置了 `eslint-plugin-vue`，并对其规则进行了优化
- 内置了 `eslint-plugin-vuejs-accessibility`，并对其规则进行了优化
- 内置了 `@html-eslint/eslint-plugin`，并对其规则进行了优化
- 支持 html、JavaScript、Vue2、Vue3


## 安装

```sh
npm install --dev @houheaven/eslint-config-helper
```

## 用法

在 Eslint 配置文件中的 `"extends"` 数组里添加 `"@houheaven/eslint-config-helper"`

```js
// .eslintrc.js

module.exports = {
  extends: [
    // ... 其他配置
    "@houheaven/eslint-config-helper"
  ]
};
```

我们提供了多种模式，分别用来处理不同的场景
| 模式名称 | 功能说明 | 适用场景 |  
| ------ | ------ | ------ |  
| @houheaven/eslint-config-helper | `语法校验` `代码格式化` | `js` |  
| @houheaven/eslint-config-helper/vue2 | `语法校验` `代码格式化` | `js` `vue2` |  
| @houheaven/eslint-config-helper/vue3 | `语法校验` `代码格式化` | `js` `vue3` |  
| @houheaven/eslint-config-helper/html | `语法校验` `代码格式化` | `js` `html` |  
| @houheaven/eslint-config-helper/format | `代码格式化` | `js` `vue2` `vue3` |  


## 修改 Eslint 规则

在 Eslint 配置文件中的 `"rules"` 里添加规则。  

```js
// .eslintrc.js

module.exports = {
  // eslint 其他配置
  // ……
  rules: {
    // js 规则
    "quotes": ["warn", "double"],
    "no-multiple-empty-lines": ["warn", {
      max: 2,
      maxBOF: 1,
      maxEOF: 1
    }],
    // import 规则
    "import/first": "error",
    "import/no-unresolved": ["error", {
      commonjs: true,
      caseSensitive: true,
    }],
    // vue 规则
    "vue/eqeqeq": ["error", "always", { null: "ignore" }],
    "vue/custom-event-name-casing": ["warn", "kebab-case"],
    // vuejs-accessibility 规则
    "vuejs-accessibility/alt-text": "off",
    "vuejs-accessibility/no-onchange": "off",
    // html 规则
    "@html-eslint/require-title": "error",
    "@html-eslint/no-duplicate-id": "error",
  }
};
```

- 查看 [`Eslint 规则文档`](https://www.npmjs.com/package/eslint)  
- 查看 [`eslint-plugin-import 规则文档`](https://www.npmjs.com/package/eslint-plugin-import)  
- 查看 [`eslint-plugin-vue 规则文档`](https://eslint.vuejs.org/rules/)  
- 查看 [`eslint-plugin-vuejs-accessibility 规则文档`](https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/tree/main/docs)  
- 查看 [`@html-eslint 规则文档`](https://yeonjuan.github.io/html-eslint/docs/getting-started.html)  

<!--
## 常见问题

### Vue3 中会产生 import/no-unresolved 错误 
 
解决方案：https://stackoverflow.com/questions/67835072/vue-3-on-vite-js-with-eslint-unable-to-resolve-path-to-module-eslintimport-no  
依赖包：[`eslint-import-resolver-alias`](https://www.npmjs.com/package/eslint-import-resolver-alias)  
-->

## 更多

功能依赖：
- [`eslint`](https://www.npmjs.com/package/eslint)  
- [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import)  
- [`eslint-plugin-vue`](https://www.npmjs.com/package/eslint-plugin-vue)  
- [`eslint-plugin-vuejs-accessibility`](https://www.npmjs.com/package/eslint-plugin-vuejs-accessibility)  
- [`eslint-plugin-html`](https://www.npmjs.com/package/eslint-plugin-html)  
- [`eslint-import-resolver-alias`](https://www.npmjs.com/package/eslint-import-resolver-alias)  
- [`eslint-import-resolver-node`](https://www.npmjs.com/package/eslint-import-resolver-node)  
- [`eslint-import-resolver-webpack`](https://www.npmjs.com/package/eslint-import-resolver-webpack)  
- [`@html-eslint/eslint-plugin`](https://www.npmjs.com/package/@html-eslint/eslint-plugin)  
- [`@html-eslint/parser`](https://www.npmjs.com/package/@html-eslint/parser)  
- [`@babel/eslint-parser`](https://www.npmjs.com/package/@babel/eslint-parser)  
