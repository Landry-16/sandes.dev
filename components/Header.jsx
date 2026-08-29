/**
 * Masthead: a rule with the folio label, the name set letter by letter,
 * and a three-column info row (role, opening statement, Latin motto).
 * Rises into place once on load; the rule row, name, and info row also
 * carry data-parallax attributes the scroll engine (Atmosphere) reads to
 * drift them at different speeds while scrolling.
 *
 * @component
 * @returns {JSX.Element}
 */
import { SITE } from '@/lib/content';
import styles from './Header.module.css';

/** Renders `text` as one inline-block span per letter, each with its own animation-delay. */
function Letters({ text, startDelay, step }) {
  return text.split('').map((char, i) => (
    <span key={i} className={styles.letter} style={{ animationDelay: `${(startDelay + i * step).toFixed(2)}s` }}>
      {char}
    </span>
  ));
}

export default function Header() {
  const [firstName, ...rest] = SITE.name.split(' ');
  const lastName = rest.join(' ');

  return (
    <header className={styles.header}>
      <div data-parallax=".22" className={styles.ruleRow}>
        <span className={styles.ruleLeft} aria-hidden="true" />
        <span className={styles.ruleLabel}>Folio of works &amp; days</span>
        <span className={styles.ruleRight} aria-hidden="true" />
      </div>

      <h1 data-parallax="-.18" className={styles.name}>
        <span className={styles.nameLine}>
          <Letters text={firstName} startDelay={0.05} step={0.06} />
        </span>
        <span className={styles.nameLineSoft}>
          <Letters text={lastName} startDelay={0.42} step={0.05} />
        </span>
      </h1>

      <div data-parallax=".12" className={styles.infoRow}>
        <p className={styles.role}>
          Student
          <br />
          Full-stack &amp;
          <br />
          software developer
        </p>
        <p className={styles.intro}>
          I build things that are read: an app for readers, engines that draw light one ray at a time, a quiet desk for people who write. I am at the beginning of a long apprenticeship, and I keep the notes.
        </p>
        <p className={styles.motto}>
          Verba volant,
          <br />
          scripta manent.
          <span className={styles.mottoTranslation}>Words fly, writing remains</span>
        </p>
      </div>
    </header>
  );
}
