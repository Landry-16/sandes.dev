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
 * @typedef {Object} GalleryPlate
 * @property {string} src - Image path, under /public
 * @property {string} caption - Shown beneath the image and as its alt text
 */

/**
 * @typedef {Object} Work
 * @property {string} folio - Roman numeral for this entry
 * @property {string} title - Project title
 * @property {string} kind - Short category line, set in oxblood
 * @property {string} blurb - Main description
 * @property {string[]} stack - Technology chips
 * @property {string} plate - Placeholder caption for the work's image plate
 * @property {string} note - Italic margin note
 * @property {GalleryPlate[]} [gallery] - Page-turnable showcase renders, in place of a single plate
 * @property {string} [repo] - Source repository URL, if any
 */

/** @type {Work[]} */
export const WORKS = [
  {
    folio: 'I',
    title: 'Path-tracer',
    kind: 'Two rendering engines',
    blurb: 'A ray tracer and a physically-based path tracer, written from first principles: BVH acceleration, importance sampling, materials, depth of field, multithreaded rendering.',
    stack: ['C++', 'Linear algebra', 'BVH', 'Multithreading'],
    plate: 'cool stuff',
    note: 'Academic project pushed far',
    repo: 'https://github.com/Landry-16/Path-Tracer_Sandes_copy',
    gallery: [
      { src: '/images/path-tracer/cornell-1.webp', caption: 'Cornell box: gold, glass, and diffuse blue.' },
      { src: '/images/path-tracer/angel-balls.webp', caption: 'Reflection and refraction, denoised at 100spp.' },
      { src: '/images/path-tracer/gallery-scene.webp', caption: 'A shelf of materials under one light.' },
      { src: '/images/path-tracer/cornell-2.webp', caption: 'The same box, softer light, longer glass.' },
      { src: '/images/path-tracer/meleys.webp', caption: "A dragon's head, scales lit from below." },
      { src: '/images/path-tracer/lights.webp', caption: 'Refracting rings, stacked in violet light.' },
    ],
  },
  {
    folio: 'II',
    title: 'Plume',
    kind: 'Social reading, gamified',
    blurb: '...',
    stack: ['React Native', 'Node', 'PostgreSQL'],
    plate: 'cool stuff',
    note: 'Reading turned into a shared, slightly competitive pleasure.',
  },
  {
    folio: 'III',
    title: 'Untitled writing desk',
    kind: 'Software for authors, in progress',
    blurb: "...",
    stack: ['.', '.', '.'],
    plate: 'cool stuff',
    note: "Built for dreamers.",
  },
];

/** @type {{label: string, value: string}[]} */
export const FACTS = [
  { label: 'Now', value: 'Student' },
  { label: 'Interested in', value: 'Literature, biology, tech' },
  { label: 'Looking for', value: 'Internship or commissions' },
  { label: 'Skilled in', value: 'Mastering new skills' },
  { label: 'Language', value: 'English & French' },
];

export const CONTACT_LINKS = [
  { label: 'dulnakasandes16@gmail.com', href: 'mailto:dulnakasandes16@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/Landry-16' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sandes-savarimuthu/' },
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
