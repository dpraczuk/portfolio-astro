# 🚀 Portfolio — Dariusz Praczuk

[www.dpraczuk.com](https://www.dpraczuk.com)

A retro space-themed portfolio. Built with Astro and React components, project data fetched from Hygraph CMS.

## Tech stack

- Astro 6
- React 19
- Tailwind CSS 3
- Keen Slider
- Hygraph (GraphQL CMS)
- TypeScript

## Running locally

Requires Node.js >= 22.12 and pnpm.

```bash
pnpm install
pnpm dev
```

Create an `.env` file with Hygraph key:

```
HYGRAPH_API_URL=https://...
```

## Structure

```
src/
├── api/             # Hygraph queries
├── components/      # Astro + React components
├── layouts/         # page layout
├── pages/           # homepage + dynamic project pages
├── styles/          # fonts and global styles
├── types/           # TypeScript types
└── utils/           # helpers (cn)
```

## Contact

- [LinkedIn](https://www.linkedin.com/in/dariusz-praczuk/)
- [GitHub](https://github.com/dpraczuk)
- dariusz.praczuk@gmail.com
