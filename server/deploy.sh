#!/usr/bin/env bash
# bs-portfolio 一键部署到自己的服务器（SSH 直连方式）
# 前置：本机能 ssh 到服务器；服务器上已装 nginx 且 root 指向 /var/www/bs-portfolio
# 用法：./server/deploy.sh 用户名@服务器IP [SSH端口]
#   例：./server/deploy.sh root@123.45.67.89 22
set -euo pipefail

SERVER=${1:?用法: deploy.sh 用户名@服务器IP [SSH端口]}
PORT=${2:-22}
REMOTE_DIR=/var/www/bs-portfolio

cd "$(dirname "$0")/.."

echo "[1/3] 本地构建..."
pnpm build

echo "[2/3] 确认远端目录..."
ssh -p "$PORT" "$SERVER" "mkdir -p $REMOTE_DIR"

echo "[3/3] rsync 同步产物..."
rsync -azP --delete -e "ssh -p $PORT" dist/ "$SERVER:$REMOTE_DIR/"

echo ""
echo "✅ 部署完成。打开 http://<你的域名或IP> 验证。"
echo "   若 404：检查 nginx root 是否 = $REMOTE_DIR，且 nginx -t 通过。"
