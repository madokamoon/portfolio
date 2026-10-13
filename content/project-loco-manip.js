window.portfolioProjects = window.portfolioProjects || {};
window.portfolioProjects["project-loco-manip"] = {
  title: `基于 Exo 演示的 Loco-Manipulation 研究`,
  role: `个人项目 · 2026.07 – 至今`,
  overview: `基于 Exo 演示生成与 Tracking-based RL，研究 G1 的全身移动操作和多物体抓取，并为统一世界模型产出演示数据。`,
  background: `移动操作同时涉及行走、身体姿态与手部抓取，直接采集大量完整真机示范成本较高；需要先构造可迁移的全身轨迹，再训练机器人跟踪并完成任务。`,
  plan: [
    { title: `演示生成`, text: `参考 GRAIL 管线，从 3D 资产出发，经 HOI 视频和 4D 联合优化产出人体全身移动操作轨迹。` },
    { title: `动作重定向`, text: `将人体轨迹映射到 G1，得到适用于机器人训练的演示。` },
    { title: `策略训练`, text: `采用 Tracking-based RL 范式，在 SONIC 基座上做基于状态的 RL，结合轨迹跟踪与任务奖励训练多物体抓取策略。` },
    { title: `奖励迭代`, text: `调整奖励设置，改善多物体抓取表现。` },
  ],
  result: `多物体抓取成功率提升至约 70%，并为上述统一世界模型产出演示数据；该指标只对应本项目所述抓取任务。`,
  resume: {
    intro: `参考 GRAIL 数据生成管线（3D 资产 → HOI 视频 → 4D 联合优化），产出人体全身移动操作轨迹，并重定向至 G1；以 Tracking-based RL 范式，在 SONIC 基座上开展基于状态的 RL，结合轨迹跟踪与任务奖励，训练多物体抓取通用策略，通过优化奖励设置提升成功率至 70% 左右，为上述统一模型产出演示数据。`,
    bullets: [],
  },
};
