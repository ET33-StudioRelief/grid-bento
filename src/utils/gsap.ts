import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initHeroAnimation() {
  const heroGrid = document.querySelector('.hero_grid');
  if (!heroGrid) return;

  // Animation for grid boxes
  document.querySelectorAll('.grid-box').forEach((box) => {
    gsap.set(box, {
      scale: 0.7,
      rotationY: -90,
    });

    gsap.to(box, {
      scale: 1,
      rotationY: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: box,
        start: 'top bottom',
        end: 'top 60%',
        scrub: 0.5,
      },
    });
  });

  // Animation for spans
  document.querySelectorAll('.grid-box-span').forEach((span) => {
    gsap.set(span, {
      scale: 0.7,
      rotationY: -90,
    });

    gsap.to(span, {
      scale: 1,
      rotationY: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: span,
        start: 'top bottom',
        end: 'top 60%',
        scrub: 0.5,
      },
    });
  });
}
