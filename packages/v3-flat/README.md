
# @houheaven/eslint-config-helper

> Eslint 规则助手，基于 Eslint Flat Config 的规则集。  
> 主要功能是处理 Javascript、Typescript、Vue、HTML 中的语法校验、代码格式化。  


## 功能  

- 项目依赖于 `Eslint v9`，提供 JS 代码的校验规则
- 内置 `@stylistic/eslint-plugin`，提供 JS、TS 代码格式化的校验规则
- 内置 `@typescript-eslint/eslint-plugin`，提供 TS 代码的校验规则
- 内置 `eslint-plugin-import`，提供 import 的校验规则
- 内置 `eslint-plugin-vue`，提供 Vue 代码的校验规则
- 内置 `eslint-plugin-react`，提供 React 代码的校验规则
- 内置 `eslint-plugin-react-hooks`，提供 React Hooks 的校验规则
- 内置 `@html-eslint/eslint-plugin`，提供 html 文件的解析和校验规则
- 内置 `eslint-plugin-html`，提供 html 文件中 &lt;script> 的 JS 解析能力


## 安装

```bash
pnpm add -D @houheaven/eslint-config-helper@next
```

## API

该包默认导出一个对象，包含以下内容：

- `configs`：开箱即用的预设配置，绑定了文件拓展名
- `supports`：提供特定文件的文件解析和校验规则，不与文件拓展名绑定

### configs 预设配置列表
| 属性名              | 功能说明                                     | * 已绑定文件            |  
| ------------------ | ------------------------------------------- | --------------------- |  
| configs.es5        | 校验 JS（Es5） 代码                           | `.js` `.mjs` `.cjs`   |  
| configs.es6        | 校验 JS（Es6+）+ import 代码                  | `.js` `.mjs` `.cjs`   |  
| configs.typescript | 校验 TS + JS（Es6+）+ import 代码             | `.ts`                 |  
| configs.vue2       | 校验 Vue2 + JS（Es6+）+ import 代码           | `.vue`                |  
| configs.vue2Ts     | 校验 Vue2 + TS + JS（Es6+）+ import 代码      | `.vue`                |  
| configs.vue3       | 校验 Vue3 + JS（Es6+）+ import 代码           | `.vue`                |  
| configs.vue3Ts     | 校验 Vue3 + TS + JS（Es6+）+ import 代码      | `.vue`                |  
| configs.reactJsx   | 校验 React + JS（Es6+）+ import 代码          | `.jsx`                |  
| configs.reactTsx   | 校验 React + TS + JS（Es6+）+ import 代码     | `.tsx`                |  
| configs.htmlEs5    | 校验 html 和 &lt;script> 中的 JS（Es5） 代码   | `.html` `.htm` `.php` |  
| configs.htmlEs6    | 校验 html 和 &lt;script> 中的 JS（Es6+） 代码  | `.html` `.htm` `.php` |  

### supports 功能列表
| 属性名               | 功能说明                                     | * 适用文件              |  
| ------------------- | ------------------------------------------- | --------------------- |  
| supports.es5        | 校验 JS（Es5） 代码                           | `.js` `.mjs` `.cjs`   |  
| supports.es6        | 校验 JS（Es6+）+ import 代码                  | `.js` `.mjs` `.cjs`   |  
| supports.typescript | 校验 TS + JS（Es6+）+ import 代码             | `.ts`                 |  
| supports.vue2       | 校验 Vue2 + JS（Es6+）+ import 代码           | `.vue`                |  
| supports.vue2Ts     | 校验 Vue2 + TS + JS（Es6+）+ import 代码      | `.vue`                |  
| supports.vue3       | 校验 Vue3 + JS（Es6+）+ import 代码           | `.vue`                |  
| supports.vue3Ts     | 校验 Vue3 + TS + JS（Es6+）+ import 代码      | `.vue`                |  
| supports.reactJsx   | 校验 React + JS（Es6+）+ import 代码          | `.jsx`                |  
| supports.reactTsx   | 校验 React + TS + JS（Es6+）+ import 代码     | `.tsx`                |  
| supports.htmlEs5    | 校验 html 和 &lt;script> 中的 JS（Es5） 代码   | `.html` `.htm` `.php` |  
| supports.htmlEs6    | 校验 html 和 &lt;script> 中的 JS（Es6+） 代码  | `.html` `.htm` `.php` |  


## 用法

方式 1：ESM
- `package.json` 设置 `type: "module"`  
- 在项目根目录创建 `eslint.config.js`  
  
