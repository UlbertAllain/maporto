'use client';
import { useEffect } from 'react';
export function Motion() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.1 });
    for (const element of elements) {
      // Keep the first viewport visible even before hydration.
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add('reveal-ready');
        observer.observe(element);
      }
    }
    const revealAll = () => {
      if (preference.matches) elements.forEach(el => el.classList.add('is-visible'));
    };
    preference.addEventListener('change', revealAll);
    return () => { observer.disconnect(); preference.removeEventListener('change', revealAll); };
  }, []);
  return null;
}
