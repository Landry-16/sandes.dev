/**
 * Reusable Framer Motion animation variants.
 * Centralizes animation logic so every section moves in a consistent rhythm.
 * @module animations
 */

/**
 * Container animation with staggered children.
 * Used for sections with multiple animated items.
 */
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/**
 * Item animation for fade-in and slide-up.
 * Used for individual elements within containers.
 */
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

/**
 * Title and heading animation, entering from slightly above.
 */
export const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

/**
 * Scroll-triggered fade-in, for use with whileInView on section wrappers.
 */
export const scrollFadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

/**
 * Ambient drifting motion for background blobs.
 * @param {number} [duration=15] - Full loop duration in seconds
 * @param {number} [delay=0] - Delay before the loop starts, in seconds
 * @returns {Object} Framer Motion animate/transition props
 */
export const getBlobDrift = (duration = 15, delay = 0) => ({
  animate: {
    x: [0, 30, -30, 0],
    y: [0, -30, 30, 0],
  },
  transition: { duration, repeat: Infinity, ease: 'easeInOut', delay },
});
