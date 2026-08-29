# Davy Kamanzi: Portfolio

This is my personal site for showcasing selected engineering work. It initially started as a Codecademy exercise and has since been rewritten; it is no longer course work.
It is built with SvelteKit, TypeScript, and Tailwind CSS, and deployed to Cloudflare Pages.

## Links

- Repository: [github.com/DavyK17/portfolio](https://github.com/DavyK17/portfolio)
- Live site: [davyk17.pages.dev](https://davyk17.pages.dev) • [CV](https://davyk17.pages.dev/Davy-Kamanzi-CV.pdf)
- Koloseum engineering showcase: [koloseum-technologies/engineering-showcase](https://github.com/koloseum-technologies/engineering-showcase)

## How it was built

- [SvelteKit](https://kit.svelte.dev/) - Full-stack web application framework
- [TypeScript](https://www.typescriptlang.org/) – Typed JavaScript programming language
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework

The app is deployed to Cloudflare Pages with a Git integration on `main`; `npm run deploy` builds locally and pushes the output with Wrangler as manual override. Prefer merging to `main` so the git pipeline is the source of truth.

## Setup

```bash
gh repo clone DavyK17/portfolio
cd portfolio
npm ci
npm run dev
```

A `.nvmrc` pins the Node version to 22+ so Cloudflare's build container matches local.
