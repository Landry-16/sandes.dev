/**
 * Ambient blurred gradient blobs used behind hero and section content.
 * Purely decorative and marked aria-hidden.
 *
 * @component
 * @param {Object} props
 * @param {Array<{className: string, duration?: number, delay?: number}>} props.blobs
 *   Each entry positions and sizes one blob via className, and controls its
 *   drift timing.
 * @param {number} [props.opacity=40] - Wrapper opacity as a percentage (0-100)
 * @returns {JSX.Element}
 *
 * @example
 * <AnimatedBackgroundBlobs
 *   blobs={[
 *     { className: 'top-10 left-10 w-96 h-96 bg-accent/20', duration: 15 },
 *     { className: 'bottom-10 right-10 w-96 h-96 bg-accent/10', duration: 20, delay: 1 },
 *   ]}
 * />
 */
'use client';

import { motion } from 'framer-motion';
import { getBlobDrift } from '@/lib/animations';

export default function AnimatedBackgroundBlobs({ blobs, opacity = 40 }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: opacity / 100 }}
      aria-hidden="true"
    >
      {blobs.map(({ className, duration, delay }, index) => {
        const { animate, transition } = getBlobDrift(duration, delay);
        return (
          <motion.div
            key={index}
            animate={animate}
            transition={transition}
            className={`absolute rounded-full blur-3xl ${className}`}
          />
        );
      })}
    </div>
  );
}
