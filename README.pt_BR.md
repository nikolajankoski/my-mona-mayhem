<!-- l10n-sync: source-file="README.md" -->
🌐 [English](README.md) | [Español](README.es.md) | Português (Brasil) | [한국어](README.ko.md)

<div align="center">

# 🎮 Mona Mayhem

### Transforme gráficos de contribuições do GitHub em um duelo de arcade.

Crie uma arena de batalha com inspiração retrô que compara as contribuições de duas pessoas no GitHub — e aprenda a trabalhar com o GitHub Copilot durante o processo.

[Comece o workshop](workshop/pt_BR/00-overview.md) · [Escolha seu fluxo de trabalho](#escolha-seu-fluxo-de-trabalho) · [Execute localmente](#primeiros-passos)

![Mona Mayhem arcade battle arena](https://github.com/user-attachments/assets/5eca79e2-cb9f-4e93-aa0d-23666ebde3b7)

*A experiência final que você vai criar durante o workshop.*

</div>

## Construa, aprenda e batalhe

Mona Mayhem é um workshop prático de GitHub Copilot em torno de um pequeno projeto Astro. Comece com uma estrutura inicial e transforme-a em uma arena de batalha de contribuições: planeje a arquitetura, crie uma rota de dados no servidor, desenvolva a página do jogo e dê a ela um visual inspirado em fliperamas.

Durante o processo, pratique planejamento, implementação com agentes, iteração de design e revisão de código usando o fluxo de trabalho que preferir.

## Escolha seu fluxo de trabalho

- **[VS Code](workshop/pt_BR/00-overview.md)** — explore com Chat, planeje com Plan Mode, implemente com Agent Mode e aprimore o projeto com agentes em segundo plano e revisão integrada ao editor.
- **[GitHub Copilot CLI](workshop/pt_BR/00-overview.md)** — trabalhe pelo terminal com `copilot`, contexto `@file`, `/plan`, `/fleet`, `/delegate` e `/review`.

As duas trilhas seguem o mesmo workshop. Escolha uma e comece.

## Primeiros passos

1. Crie seu próprio repositório com **Use this template** ou faça um fork deste repositório.
2. Abra sua cópia no VS Code ou clone-a localmente para seguir a trilha do CLI.
3. Instale as dependências e inicie o servidor de desenvolvimento do Astro:

   ```bash
   npm install
   npm run dev
   ```

4. Abra a URL local exibida pelo Astro e siga o **[guia do workshop](workshop/pt_BR/00-overview.md)**.

> **Ponto de partida:** esta é a estrutura inicial do workshop, não a arena de batalha pronta. Construa-a passo a passo enquanto percorre os laboratórios.

### O que você vai precisar

- GitHub Copilot (Pro, Business ou Enterprise)
- Git e Node.js
- **Trilha do VS Code:** VS Code v1.107+ e a extensão do GitHub Copilot com login ativo
- **Trilha do CLI:** GitHub Copilot CLI (`copilot`); é necessário ter Node.js 22+ para instalá-lo com npm (Homebrew e WinGet também são opções)

## Jornada do workshop

| Parte | Construa e explore |
|------|--------------------|
| [00 · Visão geral](workshop/pt_BR/00-overview.md) | Escolha sua trilha e veja o que vai aprender |
| [01 · Configuração e engenharia de contexto](workshop/pt_BR/01-setup.md) | Prepare seu ambiente e forneça contexto útil do projeto ao Copilot |
| [02 · Planejamento e estrutura inicial](workshop/pt_BR/02-plan-and-scaffold.md) | Planeje a API e a página de batalha antes da implementação |
| [03 · Construção do jogo](workshop/pt_BR/03-agent-mode.md) | Implemente a experiência de batalha com fluxos de trabalho agênticos |
| [04 · Tematização orientada por design](workshop/pt_BR/04-design-vibes.md) | Dê ao app um visual de arcade retrô |
| [05 · Polimento e trabalho paralelo](workshop/pt_BR/05-polish.md) | Melhore a qualidade e explore fluxos de trabalho paralelos |
| [06 · Bônus e extensões](workshop/pt_BR/06-bonus.md) | Leve o projeto adiante com suas próprias ideias |

## Tecnologias

- [Astro 6](https://astro.build/) e Node.js
- [Adaptador Node do Astro](https://docs.astro.build/en/guides/integrations-guide/node/) para saída no servidor
- API do gráfico de contribuições do GitHub
- Press Start 2P, para o clima de arcade

## Implantação

O [workflow atual do GitHub Pages](.github/workflows/deploy.yml) publica o conteúdo estático do workshop e da documentação em `docs/` e `workshop/`. Ele **não** compila nem implanta o app Astro em `src/`.

Para hospedar o app no GitHub Pages, configure o Astro para gerar saída estática, remova o adaptador Node e atualize o workflow para compilar e publicar `dist/`. Se mantiver as rotas de API no servidor, implante o app em uma plataforma compatível com servidores.

## Licença

[MIT](LICENSE)
