# 肉丝生日网站 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 构建并发布一个以 CC 和肉丝大头贴为主角、可爱治愈且具有互动动效的生日网站。

**Architecture:** 使用无构建步骤的语义化 HTML、CSS 与原生 JavaScript，适合 GitHub Pages。CSS 负责页面视觉和人物动效，JavaScript 只负责滚动显现、蜡烛状态与彩纸互动。

**Tech Stack:** HTML5, CSS3, JavaScript, Node.js built-in test runner, GitHub Pages

---

### Task 1: 建立内容和动效契约

**Files:**
- Create: `package.json`
- Create: `tests/site.test.js`

- [x] **Step 1: 写出失败测试**

```js
test('页面包含完整祝福、两张人物照片和互动控件', () => {
  assert.match(html, /肉丝，生日快乐/);
  assert.match(html, /CC\.jpg/);
  assert.match(html, /肉丝\.jpg/);
  assert.match(html, /一起吹蜡烛/);
});
```

- [x] **Step 2: 确认测试因 `index.html` 不存在而失败**

Run: `npm test`
Expected: FAIL with missing `index.html`

### Task 2: 实现完整静态页面

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `script.js`

- [x] **Step 1: 实现语义化页面结构和完整文案**
- [x] **Step 2: 实现设计令牌、响应式布局、照片漂浮和纸张质感**
- [x] **Step 3: 实现滚动显现、吹蜡烛和彩纸状态**
- [x] **Step 4: 运行 `npm test`，预期全部 PASS**

### Task 3: 浏览器验收与部署

**Files:**
- Create: `README.md`

- [x] **Step 1: 在 1440x1000 和 390x844 视口截图验收**
- [x] **Step 2: 点击拆信、吹蜡烛并验证状态更新**
- [ ] **Step 3: 运行 `git diff --check` 与 `npm test`**
- [ ] **Step 4: 推送 `main` 并启用 GitHub Pages**
