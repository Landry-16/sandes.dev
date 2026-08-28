/**
 * Fixed atmosphere layers behind the page content: a candlelight glow that
 * follows the cursor, a vignette, and a grain overlay.
 *
 * @component
 * @returns {JSX.Element}
 *
 * @description
 * The candle's live position is written straight to the DOM through a ref
 * on every pointer move (rAF-throttled) rather than through React state, so
 * the glow can track the cursor every frame without triggering a re-render.
 * Disabled under prefers-reduced-motion, where the candle keeps its static
 * centered glow instead of chasing the pointer.
 */
'use client';

import { useEffect, useRef } from 'react';
import styles from './Atmosphere.module.css';

export default function Atmosphere() {
  const candleRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const el = candleRef.current;
    if (!el) return undefined;

    const onMove = (e) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        el.style.background = `radial-gradient(460px circle at ${e.clientX}px ${e.clientY}px, rgba(var(--gold-rgb), .15), rgba(var(--oxblood-rgb), .06) 45%, transparent 72%)`;
      });
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={candleRef} className={styles.candle} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />
    </>
  );
}
