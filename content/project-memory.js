window.portfolioProjects = window.portfolioProjects || {};
window.portfolioProjects["project-memory"] = {
  title: `Memory VLA 设计`,
  role: `实习项目 · 2026.01 – 2026.07`,
  overview: `针对需要记忆的[按演示顺序插花]任务，基于 π0.5 参考 NativeMEM 实现最长 25 s 的视觉记忆。`,
  background: `插花顺序依赖先前动作和摆放状态；仅看当前画面，策略无法总是判断下一支应放在哪里。直接拼接所有历史图像又会让视觉 token 数随时间增长。`,
  plan: [
    { title: `当前观测`, text: `保留当前帧完整视觉 tokens，用于花梗与插入位置的精细定位。` },
    { title: `历史压缩`, text: `将每个历史 frame 压缩为一个 token，按时间顺序提供给 Action Expert，经原生 Attention 读取。` },
    { title: `两阶段训练`, text: `先冻结 VLA 训练 memory tokenizer，再缓存 memory features，最后做任务级 VLA finetuning。` },
  ],
  result: `完成最长 25 s 视觉记忆与插花任务演示；目前没有可公开的单帧 VLA 对照和记忆消融指标。`,
  resume: {
    intro: `针对需要记忆的任务[按演示顺序插花]，基于 π0.5 参考 NativeMEM 实现长时视觉记忆（max 25 s）。`,
    bullets: [
      `保留当前完整视觉 tokens，将每个历史 frame 压缩为单个 token，使 Action Expert 通过原生 Attention 读取。`,
      `采用「冻结 VLA 训练 memory tokenizer + 缓存 memory features + 任务级 VLA finetuning」两阶段流程。`,
    ],
  },
};
