# 📚 儿童英语阅读系统 — 部署指南

> 总时间约 15 分钟，全程不需要懂代码。

---

## 文件说明

| 文件 | 用途 |
|------|------|
| `index.html` | **孩子端** — iPad 上打开的阅读界面 |
| `admin.html` | **家长端** — 管理书目、查看进度 |
| `books.js` | **书目数据** — 加书、改书在这里改 |
| `README.md` | 本说明文件 |

---

## 第一步：注册 GitHub（存放代码）

1. 打开 [https://github.com](https://github.com)
2. 点右上角 **Sign up**
3. 填邮箱、密码、用户名，完成验证
4. 登录成功后进入首页

---

## 第二步：创建代码仓库

1. 点击右上角 **"+"** → **New repository**
2. 填写：
   - Repository name：`reading-app`（随意）
   - 选 **Public**（Vercel 免费版需要公开）
   - ✅ 勾选 **Add a README file**
3. 点 **Create repository**

---

## 第三步：上传文件

1. 进入刚创建的仓库页面
2. 点 **Add file** → **Upload files**
3. 把这 4 个文件全部拖进去：
   - `index.html`
   - `admin.html`
   - `books.js`
   - `README.md`（可以替换掉自动生成的）
4. 页面底部点 **Commit changes**（绿色按钮）

上传成功后，仓库里应该能看到这 4 个文件。

---

## 第四步：注册 Vercel（发布网站）

1. 打开 [https://vercel.com](https://vercel.com)
2. 点 **Sign Up**
3. 选 **Continue with GitHub**（用 GitHub 账号登录，最方便）
4. 授权后进入 Vercel 控制台

---

## 第五步：部署网站

1. Vercel 控制台点 **Add New** → **Project**
2. 找到你的 `reading-app` 仓库，点 **Import**
3. 配置页面**什么都不用改**，直接点 **Deploy**
4. 等待约 30 秒，看到 🎉 **Congratulations** 就部署成功了

Vercel 会给你一个网址，格式类似：
```
https://reading-app-你的用户名.vercel.app
```

---

## 第六步：iPad 添加到主屏幕

1. 用 **Safari** 打开上面的网址
2. 点底部中间的 **分享按钮**（方块+箭头图标）
3. 选 **"添加到主屏幕"**
4. 名称改成"英语阅读"，点 **添加**

添加后桌面会出现一个图标，点开是全屏 App 体验 ✅

---

## 日常使用

### 孩子端（iPad）
- 打开主屏幕图标
- 点 **"生成今日任务"** 开始
- 点任务卡片进入朗读模式
- 允许麦克风 → 开始朗读 → 自动打分

### 家长端
- 打开网址后面加 `/admin.html`
  ```
  https://reading-app-xxx.vercel.app/admin.html
  ```
- 可以查看今日进度、历史成绩
- 可以添加新书、上传 PDF 提取页面文字

---

## 如何加新书

### 方法一：在家长端添加（即时生效，重启后丢失）
打开 `admin.html` → 点左侧"添加书目" → 填写信息保存

### 方法二：修改 books.js（永久生效，推荐）

1. 打开 GitHub 仓库，点击 `books.js`
2. 点右上角 **铅笔图标**（Edit this file）
3. 在数组末尾，复制下面这段模板，改掉内容：

```js
{
  id: "自己起个唯一ID",   // 例如 "rf06"，不能和已有的重复
  series: "RAZ",           // RAZ / 牛津树 / 红火箭 / 其他
  level: "F",              // 级别
  title: "书名",
  note: "主题词汇",        // 可以留空 ""
  url: "https://...",      // 可以留空 ""
  pages: [                 // 每页文字，用于朗读打分；没有可以留 []
    "第一页的文字内容",
    "第二页的文字内容",
  ]
},
```

4. 点 **Commit changes** 保存
5. Vercel 自动重新部署，约 1 分钟后生效

---

## 如何录入书本页面文字（用于打分）

**方法：在家长端上传 PDF**

1. 打开 `admin.html` → 添加书目
2. 上传书本 PDF，系统自动提取每页文字
3. 逐页检查、手动修改错误
4. 保存

**或者手动输入：**

在 `books.js` 的 `pages` 数组里，每页写一个字符串：

```js
pages: [
  "Sam can run. Sam can jump. Sam can hop.",
  "Sam ran to the pond. He saw a frog.",
  "The frog jumped in. Sam laughed.",
]
```

---

## 语音打分说明

- 使用浏览器原生语音识别（需允许麦克风权限）
- **iPad Safari** 支持，Chrome 也支持
- 打分逻辑：识别孩子朗读的单词，与原文对比，计算准确率和覆盖率
- 满分 10 分，显示小数（如 9.6、8.4）
- 每页单独打分，自动计算平均分
- 没有录入页面文字的书，可以正常完成任务，只是无法打分

---

## 常见问题

**Q：麦克风没反应？**
A：iPad Safari 设置 → 网站设置 → 麦克风 → 允许

**Q：换了设备，任务记录没了？**
A：目前数据存在浏览器本地（localStorage），换设备不同步。后续可升级到云端数据库。

**Q：想改每天任务数量？**
A：打开 `admin.html` → 任务管理 → 每日新书数量，可选 3/5/7 本

**Q：Vercel 网址太长记不住？**
A：在 Vercel 控制台可以设置自定义域名，或者直接加入 iPad 主屏幕就不用记网址了

---

## 项目结构

```
reading-app/
├── index.html    ← 孩子端
├── admin.html    ← 家长端  
├── books.js      ← 书目数据
└── README.md     ← 本文件
```

所有数据存在浏览器 localStorage，无需服务器、无需数据库。
