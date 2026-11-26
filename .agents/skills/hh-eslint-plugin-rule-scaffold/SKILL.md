---
name: "hh-eslint-plugin-rule-scaffold"
description: "为新引入的 ESLint 插件生成一整套规则文件脚手架：从 node_modules 读取插件全量规则元数据，按维度拆分为 packages/core/rules/<ns>/*.js，附中文注释与推荐配置，并接入 core/utils.js 与可选的 v3-flat config。当用户提到接入新 eslint 插件、生成规则文件、复用 react 那套规则组织方式、批量整理某个插件的规则等场景时触发。"
author: 立树
version: 1.0.0
created: 2026-09-11
updated: 2026-09-11
---

# ESLint 插件规则脚手架

本项目已经通过 `packages/core/rules/react/*.js` 沉淀出一套稳定的 ESLint 插件接入方式：

1. 从 `node_modules/<插件包>` 读取 **全量规则元数据**（`meta.fixable` / `meta.hasSuggestions` / `meta.deprecated` / `meta.docs`）；
2. 按 **维度** 拆分为多个 `.js` 文件：`_deprecated` / `fixable` / `suggestion` / 领域分类；
3. 每条规则输出统一格式的 **中文注释块**（简述 + 官方推荐 + options + 社区最佳 + 文档链接）；
4. 在 `packages/core/utils/utils.js` 的 `EslintRules` 中新增 **命名空间聚合**；
5. 可选：在 `packages/v3-flat/` 中添加 `support-<ns>.js` 与 `<ns>.js`，并接入 `exports.js`。

本 Skill 把这一整套流程模板化，用来接入任意新的 ESLint 插件。

## 何时触发

- 用户说：接入 / 引入 / 集成 `eslint-plugin-xxx`；
- 用户说：为 `xxx` 生成规则文件、按 react 那套方式做一遍、复用 react 的规则拆分；
- 用户说：批量整理某个插件的规则、把 `xxx` 规则挂进来；
- 出现新的 ESLint 命名空间（如 `@typescript-eslint/...` / `jsx-a11y/...` / `unicorn/...`）需要落到 `packages/core/rules/<ns>/`。

## 输入参数（必要时向用户确认）

| 参数              | 示例                                          | 说明                                                     |
| ----------------- | --------------------------------------------- | -------------------------------------------------------- |
| `packageName`     | `eslint-plugin-jsx-a11y`                      | npm 包名                                                 |
| `namespace`       | `jsx-a11y`                                    | ESLint 使用的规则前缀（rule id 里 `/` 之前那段）         |
| `installTarget`   | `packages/v3-flat`                            | 用 pnpm 安装到哪个子包（可为空表示已安装）               |
| `dimensions`      | `_deprecated, fixable, suggestion, <领域...>` | 拆分维度；领域维度由用户结合插件官方文档约定             |
| `integrateV3Flat` | `true` / `false`                              | 是否要在 `packages/v3-flat/` 建立 config 和 support 文件 |

## 目录 & 命名约定

- 规则文件目录：`packages/core/rules/<namespace>/`
  - `<namespace>` 保持与规则 id 前缀完全一致（如 `react`、`jsx-a11y`、`@typescript-eslint` → 缩写目录 `typescript` 亦可，参考现有 `packages/core/rules/typescript/`）。
- 文件命名：小写连字符（`kebab-case`），已弃用文件加下划线前缀 `_deprecated.js`（用于在文件树中置顶排序）。
- 每个文件均导出 `module.exports = { rules: { ... } }`。

## Step 1：确认插件已安装

```bash
ls /path/to/packages/v3-flat/node_modules/<packageName> || \
  pnpm add -E <packageName> --filter <installTarget-package-name>
```

## Step 2：抽取全量规则元数据

用一段临时 Node 脚本（不必落盘为文件，可用 `node -e` 或 `Exec`）读取插件对象：

```js
const plugin = require("<packageName>");
const rules = plugin.rules; // { "<rule>": { meta, create } }

const rows = Object.entries(rules).map(([name, r]) => {
  const m = r.meta || {};
  const docs = m.docs || {};
  return {
    id: name,
    deprecated: !!m.deprecated,
    fixable: m.fixable || null,
    hasSuggestions: !!m.hasSuggestions,
    recommended:
      docs.recommended === true || docs.recommended === "recommended",
    category: docs.category || null,
    description: docs.description || "",
    url: docs.url || "",
    schema: m.schema || null,
    replacedBy: m.replacedBy || docs.replacedBy || null,
  };
});
```

输出到控制台或临时 JSON，用于后续填注释。

