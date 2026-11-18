---
title: 跑团小程序
summary: TRPG 线上开团工具：契约先行架构，419 项测试全绿的完整产品
status: active
type: app
year: 2026
tech: [FastAPI, PostgreSQL, uni-app, pytest]
featured: true
order: 3
---

## 背景与问题

跑团（桌游 TRPG）线上开团缺顺手的工具：骰子、角色卡、战局记录割裂。目标是完整的一站式开团平台。

## 做了什么

- 契约先行（API contract first）架构：前后端并行开发零扯皮，8 份契约 JSON 全程校验
- 419 项 pytest 测试全绿（17.7s 跑完），配合 miniapp/bigscreen 双端 tsc 类型检查与 ruff 静态检查
- 大屏 + 小程序双端形态：跑团主持人用 Web 大屏控场，玩家用小程序交互
