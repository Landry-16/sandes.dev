/**
 * An image plate that tilts toward the cursor in 3D (a "magnet" for
 * attention), with an optional caption overlay that fades in on hover.
 * Stands in for the design tool's drag-and-drop <image-slot>, which only
 * works inside the Claude Design editor; shows a caption placeholder until
 * a real src is supplied.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.src] - Image URL. Omit to show the placeholder caption.
 * @param {string} props.caption - Placeholder caption, alt text, and (if showOverlayCaption) the hover overlay text.
 * @param {React.CSSProperties} [props.frameStyle] - Overrides for the frame (border color, background, and
 *   height when the frame itself should be the fixed-size box, e.g. a portrait)
 * @param {string} [props.contentHeight] - Height for the inner content box, when the frame should instead
 *   auto-size around it (e.g. a work plate, where padding wraps a fixed-height image area)
 * @param {boolean} [props.showOverlayCaption=false] - Show `caption` as a bottom overlay on hover
 * @returns {JSX.Element}
 *
 * @description
 * The tilt is direct DOM-ref mutation on every pointer move, not React
 * state: re-rendering on each mouse move would be wasteful for a purely
 * decorative, continuously-varying transform. Disabled under
 * prefers-reduced-motion, where the plate stays flat.
 */
'use client';

import { useRef } from 'react';
import styles from './MagnetPlate.module.css';

const REST_TRANSITION = 'transform 320ms cubic-bezier(.2,.7,.2,1), box-shadow 500ms ease, border-color 500ms ease';
const LEAVE_TRANSITION = 'transform 700ms cubic-bezier(.2,.7,.2,1), box-shadow 600ms ease, border-color 600ms ease';

export default function MagnetPlate({ src, caption, frameStyle, contentHeight, showOverlayCaption = false }) {
  const frameRef = useRef(null);
  const capRef = useRef(null);

  const handleMove = (e) => {
    const el = frameRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const r = el.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width - 0.5;
    const dy = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = 'box-shadow 500ms ease, border-color 500ms ease';
    el.style.transform = `perspective(900px) rotateY(${(dx * 9).toFixed(2)}deg) rotateX(${(-dy * 9).toFixed(2)}deg) translate3d(${(dx * 14).toFixed(1)}px, ${(dy * 12).toFixed(1)}px, 0) scale(1.025)`;
    el.style.boxShadow = '0 30px 70px -30px rgba(0, 0, 0, .85), 0 0 0 1px rgba(var(--gold-rgb), .28)';
    el.style.borderColor = 'rgba(var(--gold-rgb), .6)';

    if (capRef.current) {
      capRef.current.style.opacity = '1';
      capRef.current.style.transform = 'none';
    }
  };

  const handleLeave = () => {
    const el = frameRef.current;
    if (!el) return;
    el.style.transition = LEAVE_TRANSITION;
    el.style.transform = 'none';
    el.style.boxShadow = 'none';
    el.style.borderColor = 'rgba(var(--gold-rgb), .24)';

    if (capRef.current) {
      capRef.current.style.opacity = '0';
      capRef.current.style.transform = 'translateY(10px)';
    }
  };

  return (
    <div
      ref={frameRef}
      className={styles.frame}
      style={{ transition: REST_TRANSITION, ...frameStyle }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <div className={styles.inner} style={contentHeight ? { height: contentHeight } : undefined}>
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={caption} className={styles.image} />
        ) : (
          <div className={styles.placeholder}>
            <p className={styles.caption}>{caption}</p>
          </div>
        )}
      </div>
      {showOverlayCaption && (
        <p ref={capRef} className={styles.overlayCaption}>
          {caption}
        </p>
      )}
    </div>
  );
}
