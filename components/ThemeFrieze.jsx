/**
 * The concept-word marquee band between the masthead and the works.
 *
 * @component
 * @returns {JSX.Element}
 */
import { THEME_WORDS } from '@/lib/content';
import MarqueeTrack from './MarqueeTrack';
import styles from './ThemeFrieze.module.css';

export default function ThemeFrieze() {
  return (
    <MarqueeTrack direction="left" duration={46} wrapStyle={{ background: 'rgba(var(--panel-rgb), .4)' }}>
      <div className={styles.row}>
        {THEME_WORDS.map((word) => (
          <span key={word.text}>
            <span className={word.italic ? styles.italic : undefined}>{word.text}</span>
            <span className={styles.separator}> &middot; </span>
          </span>
        ))}
      </div>
    </MarqueeTrack>
  );
}
