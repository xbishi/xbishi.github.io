#!/usr/bin/env bash
# gh-pages 部署（固化流程，防止 dist/.git 丢失后手工操作出错）
# 用法：bash scripts/deploy-ghpages.sh
# 注：rm -rf dist 会连部署仓一起删，本脚本自动检测并重建
set -euo pipefail
cd "$(dirname "$0")/.."

echo "[1/4] 构建..."
pnpm build

echo "[2/4] 准备 dist 部署仓..."
if [ ! -d dist/.git ]; then
  echo "  dist/.git 不存在，重建"
  git -C dist init -q -b gh-pages
  git -C dist remote add origin https://github.com/xbishi/xbishi.github.io.git || true
fi

echo "[3/4] 提交产物..."
git -C dist add -A
git -C dist -c user.name="xbishi" -c user.email="xbishi@users.noreply.github.com" \
  commit -q -m "deploy: $(date +%m-%d) 自动部署" --allow-empty-message || true

echo "[4/4] 推送 gh-pages..."
if git -C dist push -f origin gh-pages; then
  echo "  ✓ 推送成功，触发 Pages 重建"
  gh api -X POST repos/xbishi/xbishi.github.io/pages/builds --jq '.status' 2>/dev/null || \
    echo "  （pages/builds 触发失败，可手动补）"
else
  echo "  ✗ 推送失败（多半是网络），稍后重跑本脚本即可"
  exit 1
fi
