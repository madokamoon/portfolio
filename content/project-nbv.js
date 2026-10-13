window.portfolioProjects = window.portfolioProjects || {};
window.portfolioProjects["project-nbv"] = {
  title: `焊缝观测 Next-Best-View 模型优化`,
  role: `实习项目 · 2026.01 – 2026.07`,
  overview: `搭建 Isaac 焊缝观测仿真环境与评测流程，参与 Next-Best-View 模型架构迭代。`,
  background: `焊缝观测需要选择既能看清目标、又不会碰撞的下一视角；模型若依赖 state 或 seam 等捷径信号，就可能绕过实际视觉几何信息。`,
  plan: [
    { title: `仿真与评测`, text: `使用 IsaacLab 搭建焊缝数据工场和 Benchmark，借助 TiledCamera 并行渲染。` },
    { title: `问题定位`, text: `通过条件消融发现视觉特征被 state／seam 绕过的 shortcut。` },
    { title: `几何注入`, text: `设计层级式 K/V Injection，把 MapAnything 的 12 层几何表征逐层注入 Action Head。` },
    { title: `长尾优化`, text: `使用 Focal Loss 改善难例的训练权重。` },
  ],
  result: `TiledCamera 并行渲染加速约 10 倍，无碰撞观测成功率提升 20%；结果针对焊缝仿真评测，不等同于真机焊接效果。`,
  resume: {
    intro: `搭建 Isaac 仿真环境，参与模型架构迭代，提升无碰撞观测成功率 20%。`,
    bullets: [
      `使用 IsaacLab 搭建焊缝仿真数据工场和评测 Benchmark，TiledCamera 并行渲染加速约 10 倍。`,
      `通过条件消融定位视觉特征被 state／seam 绕过的 shortcut 问题，设计层级式 K/V Injection，将 MapAnything 12 层几何表征逐层注入 Action Head，并以 Focal Loss 优化长尾样本，使无碰撞观测成功率提升 20%。`,
    ],
  },
};
