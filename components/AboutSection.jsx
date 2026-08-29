/**
 * On the Author: a drop-capped introduction, a footnoted closing line, and
 * an aside with the portrait plate and a short list of facts. The title
 * row, the main text, and the aside each reveal independently as they
 * scroll into view, rather than the section fading in as one block.
 *
 * @component
 * @returns {JSX.Element}
 */
import { FACTS } from '@/lib/content';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';
import MagnetPlate from './MagnetPlate';
import Footnote from './Footnote';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <SectionTitle title="On the Author" label="Marginalia" />

      <div className={styles.content}>
        <Reveal className={styles.main}>
          <p className={styles.paragraph}>
            <span className={styles.dropCap}>I</span>
              love pizza.
          </p>
          <p className={styles.paragraph}>
            And cooking.
          </p>
          <p className={styles.paragraph}>
            And eating.
          </p>
        </Reveal>

        <Reveal as="aside" className={styles.aside}>
          <MagnetPlate
            caption="Portrait, candlelit, or a desk with books"
            frameStyle={{ height: '300px', marginBottom: '22px', borderColor: 'rgba(var(--gold-rgb), .22)', background: 'rgba(var(--panel-rgb), .55)' }}
          />
          <p className={styles.portraitCaption}>...</p>

          {FACTS.map((f) => (
            <div key={f.label} className={styles.fact}>
              <p className={styles.factLabel}>{f.label}</p>
              <p className={styles.factValue}>{f.value}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
