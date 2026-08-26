# Davy Kamanzi — portfolio

Personal site for selected engineering work. SvelteKit 2, Svelte 5, TypeScript, Tailwind 4, deployed from `main` by Cloudflare Pages.

This repository started as a Codecademy exercise and has been rewritten since; it is no longer course work.

## Links

- Live: [davyk17.pages.dev](https://davyk17.pages.dev)
- CV: [davyk17.pages.dev/Davy-Kamanzi-CV.pdf](https://davyk17.pages.dev/Davy-Kamanzi-CV.pdf)
- Engineering showcase: [koloseum-technologies/engineering-showcase](https://github.com/koloseum-technologies/engineering-showcase)
- Repository: [github.com/DavyK17/portfolio](https://github.com/DavyK17/portfolio)

## How it was built

- [SvelteKit](https://kit.svelte.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Cloudflare Pages (git integration on `main`; `npm run deploy` is a manual Wrangler override into the same project)

## Setup

```bash
gh repo clone DavyK17/portfolio
cd portfolio
npm ci
npm run dev
```

Node 22+. A `.nvmrc` pins the version so Cloudflare's build container matches local.

`npm run deploy` builds locally and pushes the output with Wrangler. Prefer merging to `main` so the git pipeline is the source of truth.
