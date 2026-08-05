import { useRef } from 'react';

interface SwipeHandlers {
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: () => void;
}

/** Simple left/right swipe detection that works for both directions equally. */
export function useSwipe(onSwipeLeft: () => void, onSwipeRight: () => void, threshold = 50): SwipeHandlers {
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    deltaX.current = e.touches[0].clientX - startX.current;
  };

  const onTouchEnd = () => {
    if (deltaX.current <= -threshold) {
      onSwipeLeft();
    } else if (deltaX.current >= threshold) {
      onSwipeRight();
    }
    startX.current = null;
    deltaX.current = 0;
  };

  return { onTouchStart, onTouchMove, onTouchEnd };
}
