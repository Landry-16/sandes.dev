# Sandes Portfolio

A dark academia portfolio built with Next.js 14, React 18, Tailwind CSS, and Framer Motion. Deep slate backgrounds, warm amber accents, and serif typography set the tone; smooth scroll animations carry the reader through each section.

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
│   ├── layout.jsx              # Root layout (HTML structure, metadata)
│   ├── page.jsx                # Home page (imports Portfolio component)
│   ├── globals.css             # Global styles & Tailwind directives
│   └── components/
│       └── Portfolio.jsx       # Main portfolio component (all sections)
├── public/                     # Static assets
├── tailwind.config.js          # Tailwind customization
├── postcss.config.js           # PostCSS config for Tailwind
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies & scripts
└── .gitignore
```

## Sections

- **Home**: hero with animated intro and scroll indicator
- **About**: personal story and a stacked-books illustration
- **Projects**: cards with descriptions, tags, and links
- **Skills**: technical skills grouped by category
- **Contact**: social links and footer

## Customization

The main content lives in [app/components/Portfolio.jsx](app/components/Portfolio.jsx). Look for `CUSTOMIZE` comments to update:

- Your name and introduction (hero section)
- The `projects` array (title, description, tags, links)
- The `skills` object (categories and skill lists)
- The about section paragraphs
- Contact links (email, GitHub, LinkedIn)

Site metadata (title, description) lives in [app/layout.jsx](app/layout.jsx) and [app/page.jsx](app/page.jsx).

### Changing the color scheme

The amber palette is defined in [tailwind.config.js](tailwind.config.js) under `theme.extend.colors.amber`. Adjust the hex values there, or swap the `amber` utility classes throughout `Portfolio.jsx` for another Tailwind color.

### Changing the typeface

The serif font (Lora) is imported in [app/globals.css](app/globals.css) and registered in [tailwind.config.js](tailwind.config.js) under `theme.extend.fontFamily.serif`. Swap in a different Google Font in both places to change the typography.

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
