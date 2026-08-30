/**
 * A showcase of images with a simple crossfade between them: arrow
 * buttons, keyboard, and swipe all navigate the same way.
 *
 * @component
 * @param {Object} props
 * @param {import('@/lib/content').GalleryPlate[]} props.images
 * @param {string} [props.maxHeight] - Cap on the stage height, e.g. 'clamp(240px, 46vh, 460px)'
 * @param {React.CSSProperties} [props.frameStyle] - Overrides for the frame's border/background
 * @returns {JSX.Element}
 *
 * @description
 * Two image layers, not one: "under" always shows the fade's target
 * (harmlessly identical to "over" at rest, since it sits fully opaque the
 * whole time), and "over" shows the current image, fading to transparent
 * to reveal it. Swapping which index "over" points to only happens on
 * transitionend, once the fade is complete, so there is no mid-flight src
 * swap to keep in sync with animation timing.
 *
 * The stage's aspect-ratio matches the current image's own dimensions
 * (from content data, not measured at runtime, so there's no load-triggered
 * layout shift), so object-fit: contain neither crops nor letterboxes it -
 * the box just takes the image's shape, up to maxHeight. It only updates
 * once a fade completes, so a flip between differently-shaped images
 * doesn't resize the box out from under the transition in progress.
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

export default function Gallery({ images, maxHeight, frameStyle }) {
  const [index, setIndex] = useState(0);
  const [pending, setPending] = useState(null); // null | target index
  const touchRef = useRef(null);

  const count = images.length;
  const current = images[index];
  const under = images[pending ?? index];
  const stageStyle = {
    maxHeight,
    aspectRatio: current.width && current.height ? `${current.width} / ${current.height}` : undefined,
  };

  const goTo = (target) => {
    if (pending !== null || target === index) return;
    setPending(target);
  };

  const next = () => goTo((index + 1) % count);
  const prev = () => goTo((index - 1 + count) % count);

  const handleTransitionEnd = (e) => {
    if (e.propertyName !== 'opacity' || pending === null) return;
    setIndex(pending);
    setPending(null);
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
          style={stageStyle}
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
              className={`${styles.image} ${styles.over} ${pending !== null ? styles.fading : ''}`}
              onTransitionEnd={handleTransitionEnd}
            />
          </div>

          <div className={styles.controls}>
            <button type="button" className={styles.arrow} onClick={prev} disabled={pending !== null} aria-label="Previous render">
              &#8249;
            </button>
            <button type="button" className={styles.arrow} onClick={next} disabled={pending !== null} aria-label="Next render">
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
            onClick={() => goTo(i)}
            aria-label={`Go to render ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  );
}
