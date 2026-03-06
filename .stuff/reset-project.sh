#!/bin/bash

echo "开始清理项目..."

# 删除项目中所有的 node_modules 目录
echo "正在删除 node_modules..."
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +

# 删除项目中所有的 pnpm-lock.yaml 文件
echo "正在删除 pnpm-lock.yaml..."
find . -name "pnpm-lock.yaml" -type f -exec rm -f '{}' +

echo "清理完成！开始重新安装依赖..."

# 执行 pnpm i
pnpm i

echo "依赖安装完成！"
