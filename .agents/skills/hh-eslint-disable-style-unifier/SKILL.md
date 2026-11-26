---
name: "hh-eslint-disable-style-unifier"
description: '统一 ESLint 关闭规则指令的书写风格：把 `/* eslint <ruleId>: "off" */` 与合并式 `/* eslint-disable a, b */` 全部改写为「每条规则一行 `/* eslint-disable <ruleId> */`」。当用户提到 eslint-disable 混用、风格不统一、批量整理关闭规则指令时触发。'
argument-hint: "[v2|v3|both] [版本级别或发布说明]"
user-invocable: true
disable-model-invocation: true
author: 立树
version: 1.2.0
created: 2026-09-11
updated: 2026-09-11
---

# ESLint Disable 风格统一

## Skill 用途

在同一份代码库中，关闭 ESLint 规则常见有三种写法：

1. `/* eslint <ruleId>: "off" */`（inline override）
2. `/* eslint-disable <ruleId> */`（block disable，单条）
3. `/* eslint-disable a, b, c */`（block disable，多条合并）

三种混用会导致：

- Review 时视觉噪音大，难以一眼看出关闭了几条规则；
- IDE 保存钩子有时会自动整理写法，行为不稳定；
- 后续增删关闭项时容易漏掉合并列表里的某一条。

本 Skill 在**不改变有效关闭规则集合**的前提下，把上述三种写法统一为「一条规则一行的 `/* eslint-disable <ruleId> */`」。

## 何时触发

出现以下场景之一即应主动使用：

- 用户说：混用、统一风格、整理 `eslint-disable`、每条规则一行、格式对齐、拆开合并的 disable；
- 用户指定某个目录/文件，要求排查同类问题；
- 在 demo / 示例文件中要求 `IDE 只显示目标规则报错`，需要清理干扰规则的关闭方式。

## 保留的写法

以下写法**不改动**，避免破坏功能：

- `/* eslint-disable-next-line ... */`：作用域是下一行，语义特殊；
- `// eslint-disable-line ...`：作用域是当前行，语义特殊；
- `/* eslint <ruleId>: ["error", { ... }] */`、`/* eslint <ruleId>: "warn" */` 等**非 off** 的 inline override（属于「临时启用/改级别」而非「关闭」，语义不同）；
- 文件顶部形如 `/* eslint-env ... */`、`/* global ... */` 的其它 ESLint 指令。

## 转换规则

| 原始写法                         | 统一后写法                                      |
| -------------------------------- | ----------------------------------------------- |
| `/* eslint <ruleId>: "off" */`   | `/* eslint-disable <ruleId> */`                 |
| `/* eslint <ruleId>: ["off"] */` | `/* eslint-disable <ruleId> */`                 |
| `/* eslint-disable a, b, c */`   | 拆成 3 行，每行 `/* eslint-disable <ruleId> */` |
| `/* eslint-disable <ruleId> */`  | 保持不变                                        |

去重规则：如果同一个 `ruleId` 在同一文件中出现多次，只保留第一次出现的那行。

**紧邻规则（必须遵守）**：同一段 `/* eslint-disable <ruleId> */` 之间**不允许出现空行**（包括只含空格的"看似空"的行）。多条 disable 必须以「连续行」的方式排列，形成一个视觉上紧凑的块。相邻两条 disable 之间只能是**紧挨着的下一行**，不允许有空白行、注释行或任何其它内容插入。空行只允许出现在整块 disable 段落的**上/下边界**（用于与文件其余部分隔开）。

## 执行流程

Step 1. **先关闭 IDE 的 ESLint autofix（前置硬阻塞）**

- 打开 `.vscode/settings.json`，查看 `editor.codeActionsOnSave["source.fixAll.eslint"]` 的值。
- 只要该项为 `"explicit"` / `"always"` / `true`，任何一次「文件保存」都会同时做两件事：
  1. 把 demo 里的「错误示范」代码（如 `<Fragment>`、多余空格、错误缩进等）自动修好；
  2. 把「未产生报错的 disable 指令」当作 `unused disable directive` 直接删掉。
- 上述两件事都会让本 Skill 的产出被覆盖，导致 demo 的错误示例失效、disable 段被留下"只含空格的空行"。
- 因此在开始改写前必须把该项改为 `"never"` 或 `false`。若无权限直接编辑该文件，明确要求用户手动改并等待其确认后再继续。
- **注意**：即使当前配置是 `"never"`，也要检查 `.trae`、`.cursor`、`.idea` 等 IDE 目录下是否有等价的 autofix 设置；一处漏掉就会全盘失守。
- Skill 完成后，若需要保留原有开发体验，可提醒用户改回 `"explicit"`。

