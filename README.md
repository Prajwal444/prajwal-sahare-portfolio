# Prajwal Sahare — Portfolio

Production-ready portfolio for Prajwal Sahare, Software Engineer / Java Backend Developer.

## Stack

Next.js 15, TypeScript, CSS, Lucide icons, Vercel Analytics.

## Run locally

```bash
npm install
npm run dev
```

Quality checks: `npm run typecheck` and `npm run build`.

## Content updates

Resume content is centralized in `app/page.tsx` for now. Replace `public/Prajwal-Sahare-Resume.pdf` when the resume changes. GitHub and LinkedIn links are intentionally left as external placeholders until verified profile URLs are supplied.

## Deployment

Connect the repository to Vercel with the project root as the root directory. Vercel's Git integration provides preview deployments for branches and production deployment for the selected production branch. GitHub Actions runs checks on pushes and pull requests.

No secrets are required for the current static portfolio. Optional public configuration is documented in `.env.example`.
