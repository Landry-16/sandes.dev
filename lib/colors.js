/**
 * Color palette reference, Option 1: Noir Pur + Rose Mauve.
 * Mirrors the flat color tokens wired into tailwind.config.js, exposed here
 * for the rare case a component needs a raw value (inline SVG fills, Framer
 * Motion boxShadow strings, etc.) rather than a Tailwind class.
 * @module colors
 */

export const colorPalette = {
  primary: {
    darkest: '#0f0f0f', // main background, noir pur
    dark: '#1a1a1a', // secondary background, cards
  },
  accent: {
    main: '#d4697d', // rose mauve, primary accent
    light: '#e8b4c8', // lighter rose for hover states
  },
  text: {
    primary: '#e5e0d8', // warm gray-white body text
    muted: '#9b8b7e', // secondary/muted text
  },
};

/**
 * Get text color based on hierarchy.
 * @param {'primary' | 'muted'} [level='primary'] - Text importance level
 * @returns {string} Hex color value
 */
export const getTextColor = (level = 'primary') => colorPalette.text[level];
