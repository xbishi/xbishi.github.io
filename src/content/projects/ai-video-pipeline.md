---
title: AI 视频内容生产工作流
summary: 从信息收集到收益监控的完整短视频管线——Muse 账号只是这条流水线的第一个产出物
status: active
type: ai
year: 2026
tech: [Toonflow, TTS, 剪映程控, 字幕对齐]
featured: true
order: 2
stages:
  - { name: 立项调研, done: true }
  - { name: 核心构建, done: true }
  - { name: 打磨验收, done: true }
  - { name: 发布运营, done: false }
percent: 70
versions:
  - { v: 第一期, note: Muse 上中下集成片交付，进入配音字幕对齐阶段 }
  - { v: v0.3, note: Toonflow 供应商适配层部署，本地 H3 引擎可插拔 }
---

## 背景与问题

短视频账号的价值不在「一条爆款」，而在能否把内容生产变成一条可复用的流水线。这条工作流覆盖从选题到收益的完整闭环，账号是产出物，管线才是资产。

## 做了什么

- **信息收集**：选题调研与对标监控，产出结构化脚本与分镜
- **素材收集**：AI 生图/生视频混剪素材，素材库统一归档
- **视频制作**：TTS 本地配音、剪映草稿程控生成（gen_jianying_drafts.py）、字幕对齐（align_subs.py）、Toonflow v2 供应商适配层（本地 H3 引擎可插拔，摆脱云端绑定）
- **收益监控**：数据回流待接——第一期 Muse 账号内容交付后开启
- 素材清单/口播/分镜全部结构化管理，AI 标识合规预留位按《AI 生成合成内容标识办法》配置
