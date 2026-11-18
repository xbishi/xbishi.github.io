---
title: AI 短剧管线
summary: Toonflow v2 + 本地 H3/TTS 引擎适配：供应商可插拔的视频生产管线
status: active
type: ai
year: 2026
tech: [Toonflow, TypeScript, H3]
featured: false
order: 26
---

## 背景与问题

AI 短剧生产工具（Toonflow）默认绑定云端供应商，成本与可控性受限。

## 做了什么

- TypeScript 适配器层把图像/视频供应商做成可插拔
- 本地 H3 视频引擎与 TTS 接入（h3ImageLocal.ts）
- 适配器已部署，进入实测阶段
