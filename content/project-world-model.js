window.portfolioProjects = window.portfolioProjects || {};
window.portfolioProjects["project-world-model"] = {
  title: `以 PointFlow 为世界表征的统一世界模型`,
  role: `个人项目 · 2026.07 – 至今`,
  overview: `针对 Ego 数据和 Loco-Manip 的视角运动及空间感知需求，以 PointMap、PointFlow 为世界动态表示，统一建模 RGB、Point 与 Action，使动作生成和未来状态预测共享时空表示。`,
  background: `相机自身运动与物体运动都会改变视频中的像素位置；只预测 RGB 容易混淆视角变化与真实三维动态，也难为机器人动作提供稳定的空间参照。`,
  plan: [
    { title: `共享主干`, text: `以 Cosmos3-Nano 为基础，保留 RGB（Wan2.2）和 Action 分支。` },
    { title: `几何分支`, text: `引入基于 MotionCrafter 的 PointMap、PointFlow 编解码分支，分别表征场景几何和点的时序运动。` },
    { title: `参数适配`, text: `通过模态路由 LoRA 对不同模态进行参数高效微调。` },
    { title: `数据与训练`, text: `使用 VGGT-OMEGA、AllTracker 生成三维伪标签，按仿真双模态、Ego／Robot 三模态和 Action 四模态分阶段训练。` },
  ],
  result: `已形成统一架构与阶段性可视化；四模态动作预测尚无可公开的闭环性能结论。`,
  resume: {
    intro: `针对 Ego 数据以及 Loco-Manip 任务中的视角运动问题以及空间感知的需求，将 PointMap 和 PointFlow 作为核心世界动态表示方法，统一建模 RGB、Point 与 Action，使动作生成和未来状态预测共享时空表示。`,
    bullets: [
      `以 Cosmos3-Nano 为主干，保留其 RGB（Wan2.2）与 Action 分支，引入基于 MotionCrafter 的 PointMap、PointFlow 编解码分支，并通过模态路由 LoRA 进行参数高效微调。`,
      `使用 VGGT-OMEGA 与 AllTracker 为数据生成三维伪标签，采用「仿真双模态训练、Ego／Robot 数据三模态训练、Action 四模态训练」的分阶段训练策略。`,
    ],
  },
};
