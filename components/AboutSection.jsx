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
            am a student, and I write software the way one keeps a commonplace book: by copying out what works, annotating what doesn&apos;t, and returning to it later. Most of what I make sits somewhere between reading and computation: reading apps, rendering engines, writing tools.
          </p>
          <p className={styles.paragraph}>
            Full-stack when a thing needs to be used by people; closer to the metal when it needs to be fast. I like problems where correctness is visible: a rendered image is a proof, and a slow page is an argument you have lost.
          </p>
          <p className={styles.paragraph}>
            Currently reading, building, and looking for work where I can learn from people who are better than me.
            <Footnote>Internships, apprenticeships, or open-source work. Hover is enough; email is better.</Footnote>
          </p>
        </Reveal>

        <Reveal as="aside" className={styles.aside}>
          <MagnetPlate
            caption="Portrait, candlelit, or a desk with books"
            frameStyle={{ height: '300px', marginBottom: '22px', borderColor: 'rgba(var(--gold-rgb), .22)', background: 'rgba(var(--panel-rgb), .55)' }}
          />
          <p className={styles.portraitCaption}>Plate the first: the author at his desk.</p>

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
