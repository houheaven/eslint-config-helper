
# @houheaven/eslint-config-helper

> Eslint 规则助手，基于 Eslint Legacy Config 的规则集。  
> 主要功能是处理 Javascript、Typescript、Vue、HTML 中的语法校验、代码格式化。  


## 功能  

- 项目依赖于 `Eslint v8`，提供 JS 代码的校验规则
- 内置 `@stylistic/eslint-plugin`，提供 JS、TS 代码格式化的校验规则
- 内置 `@typescript-eslint/eslint-plugin`，提供 TS 代码的校验规则
- 内置 `eslint-plugin-import`，提供 import 的校验规则
- 内置 `eslint-plugin-vue`，提供 Vue 代码的校验规则
- 内置 `@html-eslint/eslint-plugin`，提供 html 文件的解析和校验规则
- 内置 `eslint-plugin-html`，提供 html 文件中 &lt;script> 的 JS 解析能力


## 安装

```sh
npm install --dev @houheaven/eslint-config-helper
```

## 用法

我们提供了多种规则集，每个规则集只能处理单一场景，为了处理复杂场景，可以将多个规则集组合使用。  

| 规则集名称 | 功能说明 | 适用场景 |  
| ------ | ------ | ------ |  
| @houheaven/eslint-config-helper | `语法校验` `代码格式化` | `js/es6` `mjs` `cjs` |  
| @houheaven/eslint-config-helper/es6 | `语法校验` `代码格式化` | `js/es6` `mjs` `cjs` |  
| @houheaven/eslint-config-helper/es5 | `语法校验` `代码格式化` | `js/es5` `mjs` `cjs` |  
| @houheaven/eslint-config-helper/typescript | `语法校验` `代码格式化` | `ts` |  
| @houheaven/eslint-config-helper/import | `语法校验` `代码格式化` | `js/es6` `ts` `vue2` `vue3` |  
| @houheaven/eslint-config-helper/vue2 | `语法校验` `代码格式化` | `vue2` |  
| @houheaven/eslint-config-helper/vue3 | `语法校验` `代码格式化` | `vue3` |  
| @houheaven/eslint-config-helper/vue3-ts | `语法校验` `代码格式化` | `vue3` `ts` |  
| @houheaven/eslint-config-helper/html | `语法校验` `代码格式化` | `html` |  
| @houheaven/eslint-config-helper/format-es6 | `代码格式化` | `js/es6` `mjs` `cjs` |  
| @houheaven/eslint-config-helper/format-es5 | `代码格式化` | `js/es5` `mjs` `cjs` |  
| @houheaven/eslint-config-helper/format-typescript | `代码格式化` | `ts` |  
| @houheaven/eslint-config-helper/format-import | `代码格式化` | `js/es6` `ts` `vue2` `vue3` |  
| @houheaven/eslint-config-helper/format-vue2 | `代码格式化` | `vue2` |  
| @houheaven/eslint-config-helper/format-vue3 | `代码格式化` | `vue3` |  
| @houheaven/eslint-config-helper/format-html | `代码格式化` | `html` |  

在 Eslint 配置文件 `.eslintrc.js` 中 `"extends"` 规则集继承数组中添加以上规则集，即可使其生效。  

### Javascript（ES5）

```js
module.exports = {
  extends: [
    "@houheaven/eslint-config-helper/es5"
  ]
};
```

### Javascript（ES6）

```js
module.exports = {
  extends: [
    "@houheaven/eslint-config-helper/es6",
    "@houheaven/eslint-config-helper/import"
  ]
};
```

### Typescript

```js
module.exports = {
  extends: [
    "@houheaven/eslint-config-helper/es6",
    "@houheaven/eslint-config-helper/import",
    "@houheaven/eslint-config-helper/typescript"
  ]
};
```

### Vue2

```js
module.exports = {
  extends: [
    "@houheaven/eslint-config-helper/es6",
    "@houheaven/eslint-config-helper/import",
    "@houheaven/eslint-config-helper/vue2"
  ]
};
```

### Vue3

