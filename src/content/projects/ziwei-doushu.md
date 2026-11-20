---
title: 紫微斗数
summary: AI 紫微斗数排盘解读：AI 审核闸 + 免费模型通道 + 三 Tab 运营后台
status: active
type: app
year: 2026
tech: [AI 审核, 智谱 GLM]
featured: false
order: 5
stages:
  - { name: 立项调研, done: true }
  - { name: 核心构建, done: true }
  - { name: 打磨验收, done: true }
  - { name: 发布运营, done: false }
percent: 75
versions:
  - { v: v0.9.4, note: 基线版本 }
  - { v: v0.9.8, note: 五连版：AI 审核闸 + 免费模型通道 + 后台三 Tab }
---

## 背景与问题

传统命理排盘工具输出僵硬、解读靠人工。用 LLM 做个性化解读，用审核闸保证输出口径可控。

## 做了什么

- 五连版快速迭代 v0.9.4 → v0.9.8（AI 审核闸、智谱免费模型通道、后台三 Tab 运营台）
- AI 审核闸：生成内容先过审核再放行，运营风险前置拦截
- 接入智谱免费模型通道压低单次解读成本
