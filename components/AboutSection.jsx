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
              am a software engineering student, guided by an enduring curiosity for things I do not yet understand.
              Technology is where I build and experiment, but my interests rarely remain within its boundaries.
              Literature, biology, art, science, and countless other subjects have a habit of drawing me in.
              I enjoy being a beginner, asking questions, and slowly turning the unfamiliar into something I can understand.
          </p>
          <p className={styles.paragraph}>
            Curiosity, however, is only half of it.
            When something truly captures my interest, I find it difficult to approach it halfway.
            I want to understand it deeply, practise it seriously, and see how far I can take it.
            I have a quiet admiration for excellence, not as something I claim to possess, but as a standard worth pursuing.
            There is always someone more skilled, another book to read, another detail to refine, and I find that thought far more exciting than discouraging.
          </p>
          <p className={styles.paragraph}>
            Programming is simply one of the places where this philosophy becomes tangible.
            I enjoy turning ideas into things that exist, whether through software, artificial intelligence, robotics, or whatever subject happens to fascinate me next.
            I do not know where all of these interests will eventually lead, and I am in no particular hurry to find out. For now, I intend to keep learning, building, and doing both as well as I possibly can.
          </p>
        </Reveal>

        <Reveal as="aside" className={styles.aside}>
          <MagnetPlate
            caption="Tolerable human"
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