```js
module.exports = {
  extends: [
    "@houheaven/eslint-config-helper/es6",
    "@houheaven/eslint-config-helper/import",
    "@houheaven/eslint-config-helper/vue3"
  ]
};
```

### Vue3 + Typescript

```js
module.exports = {
  extends: [
    "@houheaven/eslint-config-helper/es6",
    "@houheaven/eslint-config-helper/import",
    "@houheaven/eslint-config-helper/typescript",
    "@houheaven/eslint-config-helper/vue3-ts"
  ]
};
```

### html

```js
module.exports = {
  extends: [
    "@houheaven/eslint-config-helper/html"
  ]
};
```

### html + ES5

```js
module.exports = {
  extends: [
    "@houheaven/eslint-config-helper/es5",
    "@houheaven/eslint-config-helper/html"
  ]
};
```

### html + ES6

```js
module.exports = {
  extends: [
    "@houheaven/eslint-config-helper/es6",
    "@houheaven/eslint-config-helper/import",
    "@houheaven/eslint-config-helper/html"
  ]
};
```


## 修改 Eslint 规则

在 Eslint 配置文件中的 `"rules"` 里添加规则。  

```js
// .eslintrc.js

module.exports = {
  // eslint 其他配置
  // ……
  rules: {
    // ES5 规则
    "quotes": ["warn", "double"],
    "no-multiple-empty-lines": ["warn", {
      max: 2,
      maxBOF: 1,
      maxEOF: 1
    }],

    // ES6 规则
    "no-var": "warn",
    "arrow-spacing": ["warn", {
      before: true,
      after: true,
    }],

    // typescript 规则
    "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
    "@typescript-eslint/triple-slash-reference": ["error", {
      lib: "always",
      path: "never",
      types: "prefer-import",
    }],

    // import 规则
    "import/first": "error",
    "import/no-unresolved": ["error", {
      commonjs: true,
      caseSensitive: true,
    }],

    // Vue2 规则
    "vue/eqeqeq": ["error", "always", { null: "ignore" }],
    "vue/custom-event-name-casing": ["warn", "kebab-case"],
    "vue/no-multiple-template-root": "error",

    // Vue3 规则
    "vue/define-emits-declaration": ["error", "type-based"],
    "vue/next-tick-style": ["warn", "promise"],

    // html 规则
    "@html-eslint/require-title": "error",
    "@html-eslint/no-duplicate-id": "error",
  }
};
```

- 查看 [`Eslint 规则文档`](https://www.npmjs.com/package/eslint)  
- 查看 [`eslint-plugin-import 规则文档`](https://www.npmjs.com/package/eslint-plugin-import)  
- 查看 [`eslint-plugin-vue 规则文档`](https://eslint.vuejs.org/rules/)  
- 查看 [`@html-eslint 规则文档`](https://html-eslint.org/docs/getting-started/)  
- 查看 [`@typescript-eslint/eslint-plugin 规则文档`](https://typescript-eslint.io/rules/)  

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
- [`eslint-plugin-html`](https://www.npmjs.com/package/eslint-plugin-html)  
- [`eslint-import-resolver-alias`](https://www.npmjs.com/package/eslint-import-resolver-alias)  
- [`eslint-import-resolver-node`](https://www.npmjs.com/package/eslint-import-resolver-node)  
- [`eslint-import-resolver-webpack`](https://www.npmjs.com/package/eslint-import-resolver-webpack)  
- [`@html-eslint/eslint-plugin`](https://www.npmjs.com/package/@html-eslint/eslint-plugin)  
- [`@html-eslint/parser`](https://www.npmjs.com/package/@html-eslint/parser)  
- [`typescript`](https://www.npmjs.com/package/typescript)  
- [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)  
- [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser)  
<!-- - [`eslint-plugin-vuejs-accessibility`](https://www.npmjs.com/package/eslint-plugin-vuejs-accessibility)   -->
<!-- - [`@babel/eslint-parser`](https://www.npmjs.com/package/@babel/eslint-parser)   -->
