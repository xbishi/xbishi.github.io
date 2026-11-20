---
title: 游戏资产量产管线
summary: 特效/建模/文生 3D 三条量产线：JSON 配方驱动 + Python 验收链，585 件 PASS
status: active
type: game
year: 2026
tech: [Godot 4.7, GPUParticles, Blender headless, ComfyUI-3D]
featured: false
order: 23
stages:
  - { name: 立项调研, done: true }
  - { name: 核心构建, done: true }
  - { name: 打磨验收, done: false }
  - { name: 发布运营, done: false }
percent: 75
versions:
  - { v: B3, note: 特效量产循环批次 63，累计 585 件 PASS }
  - { v: v0.5, note: 程序化建模 18 个规格套件（Blender headless）}
---

## 背景与问题

游戏资产（特效/模型）手工制作效率极低且难验收。把资产生产变成「配方驱动 + 自动验收」的量产线，质量可复用、产出可审计。

## 做了什么

- **特效线**：GPUParticles 配方 JSON 化，参数可版本管理可批量生成，Python 验收链自动质检——量产循环推进到批次 63，585 件 PASS
- **建模线**：纯 Python + Blender 5.1.2 headless 程序化建模，SQLite 管任务，18 个规格（specs）套件
- **3D 线**：ComfyUI-3D 与 Hunyuan3D 双引擎编排，Blender MCP 衔接后处理
- 产线为游戏项目（ranger-demo 等）供料
