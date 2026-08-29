/**
 * Colophon: the closing invitation to get in touch, contact links, and the
 * edition note.
 *
 * @component
 * @returns {JSX.Element}
 */
import { CONTACT_LINKS } from '@/lib/content';
import Reveal from './Reveal';
import InkHeading from './InkHeading';
import styles from './ColophonSection.module.css';

export default function ColophonSection() {
  return (
    <Reveal as="section" id="colophon" className={styles.section}>
      <p className={styles.label}>Colophon</p>
      <InkHeading className={styles.title}>Write to me and I will answer.</InkHeading>

      <div className={styles.links}>
        {CONTACT_LINKS.map((link) => (
          <a key={link.label} href={link.href} className={styles.link}>
            {link.label}
          </a>
        ))}
      </div>

      <p className={styles.edition}>
        Set in Cormorant Garamond and EB Garamond, with IBM Plex Mono for the marginal hand. Composed by hand, MMXXVI.
      </p>
    </Reveal>
  );
}
