(() => {
  'use strict';

  const siteCode = 'madoka-portfolio';
  const isPublishedPortfolio = location.hostname === 'madokamoon.github.io'
    && location.pathname.startsWith('/portfolio/');

  if (!isPublishedPortfolio || !/^[a-z0-9-]+$/.test(siteCode)) return;

  const script = document.createElement('script');
  script.defer = true;
  script.src = 'https://gc.zgo.at/count.js';
  script.dataset.goatcounter = `https://${siteCode}.goatcounter.com/count`;
  document.body.appendChild(script);
})();
