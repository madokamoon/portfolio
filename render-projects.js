(() => {
  'use strict';

  const projects = window.portfolioProjects || {};

  const appendText = (node, value) => {
    String(value || '').split(/(\[[^\]]+\])/g).forEach((part) => {
      if (!part) return;
      if (/^\[[^\]]+\]$/.test(part)) {
        const task = document.createElement('span');
        task.className = 'task';
        task.textContent = part;
        node.appendChild(task);
      } else {
        node.appendChild(document.createTextNode(part));
      }
    });
  };

  const section = (label, content) => {
    const row = document.createElement('section');
    row.className = 'project-story-section';
    const heading = document.createElement('h4');
    heading.textContent = label;
    row.appendChild(heading);
    row.appendChild(content);
    return row;
  };

  const paragraph = (value) => {
    const node = document.createElement('p');
    appendText(node, value);
    return node;
  };

  const labeledList = (entries) => {
    const list = document.createElement('ul');
    list.className = 'project-story-list';
    entries.forEach(({ title, text }) => {
      const item = document.createElement('li');
      const heading = document.createElement('strong');
      heading.textContent = `${title}：`;
      item.appendChild(heading);
      appendText(item, text);
      list.appendChild(item);
    });
    return list;
  };

  document.querySelectorAll('.project-card').forEach((card) => {
    const project = projects[card.id];
    if (!project) {
      console.error(`缺少项目文案：${card.id}`);
      card.querySelector('.project-story-content').textContent = '项目文案未加载，请检查 content 目录。';
      return;
    }

    card.querySelector('.project-title-row h3').textContent = project.title;
    card.querySelector('.project-role').textContent = project.role;

    const story = card.querySelector('.project-story-content');
    const background = Array.isArray(project.background)
      ? labeledList(project.background)
      : paragraph(project.background);
    const rows = [
      section('概述', paragraph(project.overview)),
      section('背景', background),
      section('方案', labeledList(project.plan || [])),
      section('成果', paragraph(project.result)),
    ];
    story.replaceChildren(...rows);

    const original = card.querySelector('.resume-original-content');
    const intro = document.createElement('p');
    intro.className = 'project-lede';
    appendText(intro, project.resume.intro);
    const contents = [intro];
    if (project.resume.bullets.length) {
      const list = document.createElement('ul');
      list.className = 'project-list';
      project.resume.bullets.forEach((text) => {
        const item = document.createElement('li');
        appendText(item, text);
        list.appendChild(item);
      });
      contents.push(list);
    }
    original.replaceChildren(...contents);
  });
})();
