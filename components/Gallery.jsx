/**
 * A showcase of images with a simple crossfade between them: arrow
 * buttons, keyboard, and swipe all navigate the same way.
 *
 * @component
 * @param {Object} props
 * @param {import('@/lib/content').GalleryPlate[]} props.images
 * @param {string} [props.height] - Fixed height of the image stage, e.g. 'clamp(240px, 46vh, 460px)'
 * @param {React.CSSProperties} [props.frameStyle] - Overrides for the frame's border/background
 * @param {string} [props.repoUrl] - If set, the picture itself becomes a link to this URL (with a
 *   "View repository" label fading in on hover), opened in a new tab
 * @returns {JSX.Element}
 *
 * @description
 * The stage is a fixed size regardless of which image is showing, and each
 * image is composited from two layers so it never has to be cropped or
 * scaled up to fill that box: a sharp copy sits centered at object-fit:
 * contain (the whole image, always visible, never zoomed past its own
 * resolution), over a blurred, darkened, object-fit: cover copy of the same
 * image that fills whatever space the sharp copy's letterboxing leaves.
 * The box always looks fully occupied without ever cropping or distorting
 * the actual picture.
 *
 * Two full slides, not one: "under" always shows the fade's target
 * (harmlessly identical to "over" at rest, since it sits fully opaque the
 * whole time), and "over" (holding both the backdrop and sharp layers for
 * the current image) fades to transparent as a unit to reveal it. Swapping
 * which index "over" points to only happens on transitionend, once the
 * fade is complete, so there is no mid-flight src swap to keep in sync
 * with animation timing.
 *
 * The optional link overlay sits above the pictures but below the arrow
 * buttons (same pointer-events-none-except-children trick the arrows
 * already use), so it never intercepts a click meant for a control. A
 * swipe is not a click: whether the last pointer gesture crossed the
 * swipe threshold is tracked in a ref, and the link's own click handler
 * checks it, calling preventDefault so a drag-release never also opens
 * the browser's default navigation for the anchor underneath it.
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

/** The backdrop + sharp image pair for one slide. */
function Plate({ image }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image.src} alt="" aria-hidden="true" className={styles.backdrop} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image.src} alt={image.caption} className={styles.foreground} />
    </>
  );
}

export default function Gallery({ images, height, frameStyle, repoUrl }) {
  const [index, setIndex] = useState(0);
  const [pending, setPending] = useState(null); // null | target index
  const touchRef = useRef(null);
  const lastWasSwipe = useRef(false);

  const count = images.length;
  const current = images[index];
  const under = images[pending ?? index];

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
    if (!start) {
      lastWasSwipe.current = false;
      return;
    }
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    const isSwipe = Math.abs(dx) >= SWIPE_THRESHOLD && Math.abs(dx) >= Math.abs(dy);
    lastWasSwipe.current = isSwipe;
    if (!isSwipe) return;
    if (dx < 0) next();
    else prev();
  };

  const handleLinkClick = (e) => {
    if (lastWasSwipe.current) e.preventDefault();
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
          style={{ height }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <div className={`${styles.slide} ${styles.under}`}>
            <Plate image={under} />
          </div>
          <div
            className={`${styles.slide} ${styles.over} ${pending !== null ? styles.fading : ''}`}
            onTransitionEnd={handleTransitionEnd}
          >
            <Plate image={current} />
          </div>

          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.repoOverlay}
              onClick={handleLinkClick}
              aria-label="View repository on GitHub"
            >
              <span className={styles.repoLabel}>View repository</span>
            </a>
          )}

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
