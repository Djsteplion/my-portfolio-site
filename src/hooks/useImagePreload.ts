import { useEffect, useState } from 'react';

interface PreloadState {
  loaded: boolean;
  progress: number; // 0 to 100
}

/**
 * Preloads every image in `sources` and only reports `loaded: true` once
 * all of them have either loaded or failed (a broken image link should
 * never block the site forever).
 */
export function useImagePreload(sources: string[]): PreloadState {
  const [loadedCount, setLoadedCount] = useState(0);
  const [loaded, setLoaded] = useState(sources.length === 0);

  useEffect(() => {
    if (sources.length === 0) {
      setLoaded(true);
      return;
    }

    let isCancelled = false;
    let count = 0;

    const markOneDone = () => {
      if (isCancelled) return;
      count += 1;
      setLoadedCount(count);
      if (count >= sources.length) {
        setLoaded(true);
      }
    };

    const imgElements = sources.map((src) => {
      const img = new Image();
      img.onload = markOneDone;
      img.onerror = markOneDone; // don't let one missing asset block the whole site
      img.src = src;
      return img;
    });

    // Safety net: never block the site for more than 6s, in case of a slow
    // or hanging network request.
    const failSafeTimer = window.setTimeout(() => {
      if (!isCancelled) setLoaded(true);
    }, 6000);

    return () => {
      isCancelled = true;
      window.clearTimeout(failSafeTimer);
      imgElements.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [sources]);

  const progress = sources.length === 0 ? 100 : Math.round((loadedCount / sources.length) * 100);

  return { loaded, progress };
}
