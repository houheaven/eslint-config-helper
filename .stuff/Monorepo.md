
# Monorepo 架构

## 安装 workspace 依赖
```bash
# -w 表示在根目录下安装
pnpm i -w
```

## 安装本地包依赖
```bash
# -workspace 表示从当前 workspace 下安装
pnpm i @hhframe/package --workspace
```

## 子包版本管理工具
正式发布
```bash
# 在根目录进行安装
pnpm add @changesets/cli -w -D

# 初始化 changeset
pnpm changeset init

# 选择要修改的子包、新增更新内容、生成临时日志（.changeset/chilled-flowers-nail.md）
pnpm changeset

# 将版本更新内容应用至子包（package.json）
pnpm changeset version

# 子包版本发布
pnpm changeset publish
```

预发布
- `alpha` 内部测试版，一般不向外部发布，bug 较多，一般只有测试人员使用
- `beta` 测试版，这个阶段的版本会一直加入新的功能，在 Alpha 版本之后推出
- `rc` Release Candidate，发行候选版本，RC 版本不再加入新的功能，主要着重于排错

```bash
# 进入预发布模式（beta）
pnpm changeset pre enter beta

pnpm changeset
pnpm changeset version
pnpm changeset publish

# 退出预发布模式
pnpm changeset pre exit
```
