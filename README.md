# My Toll Farm! Beginner Guide

Source for [mytollfarmgame.wiki](https://mytollfarmgame.wiki), an independent,
beginner-first guide to the Roblox experience **My Toll Farm!**

The site includes a quick start, verified core gameplay loop, practical
progression route, common mistakes, FAQ, and a transparent source log. Gameplay
claims were last checked on August 15, 2026.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm test
npm run build:vercel
```

Vercel serves the production domain from this repository. `vercel.json` keeps
the production Next.js build explicit. The same source also remains Cloudflare
Worker compatible through the versioned `wrangler.jsonc` configuration.

Sites is used only as a design preview. The independent GitHub repository is
the long-term source for the production deployment.
