/**
 * One work, staged as a full-viewport scroll-pinned entry: a huge
 * translucent folio numeral behind sticky text and a magnetic image plate.
 * The section itself is 250vh tall so there's scroll distance to animate
 * across; Atmosphere (the scroll engine) computes an enter/exit "life"
 * value from this section's own bounding rect each frame and writes
 * opacity/transform/filter directly onto the [data-pin-text],
 * [data-pin-plate], and [data-pin-numeral] children.
 *
 * @component
 * @param {Object} props
 * @param {import('@/lib/content').Work} props.work
 * @returns {JSX.Element}
 */
import MagnetPlate from './MagnetPlate';
import styles from './PinnedWork.module.css';

export default function PinnedWork({ work }) {
  return (
    <section data-pin="1" className={styles.section}>
      <div className={styles.sticky}>
        <div data-pin-numeral="1" className={styles.numeral} aria-hidden="true">
          {work.folio}
        </div>

        <div className={styles.row}>
          <div data-pin-text="1" className={styles.text}>
            <p className={styles.kind}>
              <span className={styles.kindRule} aria-hidden="true" />
              {work.kind}
            </p>
            <h3 className={styles.title}>{work.title}</h3>
            <p className={styles.blurb}>{work.blurb}</p>
            <div className={styles.stack}>
              {work.stack.map((s) => (
                <span key={s} className={styles.chip}>
                  {s}
                </span>
              ))}
            </div>
            <p className={styles.note}>{work.note}</p>
          </div>

          <div data-pin-plate="1" className={styles.plateColumn}>
            <MagnetPlate
              caption={work.plate}
              showOverlayCaption
              contentHeight="clamp(240px, 46vh, 460px)"
              frameStyle={{ borderColor: 'rgba(var(--gold-rgb), .24)', background: 'rgba(var(--panel-rgb), .6)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
