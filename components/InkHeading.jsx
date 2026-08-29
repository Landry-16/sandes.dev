/**
 * A heading that starts blurred and oxblood-colored, then bleeds into its
 * final color as it scrolls into view, "ink settling into the page."
 *
 * @component
 * @param {Object} props
 * @param {React.ElementType} [props.as='h2']
 * @param {string} [props.className] - Additional classes for size/spacing (color/filter/opacity come from this component)
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
'use client';

import useInView from './useInView';
import styles from './InkHeading.module.css';

export default function InkHeading({ as: Tag = 'h2', className = '', children, ...rest }) {
  const [ref, revealed] = useInView({ rootMargin: '0px 0px -12% 0px' });
  const classes = [styles.heading, revealed ? styles.revealed : '', className].filter(Boolean).join(' ');

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
