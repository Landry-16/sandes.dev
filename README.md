# Sandes Savarimuthu, Portfolio

Dark Academia / Scriptorium: an illuminated-manuscript portfolio built with Next.js 14 and React 18. Ink on vellum, read by candlelight, with a scroll-driven staging for each project. Built from a Claude Design import (`Portfolio.dc.html`).

## Tech stack

- Next.js 14 (app router)
- React 18
- Plain CSS: CSS Modules per component, global custom properties for the palette and type scale

No Tailwind, no animation library. The design is a single bespoke editorial layout (precise `clamp()` typography, one-off `rgba()` opacities per element, scroll-linked choreography), which plain CSS and a small hand-written scroll engine express more directly than a utility-class system or a general-purpose animation library.

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
│   ├── layout.jsx           # Root layout, metadata, font preconnects
│   ├── page.jsx              # Renders Portfolio
│   └── globals.css           # Palette (CSS custom properties), fonts, reset
├── components/
│   ├── Portfolio.jsx         # Top-level layout: column segments alternating with full-bleed sections
│   ├── Atmosphere.jsx         # Candle, vignette, grain, gilt spine, and the scroll choreography engine
│   ├── useInView.js           # Shared IntersectionObserver-plus-failsafe hook
│   ├── Reveal.jsx             # Lift-and-unblur scroll reveal, built on useInView
│   ├── InkHeading.jsx         # Oxblood-and-blurred-to-color heading reveal, also built on useInView
│   ├── MagnetPlate.jsx        # Image plate with a pointer-tilt 3D effect and hover caption overlay
│   ├── MarqueeTrack.jsx       # Generic infinite-scroll band (duplicates children, animates by 50%)
│   ├── ThemeFrieze.jsx        # Concept-word marquee, between masthead and works
│   ├── StackFrieze.jsx        # Tech-keyword marquee, between the blank leaf and About
│   ├── Navigation.jsx
│   ├── Header.jsx             # Masthead: letter-by-letter name, role/intro/motto row, parallax
│   ├── SectionTitle.jsx       # Shared heading row (ink heading + mono label + hairline)
│   ├── WorksIntro.jsx         # The Works section's heading, alone before the pinned entries
│   ├── PinnedWork.jsx         # One work as a full-viewport scroll-pinned entry
│   ├── BlankLeaf.jsx          # The reserved "next entry" leaf
│   ├── AboutSection.jsx       # Drop-cap intro, footnote, magnetic portrait and facts
│   ├── Footnote.jsx           # Hover/focus-triggered footnote tooltip
│   └── ColophonSection.jsx    # Contact links and edition note
├── lib/
│   └── content.js             # Works, facts, contact links, frieze words, site metadata
├── public/
├── jsconfig.json              # "@/*" path alias to the project root
├── next.config.js
├── package.json
└── .gitignore
```

## How the scroll choreography works

Most motion in this site is plain CSS (`transition`, `@keyframes`), but a few effects need a live scroll/pointer position every frame: the candle's cursor-follow and scroll-velocity flare, the gilt spine's fill and roman numeral, the masthead's parallax drift, and each pinned work's enter/exit fade. All of that lives in one `requestAnimationFrame` loop in [components/Atmosphere.jsx](components/Atmosphere.jsx), which writes directly to refs and to elements found via `document.querySelectorAll('[data-parallax]')` / `[data-pin]` rather than through React state, since re-rendering on every scroll pixel would be wasteful for values nothing else in the tree depends on.

Under `prefers-reduced-motion: reduce`, this entire engine is skipped. Pinned work content is simply left visible rather than partially animated, since nothing would ever run the tick that reveals it.

## Content

All copy lives in [lib/content.js](lib/content.js): `WORKS`, `FACTS`, `CONTACT_LINKS`, `THEME_WORDS`, `STACK_WORDS`, `SITE`, `NAV_ITEMS`. The header's opening paragraph and Latin motto, and the About section's three paragraphs, live directly in [components/Header.jsx](components/Header.jsx) and [components/AboutSection.jsx](components/AboutSection.jsx).

Before publishing, replace:

- The email address and GitHub/LinkedIn/CV links in `CONTACT_LINKS`
- The image plates: pass a `src` to the `<MagnetPlate>` calls in `PinnedWork.jsx` and `AboutSection.jsx` (one plate per project, and the portrait); until then each shows its caption as a placeholder
- The third project's working title ("Untitled writing desk")

## Design system

[design/design.md](design/design.md) documents the original, simpler version of this design (illuminated initial in the masthead, a plain folio-list of works, a `worksLayout` toggle). It predates the scroll-pinned rebuild described above and hasn't been regenerated to match `Portfolio.dc.html` since; treat its color table, typography, and spacing rules as still current, but its component descriptions for the masthead and Works section as superseded by what's actually implemented here.

## Available scripts

```bash
npm run dev        # Start dev server (http://localhost:3000)
npm run build       # Build for production
npm run start       # Run production build
npm run lint        # Check for code issues
```

## Deployment

Deploys cleanly to Vercel: push to GitHub, import the repository at [vercel.com](https://vercel.com), and it auto-detects Next.js.