方式 2：
- 在项目根目录创建 `eslint.config.mjs`  


### Javascript（ES5）

校验文件范围：`.js`

```js
import hhEslintConfigHelper from "@houheaven/eslint-config-helper";

export default [
  ...hhEslintConfigHelper.configs.es5,
];
```

### Javascript（ES6+）

校验文件范围：`.js`

```js
import hhEslintConfigHelper from "@houheaven/eslint-config-helper";

export default [
  ...hhEslintConfigHelper.configs.es6,
];
```

### Typescript

校验文件范围：`.ts` `.js`

```js
import hhEslintConfigHelper from "@houheaven/eslint-config-helper";

export default [
  ...hhEslintConfigHelper.configs.es6,
  ...hhEslintConfigHelper.configs.typescript,
];
```

### Vue2

校验文件范围：`.vue` `.js`

```js
import hhEslintConfigHelper from "@houheaven/eslint-config-helper";

export default [
  ...hhEslintConfigHelper.configs.es6,
  ...hhEslintConfigHelper.configs.vue2,
];
```

### Vue2 + TypeScript

校验文件范围：`.vue` `.ts` `.js`

```js
import hhEslintConfigHelper from "@houheaven/eslint-config-helper";

export default [
  ...hhEslintConfigHelper.configs.es6,
  ...hhEslintConfigHelper.configs.typescript,
  ...hhEslintConfigHelper.configs.vue2Ts,
];
```

### Vue3

校验文件范围：`.vue` `.js`

```js
import hhEslintConfigHelper from "@houheaven/eslint-config-helper";

export default [
  ...hhEslintConfigHelper.configs.es6,
  ...hhEslintConfigHelper.configs.vue3,
];
```

### Vue3 + TypeScript（推荐）

校验文件范围：`.vue` `.ts` `.js`

```js
import hhEslintConfigHelper from "@houheaven/eslint-config-helper";

export default [
  ...hhEslintConfigHelper.configs.es6,
  ...hhEslintConfigHelper.configs.typescript,
  ...hhEslintConfigHelper.configs.vue3Ts,
];
```

### React（JSX）

校验文件范围：`.jsx`

```js
import hhEslintConfigHelper from "@houheaven/eslint-config-helper";

export default [
  ...hhEslintConfigHelper.configs.reactJsx,
];
```

### React + TypeScript（TSX，推荐）

校验文件范围：`.tsx`

```js
import hhEslintConfigHelper from "@houheaven/eslint-config-helper";

export default [
  ...hhEslintConfigHelper.configs.reactTsx,
];
```

### html + ES5

校验文件范围：`.html` `.js`

```js
import hhEslintConfigHelper from "@houheaven/eslint-config-helper";

export default [
  ...hhEslintConfigHelper.configs.es5,
  ...hhEslintConfigHelper.configs.htmlEs5,
];
```

### html + ES6

校验文件范围：`.html` `.js`

```js
import hhEslintConfigHelper from "@houheaven/eslint-config-helper";

export default [
  ...hhEslintConfigHelper.configs.es6,
  ...hhEslintConfigHelper.configs.htmlEs6,
];
```

### 自定义覆盖

```js
import hhEslintConfigHelper from "@houheaven/eslint-config-helper";

export default [
  ...hhEslintConfigHelper.configs.es6,
  {
    files: ["src/example.js"],
    rules: {
      "no-console": "off",
    },
  },
];
```

### supports 应用场景

```js
import hhEslintConfigHelper from "@houheaven/eslint-config-helper";

export default [
  {
    files: ["**/*.vue"],
    ...hhEslintConfigHelper.supports.vue3,
  },
  {
    files: ["src/example.js"],
    ...hhEslintConfigHelper.supports.es6,
    rules: {
      ...hhEslintConfigHelper.supports.es6.rules,
      "no-console": "off",
    },
  },
];
```

## 环境要求

- Node.js >= 18
- ESLint ^9.0.0 || ^10.0.0


## 相关文档

- 查看 [`Eslint 规则文档`](https://www.npmjs.com/package/eslint)  
- 查看 [`eslint-plugin-import 规则文档`](https://www.npmjs.com/package/eslint-plugin-import)  
- 查看 [`eslint-plugin-vue 规则文档`](https://eslint.vuejs.org/rules/)  
- 查看 [`eslint-plugin-react 规则文档`](https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules)  
- 查看 [`eslint-plugin-react-hooks 规则文档`](https://www.npmjs.com/package/eslint-plugin-react-hooks)  
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
- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)  
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)  
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
