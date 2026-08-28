# Sandes Savarimuthu, Portfolio

Dark Academia / Scriptorium: an illuminated-manuscript portfolio built with Next.js 14 and React 18. Ink on vellum, read by candlelight. Built from a Claude Design import (`Portfolio.dc.html`).

## Tech stack

- Next.js 14 (app router)
- React 18
- Plain CSS: CSS Modules per component, global custom properties for the palette and type scale

No Tailwind, no animation library. The design is a single bespoke editorial layout (precise `clamp()` typography, one-off `rgba()` opacities per element), which plain CSS expresses more directly than a utility-class system built for consistent, repeated patterns.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Project structure

```
sandes.dev/
├── app/
│   ├── layout.jsx          # Root layout, metadata, font preconnects
│   ├── page.jsx             # Renders Portfolio
│   └── globals.css          # Palette (CSS custom properties), fonts, reset, shared keyframes
├── components/
│   ├── Portfolio.jsx        # Atmosphere + the single centered column
│   ├── Atmosphere.jsx        # Candlelight (cursor-follow), vignette, grain
│   ├── Reveal.jsx            # Scroll-reveal wrapper (IntersectionObserver + 4s failsafe)
│   ├── ImagePlate.jsx        # Framed image slot; shows a caption placeholder until src is set
│   ├── Navigation.jsx
│   ├── Header.jsx            # Masthead: illuminated initial, name, motto
│   ├── SectionTitle.jsx      # Shared heading row (title + mono label + hairline)
│   ├── WorksSection.jsx      # Folio of project entries, plus the reserved blank leaf
│   ├── AboutSection.jsx      # Drop-cap intro, footnote, portrait and facts
│   ├── Footnote.jsx          # Hover/focus-triggered footnote tooltip
│   └── ColophonSection.jsx   # Contact links and edition note
├── lib/
│   └── content.js            # Works, facts, contact links, site metadata
├── public/
├── jsconfig.json             # "@/*" path alias to the project root
├── next.config.js
├── package.json
└── .gitignore
```

## Content

All copy lives in [lib/content.js](lib/content.js): `WORKS`, `FACTS`, `CONTACT_LINKS`, `SITE`, `NAV_ITEMS`. The header's opening paragraph and Latin motto, and the About section's three paragraphs, live directly in [components/Header.jsx](components/Header.jsx) and [components/AboutSection.jsx](components/AboutSection.jsx).

Before publishing, replace:

- The email address and GitHub/LinkedIn/CV links in `CONTACT_LINKS`
- The image plates: pass a `src` to the `<ImagePlate>` calls in `Header.jsx`, `WorksSection.jsx`, and `AboutSection.jsx` (illuminated initial, one plate per project, and the portrait); until then each shows its caption as a placeholder
- The third project's working title ("Untitled writing desk")

## Design system

The full design system, including the color table, type scale, spacing rules, and the tone of the copy, is documented in [design/design.md](design/design.md).

## Available scripts

```bash
npm run dev        # Start dev server (http://localhost:3000)
npm run build       # Build for production
npm run start       # Run production build
npm run lint        # Check for code issues
```

## Deployment

Deploys cleanly to Vercel: push to GitHub, import the repository at [vercel.com](https://vercel.com), and it auto-detects Next.js.
