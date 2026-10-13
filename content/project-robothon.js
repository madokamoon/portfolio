window.portfolioProjects = window.portfolioProjects || {};
window.portfolioProjects["project-robothon"] = {
  title: `挑战杯「端侧可部署的双臂操作算法」全国总冠军`,
  role: `核心技术成员 · 2025.07 – 2025.10`,
  overview: `作为核心技术成员，采用模仿学习算法完成五个双臂抓取任务，兼顾仿真赛与真机决赛。`,
  background: `竞赛要求同一套双臂操作方案应对五个抓取任务，并兼顾真机部署与端侧计算预算；深度感知和动作策略都需要适应场景变化。`,
  plan: [
    { title: `三维感知`, text: `使用 ZED2 双目相机，结合手眼标定和 FoundationStereo 立体深度估计获取点云。` },
    { title: `空间编码`, text: `用 Minkowski-Engine 编码稀疏体素，提取操作相关的三维特征。` },
    { title: `动作生成`, text: `连接 Diffusion Policy 输出动作块，采用模仿学习训练。` },
    { title: `端侧适配`, text: `程序化生成演示并使用多种数据增强，将模型规模控制在约 50M 参数以便部署。` },
  ],
  result: `完成五个抓取任务，取得 RoboTwin 仿真赛第 2 名和真机决赛全国第 1 名（挑战之星）；模型约 50M 参数，可端侧部署。`,
  resume: {
    intro: `采用模仿学习算法，完成五个抓取任务，取得 RoboTwin 仿真赛第 2 名和真机决赛全国第 1 名（挑战之星）。`,
    bullets: [
      `使用 ZED2 双目相机配合手眼标定与 FoundationStereo 立体深度估计获取点云。`,
      `使用 Minkowski-Engine 编码稀疏体素，接 Diffusion Policy 输出动作块；程序化演示动作，采用多种数据增强，模型参数约 50M 可端侧部署。`,
    ],
  },
};
