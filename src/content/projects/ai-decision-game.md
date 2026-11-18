---
title: AI 决策游戏
summary: LLM 动态生成剧情分支的决策游戏：v0.7 记忆系统开发中
status: active
type: game
year: 2026
tech: [Godot 4, GDScript, GUT, fly.io]
featured: true
order: 4
---

## 背景与问题

传统文字冒险游戏的分支是编剧写死的。让 LLM 实时生成剧情分支与 NPC 反应，做每局都不一样的决策游戏。

## 做了什么

- Godot 客户端 + Python 计价/生成服务端分离，可部署到 fly.io
- GUT 单元测试覆盖核心玩法逻辑
- v0.7-memory 版本：游戏结束批次与长期记忆系统在途