Step 2. **限定范围**

- 明确用户给定的目录或文件；未给定时询问一次。
- 只处理 `.js` / `.jsx` / `.ts` / `.tsx` / `.cjs` / `.mjs` 等能被 ESLint 解析的文件。

Step 3. **扫描候选**

在目标范围内定位可能需要改写的行：

```bash
# 场景 A：合并式 eslint-disable
grep -rn "eslint-disable" <target> --include="*.jsx" --include="*.js" --include="*.tsx" --include="*.ts" \
  | grep -E "eslint-disable[^:]*,"

# 场景 B：inline off 写法
grep -rnE '/\* *eslint +[^ ]+ *: *("off"|\["off"\]) *\*/' <target>
```

Step 4. **逐文件改写**

- 使用 Read 读入原文件；
- 严格匹配 `old_string`（保留缩进），用 Edit 逐条替换：
  - 合并式 → 拆成多行；
  - inline off → 改成 `/* eslint-disable <ruleId> */`；
- 顺序上，先合并式，再 inline off，避免相互干扰；
- 保持原本注释所在段落位置，不要移动到文件其它位置；
- **紧邻规则**：改写后同一段 disable 之间若出现空行或"只含空格的行"，必须一并删除，让所有 `/* eslint-disable ... */` 行**行行紧邻**。若与「非 off 的 inline override」（如 `/* eslint <ruleId>: ["error", ...] */`）同处一段，把该 override 视为同段成员，也不允许中间夹空行。

Step 5. **验证**

- 用相同的 `grep` 再跑一遍，确认目标范围内已无残留混用。
- 用下面的脚本再扫一遍相邻 disable 之间是否夹了空行，必须为空：
  ```bash
  grep -rnE '^\s*/\* *eslint-disable ' <target> --include="*.jsx" --include="*.js" --include="*.tsx" --include="*.ts" | python3 -c "
  import sys, re, collections
  lines = collections.defaultdict(list)
  for raw in sys.stdin:
      m = re.match(r'^(.+?):(\d+):', raw)
      if not m: continue
      lines[m.group(1)].append(int(m.group(2)))
  bad = []
  for f, nums in lines.items():
      nums.sort()
      for i in range(1, len(nums)):
          if nums[i] - nums[i-1] > 1:
              bad.append((f, nums[i-1], nums[i]))
  print('残留空行:', bad if bad else '(无)')
  "
  ```
- 如果目标目录是 demo 目录，务必逐个文件做「示例代码完整性」核对：跑 `git diff --stat -- <target>`，改动应当**只集中在 disable 指令行**；如果发现示例代码也被改动（例如 `<Fragment>` 变成 `<>`、错误缩进被拉直等），说明 Step 1 的 autofix 没关干净，回到 Step 1 重新核查后从 `git restore` 恢复文件再来一遍。
- 如果项目可跑 ESLint，选取一个改动过的文件跑 `npx eslint <file>`，确认报错列表未变多也未变少。

Step 6. **清理 unused disable directives**

改写完风格后，IDE / ESLint 常会报 `Unused eslint-disable directive (no problems were reported from '<ruleId>')`（即 `reportUnusedDisableDirectives` 命中）。这些残留说明**当前文件根本没有触发该规则**，`disable` 是多余的，必须删除，避免文档误导——尤其在 demo 文件中，一条不再必要的 disable 反而变成噪音，让读者以为示例代码原本会触发这条规则。

**触发条件**：本步骤为**强制步骤**，只要 IDE 或 `npx eslint <file>` 的输出里出现 `Unused eslint-disable directive` 就必须执行；未清理干净不得进入 Step 7。

**清理规则**：

- 逐个把 IDE 报出的每一条 `Unused eslint-disable directive` 对应的**那一整行** `/* eslint-disable <ruleId> */` 从文件里删除。
- 删除后同段内不得留下"只含空格"的空壳行；如果整段 disable 被清空，则连带上下相邻的空行一起收敛为单个空行边界，保持文件顶部与 `import` 之间只有一处空行。
- 删除后必须重新运行 Step 5 的诊断，直到 IDE 中的 `Unused eslint-disable directive` 全部消失，且未产生新的干扰规则报错。
- 若某条 disable 位于「专门用来屏蔽某条演示外规则」的位置（例如 demo 顶部为了排除 `react/prop-types` 而加），而清理后 IDE 反而报出该规则的原始错误——说明这条 disable 原本就是**必要的**，请把它加回去，并到源文件核查为什么这次没有触发（例如示例代码被 autofix 修掉），从 `git restore` 回滚后重来。

**特殊情况**：

