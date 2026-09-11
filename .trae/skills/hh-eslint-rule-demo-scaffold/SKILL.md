---
name: "hh-eslint-rule-demo-scaffold"
description: "为一份 ESLint 规则文件（如 packages/core/rules/react/jsx.js）批量生成对应的 demo 示例：每条规则一个 {ruleId}.jsx/.ts，包含正确/错误示例与备注，跑 eslint 校验后确保只报目标规则错误。当用户提到生成规则示例、demo 示例、创建 demo 文件夹、按规则名建示例等场景时触发。"
author: 立树
version: 1.0.0
created: 2026-09-11
updated: 2026-09-11
---

# ESLint 规则 Demo 脚手架

## Skill 用途

配合 `eslint-plugin-rule-scaffold`：前者只负责生成规则声明，本 Skill 负责为它们批量生成**可视化 demo 示例**。

对于一份规则文件（比如 `packages/core/rules/react/jsx.js`），本 Skill 会：

1. 在 `demos/demo-v3/<lang>-<ns>/<维度名>/` 下创建同名文件夹；
2. 为文件中每条规则生成 `{ruleId}.<ext>` 示例文件，包含 **✅ 正确示例 + ❌ 错误示例 + 备注**；
3. 立刻用 ESLint 校验生成的示例，确认 IDE 打开时**只出现目标规则的报错**；
4. 对干扰规则一律用 `/* eslint-disable <ruleId> */`（每条规则一行）关闭，风格与 `eslint-disable-style-unifier` 一致。

## 何时触发

- 用户说：生成 demo 示例 / 建示例文件 / 按规则名建文件 / 根据 react 规则文件建 demo；
- 用户提供一份规则文件路径，要求「每条规则做一个示例」；
- 上一个 Skill `eslint-plugin-rule-scaffold` 刚跑完，需要顺势生成 demo。

## 输入参数

| 参数              | 示例                                               | 说明                                   |
| ----------------- | -------------------------------------------------- | -------------------------------------- |
| `ruleFile`        | `packages/core/rules/react/jsx.js`                 | 规则源文件（供读取规则清单和推荐配置） |
| `demoRoot`        | `demos/demo-v3/react-jsx`                          | demo 根目录；不存在时创建              |
| `dimensionFolder` | 由 `ruleFile` 文件名派生（如 `jsx`、`fixable`）    | 在 `demoRoot` 下的分组子目录           |
| `ext`             | `.jsx` / `.tsx` / `.ts` / `.js`                    | 示例文件后缀                           |
| `ruleShortId`     | 由 `ruleId` 派生（如 `react/jsx-key` → `jsx-key`） | 用作文件名                             |

## 目录 & 命名约定

- 目录：`<demoRoot>/<dimensionFolder>/`
- 文件名：`<ruleShortId><ext>`（去掉命名空间前缀，只保留 `/` 之后的部分，如 `react/jsx-key.jsx` → `jsx-key.jsx`）；如果 ruleId 本身包含 `/` 多段（罕见），把 `/` 替换成 `--`。
- `demoRoot` 下必须有一个 `eslint.config.js`，仅为该目录范围开启目标插件（可能需要 `tsconfig.json`）；参考 `demos/demo-v3/react-jsx/eslint.config.js`。

## Step 1：读取规则清单

- Read `ruleFile`，解析出 `Object.keys(module.exports.rules)` 与它们的推荐配置；
- 同时抽出注释中的「官方推荐 / options / 社区最佳 / 文档链接」段落，用于 demo 头部注释。

## Step 2：单个示例文件模板

```jsx

// ==========================================================
// <ruleId> 示例
// ----------------------------------------------------------
// 规则含义：<一句话中文简述>
// 官方推荐：<recommended | 无>；本项目配置：<从 ruleFile 中取当前值>
// options：<关键项摘要>
// 文档：<docs.url>
// ==========================================================

/* eslint <ruleId>: <当前推荐配置的字面量，如 ["error", { "max": 5 }]> */

import React from "react"; // 依据 ext 调整 import

// ---------------- ✅ 正确示例 ----------------
function Ok() { ... }

// ---------------- ❌ 错误示例 ----------------
function Bad() { ... }

export { Ok, Bad };
```

要点：

