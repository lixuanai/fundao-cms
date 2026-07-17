# FunDAO CMS 管理后台

基于 Sanity Studio v3 的内容管理系统。

## 功能

- **文章管理** — 新闻 / 行业资讯，中英双版本，正文支持插图
- **首页配置** — Hero / 统计 / 特性 / CTA，中英双版本
- **合作伙伴** — Logo / 名称 / 链接 / 排序

## 本地开发

```bash
npm install
npm run dev
```

访问 http://localhost:3333

## 部署到 Vercel

```bash
npm run deploy
```

或连接 GitHub 仓库自动部署。

## 环境变量

| 变量 | 说明 |
|------|------|
| `SANITY_STUDIO_PROJECT_ID` | Sanity 项目 ID |
| `SANITY_STUDIO_DATASET` | 数据集名称（默认 production）|
