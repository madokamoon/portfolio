window.portfolioProjects = window.portfolioProjects || {};
window.portfolioProjects["project-memory"] = {
  title: `Memory VLA 设计`,
  role: `实习项目 · 2026.01 – 2026.07`,
  overview: `针对需要记忆的【按演示顺序插花】任务，基于 π0.5 参考 NativeMEM 实现最长 25 s 的视觉记忆。`,
  background: `插花任务依赖先前演示，仅凭当前画面无法确定动作。`,
  plan: [
    { title: `历史压缩`, text: `将每个历史 frame 压缩为单个 token，按时间顺序提供给 Action Expert，经原生 Attention 读取。` },
    { title: `两阶段训练`, text: `先冻结 VLA 训练 memory tokenizer，再离线缓存 memory features，最后做带记忆的SFT。` },
  ],
  result: `获得记忆能力，可以完成插花任务。`,
  resume: {
    intro: `针对需要记忆的任务[按演示顺序插花]，基于 π0.5 参考 NativeMEM 实现长时视觉记忆（max 25 s）。`,
    bullets: [
      `保留当前完整视觉 tokens，将每个历史 frame 压缩为单个 token，使 Action Expert 通过原生 Attention 读取。`,
      `采用「冻结 VLA 训练 memory tokenizer + 缓存 memory features + 任务级 VLA finetuning」两阶段流程。`,
    ],
  },
};
