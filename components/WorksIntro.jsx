/**
 * The Works section's heading, sitting alone before the pinned work
 * entries (which render as full-bleed siblings, outside the constrained
 * column, so they can use the full viewport for their scroll staging).
 *
 * @component
 * @returns {JSX.Element}
 */
import SectionTitle from './SectionTitle';
import styles from './WorksIntro.module.css';

export default function WorksIntro() {
  return (
    <section id="works" className={styles.section}>
      <SectionTitle title="Selected Works" label="I–IV" />
    </section>
  );
}
