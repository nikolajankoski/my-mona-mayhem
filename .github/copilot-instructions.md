# Copilot instructions for Mona Mayhem

## Project overview

This repository is a workshop template for an Astro app called Mona Mayhem: a GitHub Contribution Battle Arena where two GitHub users are compared. The app is intentionally scaffolded as a starter project, so several files are intentionally minimal or unfinished while the workshop instructions guide the implementation.

The main app entry is `src/pages/index.astro`, and the core server route stub is `src/pages/api/contributions/[username].ts`. The repo also contains workshop/docs material in `workshop/` and `docs/` that should be treated as instructional content, not as the app runtime itself.

## Build, dev, and validation commands

Use the repository's actual scripts from `package.json`:

- Install dependencies:
  - `npm install`
- Start the dev server:
  - `npm run dev`
- Create a production build:
  - `npm run build`
- Preview the built app locally:
  - `npm run preview`

There is no dedicated `test` or `lint` script in this repo right now. For validation, use the Astro build and manual endpoint checks such as:

- `curl http://localhost:4321/api/contributions/octocat`

This repository was validated successfully with `npm run build`.

## High-level architecture

- `src/pages/` is the Astro file-based routing layer.
  - `src/pages/index.astro` is the main app page.
  - `src/pages/api/**` contains server-side endpoints, including the contribution data proxy.
- The app is configured as an Astro server app in `astro.config.mjs` with the Node adapter:
  - `output: 'server'`
  - `@astrojs/node` adapter in standalone mode
- The repository has a docs/workshop split:
  - `workshop/` and `docs/` are content for the Copilot workshop.
  - The app code under `src/` is the implementation target.
- The GitHub Pages workflow in `.github/workflows/deploy.yml` currently deploys static workshop/docs content, not the Astro app itself.
  - Do not assume the app is automatically deployed via GitHub Pages unless the config is intentionally changed.

## Key conventions specific to this repo

- Follow Astro file-based routing conventions: new pages go under `src/pages`, and API endpoints live under `src/pages/api/<route>`.
- The contribution data API is the core integration point: `src/pages/api/contributions/[username].ts` should fetch GitHub contribution data for a username and proxy/transform it to avoid browser CORS issues.
- Keep the workshop materials separate from app code. Avoid moving or reworking `workshop/` content unless the task is specifically about the workshop itself.
- This repo is intentionally a starter workshop. Some files contain TODOs and intentionally minimal implementations; treat those as build targets rather than bugs.
- If you update user-facing product copy or documentation, keep the localized README set aligned with `README.md` and the translation variants in `README.es.md`, `README.ko.md`, and `README.pt_BR.md`.
- Favor simple Astro route implementations and minimal custom build complexity unless the task explicitly requires additional infrastructure.

## Working style for this repository

- Use the existing Astro structure and server route pattern instead of introducing an alternative app architecture.
- Keep implementation scoped to the current workshop milestone; do not add broad framework abstractions unless the repo has already established them.
- When adding server-side data access, prefer a single Astro endpoint that handles API fetching and error responses instead of spreading GitHub logic across the frontend.
