---
title: 本地 AI 基础设施
summary: 多引擎互斥调度台 + 常驻 ComfyUI + 3D 中枢：所有生产管线的算力底座
status: active
type: tool
year: 2026
tech: [Python, ComfyUI, Hunyuan3D, 引擎调度]
featured: false
order: 24
stages:
  - { name: 立项调研, done: true }
  - { name: 核心构建, done: true }
  - { name: 打磨验收, done: false }
  - { name: 发布运营, done: false }
percent: 70
versions:
  - { v: v0.4, note: 四引擎互斥调度台上线（Web 8899）}
---

## 背景与问题

本地跑着多个生成引擎（LLM/图像/视频/3D），各自端口各自 CLI，显存打架、切换混乱——需要一个统一调度底座，让上层工作流无感换引擎。

## 做了什么

- Web(8899) 统一入口调度四个生成引擎，互斥调度防显存冲突
- ComfyUI 主实例(8000) 常驻，CLI 编排供图工作流
- 3D 中枢仓：ComfyUI-3D(8189) / Hunyuan3D(8081) 双引擎 + Blender MCP
- 常驻基础设施，视频管线与游戏资产管线共用此底座
