window.portfolioProjects = window.portfolioProjects || {};
window.portfolioProjects["project-vla-deploy"] = {
  title: `VLA 数采训练部署全流程`,
  role: `实习项目 · 2026.01 – 2026.07`,
  overview: `独立从 0 到 1 搭建机械臂运控、数据采集处理、训练、推理、评估流程，基于 π0.5 和 piper 双臂完成柔性【叠衣服】与长程【折纸盒】demo。`,
  background: [
    { title: `目的`, text: `熟练掌握 VLA 落地的全部流程。` },
    { title: `困难`, text: `柔性操作任务的状态空间广泛；长程任务对失败和累积误差敏感。` },
  ],
  plan: [
    { title: `环境搭建`, text: `搭建 piper 运动控制和数据采集的 ROS + Docker 环境；使用 FSDP 多节点训练。` },
    { title: `数据处理`, text: `制定数采规范，进行静止帧过滤、基于信息度的速度重采样、子任务标注、进度标注、格式转换等流程。` },
    { title: `离线强化学习`, text: `用剩余末端路径长度构造 progress 监督，并采用 RECAP 标注动作优势。` },
    { title: `异质数据混合`, text: `对开源、自采、Rollout 与 DAgger 数据，参考 π0.7 按来源、动作质量和任务设置等条件标注后混训。` },
    { title: `数据和训练方式迭代`, text: `迭代对 corner case 补采 DAgger 数据，寻找最佳数据配比、训练策略。` },
    { title: `推理优化`, text: `调整 MIT、test 与 training-time RTC + Smoothing 异步推理参数，配合线性插值优化动作一致性与流畅度。` },
  ],
  result: `【叠衣服】与【折纸盒】 demo 的成功率 100%，大幅提升吞吐量和流畅度；【叠衣服】参展 2026 数字经济产业博览会。`,
  resume: {
    intro: `独立从 0 到 1 搭建机械臂运控、数据采集处理、训练、推理、评估流程：基于 π0.5 和 piper 双臂，提升柔性[叠衣服] + 长程[折纸盒] demo 的成功率（100%）／吞吐量／流畅度，参展 2026 数字经济产业博览会。`,
    bullets: [
      `搭建运控／数采 Docker 环境，制定数采规范，数据处理（过滤、子任务标注、速度重采样、转换），FSDP 多节点训练。`,
      `使用剩余末端路径长度构造 progress 监督并采用 RECAP 标注动作优势；针对失败迭代补采 DAgger 数据；针对开源、自采、Rollout 与 DAgger 中的数据来源、动作质量、任务设置等条件，参考 π0.7 的多元条件标注，有效混合异质数据集；调整 MIT ／ test ／ training-time RTC + Smoothing 异步推理参数，高频线性插值，优化一致性与流畅度。`,
    ],
  },
};
