/**
 * The technology-keyword marquee band between the blank leaf and About.
 *
 * @component
 * @returns {JSX.Element}
 */
import { STACK_WORDS } from '@/lib/content';
import MarqueeTrack from './MarqueeTrack';
import styles from './StackFrieze.module.css';

export default function StackFrieze() {
  return (
    <MarqueeTrack direction="right" duration={58} wrapStyle={{ marginTop: 'clamp(52px, 11vh, 120px)' }}>
      <div className={styles.row}>
        {STACK_WORDS.map((word) => (
          <span key={word}>
            {word}
            <span className={styles.separator}> &#10022; </span>
          </span>
        ))}
      </div>
    </MarqueeTrack>
  );
}
