/**
 * Fades, lifts, and un-blurs its children into place the first time they
 * scroll into view, "ink settling onto the page."
 *
 * @component
 * @param {Object} props
 * @param {React.ElementType} [props.as='div'] - Tag or component to render
 * @param {string} [props.className] - Additional classes, merged with the reveal transition classes
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 *
 * @description
 * Always reveals within 3 seconds even if IntersectionObserver never fires,
 * so content can never be stranded invisible by a JS failure.
 */
'use client';

import useInView from './useInView';
import styles from './Reveal.module.css';

export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, revealed] = useInView();
  const classes = [styles.reveal, revealed ? styles.revealed : '', className].filter(Boolean).join(' ');

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
