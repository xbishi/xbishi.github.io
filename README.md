# bs-portfolio — 个人工具网站

线上地址：https://xbishi.github.io

## 这是什么
BS 一人公司对外的作品集门面 + 对内的项目导航控制台。纯静态站（Astro 5 + Tailwind 4），数据驱动：**加一个项目 = 加一个 Markdown 文件**。

## 怎么加项目
1. 复制 `src/content/projects/_template.md` 为 `<项目slug>.md`
2. 填 frontmatter（标题/一句话/状态/类型/技术栈）+ 正文（背景/亮点）
3. 提交推送 main 分支

## 怎么更新线上
当前部署方式：**gh-pages 分支手动部署**（OAuth token 缺 workflow scope，Actions 暂缓）：
```bash
pnpm build
cd dist && git add -A && git commit -m "deploy" && git push -f origin gh-pages
```
负责人执行 `gh auth refresh -s workflow` 授权后，可启用 `.github/workflows/deploy.yml` 切回 push 即自动部署。

## 本地开发
```bash
pnpm install   # 缓存已在 .npmrc 指向 H 盘
pnpm dev       # http://localhost:4321
```
