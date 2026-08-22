/**
 * Color palette reference for the portfolio.
 * Mirrors the jewel-tone teal and gold values wired into tailwind.config.js,
 * exposed here for the rare case a component needs a raw value (inline SVG
 * fills, Framer Motion boxShadow strings, etc.) rather than a Tailwind class.
 * @module colors
 */

export const colorPalette = {
  primary: {
    darkest: '#0a2e3d', // teal-900, main background
    dark: '#0f3d52', // teal-800, cards and nav
  },
  accent: {
    gold: '#d4af37', // amber-accent, primary accent
  },
  text: {
    primary: '#e8e6e1', // warm white body text
    muted: '#94a3b8', // slate-400, secondary text
  },
};

/**
 * Get text color based on importance level.
 * @param {'primary' | 'muted'} [level='primary'] - Text importance level
 * @returns {string} Hex color value
 */
export const getTextColor = (level = 'primary') => colorPalette.text[level];
