🌐 English | [Español](README.es.md) | [Português (Brasil)](README.pt_BR.md) | [한국어](README.ko.md)

<div align="center">

# 🎮 Mona Mayhem

### Turn GitHub contribution graphs into an arcade showdown.

Build a retro-inspired battle arena that compares the contributions of two GitHub users—and learn how to work with GitHub Copilot along the way.

[Start the workshop](workshop/00-overview.md) · [Choose your track](#choose-your-workflow) · [Run it locally](#get-started)

![Mona Mayhem arcade battle arena](https://github.com/user-attachments/assets/5eca79e2-cb9f-4e93-aa0d-23666ebde3b7)

*The finished experience you'll build during the workshop.*

</div>

## Build, learn, and battle

Mona Mayhem is a hands-on GitHub Copilot workshop wrapped around a small Astro project. Start with a scaffold, then shape it into a contribution battle arena: plan the architecture, build a server-side data route, create the game page, and give it an arcade-inspired look.

Along the way, practice planning, agentic implementation, design iteration, and code review using the workflow that suits you.

## Choose your workflow

- **[VS Code](workshop/00-overview.md)** — explore with Chat, plan with Plan Mode, build with Agent Mode, and polish with background agents and editor-native review.
- **[GitHub Copilot CLI](workshop/00-overview.md)** — work from the terminal with `copilot`, `@file` context, `/plan`, `/fleet`, `/delegate`, and `/review`.

Both tracks follow the same workshop. Pick one and jump in.

## Get started

1. Create your own repository with **Use this template**, or fork this repository.
2. Open your copy in VS Code or clone it locally for the CLI track.
3. Install dependencies and start the Astro development server:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Astro, then follow the **[workshop guide](workshop/00-overview.md)**.

> **Starting point:** this is a workshop scaffold, not the finished battle arena. Build it step by step as you work through the labs.

### What you'll need

- GitHub Copilot (Pro, Business, or Enterprise)
- Git and Node.js
- **VS Code track:** VS Code v1.107+ and the signed-in GitHub Copilot extension
- **CLI track:** GitHub Copilot CLI (`copilot`); Node.js 22+ is needed to install it through npm (Homebrew and WinGet are also options)

## The workshop journey

| Part | Build and explore |
|------|-------------------|
| [00 · Overview](workshop/00-overview.md) | Choose your track and see what you'll learn |
| [01 · Setup & Context Engineering](workshop/01-setup.md) | Prepare your environment and give Copilot useful project context |
| [02 · Plan & Scaffold](workshop/02-plan-and-scaffold.md) | Plan the API and battle page before implementation |
| [03 · Build the Game](workshop/03-agent-mode.md) | Implement the battle experience with agentic workflows |
| [04 · Design-First Theming](workshop/04-design-vibes.md) | Give the app its retro arcade style |
| [05 · Polish & Parallel Work](workshop/05-polish.md) | Improve quality and explore parallel workflows |
| [06 · Bonus & Extensions](workshop/06-bonus.md) | Take the project further with your own ideas |

## Built with

- [Astro 6](https://astro.build/) and Node.js
- [Astro's Node adapter](https://docs.astro.build/en/guides/integrations-guide/node/) for server output
- GitHub's contribution graph API
- Press Start 2P, for the arcade feel

## Deployment

The current [GitHub Pages workflow](.github/workflows/deploy.yml) publishes the static workshop and documentation from `docs/` and `workshop/`. It does **not** build or deploy the Astro app in `src/`.

To host the app on GitHub Pages, switch Astro to static output, remove the Node adapter, and update the workflow to build and publish `dist/`. If you keep the server-side API routes, deploy to a server-capable platform instead.

## License

[MIT](LICENSE)
