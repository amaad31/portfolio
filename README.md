# Portfolio

My personal website. Built with Next.js and Tailwind, deployed on Vercel.

**Live:** https://amaad.vercel.app

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- Lucide icons
- Vercel Analytics

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Content lives in `lib/data.ts` – edit that file and everything on the page updates.

## Scripts

| Command             | What it does                    |
| ------------------- | ------------------------------- |
| `npm run dev`       | Start the dev server            |
| `npm run build`     | Production build                |
| `npm run start`     | Run the production build        |
| `npm run typecheck` | TypeScript check without emit   |

## Environment

Create a `.env.local` with:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

Used for Open Graph metadata, `sitemap.xml` and `robots.txt`.

## Deploy

Push to GitHub, import the repo on Vercel, set `NEXT_PUBLIC_SITE_URL`, done. Every push to `main` deploys automatically.
