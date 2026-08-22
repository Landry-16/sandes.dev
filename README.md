# Sandes Portfolio

A portfolio built with Next.js 14, React 18, Tailwind CSS, and Framer Motion. A noir pur (#0f0f0f) background, a rose mauve (#d4697d) accent, and serif typography set the tone; smooth scroll animations carry the reader through each section.

## Tech stack

- Next.js 14 (app router)
- React 18
- Tailwind CSS 3
- Framer Motion 10
- Lucide React icons

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the site. Changes hot reload automatically.

## Project structure

```
sandes.dev/
├── app/
│   ├── layout.jsx                       # Root layout (HTML structure, metadata)
│   └── page.jsx                         # Home page (renders Portfolio)
├── components/
│   ├── Portfolio.jsx                    # Orchestrator: nav state and section order
│   ├── Navigation/
│   │   ├── Navigation.jsx               # Fixed nav bar
│   │   └── NavLink.jsx                  # Single nav button with active underline
│   ├── Sections/
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillsSection.jsx
│   │   └── ContactSection.jsx
│   └── Common/
│       ├── SectionHeading.jsx           # Title + underline, used by every section
│       ├── ProjectCard.jsx
│       ├── SkillCategory.jsx
│       ├── SocialLink.jsx
│       └── AnimatedBackgroundBlobs.jsx  # Shared ambient background effect
├── lib/
│   ├── constants.js                     # Projects, skills, social links, nav items
│   ├── animations.js                    # Shared Framer Motion variants
│   ├── colors.js                        # Raw hex reference for the palette
│   └── config.js                        # Site identity, nav, and SEO defaults
├── styles/
│   └── globals.css                      # Global styles & Tailwind directives
├── public/                              # Static assets
├── jsconfig.json                        # "@/*" path alias to the project root
├── tailwind.config.js                   # Tailwind customization
├── postcss.config.js                    # PostCSS config for Tailwind
├── next.config.js                       # Next.js configuration
├── package.json                         # Dependencies & scripts
└── .gitignore
```

## Sections

- **Home**: hero with animated intro and scroll indicator
- **About**: personal story and a stacked-books illustration
- **Projects**: cards with descriptions, tags, and links
- **Skills**: technical skills grouped by category
- **Contact**: social links and footer

## Customization

Content lives in [lib/constants.js](lib/constants.js):

- `PROJECTS` - title, description, tags, links
- `SKILLS` - categories and their skill lists
- `SOCIAL_LINKS` - email, GitHub, LinkedIn
- `SITE_METADATA` - name, title, description
- `NAV_ITEMS` - the navigation bar's sections

The hero introduction and about-section paragraphs live directly in [components/Sections/HeroSection.jsx](components/Sections/HeroSection.jsx) and [components/Sections/AboutSection.jsx](components/Sections/AboutSection.jsx).

Site metadata (title, description) lives in [app/layout.jsx](app/layout.jsx) and [app/page.jsx](app/page.jsx).

### Changing the color scheme

The palette is Option 1 from `BUILD_FINAL_OPTION1.md` (Noir Pur + Rose Mauve), defined as flat colors in [tailwind.config.js](tailwind.config.js) under `theme.extend.colors`:

- `primary` (`#0f0f0f`), `secondary` (`#1a1a1a`), `tertiary` (`#2d2d2d`) - background layers
- `accent` (`#d4697d`) - CTAs, highlights, borders, the scrollbar thumb
- `light` (`#faf7f2`) - headings
- `text` (`#e5e0d8`) / `textMuted` (`#9b8b7e`) - body copy and secondary text

A raw hex reference for these also lives in [lib/colors.js](lib/colors.js). Adjust the values in `tailwind.config.js` to retheme the whole site.

### Changing the typeface

The serif font (Lora) is imported in [styles/globals.css](styles/globals.css) and registered in [tailwind.config.js](tailwind.config.js) under `theme.extend.fontFamily.serif`. Swap in a different Google Font in both places to change the typography.

## Available scripts

```bash
npm run dev        # Start dev server (http://localhost:3000)
npm run build       # Build for production
npm run start       # Run production build
npm run lint        # Check for code issues
```

## Deployment

The project deploys cleanly to Vercel:

1. Push the repository to GitHub
2. Import it at [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js and deploys on push

Netlify, Railway, and Render also support Next.js if you prefer a different host.
