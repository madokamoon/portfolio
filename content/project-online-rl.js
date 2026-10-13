window.portfolioProjects = window.portfolioProjects || {};
window.portfolioProjects["project-online-rl"] = {
  title: `VLA + online RL 微调`,
  role: `实习项目 · 2026.01 – 2026.07`,
  overview: `针对 SFT 的性能上限，基于 RLinf 框架与 RLToken 算法，对毫米级精细操作任务【套柱】进行在线强化学习微调。`,
  background: [
    { title: `目的`, text: `超越SFT上限，补偿机械臂精度和刚度不足以及重力影响。` },
    { title: `困难`, text: `需要同时保持SFT的位置泛化能力和关键阶段RL的高精度能力` },
  ],
  plan: [
    { title: `策略初始化`, text: `使用主臂动作 SFT 阶段；RL 阶段采用 TD3，Actor 输出完整动作。` },
    { title: `损失优化`, text: `在 BC／PG 基础上加入 Delta／Smooth 损失，兼顾策略改进和动作连续性。` },
    { title: `门控机制`, text: `训练 Gating Head 选择性接管关键阶段。工程上实现 DAgger／Model 无缝切换` },
    { title: `动作优化`, text: `对参考／执行动作使用 RTC + Smoothing，缓解控制与推理延迟引起的抖动，支持 stride=2 重采样。` },
    { title: `参数调优`, text: `寻找最优损失权重、回放采样策略、奖励、折扣率。` },
  ],
  result: `约 100 episode 微调后，套柱成功率从 5% 提升至 100%；并在真机和仿真中对比 DSRL、QGF、Flow-SDE、VINE 等算法。该结果对应这一特定精细操作任务。`,
  resume: {
    intro: `针对 SFT 性能上限，基于 RLinf 框架和 RLToken 算法，使用约 100 episode，将 mm 级精细操作任务[套柱]成功率从 5% 提升至 100%，并在真机／仿真中对比了 DSRL、QGF、Flow-SDE、VINE 等算法。`,
    bullets: [
      `SFT 使用主臂动作；RL 使用 TD3 算法，Actor 输出完整动作，在 BC／PG 基础上添加 Delta／Smooth 损失。`,
      `DAgger／Model 无缝切换；添加 Gating Head 选择性接管关键阶段；对参考／执行动作使用 RTC + Smoothing 优化，缓解控制／推理延迟带来的抖动、方便 stride=2 重采样；对损失权重、回放采样策略、奖励、折扣率等参数调优。`,
    ],
  },
};
