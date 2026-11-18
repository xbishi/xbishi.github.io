---
title: Godot 特效量产管线
summary: JSON 配方驱动特效量产：批次 63、585 件 PASS 的验收链
status: active
type: game
year: 2026
tech: [Godot 4.7, GPUParticles, Python]
featured: false
order: 23
---

## 背景与问题

游戏特效（VFX）手工调粒子效率极低，参数难以复用与验收。

## 做了什么

- GPUParticles 特效配方 JSON 化：参数可版本管理、可批量生成
- Python 验收链自动检查产出质量
- B3 量产循环推进到批次 63，累计 585 件 PASS
