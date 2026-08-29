/**
 * Portfolio content: the folio of works, the author's facts, and site
 * metadata. Keeping this separate from the section components lets the
 * copy be edited without touching layout markup.
 * @module content
 */

export const SITE = {
  name: 'Sandes Savarimuthu',
  shortName: 'S. Savarimuthu',
};

export const NAV_ITEMS = [
  { id: 'works', label: 'Works' },
  { id: 'about', label: 'About' },
  { id: 'colophon', label: 'Contact' },
];

/**
 * @typedef {Object} Work
 * @property {string} folio - Roman numeral for this entry
 * @property {string} title - Project title
 * @property {string} kind - Short category line, set in oxblood
 * @property {string} blurb - Main description
 * @property {string[]} stack - Technology chips
 * @property {string} plate - Placeholder caption for the work's image plate
 * @property {string} note - Italic margin note
 */

/** @type {Work[]} */
export const WORKS = [
  {
    folio: 'I',
    title: 'Plume',
    kind: 'Social reading, gamified',
    blurb: 'A reading app built on the idea that finishing a book is more likely when someone is watching. Shelves, streaks, and quiet competition between friends.',
    stack: ['React Native', 'Node', 'PostgreSQL'],
    plate: 'app screens: shelf and streaks',
    note: 'Reading turned into a shared, slightly competitive pleasure.',
  },
  {
    folio: 'II',
    title: 'Path-tracer',
    kind: 'Two rendering engines',
    blurb: 'A ray tracer and a physically-based path tracer, written from first principles: BVH acceleration, importance sampling, materials, depth of field, multithreaded rendering.',
    stack: ['C++', 'Linear algebra', 'BVH', 'Multithreading'],
    plate: 'render plate: cornell box',
    note: 'The image is the proof. Either the light behaves, or it does not.',
  },
  {
    folio: 'III',
    title: 'Untitled writing desk',
    kind: 'Software for authors, in progress',
    blurb: "One application for the whole act of writing: drafting, structure, character and world notes, revision history. Named later; the work comes first.",
    stack: ['Rust', 'Tauri', 'TypeScript'],
    plate: 'editor view: manuscript and notes',
    note: "Built for the writer's second draft, not their first sentence.",
  },
];

/** @type {{label: string, value: string}[]} */
export const FACTS = [
  { label: 'Now', value: 'Student' },
  { label: 'Interested in', value: 'Literature, biology, tech' },
  { label: 'Looking for', value: 'Internship or commissions' },
  { label: 'Comfortable in', value: 'Anything you are looking for' },
  { label: 'Language', value: 'English & French' },
];

export const CONTACT_LINKS = [
  { label: 'sandes@example.com', href: 'mailto:sandes@example.com' },
  { label: 'GitHub', href: 'https://github.com/yourname' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourname' },
  { label: 'Curriculum vitae', href: '#' },
];

/**
 * Word bands for the two marquee friezes. `italic` alternates by design;
 * `separator` is the glyph rendered between words in that band.
 * @typedef {Object} FriezeWord
 * @property {string} text
 * @property {boolean} [italic]
 */

/** @type {FriezeWord[]} */
export const THEME_WORDS = [
  { text: 'Building' },
  { text: 'Writing', italic: true },
  { text: 'Readers' },
  { text: 'Light', italic: true },
  { text: 'Idea' },
  { text: 'Toughts', italic: true },
  { text: 'Marginalia' },
  { text: 'Maths', italic: true },
];

/** @type {string[]} */
export const STACK_WORDS =
[
  'TypeScript', 'C++', 'C', 'SQL', 'React', 'Node', 'Git', 'Docker', 'Boring Maths'
];
