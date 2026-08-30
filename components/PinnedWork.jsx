/**
 * One work, staged as a full-viewport scroll-pinned entry: a huge
 * translucent folio numeral behind sticky text and a magnetic image plate.
 * The section itself is 250vh tall so there's scroll distance to animate
 * across; Atmosphere (the scroll engine) computes an enter/exit "life"
 * value from this section's own bounding rect each frame and writes
 * opacity/transform/filter directly onto the [data-pin-text],
 * [data-pin-plate], and [data-pin-numeral] children.
 *
 * When the work has a `gallery`, it renders as a page-turnable Gallery
 * instead of a single MagnetPlate, sized and framed the same way so the
 * pin choreography (which fades/scales/translates whatever fills
 * [data-pin-plate] as one unit) looks identical either way.
 *
 * When the work has a `repo`, a "View repository" link appears under the
 * note, and (for a gallery work) clicking the picture itself also opens it.
 *
 * @component
 * @param {Object} props
 * @param {import('@/lib/content').Work} props.work
 * @returns {JSX.Element}
 */
import MagnetPlate from './MagnetPlate';
import Gallery from './Gallery';
import styles from './PinnedWork.module.css';

const PLATE_HEIGHT = 'clamp(240px, 46vh, 460px)';
const PLATE_FRAME_STYLE = { borderColor: 'rgba(var(--gold-rgb), .24)', background: 'rgba(var(--panel-rgb), .6)' };

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
              {work.stack.map((s, i) => (
                <span key={`${s}-${i}`} className={styles.chip}>
                  {s}
                </span>
              ))}
            </div>
            <p className={styles.note}>{work.note}</p>
            {work.repo && (
              <a href={work.repo} target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
                View repository
              </a>
            )}
          </div>

          <div data-pin-plate="1" className={styles.plateColumn}>
            {work.gallery ? (
              <Gallery images={work.gallery} height={PLATE_HEIGHT} frameStyle={PLATE_FRAME_STYLE} repoUrl={work.repo} />
            ) : (
              <MagnetPlate
                caption={work.plate}
                showOverlayCaption
                contentHeight={PLATE_HEIGHT}
                frameStyle={PLATE_FRAME_STYLE}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
