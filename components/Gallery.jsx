/**
 * A page-turnable showcase of images: arrow buttons, keyboard, and swipe
 * all flip through the set with a 3D page-turn (the current image pivots
 * off the trailing edge like a leaf turning, revealing the next one
 * underneath).
 *
 * @component
 * @param {Object} props
 * @param {import('@/lib/content').GalleryPlate[]} props.images
 * @param {string} [props.height] - Height of the image stage, e.g. 'clamp(240px, 46vh, 460px)'
 * @param {React.CSSProperties} [props.frameStyle] - Overrides for the frame's border/background
 * @returns {JSX.Element}
 *
 * @description
 * Two image layers, not one: "under" always shows the flip's target
 * (harmlessly identical to "over" at rest), and "over" shows the current
 * image, animated via CSS transition on transform. Swapping which index
 * "over" points to only happens on transitionend, once the page is fully
 * turned, so nothing needs mid-flight src swapping. Reduced-motion users
 * get the same mechanism at a near-zero transition duration via the
 * global stylesheet, rather than a separately maintained non-animated path.
 */
'use client';

import { useRef, useState } from 'react';
import styles from './Gallery.module.css';

const ROMAN_TABLE = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
  [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
  [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
];

function toRoman(num) {
  let n = num;
  let out = '';
  for (const [value, symbol] of ROMAN_TABLE) {
    while (n >= value) {
      out += symbol;
      n -= value;
    }
  }
  return out;
}

const SWIPE_THRESHOLD = 40;

export default function Gallery({ images, height, frameStyle }) {
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(null); // null | { direction: 'next' | 'prev', target: number }
  const touchRef = useRef(null);

  const count = images.length;
  const current = images[index];
  const under = images[flip ? flip.target : index];

  const goTo = (target, direction) => {
    if (flip || target === index) return;
    setFlip({ direction, target });
  };

  const next = () => goTo((index + 1) % count, 'next');
  const prev = () => goTo((index - 1 + count) % count, 'prev');

  const handleTransitionEnd = (e) => {
    if (e.propertyName !== 'transform' || !flip) return;
    setIndex(flip.target);
    setFlip(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
  };

  const handlePointerDown = (e) => {
    touchRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e) => {
    const start = touchRef.current;
    touchRef.current = null;
    if (!start) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) next();
    else prev();
  };

  const overClass = [
    styles.image,
    styles.over,
    flip?.direction === 'next' ? styles.overFlippingNext : '',
    flip?.direction === 'prev' ? styles.overFlippingPrev : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={styles.wrap}
      role="group"
      aria-roledescription="image gallery"
      aria-label={`${count} renders`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.frame} style={frameStyle}>
        <div
          className={styles.stage}
          style={{ height }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <div className={styles.slide}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={under.src} alt="" aria-hidden="true" className={`${styles.image} ${styles.under}`} />
          </div>
          <div className={styles.slide}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.src}
              alt={current.caption}
              className={overClass}
              onTransitionEnd={handleTransitionEnd}
            />
          </div>

          <div className={styles.controls}>
            <button type="button" className={styles.arrow} onClick={prev} disabled={!!flip} aria-label="Previous render">
              &#8249;
            </button>
            <button type="button" className={styles.arrow} onClick={next} disabled={!!flip} aria-label="Next render">
              &#8250;
            </button>
          </div>
        </div>
      </div>

      <div className={styles.meta}>
        <p className={styles.caption}>{current.caption}</p>
        <span className={styles.counter}>
          {toRoman(index + 1)} / {toRoman(count)}
        </span>
      </div>

      <div className={styles.dots}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            onClick={() => goTo(i, i > index ? 'next' : 'prev')}
            aria-label={`Go to render ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  );
}
