---
title: 3D 中枢（three-d-hub）
summary: 文生 3D 流水线中枢：ComfyUI-3D / Hunyuan3D / Blender 多引擎编排
status: active
type: ai
year: 2026
tech: [Python, ComfyUI, Hunyuan3D, Blender MCP]
featured: false
order: 19
stages:
  - { name: 立项调研, done: true }
  - { name: 核心构建, done: true }
  - { name: 打磨验收, done: true }
  - { name: 发布运营, done: false }
percent: 70
versions:
  - { v: v0.4, note: 双引擎编排 + Blender 后处理 }
---

## 背景与问题

单个文生 3D 模型质量不稳定，需要多引擎备选 + 后处理编排。

## 做了什么

- Python 编排层统一调度 ComfyUI-3D(8189) 与 Hunyuan3D(8081) 双引擎
- Blender MCP 衔接后处理（修模/摆姿/导出）
- 常驻基础设施，为游戏与 3D 打印线供料
