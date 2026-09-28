(() => {
  'use strict';

  // 桌面是「左栏个人介绍+目录 / 右栏项目卡」两栏，各自独立滚动；
  // 窄屏（≤900px，对应 styles.css 的断点）退回整页滚动。
  const twoPane = () => window.matchMedia('(min-width: 901px)').matches;

  const scroller = document.querySelector('.content-column');
  const sidebar = document.querySelector('.profile-sidebar');
  const HEADER_OFFSET = 84; // 窄屏整页滚动时的顶部留白
  const TOP_PAD = 14;       // 两栏模式下，目标元素距右栏顶部的留白

  // ============ 在右栏内滚动到某个元素 ============
  const scrollToEl = (el, behavior = 'smooth') => {
    if (!el) return;
    if (twoPane() && scroller) {
      const delta = el.getBoundingClientRect().top - scroller.getBoundingClientRect().top;
      scroller.scrollTo({ top: scroller.scrollTop + delta - TOP_PAD, behavior });
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top: Math.max(top, 0), behavior });
    }
  };

  const scrollToId = (id, behavior = 'smooth') => {
    const el = document.getElementById(id);
    if (!el) return false;
    scrollToEl(el, behavior);
    return true;
  };

  // ============ reveal on scroll ============
  // threshold 必须保持 0：部分 .reveal 元素比可视区高得多，用比值永远触发不了。
  // root 必须是视口而不是右栏容器：左栏 .profile-sidebar 也带 .reveal，
  // 而它是右栏的兄弟节点，用右栏当 root 时永远不会相交，整栏会停在 opacity:0。
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0, rootMargin: '0px 0px -8% 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  // ============ 顶部导航 ============
  const sections = [...document.querySelectorAll('[data-section]')];
  const navLinks = [...document.querySelectorAll('[data-nav-link]')];
  // 一个区块可能对应多处导航（顶栏 + 左栏目录），所以 map 的 value 是数组
  const navFor = new Map();
  navLinks.forEach((a) => {
    const id = a.getAttribute('href').slice(1);
    if (!navFor.has(id)) navFor.set(id, []);
    navFor.get(id).push(a);
  });

  // ============ 左栏目录（教育经历 + 项目目录） ============
  const sideLinks = [...document.querySelectorAll('[data-side-link]')];
  // 目标 id -> 指向它的所有目录链接；教育经历是两条链接指向同一处
  const linksFor = new Map();
  sideLinks.forEach((a) => {
    const id = a.getAttribute('href').slice(1);
    if (!linksFor.has(id)) linksFor.set(id, []);
    linksFor.get(id).push(a);
  });

  // 判定对象按右栏里的先后顺序：教育经历在前，然后是 8 张项目卡
  const targets = [
    document.getElementById('education'),
    ...[...document.querySelectorAll('.project-card')],
  ].filter(Boolean);

  let currentSection = null;
  let currentTarget = null;

  // 目录里的当前项要始终留在左栏可视范围内（左栏自己会滚）
  const keepIndexVisible = (link) => {
    if (!sidebar || !link || !twoPane()) return;
    const box = sidebar.getBoundingClientRect();
    const item = link.getBoundingClientRect();
    const pad = 26;
    if (item.top < box.top + pad) {
      sidebar.scrollTo({ top: sidebar.scrollTop + (item.top - box.top) - pad, behavior: 'smooth' });
    } else if (item.bottom > box.bottom - pad) {
      sidebar.scrollTo({ top: sidebar.scrollTop + (item.bottom - box.bottom) + pad, behavior: 'smooth' });
    }
  };

  const setActive = (id, prev) => {
    if (id === prev) return prev;
    const hit = linksFor.get(id) || [];
    sideLinks.forEach((a) => a.classList.toggle('is-active', hit.includes(a)));
    return id;
  };

  let ticking = false;
  const sync = () => {
    ticking = false;
    if (!scroller || !sections.length) return;

    let line;
    let atBottom;
    if (twoPane()) {
      const box = scroller.getBoundingClientRect();
      line = box.top + box.height * 0.38;
      atBottom = scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 4;
    } else {
      line = HEADER_OFFSET + 12;
      atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 4;
    }

    // 顶部导航当前项
    let sec = sections[0];
    for (const s of sections) if (s.getBoundingClientRect().top <= line) sec = s;
    if (atBottom) sec = sections[sections.length - 1];
    if (sec.id !== currentSection) {
      currentSection = sec.id;
      const hit = navFor.get(sec.id) || [];
      navLinks.forEach((a) => a.classList.toggle('is-active', hit.includes(a)));
    }

    // 左栏目录当前项
    if (targets.length) {
      let active = targets[0];
      for (const t of targets) if (t.getBoundingClientRect().top <= line) active = t;
      if (atBottom) active = targets[targets.length - 1];
      const before = currentTarget;
      currentTarget = setActive(active.id, currentTarget);
      if (currentTarget !== before) keepIndexVisible((linksFor.get(currentTarget) || [])[0]);
    }
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(sync);
  };

  if (scroller) scroller.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  // ============ 所有页内锚点链接 ============
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (ev) => {
      const id = link.getAttribute('href').slice(1);
      const target = id && document.getElementById(id);
      if (!target) return;
      ev.preventDefault();
      // 让跳转目标可聚焦，方便键盘与读屏
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      scrollToEl(target);
      target.focus({ preventScroll: true });
      history.replaceState(null, '', '#' + id);
    });
  });

  // ============ 打开时带锚点 ============
  if (location.hash.length > 1) {
    requestAnimationFrame(() => scrollToId(location.hash.slice(1), 'auto'));
  }

  sync();

  // ============ 网页全屏查看器 ============
  // 覆盖整个浏览器视口，不是调 OS 屏幕全屏。Esc / ✕ / 点空白处退出。
  const viewer = document.getElementById('viewer');
  const viewerStage = document.getElementById('viewerStage');
  const viewerCap = document.getElementById('viewerCap');

  const muteLock = (v) => {
    const lock = () => {
      if (!v.muted) v.muted = true;
      if (v.volume !== 0) v.volume = 0;
    };
    v.muted = true;
    v.volume = 0;
    v.setAttribute('muted', '');
    v.addEventListener('volumechange', lock);
    v.addEventListener('play', lock);
  };

  // 全屏一律走网页内的 .viewer，不让浏览器调起 OS 屏幕全屏。
  // 三重拦截：controlsList 不渲染按钮 + 覆盖 requestFullscreen + 真进了就立刻退出。
  const blockFullscreen = (el) => {
    ['requestFullscreen', 'webkitRequestFullscreen', 'webkitEnterFullscreen', 'mozRequestFullScreen'].forEach((m) => {
      if (!(m in el)) return;
      try {
        el[m] = () => Promise.resolve();
      } catch (err) {
        /* 只读属性就跳过，靠下面的兜底 */
      }
    });
  };

  document.addEventListener(
    'fullscreenchange',
    () => {
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    },
    true
  );
  document.addEventListener(
    'webkitfullscreenchange',
    () => {
      if (document.webkitFullscreenElement) document.webkitExitFullscreen();
    },
    true
  );

  const mediaOf = (fig) => {
    if (!fig) return null;
    const v = fig.querySelector('video');
    if (v) {
      const s = v.querySelector('source');
      return {
        kind: 'video',
        src: (s && s.getAttribute('src')) || v.getAttribute('src') || '',
        poster: v.getAttribute('poster') || '',
      };
    }
    const img = fig.querySelector('img');
    return img
      ? { kind: 'image', src: img.getAttribute('src') || '', alt: img.getAttribute('alt') || '' }
      : null;
  };

  const closeViewer = () => {
    if (!viewer || viewer.hidden) return;
    viewer.querySelectorAll('video').forEach((v) => v.pause());
    viewerStage.innerHTML = '';
    viewer.hidden = true;
    document.body.classList.remove('viewer-open');
  };

  const openViewer = (fig) => {
    const info = mediaOf(fig);
    if (!info || !viewer) return;
    viewerStage.innerHTML = '';
    let node;
    if (info.kind === 'video') {
      node = document.createElement('video');
      node.controls = true;
      node.controlsList = 'nofullscreen nodownload';
      node.autoplay = true;
      node.loop = true;
      node.playsInline = true;
      node.preload = 'auto';
      if (info.poster) node.poster = info.poster;
      node.src = info.src;
      muteLock(node);
      blockFullscreen(node);
      node.play().catch(() => {});
    } else {
      node = document.createElement('img');
      node.src = info.src;
      node.alt = info.alt;
    }
    viewerStage.appendChild(node);

    viewerCap.innerHTML = '';
    const label = fig.querySelector('.cap-label');
    const srcLine = fig.querySelector('.cap-src');
    if (label) {
      const b = document.createElement('b');
      b.textContent = label.textContent;
      viewerCap.appendChild(b);
      viewerCap.appendChild(document.createTextNode('　'));
    }
    if (srcLine) viewerCap.appendChild(document.createTextNode(srcLine.textContent));

    viewer.hidden = false;
    document.body.classList.add('viewer-open');
  };

  document.querySelectorAll('.media-frame[data-view]').forEach((frame) => {
    frame.setAttribute('role', 'button');
    frame.setAttribute('tabindex', '0');
    frame.setAttribute('aria-label', '放大查看');
    const inner = frame.querySelector('video');
    if (inner) blockFullscreen(inner);
    frame.addEventListener('click', () => openViewer(frame.closest('.media-card')));
    frame.addEventListener('keydown', (ev) => {
      if (ev.key !== 'Enter' && ev.key !== ' ') return;
      ev.preventDefault();
      openViewer(frame.closest('.media-card'));
    });
  });

  if (viewer) {
    // 点背景空白处关闭（点视频/图片本身不关）
    viewer.addEventListener('click', (ev) => {
      if (ev.target === viewer || ev.target === viewerStage) closeViewer();
    });
    const btn = document.getElementById('viewerClose');
    if (btn) btn.addEventListener('click', closeViewer);
    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape') closeViewer();
    });
  }
})();
