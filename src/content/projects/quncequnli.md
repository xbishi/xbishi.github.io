---
title: 群测群力
summary: 多端心理测评小程序：40+ 专业量表，v2 部署实测 + 86 项自动化验收闭环
status: active
type: app
year: 2026
tech: [uni-app, uniCloud, Vue 3, TypeScript]
featured: true
order: 1
stages:
  - { name: 立项调研, done: true }
  - { name: 核心构建, done: true }
  - { name: 打磨验收, done: true }
  - { name: 发布运营, done: false }
percent: 90
versions:
  - { v: v1.2.0, note: 双端上线 }
  - { v: v2.0, note: 重构完成 + 86 项自动化验收闭环 }
---

## 背景与问题

从书籍测试流水线孵化出的独立产品：把心理学专业量表（亲密关系、情绪、人格等）做成普通人 3 分钟可完成的多端小程序测评。

## 做了什么

- v2 重构完成并部署实测：batch1-4 共 86 项自动化验收走查（模拟器直驱 + 截图/JSON 证据链），33/33 与 49/53 全绿基线
- 首轮实测揪出 2 个 P0（首页断链、批次不可达），根因定位到具体代码行，云端单点热修免提审，修复当晚生效
- 双端发布 v1.2.0 实战经验沉淀为可复用的 miniprogram-dev 技能（小程序双端开发发布全链路工具箱）
