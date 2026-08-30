/**
 * The reserved "leaf left blank": marks where the next work entry will go
 * without disturbing the ones before it.
 *
 * @component
 * @returns {JSX.Element}
 */
import Reveal from './Reveal';
import styles from './BlankLeaf.module.css';

export default function BlankLeaf() {
  return (
    <Reveal as="article" className={styles.article}>
      <div className={styles.folio}>IV</div>
      <div className={styles.body}>
        <h3 className={styles.title}>Leaf left blank</h3>
        <p className={styles.text}>
          Reserved for the next big thing. The folio is built to take more entries.
        </p>
      </div>
      <span className={styles.label}>In preparation</span>
    </Reveal>
  );
}