## Step 3：按维度分组

标准分组优先级（先命中先归属，避免同一规则被重复列入）：

1. `meta.deprecated === true` → `_deprecated.js`
2. `meta.fixable` 非空且未 deprecated → `fixable.js`
   - **该文件下所有规则默认等级为 `"warn"`**（除非规则本身为 `"off"`），banner 里必须写明这一约定。
3. `meta.hasSuggestions === true` 且未在上述两组 → `suggestion.js`
4. 剩余按领域拆分，领域来源优先级：
   - 该插件 `meta.docs.category` 若存在，直接以 category 分组；
   - 若不存在（如 `eslint-plugin-react` 官方文档没有 category），参考 react 已有约定：`jsx` / `class-component` / `prop-types` / `dom` 等，由用户在输入时约定并声明；
   - 未匹配到任何领域的规则统一归入 `other.js`，供后续人工归位。

**校验**：所有规则文件的 rules key 求并集，必须等于 `plugin.rules` 全集；若少 / 多，立即报错列出差集。

## Step 4：单规则注释模板

每条规则的注释块保持与 `packages/core/rules/react/` 完全一致的骨架，方便后续 review 与工具化生成：

```js
// 规则简述（一句话，中文）
// ----------------------------------------------------------
// 官方推荐：<无 | recommended（默认 xxx）| strict 等>
// options: <schema 摘要 或 "无">
// 社区最佳：<Airbnb / Standard / Next.js 的选型，若无写 "多数项目保持 off">
//   - 官方文档：<docs.url>
"<namespace>/<rule-id>": <推荐配置>,
```

要点：

- 中文简述必须**准确覆盖**规则意图，不要照抄英文；
- `官方推荐` 行必须写出 recommended 是不是默认打开、默认等级；
- `options` 行给出关键字段名和默认值（而非整段 JSON schema）；
- `社区最佳` 优先引 Airbnb / Next.js / TypeScript-ESLint 官方等主流约定；
- 推荐配置值默认策略（**核心约束：以「是否可 --fix」为分级依据，让 IDE 里颜色一眼可辨**）：
  - 已废弃（`meta.deprecated === true`）：`"off"`（示例文件里用 `/* eslint <ruleId>: "error" */` 临时启用）
  - **可 `--fix` 自动修复（`meta.fixable` 非空，含 `code` / `whitespace`）：一律 `"warn"`**
    - 理由：既然编辑器/CI 一跑 `--fix` 就能自动纠正，就不必阻断开发；用「黄色警告」告诉用户「保存就能自动修」。
  - **不可 `--fix` 的规则：只要要启用就一律 `"error"`**（对应 IDE 里「红色报错」，告诉用户「必须手改」）；如果业务不想启用则显式写 `"off"`，不使用 `"warn"` 作为「弱化的启用」——`warn` 严格保留给「可自动修复」的规则。
  - **不要出现「不可 fixable 但写 `"warn"`」的组合**：这条约束是本策略的核心信号，一旦破坏，用户就无法通过颜色判断能否自动修复。若确实想弱化提醒，请改成 `"off"` 并在注释中说明；如需保留提醒又不想阻断开发，考虑升级插件版本或引入 `--fix` 支持后再启用。
  - 该策略优先级：**deprecated → fixable → 其余**。所以「recommended 但同时 fixable」的规则最终仍是 `"warn"`（例如 `react/jsx-no-target-blank`、`react/no-unknown-property`）。
  - 完全不打算启用的规则：`"off"`。

## Step 5：单文件 banner 模板

```js
// ==========================================================
// <packageName> - <维度名>
// ----------------------------------------------------------
// <维度含义的一句话说明>
// ==========================================================

module.exports = {
  rules: {
    // ...每条规则的注释块 + 配置...
  },
};
```

首行必须保持一个空行，风格与 `packages/core/rules/react/*.js` 完全一致。

## Step 6：聚合到 `core/utils/utils.js`

在 `EslintRules` 对象里追加新命名空间：

```js
<namespace>: {
  ...require("../rules/<namespace>/_deprecated.js").rules,
  ...require("../rules/<namespace>/fixable.js").rules,
  ...require("../rules/<namespace>/suggestion.js").rules,
  ...require("../rules/<namespace>/<domain-1>.js").rules,
  ...require("../rules/<namespace>/<domain-2>.js").rules,
},
```

同时在 `getRules` 的全集展开、`getWarnRules` 的 switch/case 中加入 `<namespace>` 分支。

## Step 7（可选）：v3-flat 集成

如果 `integrateV3Flat = true`：

