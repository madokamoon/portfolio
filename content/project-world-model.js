window.portfolioProjects = window.portfolioProjects || {};
window.portfolioProjects["project-world-model"] = {
  title: `以 PointFlow 为世界表征的统一世界模型`,
  role: `个人项目 · 2026.07 – 至今`,
  overview: `针对 Ego 数据和 Loco-Manip 的视角运动及空间感知需求，以 PointMap、PointFlow 为世界动态表示，统一建模 RGB、Point 与 Action，使动作生成和未来状态预测共享时空表示。`,
  background: `头部/相机运动会改变视频中的像素位置，只预测 RGB 容易混淆视角变化与真实三维动态，难以为机器人动作提供稳定的空间参照。`,
  plan: [
    { title: `核心思想`, text: `以点云PointMap和点流PointFlow为世界表征，与RGB和Action联合预测，排除头部运动的同时，增强空间感知和对动态物体的关注能力` },
    { title: `主干网络`, text: `以 Cosmos3-Nano 为基础，保留 RGB（Wan2.2）和 Action 分支，引入基于 MotionCrafter 的 PointMap、PointFlow 编解码分支，在latent层面预测。` },
    { title: `训练方式`, text: `通过模态路由 LoRA 对不同模态进行参数高效微调。` },
    { title: `数据与训练`, text: `仿真数据使用真实标签，真实数据使用 VGGT-OMEGA、AllTracker 生成伪标签，按仿真双模态、Ego／Robot 三模态和特定任务四模态分阶段训练。` },
  ],
  result: `已在 robotwin 跑通，后续会在Loco-Manip任务中进一步验证。`,
  resume: {
    intro: `针对 Ego 数据以及 Loco-Manip 任务中的视角运动问题以及空间感知的需求，将 PointMap 和 PointFlow 作为核心世界动态表示方法，统一建模 RGB、Point 与 Action，使动作生成和未来状态预测共享时空表示。`,
    bullets: [
      `以 Cosmos3-Nano 为主干，保留其 RGB（Wan2.2）与 Action 分支，引入基于 MotionCrafter 的 PointMap、PointFlow 编解码分支，并通过模态路由 LoRA 进行参数高效微调。`,
      `使用 VGGT-OMEGA 与 AllTracker 为数据生成三维伪标签，采用「仿真双模态训练、Ego／Robot 数据三模态训练、Action 四模态训练」的分阶段训练策略。`,
    ],
  },
};
