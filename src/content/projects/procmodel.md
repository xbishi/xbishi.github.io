---
title: 程序化建模工作台
summary: Blender 程序化建模套件：18 个规格驱动模块，headless 运行
status: active
type: tool
year: 2026
tech: [Python, Blender headless, SQLite]
featured: false
order: 20
---

## 背景与问题

重复性 3D 建模（规格化资产）人工做太慢，且 Blender GUI 自动化脆弱。

## 做了什么

- 纯 Python + Blender 5.1.2 headless，无 GUI 依赖批量出模
- SQLite 管理建模任务与产物
- 18 个规格（specs）驱动的 dg_* 建模套件
