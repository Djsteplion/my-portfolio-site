import { useEffect, useMemo, useState, useCallback } from 'react';

function getSlidesPerView(width: number): number {
  if (width <= 767) return 1;
  if (width <= 991) return 2;
  return 3;
}

/**
 * A small, dependency-free carousel controller.
 *
 * The original site used Swiper with `loop: true`. When the filter buttons
 * hid/showed slides via `display: none` instead of actually removing them
 * from the DOM, Swiper's internal loop indices went stale — so `slideNext()`
 * (the right arrow / right swipe) silently stopped moving while `slidePrev()`
 * kept working by coincidence. This hook avoids that entirely: it derives
 * slide count straight from the *actual* filtered array on every render, so
 * there's no separate internal index to fall out of sync.
 */
export function useCarousel<T>(items: T[]) {
  const [index, setIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(() =>
    typeof window === 'undefined' ? 3 : getSlidesPerView(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => setSlidesPerView(getSlidesPerView(window.innerWidth));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, items.length - slidesPerView);

  // Whenever the item list (e.g. after filtering) or the viewport changes,
  // clamp the current index back into range instead of leaving it stale.
  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const next = useCallback(() => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goTo = useCallback(
    (i: number) => {
      setIndex(Math.max(0, Math.min(i, maxIndex)));
    },
    [maxIndex]
  );

  const canGoNext = index < maxIndex;
  const canGoPrev = index > 0;

  const trackPercent = useMemo(() => {
    if (items.length === 0) return 0;
    return (index * 100) / slidesPerView;
  }, [index, slidesPerView, items.length]);

  return { index, slidesPerView, maxIndex, next, prev, goTo, canGoNext, canGoPrev, trackPercent };
}
