/**
 * Section heading row shared by Works and About: a title on the left, a
 * small mono label on the right, a hairline underneath.
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
import styles from './SectionTitle.module.css';

export default function SectionTitle({ title, label }) {
  return (
    <div className={styles.row}>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
