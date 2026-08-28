/**
 * Root portfolio layout: the atmosphere layers behind a single centered
 * column holding navigation, masthead, and the three main sections.
 *
 * @component
 * @returns {JSX.Element}
 */
import Atmosphere from './Atmosphere';
import Navigation from './Navigation';
import Header from './Header';
import WorksSection from './WorksSection';
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
        <WorksSection />
        <AboutSection />
        <ColophonSection />
      </div>
    </div>
  );
}
