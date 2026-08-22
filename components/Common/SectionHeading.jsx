/**
 * Reusable section heading with a decorative underline and optional subtitle.
 * Animates in on scroll so every section opens the same way.
 *
 * @component
 * @param {Object} props
 * @param {string} props.title - Section title text
 * @param {string} [props.subtitle] - Optional italic subtitle shown below the underline
 * @param {string} [props.className] - Additional wrapper classes
 * @returns {JSX.Element}
 *
 * @example
 * <SectionHeading title="About" subtitle="My journey in tech and beyond" />
 */
'use client';

import { motion } from 'framer-motion';
import { titleVariants } from '@/lib/animations';

export default function SectionHeading({ title, subtitle, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={titleVariants}
      className={className}
    >
      <h2 className="text-5xl md:text-6xl font-bold text-light mb-3">
        {title}
      </h2>

      <div className="w-24 h-1.5 bg-gradient-to-r from-accent to-transparent rounded-full mb-6" />

      {subtitle && (
        <p className="text-lg text-accent/70 italic font-serif">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
