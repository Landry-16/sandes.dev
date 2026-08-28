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
 * Always reveals within 4 seconds even if IntersectionObserver never fires,
 * so content can never be stranded invisible by a JS failure.
 */
'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reveal = () => setRevealed(true);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(el);

    const failsafe = setTimeout(reveal, 4000);

    return () => {
      observer.disconnect();
      clearTimeout(failsafe);
    };
  }, []);

  const classes = [styles.reveal, revealed ? styles.revealed : '', className].filter(Boolean).join(' ');

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
