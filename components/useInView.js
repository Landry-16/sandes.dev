/**
 * Tracks whether an element has scrolled into view, once. Backs both Reveal
 * and InkHeading, which differ only in the CSS applied for the "revealed"
 * state.
 *
 * @param {Object} [options]
 * @param {string} [options.rootMargin='0px 0px -10% 0px'] - IntersectionObserver rootMargin
 * @param {number} [options.failsafeMs=3000] - Reveal unconditionally after this many ms,
 *   so content can never be stranded invisible by an IntersectionObserver failure.
 * @returns {[React.RefObject, boolean]} A ref to attach to the observed element, and whether it's revealed.
 */
'use client';

import { useEffect, useRef, useState } from 'react';

export default function useInView({ rootMargin = '0px 0px -10% 0px', failsafeMs = 3000 } = {}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reveal = () => setRevealed(true);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);

    const failsafe = setTimeout(reveal, failsafeMs);

    return () => {
      observer.disconnect();
      clearTimeout(failsafe);
    };
  }, [rootMargin, failsafeMs]);

  return [ref, revealed];
}
