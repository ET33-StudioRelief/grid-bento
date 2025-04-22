import './index.css';

import { initHeroAnimation } from '$utils/gsap';

window.Webflow ||= [];
window.Webflow.push(() => {
  initHeroAnimation();
});
