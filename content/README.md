# 项目文案编辑

本目录中每个 `project-*.js` 文件对应网页上的一个项目。直接修改文件中的文字，保存后刷新 `../index.html` 即可看到变化；不需要启动服务。

- `title`：项目标题；`role`：项目类别和日期。
- `overview`、`background`、`plan`、`result`：网页上直接显示的“概述、背景、方案、成果”。`background` 可写成普通文字，也可像 `plan` 一样写成分点列表；列表每项包含小标题 `title` 和说明 `text`，可增删条目。
- `resume.intro`、`resume.bullets`：网页“简历原文”折叠区中的副本。这里的修改**不会**同步回真正的 `简历-企业.tex`。
- 文字中的 `[任务名]` 会自动显示为绿色。只改反引号 `...` 内的文字，保留字段名和标点；若要输入反引号本身，写成 `\``。

背景分点示例：

```js
background: [
  { title: `目的`, text: `熟练掌握 VLA 落地的全部流程。` },
  { title: `困难`, text: `柔性操作任务的状态空间广泛；长程任务对失败和累积误差敏感。` },
],
```

文件名与网页项目对应：

| 文件 | 项目 |
| --- | --- |
| `project-vla-deploy.js` | VLA 数采训练部署全流程 |
| `project-online-rl.js` | VLA + online RL 微调 |
| `project-force-vla.js` | Force VLA 设计 |
| `project-memory.js` | Memory VLA 设计 |
| `project-nbv.js` | 焊缝观测 Next-Best-View |
| `project-world-model.js` | 统一世界模型 |
| `project-loco-manip.js` | Loco-Manipulation |
| `project-robothon.js` | 挑战杯双臂操作算法 |