- 若报的是**非 off 的 inline override**（如 `/* eslint <ruleId>: ["error", ...] */`）不再触发目标规则，说明示例代码本身已经被 autofix 修好或被移除；这时**不要**直接删该 override（删掉会让 demo 失去"临时开启目标规则"的初衷），而应回到 Step 1 核查 autofix，然后 `git restore` 后重来。
- 若某条 disable 被删除后导致另一条本来"没报错"的 disable 变成必要（因为 ESLint 报错次序变化），需要重新走一遍 Step 5→Step 6，直到稳态。

**参考诊断输出片段**：

```
⚠ [Line 15:1] Unused eslint-disable directive (no problems were reported from 'react/jsx-closing-bracket-location').
⚠ [Line 16:1] Unused eslint-disable directive (no problems were reported from 'react/jsx-max-props-per-line').
```

对应处理：把这两行 `disable` 从文件里删除，然后检查是否留下空行；如果留下则一并合并空行。

Step 7. **回执**

- 用一段简短的清单告诉用户：改了哪些文件、每个文件的改动位置（可用 [file link](file:///...#Lstart-Lend) 形式）。
- 明确指出 `disable-next-line` / `disable-line` 未改动。
- 如果本轮删除过 `Unused eslint-disable directive`，在回执里**单独列出被删除的规则 ID 及所在文件**，方便用户复核 demo 的"目标规则"预期是否与实际报错吻合。
- 如果在 Step 1 修改过 `.vscode/settings.json`，在回执里提醒用户「已临时把 `source.fixAll.eslint` 改为 `never`，如需恢复请自行改回 `explicit`」。

## 故障排除

- **症状**：Edit 完文件后，`git diff` 显示错误示例代码也被改动（例如 `<Fragment>` 变成 `<>`、多余空格被吃掉、4 空格缩进被拉直）。
  - **成因**：IDE 的 `source.fixAll.eslint` autofix 在文件保存后立即触发，把错误示例代码"顺手"修复。
  - **修复**：`git -C <repo> restore --worktree <files>` 从 index 恢复；确认 Step 1 的 autofix 已关闭；重新执行 Step 4。
- **症状**：改写后 disable 段落里出现"只含空格的空白行"，破坏紧邻规则。
  - **成因**：IDE 的 `reportUnusedDisableDirectives` 或 autofix 把「当前没有产生报错」的 disable 指令删除，留下空壳行。
  - **修复**：同上先关 autofix；如果原 disable 段落里有已经因目标规则整改而不再需要的项，走 Step 6 手工去掉整行（含前后可能残留的空白行），不要留下空白行。
- **症状**：清理 `Unused eslint-disable directive` 后，demo 里冒出未预期的干扰规则报错。
  - **成因**：被删除的那条 disable 原本就是必要的，只不过在上一轮扫描时因为其它 disable 先生效被误判为 unused。
  - **修复**：`git restore` 该文件，重新执行 Step 5 拿最新诊断输出后再进 Step 6，注意**保留报错规则对应的 disable**。

## 边界与拒绝改写

- 如果一条 inline `/* eslint <ruleId>: "off" */` **旁边紧跟同规则的 `["error", { ... }]`**（例如同一行/相邻行覆盖），保持原样并提示用户 —— 语义可能是「先开后关」的调试态。
- 如果目录里有生成产物（如 `dist/`、`node_modules/`），跳过。
- 如果检测到该行位于 `/* eslint-disable */`（无 ruleId 的全局关闭）之后，需保持全局关闭优先级不变。

## 示例

改写前：

```jsx
/* eslint-disable import/no-unresolved, no-unused-vars, react/no-multi-comp */
/* eslint react/destructuring-assignment: "off" */
/* eslint react/prop-types: ["off"] */
```

改写后：

```jsx
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
```

**错误示范（不允许）** —— 相邻 disable 之间夹了空行/空白行：

```jsx
/* eslint-disable import/no-unresolved */

/* eslint-disable react/prop-types */

/* eslint-disable react/no-multi-comp */
```

**正确写法** —— 整段 disable 行行紧邻，只在段落上下与文件其余部分之间留空行：

```jsx
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-multi-comp */

import React from "react";
```

**Unused disable 清理示例**：

改写后 IDE 报：

```
⚠ Unused eslint-disable directive (no problems were reported from 'react/jsx-closing-bracket-location').
⚠ Unused eslint-disable directive (no problems were reported from 'react/jsx-max-props-per-line').
```

清理前：

```jsx
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/no-unresolved */
```

清理后（删除两条 unused 的 disable，剩余 disable 依然行行紧邻）：

```jsx
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/no-unresolved */
```
