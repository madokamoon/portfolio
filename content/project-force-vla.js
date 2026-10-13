window.portfolioProjects = window.portfolioProjects || {};
window.portfolioProjects["project-force-vla"] = {
  title: `Force VLA 设计`,
  role: `实习项目 · 2026.01 – 2026.07`,
  overview: `面向接触丰富的[插入插座／擦黑板／削黄瓜]任务，在 UR 末端安装六维力传感器，构建 π0.5 VLA 与导纳控制快慢双环。`,
  background: `位置到达目标不代表接触合适：施力过小会失效，过大则可能卡住、碰撞或触发过载保护。视觉策略需要获得力反馈，同时执行端必须比模型推理更快地响应接触变化。`,
  plan: [
    { title: `力觉输入`, text: `将 30 帧 force history 经零初始化 MLP 投影后拼接到 VLM prefix，并设计 MoE 结构融合 force 信息。` },
    { title: `力位动作`, text: `以实际指令位置和接触力 (p_des, F) 构造混合动作并联合去噪，使 force 同时成为 observation 和 action target。` },
    { title: `数采对齐`, text: `采集阶段沿 Z 轴使用期望力导纳控制，记录 p_des = p_master + Δp，以及经过低通滤波、执行器补偿的 F（30 Hz）。` },
    { title: `快慢双环`, text: `VLA 外环给出目标力 F 与位置 p_des，200 Hz 导纳内环实时跟踪目标力。` },
  ],
  result: `改善动作顺应、失败恢复以及动作与接触力稳定性，并考虑碰撞与过载保护；目前没有可公开的统一对照量化指标。`,
  resume: {
    intro: `针对需要前馈控制／接触丰富的任务[插入插座／擦黑板／削黄瓜]，在 UR 末端安装六维力传感器，构建 VLA 与导纳控制快慢双环，提升动作顺应速度、失败恢复速度、动作与接触力稳定性，避免碰撞与过载保护。`,
    bullets: [
      `基于 π0.5 构建，将 30 帧 force history 通过 MLP 投影（零初始化）拼接到 VLM prefix，设计 MoE 结构融合 force 信息；使用实际指令位置／接触力 (p_des, F) 混合动作表示并联合去噪，把 force 同时作为 observation 和 action target。`,
      `数采和推理阶段均在 Z 轴方向采用期望力导纳控制，记录实际指令 p_des = p_master + Δp 和经过低通滤波、执行器补偿的 F（30 Hz）；推理阶段 VLA 外环输出作为目标力 F 与指令位置 p_des，导纳内环（200 Hz）实时跟踪目标力。`,
    ],
  },
};
