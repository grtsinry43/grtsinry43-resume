# 简历项目

该项目是一个使用 Next.js 和 TypeScript 构建的简历网页应用。它展示了详细的简历，包括个人信息、个人简介、技能、教育背景、工作经历、项目经验和证书认证等部分。

它使用 Markdown 文件存储简历数据，您可以轻松地编辑数据以更新简历内容。简历数据采用 YAML 格式结构。

它使用`tailwindcss`和`headlessui`库来构建用户界面，提供了现代化的设计和交互体验。

## 部署到 Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/grtsinry43/grtsinry43-resume)

## 效果截图

![Image_244643903124277](https://github.com/user-attachments/assets/b04ea6b6-8ee2-43bb-94bb-07c2b35dd0bb)

![Image_244645939367089](https://github.com/user-attachments/assets/acdc10d1-3274-428d-953c-e487fbb57e99)

## 快速开始

### 前提条件

确保您的机器上已安装以下软件：

- Node.js (>= 20.x)
- pnpm (>= 8.x)

### 安装

1. 克隆仓库：
    ```bash
    git clone https://github.com/grtsinry43/resume-project.git
    cd resume-project
    ```

2. 安装依赖：
    ```bash
    pnpm install
    ```

### 运行开发服务器

启动开发服务器，运行：

```bash
pnpm dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

构建生产版本，运行：

```bash
pnpm build
```

这将创建一个优化的生产版本在 `out` 目录中。

### 运行生产版本

以生产模式运行项目，运行：

```bash
pnpm start
```

### 自定义简历数据

简历数据存储在 `src/resume-data.md` 文件中。您可以编辑此文件以更新简历内容。数据采用 YAML
格式结构，包括个人信息、个人简介、技能、教育背景、工作经历、项目经验和证书认证等部分。

### 添加新部分

要向简历添加新部分，您可以在 `src/components` 目录中创建新组件，并在 `src/app/page.tsx` 文件中包含它们。确保更新
`src/resume-data.md` 文件中的相应数据。

## 了解更多

要了解更多关于 Next.js 的信息，请查看以下资源：

- [Next.js 文档](https://nextjs.org/docs) - 了解 Next.js 的功能和 API。
- [学习 Next.js](https://nextjs.org/learn) - 交互式的 Next.js 教程。

## 许可证

该项目使用 MIT 许可证。
