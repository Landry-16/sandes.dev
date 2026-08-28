/**
 * A framed image plate, standing in for the design's user-fillable
 * <image-slot>. Renders a real image once `src` is supplied; until then it
 * shows the plate's caption as a placeholder, so the layout looks right
 * before any photography exists.
 *
 * @component
 * @param {Object} props
 * @param {string} [props.src] - Image URL. Omit to show the placeholder caption.
 * @param {string} props.caption - Placeholder caption, or the image's alt text once src is set.
 * @param {React.CSSProperties} [props.frameStyle] - Overrides for the frame's border/background/padding
 * @returns {JSX.Element}
 *
 * @example
 * <ImagePlate caption="Illuminated initial" frameStyle={{ borderColor: 'rgba(var(--gold-rgb), .4)' }} />
 * <ImagePlate src="/portrait.jpg" caption="Portrait, candlelit" />
 */
import styles from './ImagePlate.module.css';

export default function ImagePlate({ src, caption, frameStyle }) {
  return (
    <div className={styles.frame} style={frameStyle}>
      <div className={styles.inner}>
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={caption} className={styles.image} />
        ) : (
          <div className={styles.placeholder}>
            <p className={styles.caption}>{caption}</p>
          </div>
        )}
      </div>
    </div>
  );
}
