---
title: AI 短剧管线
summary: Toonflow v2 + 本地 H3/TTS 引擎适配：供应商可插拔的视频生产管线
status: active
type: ai
year: 2026
tech: [Toonflow, TypeScript, H3]
featured: false
order: 26
stages:
  - { name: 立项调研, done: true }
  - { name: 核心构建, done: true }
  - { name: 打磨验收, done: false }
  - { name: 发布运营, done: false }
percent: 55
versions:
  - { v: v0.3, note: Toonflow 适配器部署，待实测 }
---

## 背景与问题

AI 短剧生产工具（Toonflow）默认绑定云端供应商，成本与可控性受限。

## 做了什么

- TypeScript 适配器层把图像/视频供应商做成可插拔
- 本地 H3 视频引擎与 TTS 接入（h3ImageLocal.ts）
- 适配器已部署，进入实测阶段