- 顶部先用 `/* eslint <ruleId>: [...] */` **inline 打开**目标规则，即使 `ruleFile` 里默认是 `off`，也要在 demo 中打开，保证 IDE 能看到报错；
- **严重度必须遵循「可 --fix → `warn`，不可 --fix → `error`」的项目分级约定**：
  - inline override 要写具体等级：可 fixable 的规则写 `/* eslint <ruleId>: ["warn", ...] */`，不可 fixable 的规则写 `/* eslint <ruleId>: ["error", ...] */`；
  - 目的：让打开 demo 时 IDE 呈现出的颜色（黄=可修 / 红=必改）与业务里一致，也符合用户「按颜色判断能否自动修复」的心智；
  - 从 `ruleFile` 里的现值读取即可，不要人工再判断。
- 一个文件同时展示 **同一 option 下的正确 + 错误示例**；option 有多档时可以多写几组，用注释隔开；
- 除非该规则专门用于 non-JSX 场景，否则保留 `import React from "react";`；
- 对于 deprecated 规则，注释里要写清「替代规则」，并在 inline override 里显式打开被废弃的原规则。

## Step 3：立刻校验

对每个刚生成的文件跑：

```bash
npx eslint <demoRoot>/<dimensionFolder>/<ruleShortId><ext> --config <demoRoot>/eslint.config.js --format=stylish
```

**期望结果**：报错列表里只包含目标 ruleId。如果出现其他 rule 命中：

1. 优先想是否可以**改示例代码**避开（例如去掉多余的 lint 味道）；
2. 无法回避时，用 `/* eslint-disable <ruleId> */` 逐条关闭干扰规则（每条一行），遵循 `eslint-disable-style-unifier` 的风格。

绝对不要一次性 `/* eslint-disable */` 关全部 —— 会把目标规则也一并关掉。

## Step 4：干扰规则清单（可继承）

以下规则在 demo 里非常常见，需要一开始就默认在文件头部关闭，避免逐个补：

```jsx
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-multi-comp */
/* eslint-disable object-curly-newline */
```

具体保留哪些由 Step 3 的实际输出决定。同一个规则不要重复出现。

## Step 5：任务编排

一个维度文件下的规则可能高达 20+ 条。可用以下方式并发：

- 少量（≤6）：串行 Read + Write + Shell 校验；
- 中等（7–15）：分 2–3 批并发调用 Agent（`general-purpose`），每批给同一子智能体一组 ruleId + 模板；
- 大量（>15）：以 subagent 每次处理 5 条为单位并发，最后合并回执。

Prompt 骨架（供派发时套用）：

> 你在 `demos/demo-v3/<...>/<dimensionFolder>/` 下为下列 rule 各生成一个 `<ruleShortId><ext>` 示例文件：<rule 列表>。
> 每个文件遵循 SKILL.md Step 2 的模板；生成完立即 `npx eslint <文件路径>` 校验，只允许出现目标规则的报错，其余全部通过 `/* eslint-disable <ruleId> */`（每条一行）关闭。
> 最终回执格式：每条规则 → 校验结果（error 数 & 命中的 ruleId 列表）。

## Step 6：交付物

- [ ] `<demoRoot>/<dimensionFolder>/*.jsx`（每条规则一个文件）
- [ ] 每个文件 ESLint 校验结果为「只报目标规则」
- [ ] 顶部 `/* eslint-disable */` 指令风格统一（每条一行，遵循 `eslint-disable-style-unifier`）
- [ ] 回执列出：本次生成的文件数、跳过或有异常的文件（如需人工介入）

## 边界与坑

- **IDE auto-fix 吞掉 disable**：某些规则在保存时会被 IDE 自动修复（例如空格类），此时 `Edit` 后的文件会被 IDE 立即改回。改用 `Shell` heredoc 直接写整段落盘：
  ```bash
  cat > <path> <<'EOF'
  ...文件内容...
  EOF
  ```
- **TS 项目需要 tsconfig**：如果 `demoRoot` 下配置了 `projectService: true`，示例文件必须被 `tsconfig.json` 的 `include` 覆盖，否则 `@typescript-eslint/parser` 会报「file not found in project」。
- **规则默认 off 时** 在 demo 里必须 inline 用 `/* eslint <ruleId>: [...] */` 显式打开，否则 IDE 看不到错误；这与 `eslint-disable-style-unifier` 中「保留非 off 的 inline override」策略吻合。
- **deprecated 规则**：优先展示替代规则的语义差异；示例代码要能同时触发原规则（打开时）和展示替代方案。
- **一个规则天然会命中另一个规则**：例如 `react/jsx-key` 的错误示例往往同时命中 `react/no-array-index-key`；先尝试用不同示例代码规避，无法规避时用 disable 关闭。

## 参考实现

- 目录范例：`demos/demo-v3/react-jsx/`
- 规则映射：`packages/core/rules/react/*.js`
- eslint config：`demos/demo-v3/react-jsx/eslint.config.js`
