/**
 * Fixed atmosphere layers (candlelight, vignette, grain, gilt spine) plus
 * the scroll choreography engine driving them and the masthead parallax
 * and pinned work sections.
 *
 * @component
 * @returns {JSX.Element}
 *
 * @description
 * One requestAnimationFrame loop, matching the design's own architecture:
 * candlelight radius/opacity respond to scroll velocity and cursor
 * position, the spine's fill and roman numeral respond to scroll progress,
 * [data-parallax] elements translate by scrollY times their own scale, and
 * [data-pin] sections compute an enter/exit "life" value from their own
 * bounding rect to fade, blur, and scale their text/plate/numeral children.
 * All of it is direct ref/DOM mutation rather than React state, since these
 * values change every frame and would make React re-render on every pixel
 * of scroll otherwise.
 *
 * Under prefers-reduced-motion, the whole engine is skipped: candle and
 * spine keep their static CSS resting state, parallax elements stay at
 * their natural position, and pinned work content is left at full
 * opacity/no transform (never hidden pending a tick that will not run).
 */
'use client';

import { useEffect, useRef } from 'react';
import styles from './Atmosphere.module.css';

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const ROMAN = ['I', 'II', 'III', 'IV', 'V'];

export default function Atmosphere() {
  const candleRef = useRef(null);
  const spineFillRef = useRef(null);
  const spineNumRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const parallaxEls = Array.from(document.querySelectorAll('[data-parallax]'));
    const pinEls = Array.from(document.querySelectorAll('[data-pin]'));

    pinEls.forEach((sec) => {
      const text = sec.querySelector('[data-pin-text]');
      const plate = sec.querySelector('[data-pin-plate]');
      const num = sec.querySelector('[data-pin-numeral]');
      if (text) {
        text.style.opacity = '0';
        text.style.filter = 'blur(9px)';
        text.style.transform = 'translate3d(0,46px,0)';
      }
      if (plate) {
        plate.style.opacity = '0';
        plate.style.transform = 'translate3d(0,80px,0) scale(.9)';
      }
      if (num) {
        num.style.opacity = '0';
        num.style.transform = 'translate3d(45px,-50%,0)';
      }
    });

    const pointer = { x: 0, y: 0, active: false };
    let vel = 0;
    let lastY = 0;
    let raf = 0;

    const tick = () => {
      raf = 0;
      const vh = window.innerHeight || 800;
      const y = window.scrollY || window.pageYOffset || 0;
      vel = Math.min(1, Math.abs(y - lastY) / 90);
      lastY = y;

      const candle = candleRef.current;
      if (candle) {
        const r = 420 + vel * 320;
        const px = pointer.active ? pointer.x : (window.innerWidth || 1000) / 2;
        const py = pointer.active ? pointer.y : vh * 0.4;
        const a = (0.13 + vel * 0.1).toFixed(3);
        candle.style.background = `radial-gradient(${Math.round(r)}px circle at ${px}px ${py}px, rgba(var(--gold-rgb), ${a}), rgba(var(--oxblood-rgb), .06) 45%, transparent 72%)`;
      }

      const total = Math.max(1, document.documentElement.scrollHeight - vh);
      const progress = clamp01(y / total);
      if (spineFillRef.current) spineFillRef.current.style.transform = `scaleY(${progress.toFixed(4)})`;
      if (spineNumRef.current) {
        spineNumRef.current.style.top = `${(progress * 100).toFixed(2)}%`;
        spineNumRef.current.textContent = ROMAN[Math.min(4, Math.floor(progress * 5))];
      }

      parallaxEls.forEach((el) => {
        const scale = parseFloat(el.getAttribute('data-parallax')) || 0;
        el.style.transform = `translate3d(0, ${(y * scale).toFixed(1)}px, 0)`;
      });

      pinEls.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        const span = Math.max(1, rect.height + vh);
        const pr = clamp01((vh - rect.top) / span);
        if (rect.top > vh * 1.2 || rect.bottom < -vh * 0.2) return;

        const enter = clamp01(pr / 0.3);
        const exit = 1 - clamp01((pr - 0.62) / 0.26);
        const life = Math.min(enter, exit);

        const text = sec.querySelector('[data-pin-text]');
        const plate = sec.querySelector('[data-pin-plate]');
        const num = sec.querySelector('[data-pin-numeral]');

        if (text) {
          text.style.opacity = life.toFixed(3);
          text.style.transform = `translate3d(0, ${((1 - enter) * 46 - (1 - exit) * 34).toFixed(1)}px, 0)`;
          text.style.filter = `blur(${((1 - life) * 9).toFixed(2)}px)`;
        }
        if (plate) {
          plate.style.opacity = life.toFixed(3);
          const plateScale = 0.9 + Math.min(1, enter) * 0.1 - (1 - exit) * 0.06;
          plate.style.transform = `translate3d(0, ${((1 - enter) * 80 - (1 - exit) * 40).toFixed(1)}px, 0) scale(${plateScale.toFixed(3)})`;
        }
        if (num) {
          num.style.opacity = (life * (0.55 + pr * 0.45)).toFixed(3);
          num.style.transform = `translate3d(${((0.5 - pr) * 90).toFixed(1)}px, -50%, 0)`;
        }
      });
    };

    const request = () => {
      if (raf) return;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
      request();
    };

    tick();
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request, { passive: true });
    window.addEventListener('pointermove', onMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', request);
      window.removeEventListener('pointermove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={candleRef} className={styles.candle} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />
      <div className={styles.spine} aria-hidden="true">
        <div className={styles.spineRule} />
        <div ref={spineFillRef} className={styles.spineFill} />
        <span className={styles.spineTick} style={{ top: '18%' }} />
        <span className={styles.spineTick} style={{ top: '46%' }} />
        <span className={styles.spineTick} style={{ top: '74%' }} />
        <div ref={spineNumRef} className={styles.spineNum}>
          I
        </div>
      </div>
    </>
  );
}
