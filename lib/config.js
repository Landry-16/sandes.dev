/**
 * Site-wide configuration.
 * Centralized settings for identity, navigation behavior, and SEO defaults.
 * @module config
 */

export const siteConfig = {
  name: 'Sandes',
  domain: 'sandes.dev',

  theme: {
    primaryFont: 'Lora',
    accentColor: '#d4af37',
  },

  nav: {
    scrollSmoothBehavior: true,
  },

  animations: {
    defaultDuration: 0.8,
    staggerDelay: 0.2,
  },

  seo: {
    defaultTitle: 'Sandes | CS Student & Developer',
    defaultDescription: 'Portfolio showcasing projects, skills, and technical journey',
    author: 'Sandes',
  },
};

export default siteConfig;
