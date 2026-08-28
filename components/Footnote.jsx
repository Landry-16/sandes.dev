/**
 * A dotted-gold footnote marker; hovering (or focusing, for keyboard users)
 * reveals a note panel beneath it.
 *
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - The note text shown in the tooltip
 * @returns {JSX.Element}
 *
 * @example
 * <Footnote>Internships, apprenticeships, or open-source work.</Footnote>
 */
'use client';

import { useState } from 'react';
import styles from './Footnote.module.css';

export default function Footnote({ children }) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className={styles.marker}
      tabIndex={0}
      onPointerEnter={() => setVisible(true)}
      onPointerLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      &#8224;
      <span className={`${styles.tooltip} ${visible ? styles.tooltipVisible : ''}`}>{children}</span>
    </span>
  );
}
