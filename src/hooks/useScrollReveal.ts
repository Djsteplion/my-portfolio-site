import { useEffect, useRef } from 'react';

/**
 * Attach to any element that should fade/slide in the first time it enters
 * the viewport. Pair the returned ref with the `.reveal` class (defined in
 * index.css) on the element.
 */
export function useScrollReveal<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
