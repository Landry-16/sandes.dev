/**
 * Portfolio content constants.
 * Contains all projects, skills, and metadata that drive the site's sections.
 * @module constants
 */

/**
 * Project data structure
 * @typedef {Object} Project
 * @property {string} id - Unique identifier
 * @property {string} title - Project title
 * @property {string} description - Short description shown on the card
 * @property {string} longDescription - Longer breakdown, for a future detail view
 * @property {string[]} tags - Technology tags
 * @property {string} link - Live demo URL
 * @property {string} github - GitHub repository URL
 * @property {'completed' | 'in-progress' | 'archived'} status - Project status
 */

/** @type {Project[]} */
export const PROJECTS = [
  {
    id: 'project-1',
    title: 'Project One',
    description: 'Add your project description here. What problem did it solve? What technologies did you use?',
    longDescription: 'Detailed project breakdown and technical details.',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
    link: '#',
    github: '#',
    status: 'completed',
  },
  {
    id: 'project-2',
    title: 'Project Two',
    description: 'Describe your second project. Focus on the technical challenges and your solutions.',
    longDescription: 'Technical implementation and challenges.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    link: '#',
    github: '#',
    status: 'completed',
  },
  {
    id: 'project-3',
    title: 'Project Three',
    description: 'Add details about this project. What did you learn? How does it showcase your skills?',
    longDescription: 'Project overview and learnings.',
    tags: ['Python', 'Machine Learning', 'FastAPI'],
    link: '#',
    github: '#',
    status: 'completed',
  },
];

/**
 * Skills data organized by category
 * @typedef {Object} SkillCategory
 * @property {string} name - Category name
 * @property {string[]} items - Skill items
 */

/** @type {Object.<string, SkillCategory>} */
export const SKILLS = {
  languages: {
    name: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'],
  },
  frontend: {
    name: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  backend: {
    name: 'Backend',
    items: ['Node.js', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  tools: {
    name: 'Tools',
    items: ['Git', 'Docker', 'Linux', 'VS Code'],
  },
};

/**
 * Social links and contact information
 * @typedef {Object} SocialLinkData
 * @property {string} id - Unique identifier
 * @property {string} name - Display name
 * @property {string} icon - Lucide icon name, resolved in Common/SocialLink
 * @property {string} href - Destination URL
 * @property {string} ariaLabel - Accessible label for screen readers
 */

/** @type {SocialLinkData[]} */
export const SOCIAL_LINKS = [
  {
    id: 'email',
    name: 'Email',
    icon: 'Mail',
    href: 'mailto:your.email@example.com',
    ariaLabel: 'Send me an email',
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: 'Github',
    href: 'https://github.com/yourname',
    ariaLabel: 'Visit my GitHub profile',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: 'Linkedin',
    href: 'https://linkedin.com/in/yourname',
    ariaLabel: 'Visit my LinkedIn profile',
  },
];

/**
 * Site metadata and configuration
 */
export const SITE_METADATA = {
  name: 'Sandes',
  title: 'Sandes | CS Student & Developer',
  description: 'Portfolio of Sandes - Third-year CS student at Epitech Paris',
};

/**
 * Navigation items
 * @typedef {Object} NavItem
 * @property {string} id - Section id to scroll to
 * @property {string} label - Display label
 * @property {string} href - Anchor href for the section
 */

/** @type {NavItem[]} */
export const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];
