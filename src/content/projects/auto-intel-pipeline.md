---
title: 自动化情报工作流
summary: 定时抓取 → AI 筛选编排 → 自动推送的情报流水线，两班实例长跑中
status: done
type: ai
year: 2026
tech: [定时任务, scrapling, 企微 webhook]
featured: false
order: 14
stages:
  - { name: 立项调研, done: true }
  - { name: 核心构建, done: true }
  - { name: 打磨验收, done: true }
  - { name: 发布运营, done: true }
percent: 100
versions:
  - { v: 实例一, note: 中医行业日报——行业情报自动推送企微 }
  - { v: 实例二, note: 技术雷达——周一/周四两班自动扫描 }
---

## 背景与问题

盯行业动态和 AI 工具生态靠人工翻信息效率太低，需要固定节奏的自动情报流水线，而不是随缘刷信息流。

## 做了什么

- 统一管线：定时抓取（scrapling，自带合规铁律：robots/授权/个人信息红线）→ AI 筛选编排 → 结构化日报 → 自动推送
- **实例一**：中医行业日报——服务诊所经营决策
- **实例二**：技术雷达——周一/周四两班，盯 AI 工具生态
- 抓取技能可复用，新情报源接入即新实例
