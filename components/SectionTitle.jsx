/**
 * Section heading row shared by Works and About: a title on the left, a
 * small mono label on the right, a hairline underneath. Reveals itself on
 * scroll, and its heading ink-bleeds into color independently.
 *
 * @component
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.label
 * @returns {JSX.Element}
 *
 * @example
 * <SectionTitle title="Selected Works" label="I-IV" />
 */
import Reveal from './Reveal';
import InkHeading from './InkHeading';
import styles from './SectionTitle.module.css';

export default function SectionTitle({ title, label }) {
  return (
    <Reveal className={styles.row}>
      <InkHeading className={styles.title}>{title}</InkHeading>
      <span className={styles.label}>{label}</span>
    </Reveal>
  );
}
