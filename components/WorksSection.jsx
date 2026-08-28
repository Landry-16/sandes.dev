/**
 * Selected Works: a folio of project entries, plus a reserved "leaf left
 * blank" that marks where the next entry will go.
 *
 * @component
 * @returns {JSX.Element}
 */
import { WORKS } from '@/lib/content';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';
import ImagePlate from './ImagePlate';
import styles from './WorksSection.module.css';

export default function WorksSection() {
  return (
    <Reveal as="section" id="works" className={styles.section}>
      <SectionTitle title="Selected Works" label="I–IV" />

      <div className={styles.list}>
        {WORKS.map((w) => (
          <article key={w.folio} className={styles.entry}>
            <div className={styles.folio}>{w.folio}</div>
            <div className={styles.body}>
              <h3 className={styles.entryTitle}>{w.title}</h3>
              <p className={styles.kind}>{w.kind}</p>
              <p className={styles.blurb}>{w.blurb}</p>
              <div className={styles.stack}>
                {w.stack.map((s) => (
                  <span key={s} className={styles.chip}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.plateColumn}>
              <div className={styles.plateFrame}>
                <ImagePlate caption={w.plate} />
              </div>
              <p className={styles.note}>{w.note}</p>
            </div>
          </article>
        ))}
      </div>

      <article className={styles.blank}>
        <div className={styles.blankFolio}>IV</div>
        <div className={styles.blankBody}>
          <h3 className={styles.blankTitle}>Leaf left blank</h3>
          <p className={styles.blankText}>
            Reserved for the next thing. The folio is built to take more entries without rearranging the ones before it.
          </p>
        </div>
        <span className={styles.blankLabel}>In preparation</span>
      </article>
    </Reveal>
  );
}
