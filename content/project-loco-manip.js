window.portfolioProjects = window.portfolioProjects || {};
window.portfolioProjects["project-loco-manip"] = {
  title: `基于 Exo 演示的 Loco-Manipulation 研究`,
  role: `个人项目 · 2026.07 – 至今`,
  overview: `基于 Exo 演示生成与 Tracking-based RL，研究 G1 的全身移动操作和多物体抓取，并为统一世界模型产出演示数据。`,
  background: `移动操作真机示范成本高，依托仿真数据生成管线和特权信息，可先训练基于状态的RL再迁移至视觉策略。`,
  plan: [
    { title: `数据生成`, text: `参考 GRAIL 管线，从 3D 资产生成人类视频，经姿态识别和 retarget 联合优化产出G1机器人全身移动操作轨迹。` },
    { title: `网络结构`, text: `actor 基于 SONIC 开源权重，在输入侧添加残差修正网络。critic 输入特权信息。` },
    { title: `策略训练`, text: `采用 Tracking-based RL 范式，优化轨迹跟踪奖励与任务奖励设置。` },
  ],
  result: `多物体抓取成功率提升至约 70%，为上述统一世界模型产出演示数据。`,
  resume: {
    intro: `参考 GRAIL 数据生成管线（3D 资产 → HOI 视频 → 4D 联合优化），产出人体全身移动操作轨迹，并重定向至 G1；以 Tracking-based RL 范式，在 SONIC 基座上开展基于状态的 RL，结合轨迹跟踪与任务奖励，训练多物体抓取通用策略，通过优化奖励设置提升成功率至 70% 左右，为上述统一模型产出演示数据。`,
    bullets: [],
  },
};
