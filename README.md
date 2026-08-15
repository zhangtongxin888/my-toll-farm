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
```

The production build is Cloudflare Worker compatible. A release can be prepared
with `npm run deploy:cloudflare` after the Cloudflare project is connected to
this repository.

Sites is used only as a design preview. The independent GitHub repository is
the long-term source for the production deployment.
