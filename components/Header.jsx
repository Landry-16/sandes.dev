/**
 * Masthead: illuminated initial, name, role, opening statement, and the
 * Latin motto. Rises into place once on load; not scroll-triggered.
 *
 * @component
 * @returns {JSX.Element}
 */
import { SITE } from '@/lib/content';
import ImagePlate from './ImagePlate';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.ruleRow}>
        <span className={styles.ruleLeft} aria-hidden="true" />
        <span className={styles.ruleLabel}>Folio of works &amp; days</span>
        <span className={styles.ruleRight} aria-hidden="true" />
      </div>

      <div className={styles.nameRow}>
        <span className={styles.initial}>
          <ImagePlate caption="Illuminated initial" frameStyle={{ borderColor: 'rgba(var(--gold-rgb), .4)', background: 'rgba(var(--panel-rgb), .6)' }} />
        </span>
        <div className={styles.nameBlock}>
          <h1 className={styles.name}>
            {SITE.name.split(' ')[0]}
            <br />
            {SITE.name.split(' ').slice(1).join(' ')}
          </h1>
          <p className={styles.role}>{SITE.role}</p>
        </div>
      </div>

      <div className={styles.introRow}>
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
