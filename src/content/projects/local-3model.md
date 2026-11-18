---
title: 本地三模工作台
summary: 本地多模态引擎调度台：Web 统一入口，四引擎互斥调度
status: active
type: tool
year: 2026
tech: [Python, 多引擎调度]
featured: false
order: 17
---

## 背景与问题

本地跑着多个生成引擎（LLM/图像/视频），各自端口各自 CLI，切换管理混乱。

## 做了什么

- Web(8899) 统一入口调度四个生成引擎
- 互斥调度防止显存打架
- 活跃迭代中，链式 GPU 调用验证推进
