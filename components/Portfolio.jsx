/**
 * Root portfolio layout. The atmosphere layers sit behind everything;
 * regular content lives in a constrained centered column, but the pinned
 * work sections and the marquee friezes render as full-bleed siblings
 * between column segments, since they need the full viewport width for
 * their scroll staging and infinite-scroll bands.
 *
 * @component
 * @returns {JSX.Element}
 */
import { WORKS } from '@/lib/content';
import Atmosphere from './Atmosphere';
import Navigation from './Navigation';
import Header from './Header';
import ThemeFrieze from './ThemeFrieze';
import WorksIntro from './WorksIntro';
import PinnedWork from './PinnedWork';
import BlankLeaf from './BlankLeaf';
import StackFrieze from './StackFrieze';
import AboutSection from './AboutSection';
import ColophonSection from './ColophonSection';
import styles from './Portfolio.module.css';

export default function Portfolio() {
  return (
    <div className={styles.page}>
      <Atmosphere />

      <div className={styles.column}>
        <Navigation />
        <Header />
      </div>

      <ThemeFrieze />

      <div className={styles.column}>
        <WorksIntro />
      </div>

      {WORKS.map((work) => (
        <PinnedWork key={work.folio} work={work} />
      ))}

      <div className={styles.column}>
        <BlankLeaf />
      </div>

      <StackFrieze />

      <div className={styles.column}>
        <AboutSection />
        <ColophonSection />
      </div>
    </div>
  );
}
