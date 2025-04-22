import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const getStartPosition = (element: Element): string => {
  if (element.classList.contains('is-row2')) return 'top 30%';
  if (element.classList.contains('is-row3') || element.classList.contains('is-row4'))
    return 'top 45%';
  if (element.classList.contains('is-row5')) return 'top 65%';
  if (element.classList.contains('is-2row')) return 'top 40%';
  return element.classList.contains('grid-box') ? 'top 25%' : 'top 14%';
};

export function initHeroAnimation() {
  // Animation for grid boxes
  document.querySelectorAll('.grid-box').forEach((box) => {
    gsap.set(box, { y: 40, scale: 0.72 });
    gsap.to(box, {
      y: 0,
      scale: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: box,
        start: getStartPosition(box),
        toggleActions: 'play none none reverse',
      },
    });
  });

  // Animation for all spans
  document.querySelectorAll('.grid-box-span').forEach((span) => {
    gsap.set(span, { y: 10, scale: 1 });
    gsap.to(span, {
      y: 0,
      scale: 1.05,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: span,
        start: getStartPosition(span),
        toggleActions: 'play none none reverse',
      },
    });
  });
}
