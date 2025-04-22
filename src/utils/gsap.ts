import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initHeroAnimation() {
  const heroGrid = document.querySelector('.hero_grid');
  if (!heroGrid) return;

  // Add perspective to the container
  gsap.set(heroGrid, {
    perspective: 1000,
    transformStyle: 'preserve-3d',
  });

  // Get average height of grid boxes
  const gridBoxes = document.querySelectorAll('.grid-box');
  const totalHeight = Array.from(gridBoxes).reduce(
    (sum, box) => sum + box.getBoundingClientRect().height,
    0
  );
  const averageBoxHeight = totalHeight / gridBoxes.length;

  // Animation for grid boxes
  gridBoxes.forEach((box) => {
    const boxHeight = box.getBoundingClientRect().height;

    gsap.set(box, {
      y: boxHeight,
      scale: 0.7,
      rotationX: 66,
      transformOrigin: '50% 50% -100',
    });

    gsap.to(box, {
      y: 0,
      scale: 1,
      rotationX: 0,
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
      y: averageBoxHeight,
      scale: 0.7,
      rotationX: 66,
      transformOrigin: '50% 50% -100',
    });

    gsap.to(span, {
      y: 0,
      scale: 1,
      rotationX: 0,
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
