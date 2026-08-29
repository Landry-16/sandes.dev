/**
 * An infinitely scrolling horizontal band: renders its children twice,
 * side by side, and animates the pair left (or right) by exactly 50%, so
 * the loop point is invisible.
 *
 * @component
 * @param {Object} props
 * @param {'left'|'right'} [props.direction='left']
 * @param {number} [props.duration=46] - Full loop duration, in seconds
 * @param {React.CSSProperties} [props.wrapStyle] - Overrides for the outer band (background, margin)
 * @param {React.ReactNode} props.children - One row's worth of content; duplicated automatically
 * @returns {JSX.Element}
 */
import styles from './MarqueeTrack.module.css';

export default function MarqueeTrack({ direction = 'left', duration = 46, wrapStyle, children }) {
  const directionClass = direction === 'right' ? styles.right : styles.left;

  return (
    <div className={styles.wrap} style={wrapStyle} aria-hidden="true">
      <div className={`${styles.track} ${directionClass}`} style={{ animationDuration: `${duration}s` }}>
        {children}
        {children}
      </div>
    </div>
  );
}