1. `packages/v3-flat/lib/supports/support-<ns>.js`：定义 `languageOptions`、`plugins`、`settings`（如 `settings.react = { version: "detect" }` 之类）。**注意** ESLint Flat Config 里 `parser` 必须放在 `languageOptions` 顶层，不能塞在 `parserOptions` 里。
2. `packages/v3-flat/lib/<ns>.js`：`configs.<ns>` 组合 `support-<ns>` + `EslintRules.<ns>`，并声明 `files`（如 `.jsx` / `.tsx`）。
3. `packages/v3-flat/exports.js`：把 `configs.<ns>` 挂出去。
4. 如需要类型信息（TS 场景），在 support 里使用 `projectService: true`，与 `support-typescript.js` 对齐。

## Step 8：验证

1. 覆盖率校验：
   ```bash
   node -e "
     const plugin = require('<packageName>');
     const agg = { ...require('./packages/core/rules/<namespace>/_deprecated').rules,
                   ...require('./packages/core/rules/<namespace>/fixable').rules,
                   ...require('./packages/core/rules/<namespace>/suggestion').rules,
                   /* ...其他 domain 文件... */ };
     const miss = Object.keys(plugin.rules).filter(k => !(('<namespace>/' + k) in agg));
     const extra = Object.keys(agg).filter(k => !plugin.rules[k.replace('<namespace>/','')]);
     console.log({ miss, extra });
   "
   ```
   期望 `miss` 与 `extra` 均为 `[]`。
2. 语法校验：`node -e "require('./packages/core/rules/<namespace>/fixable')"` 等，任意一个 `require` 抛错都要立即修。
3. **分级策略自检**：确保「可 fixable → warn」「不可 fixable 且启用 → error」严格成立。
   ```bash
   node -e "
     const plugin = require('<packageName>');
     const files = [/* 全部 domain 文件名（无扩展名）*/];
     const bad = [];
     for (const f of files) {
       const rules = require('./packages/core/rules/<namespace>/' + f + '.js').rules;
       for (const [k, v] of Object.entries(rules)) {
         const lvl = Array.isArray(v) ? v[0] : v;
         const short = k.replace(/^<namespace>\\//, '');
         const meta = (plugin.rules[short] || {}).meta || {};
         if (meta.deprecated || lvl === 'off') continue;
         const should = meta.fixable ? 'warn' : 'error';
         if (lvl !== should) bad.push({ rule: k, now: lvl, should, fixable: meta.fixable || false });
       }
     }
     console.log(bad.length ? bad : 'ok');
   "
   ```
   期望输出为 `ok`；任何 mismatch 都必须先修好再交付。
4. 真实生效校验：在 `demos/` 下选一份示例，跑一次 `pnpm eslint <example>` 确认新规则会命中。

## 常见坑

- 插件默认导出结构不一：有些插件是 `require(pkg).default` 或 `require(pkg).rules`，先 `Object.keys` 打印一次确认结构；
- 有些插件同时导出 `configs.recommended`，直接跟着它的推荐等级即可；
- 规则命名空间与目录名可以不一致（如 `@typescript-eslint` → 目录 `typescript`），但 rule key 必须带完整前缀；
- `meta.deprecated` 有些老版本插件不写，参考文档链接里的 "Deprecated" 标记兜底；
- Flat Config 中 `plugins` 字段的 key 必须与 rule id 前缀严格匹配，否则规则不会被识别；
- 若插件依赖 `settings`（如 `react`、`import/resolver`），必须在 `support-<ns>.js` 里显式声明。

## 交付物清单（一次接入完成后回执给用户）

- [ ] `packages/core/rules/<namespace>/*.js`（分维度文件）
- [ ] `packages/core/utils/utils.js`（`EslintRules.<namespace>` + `getWarnRules` case）
- [ ] （可选）`packages/v3-flat/lib/supports/support-<ns>.js`
- [ ] （可选）`packages/v3-flat/lib/<ns>.js`
- [ ] （可选）`packages/v3-flat/exports.js` 挂载
- [ ] 覆盖率校验脚本结果：`miss=[]`、`extra=[]`
- [ ] 一份最小 demo 校验通过

## 参考实现

以 `packages/core/rules/react/` 为标准范例：`_deprecated.js` / `fixable.js` / `suggestion.js` 对应通用维度，`jsx.js` / `class-component.js` / `prop-types.js` / `dom.js` 对应领域维度；聚合入口见 `packages/core/utils/utils.js` 的 `EslintRules.react`；v3-flat 集成见 `packages/v3-flat/lib/react.js` 与 `packages/v3-flat/lib/supports/support-react.js`。
