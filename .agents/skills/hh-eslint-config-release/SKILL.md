---
name: "hh-eslint-config-release"
description: "仅为 packages/ 内的 eslint-config-helper 发行包发布新版本：更新 v2 legacy 和/或 v3 flat 的版本与 CHANGELOG，分别提交并创建匹配的 Git tag。当用户要求发布包新版本时使用。"
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

## 适用范围与强制边界

- 本 Skill 只处理 `packages/` 内的发行包及其源代码，包括 `packages/core/`、`packages/v2-legacy/` 和 `packages/v3-flat/`。
- 发布前可以按包提交 `packages/` 内已经存在的源码改动；本 Skill 不应为了发布而自行修改源码。源码提交必须通过 `hh-git-commit-message` Skill 生成并执行，每个提交只能包含 `packages/` 下一个直接子目录中的变更。
- 发布版本时允许修改、暂存和提交的文件仅限目标发行包目录内的 `package.json` 与 `CHANGELOG.md`；当发布级别为 minor 时，还必须同步该发行包目录内的 `README.md`。不得修改、暂存或提交 `packages/` 以外的项目文件。
- 可以查看 Git 状态以识别范围外改动，但不能将其纳入发布流程。若当前发布任务伴有 `packages/` 外未提交改动，停止发布，说明这些改动不属于本 Skill 的处理范围。
- 若用户要求本 Skill 提交 `packages/` 以外的文件或执行与包发布无关的普通 Git 提交，立即中止本次 Skill 执行，不再修改、暂存、提交或打 tag；明确提示用户使用 `hh-git-commit-message` Skill 处理。

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

1. 检查 `git status --short`、近期提交和现有 tag，并分别查看暂存区和工作区的变更文件清单。
2. 如果发现 `packages/` 以外存在未提交改动，停止发布；不得暂存、修改或提交这些文件，并说明它们不属于本 Skill 的范围。
3. 将 `packages/` 内已有源码变更按 `packages/<直接子目录>/` 分组处理；不同子目录绝不能出现在同一个源码提交中。`packages/core/` 作为独立一组处理。
   - 已暂存的变更：逐组使用 `hh-git-commit-message` Skill 检查并提交。每次调用前确认暂存区只包含当前一个 `packages/<直接子目录>/` 下的文件；若暂存区包含多个组，先按目录拆分暂存区，再逐组调用。若同一文件同时有暂存和未暂存改动，先提交暂存内容，再检查并单独处理剩余改动。
   - 未暂存的变更：逐组只暂存当前 `packages/<直接子目录>/` 下的已修改文件，再使用 `hh-git-commit-message` Skill 提交；不得使用 `git add .` 或 `git add -A`。
   - 每组提交后检查提交文件清单和剩余状态，确认没有把其他包的变更带入该提交。若 `packages/core/` 有变更，它属于共享代码，后续默认发布 v2 和 v3。
4. 确认所有待发布源码变更都已提交到当前 `HEAD`，且没有未处理的 `packages/` 内改动；若无法安全拆分或提交，停止并报告阻塞，不得继续版本发布。
5. 确认目标包当前版本、最新 changelog 版本，以及该版本对应的 tag 尚不存在。
6. 查看已提交的源代码 diff 和用户提供的发布说明，确定实际行为变化。不要仅根据文件名猜测 changelog 内容。

如发布范围不明确，按上方的仓库发布约定判定；改动无法归属或发现潜在不兼容变更时，先向用户确认，不要猜测版本级别。

## Step 2：确定新版本

- 用户明确给出目标版本或升级级别时，按其要求执行。
- 未指定时，默认递增 patch 版本。
- 在本项目的发布流程中，minor 表示包含重要功能变更，例如新增重要功能或移除旧功能；每个目标发行包都必须同步更新自己的 `README.md`，准确说明新增、移除或变化的功能及必要的迁移/替代用法。若发布两个包，两个包的 README 都必须分别更新。
- 用户未指定版本级别时，明确的向后不兼容变更递增 major；新增向后兼容的公开能力可递增 minor；一般规则修正、命名规则修正和兼容性 bug 修复递增 patch。用户或项目要求发布 minor 时，遵从指定级别，不得因移除旧功能而擅自改为 major，并按上文要求更新 README 和迁移说明。
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
6. 如果该包升级 minor，更新其 `README.md`，使用户文档与本次重要功能变更一致；新增功能补充说明和用法，移除或替换功能写清影响及替代/迁移方式。只更新实际发布的包 README，不改仓库根目录文档。

## Step 4：验证发布文件

对每个目标包验证：

- `package.json` 是有效 JSON，版本值等于计划发布版本；
- `CHANGELOG.md` 第一条版本标题与包版本一致，且描述与代码实际改动一致；
- minor 发布时，目标发行包的 `README.md` 已同步涵盖新增、移除或变化的功能及必要迁移说明；
- 目标 tag 尚不存在；
- `git diff --check` 通过。

在提交前检查完整 diff，不要顺手修改无关文件。

## Step 5：逐包提交并打 tag

源码提交完成后，版本文件仍必须按发行包隔离暂存和提交。不得用 `git add -A` 或 `git add .`。

对每个目标包单独执行以下流程，再继续下一个包：

1. 只暂存对应包的 `package.json`、`CHANGELOG.md`；若发布级别为 minor，也暂存该包的 `README.md`。
2. 检查 `git diff --cached --name-status` 和完整暂存 diff，确保只包含该包的发布文件（minor 时包括 README），不包含其他包或源代码文件。
3. 创建版本提交，格式：

   ```text
   build: vX.Y.Z

   1. 更新 <包名> 的版本号。
   2. 在 CHANGELOG.md 中记录本次发布的变更。
   3. （仅 minor）在 README.md 中同步说明重要功能变化及迁移/替代用法。
   ```

4. 在刚生成的提交上创建轻量 tag：`git tag vX.Y.Z`。
5. 验证 tag 指向当前包的版本提交。

v2 和 v3 的提交必须分开；共享代码发布时，为每个包分别创建一个提交和 tag。禁止把两个包的版本文件合并到同一个发布提交。

如果一个包已经提交并打 tag，而后续包流程失败，不要回滚、删除或移动已创建的提交/tag；停止并清楚报告已完成与未完成部分。

## Step 6：最终核验与回执

核验并向用户汇报：

- 每个发布包的旧版本、新版本、提交 hash 和 tag；
- 各 tag 指向的提交确实只改动对应包的版本文件与 changelog（minor 时还包括该包的 README）；
- 工作区状态；若存在无关改动，明确说明没有纳入发布提交；
- tag 仅在本地创建还是也按用户指示推送。未收到推送要求时不推送。

不要声称已发布到 npm，除非确实观察到发布工作流完成成功。
