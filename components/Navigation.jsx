/**
 * Sticky top navigation: the author's mark on the left, section anchors on
 * the right.
 *
 * @component
 * @returns {JSX.Element}
 */
import { NAV_ITEMS, SITE } from '@/lib/content';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <span className={styles.mark}>{SITE.shortName}</span>
      <div className={styles.links}>
        {NAV_ITEMS.map((item) => (
          <a key={item.id} href={`#${item.id}`} className={styles.link}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
