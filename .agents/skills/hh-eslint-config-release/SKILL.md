---
name: "hh-eslint-config-release"
description: "为 eslint-config-helper 发布 v2 legacy 和/或 v3 flat 包：按改动范围更新版本与 CHANGELOG，分别提交并创建匹配的 Git tag。当用户要求更新版本、准备发布、同步 v2/v3 changelog、为发布打 tag 时触发。"
argument-hint: "[v2|v3|both] [版本级别或发布说明] [major.minor.patch]"
user-invocable: true
disable-model-invocation: true
author: 立树
version: 1.0.0
created: 2026-11-26
updated: 2026-11-26
---

# ESLint Config Helper 版本发布

## 用途

将本仓库的版本更新流程统一为可核对、可重复的发布操作：

1. 根据代码改动确定发布 `v2-legacy`、`v3-flat` 或两者；
2. 更新对应的 `package.json` 版本和 `CHANGELOG.md`；
3. 每个包各自创建一个只包含自身发布文件的版本提交；
4. 在各自的发布提交上创建与包版本完全匹配的 tag。

本 Skill 只负责版本发布提交和本地 tag，不会默认推送 commit 或 tag。

## 何时触发

- 用户要求更新项目/包版本、准备发布、更新 changelog 或打版本 tag；
- 用户要求将共享规则改动发布到 v2 和 v3；
- 用户要求自动完成该仓库的版本发布流程。

## 仓库发布约定

| 包 | 包目录 | 版本清单 | 更新记录 | tag |
| --- | --- | --- | --- | --- |
| v2 legacy | `packages/v2-legacy/` | `package.json` | `CHANGELOG.md` | `v<package.json version>`，如 `v2.1.10` |
| v3 flat | `packages/v3-flat/` | `package.json` | `CHANGELOG.md` | `v<package.json version>`，如 `v3.2.6` |

- `packages/core/` 中的共享规则或实现变更同时影响两个发行包，默认发布 v2 和 v3。
- 仅影响某一个发行包自身的改动，只发布对应包。
- 用户明确指定发布包时按用户指定执行；若指定范围与改动影响明显冲突，先说明并停止打 tag。

## Step 1：检查发布基线

1. 检查 `git status --short`、近期提交和现有 tag。
2. 确认要发布的源代码改动已存在于当前 `HEAD`。如果目标改动仍未提交，或有其他未完成的代码变更，不要创建发布提交/tag；先回报具体阻塞，避免 tag 指向不含目标代码的提交。
3. 确认目标包当前版本、最新 changelog 版本，以及该版本对应的 tag 尚不存在。
4. 查看源代码 diff 和用户提供的发布说明，确定实际行为变化。不要仅根据文件名猜测 changelog 内容。

如发布范围不明确，按上方的仓库发布约定判定；改动无法归属或发现潜在不兼容变更时，先向用户确认，不要猜测版本级别。

## Step 2：确定新版本

- 用户明确给出目标版本或升级级别时，按其要求执行。
- 未指定时，默认递增 patch 版本。
- 明确的向后不兼容变更应递增 major；新增向后兼容的公开能力可递增 minor；一般规则修正、命名规则修正和兼容性 bug 修复递增 patch。
- 对 v2 与 v3 分别读取各自现有版本并独立递增，不要假设两个包的版本号相同。
- 更新前验证相应 tag 不存在。已有同名 tag 时立即停止，不得覆盖或移动 tag。

## Step 3：更新版本与 CHANGELOG

对每个目标包分别操作：

1. 更新其 `package.json` 的 `version`。
2. 在其 `CHANGELOG.md` 顶部追加版本段，沿用文件现有格式：

   ```markdown
   ## vX.Y.Z

   `发布：YYYY-MM-DD`
   <!-- 开发：YYYY-MM-DD -->
   - <改动类别>：<准确说明修改的规则/行为及解决的问题>
   ```

3. 日期使用当前日期。
4. 说明应能从代码 diff 验证。对 ESLint 规则变更，尽可能写出规则 ID、改变前后的行为，以及所修复的误报/限制；不要只写“优化规则”或把未改变的行为写成新能力。
5. 共享代码改动需在 v2、v3 两份 CHANGELOG 中分别记录同一项实质变更，版本号使用各包各自的新版本。

## Step 4：验证发布文件

对每个目标包验证：

- `package.json` 是有效 JSON，版本值等于计划发布版本；
- `CHANGELOG.md` 第一条版本标题与包版本一致，且描述与代码实际改动一致；
- 目标 tag 尚不存在；
- `git diff --check` 通过。

在提交前检查完整 diff，不要顺手修改无关文件。

## Step 5：逐包提交并打 tag

必须按包隔离暂存和提交。不得用 `git add -A` 或 `git add .`。

对每个目标包单独执行以下流程，再继续下一个包：

1. 只暂存对应包的 `package.json` 和 `CHANGELOG.md`。
2. 检查 `git diff --cached --name-status` 和完整暂存 diff，确保没有其他包或源代码文件。
3. 创建版本提交，格式：

   ```text
   build: vX.Y.Z

   1. 更新 <包名> 的版本号。
   2. 在 CHANGELOG.md 中记录本次发布的变更。
   ```

4. 在刚生成的提交上创建轻量 tag：`git tag vX.Y.Z`。
5. 验证 tag 指向当前包的版本提交。

v2 和 v3 的提交必须分开；共享代码发布时，为每个包分别创建一个提交和 tag。禁止把两个包的版本文件合并到同一个发布提交。

如果一个包已经提交并打 tag，而后续包流程失败，不要回滚、删除或移动已创建的提交/tag；停止并清楚报告已完成与未完成部分。

## Step 6：最终核验与回执

核验并向用户汇报：

- 每个发布包的旧版本、新版本、提交 hash 和 tag；
- 各 tag 指向的提交确实只改动对应包的版本文件与 changelog；
- 工作区状态；若存在无关改动，明确说明没有纳入发布提交；
- tag 仅在本地创建还是也按用户指示推送。未收到推送要求时不推送。

不要声称已发布到 npm，除非确实观察到发布工作流完成成功。
