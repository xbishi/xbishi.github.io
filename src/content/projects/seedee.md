---
title: Seedee 海报编辑器
summary: 浏览器海报编辑器：按需拉起，支持自动化导出
status: active
type: tool
year: 2026
tech: [Node.js, Express, React, Playwright]
featured: false
order: 18
stages:
  - { name: 立项调研, done: true }
  - { name: 核心构建, done: true }
  - { name: 打磨验收, done: true }
  - { name: 发布运营, done: false }
percent: 75
versions:
  - { v: v0.3, note: 自动化导出接 Playwright }
---

## 背景与问题

运营物料（海报/配图）需求高频但格式固定，人工排版重复劳动多。

## 做了什么

- Node.js + Express + React 的浏览器编辑器，常驻按需拉起
- Playwright 驱动自动化导出成品图
- 服务于各内容线的日常出图
