<!-- l10n-sync: source-file="workshop/02-plan-and-scaffold.md" -->
# Parte 2: Planejamento e estrutura inicial

---

Antes de escrever código, use os fluxos de planejamento do Copilot para pensar na arquitetura. Planejar primeiro ajuda a projetar sistemas melhores e fornece ao Copilot o contexto necessário para gerar código de mais qualidade.

## Tarefa 1: Planeje a arquitetura da API

<!-- track:vscode:start -->
1. Mude para **Plan** no Copilot Chat (clique no seletor de modo na parte inferior do painel de chat).
<!-- track:vscode:end -->

<!-- track:cli:start -->
1. No Copilot CLI, pressione **Shift+Tab** até entrar no modo de planejamento ou use `/plan`.
<!-- track:cli:end -->

2. Digite este prompt:

   ```
   I need to build a server-side API proxy that fetches GitHub contribution data
   for any username. The endpoint is https://github.com/{username}.contribs which
   returns JSON. We need to bypass CORS restrictions. Plan the implementation
   including the route structure, error handling, and caching strategy.
   ```

3. **Revise o plano** — é aqui que o planejamento faz diferença. Não aceite a primeira resposta sem avaliar:
   - Peça esclarecimentos sobre o que não estiver claro.
   - Sugira mudanças se algo não parecer adequado.
   - Itere até ficar satisfeito com a abordagem.

<!-- track:vscode:start -->
4. Quando o plano estiver bom, peça ao Copilot para implementá-lo: mude para **Agent** e solicite que prossiga.
<!-- track:vscode:end -->

<!-- track:cli:start -->
4. Quando o plano estiver bom, peça ao Copilot CLI para implementá-lo.
5. Revise as alterações nos arquivos com `/diff` antes de aprová-las.
<!-- track:cli:end -->

6. **Resultado:** Agora você deve ter uma rota de API em:

   ```
   src/pages/api/contributions/[username].ts
   ```

## Tarefa 2: Teste a API

> **⚠️ As alterações não apareceram?** Se o servidor de desenvolvimento não detectar a nova rota, pare-o (`Ctrl+C`) e reinicie com `npm run dev`.

1. Confirme que o servidor de desenvolvimento está rodando e teste o endpoint:

   ```bash
   curl http://localhost:4321/api/contributions/octocat
   ```

2. Você deve receber dados de contribuições em JSON.
3. Teste também o caso de erro: use um nome de usuário inválido e confirme que a resposta de erro é adequada.

## Tarefa 3: Planeje a página de batalha

<!-- track:vscode:start -->
1. Continue no modo **Plan** e digite este prompt:
<!-- track:vscode:end -->

<!-- track:cli:start -->
1. Continue no modo de planejamento (ou execute `/plan`) e digite este prompt:
<!-- track:cli:end -->

   ```
   Now I need the main page. Plan a battle page for "Mona Mayhem - GitHub
   Contribution Battle Arena" with: two username inputs (Player 1 and Player 2),
   a battle button, and a results area. Keep the UI simple — don't over-engineer
   the layout or styling at this stage. Plan the HTML structure, basic styling,
   and how the battle interaction will work.
   ```

2. **Revise e itere** no plano: faça perguntas, sugira alterações e refine a abordagem.

<!-- track:vscode:start -->
3. Quando estiver satisfeito, mude para **Agent** e deixe o Copilot criar a página.
<!-- track:vscode:end -->

<!-- track:cli:start -->
3. Quando estiver satisfeito, peça ao Copilot CLI para implementar o plano aprovado.
4. Use `/diff` para revisar a estrutura HTML e CSS gerada antes de aprová-la.
<!-- track:cli:end -->

## Tarefa 4: Verifique a estrutura

> **⚠️ As alterações não apareceram?** Se a página não estiver correta ou atualizada, pare o servidor (`Ctrl+C`), reinicie com `npm run dev` e atualize o navegador.

1. Abra http://localhost:4321 no navegador.
2. Você deve ver:
   - O título do jogo.
   - Dois campos de nome de usuário (Player 1 e Player 2).
   - Um botão de batalha.
3. O botão ainda não vai funcionar — isso é esperado! A lógica de interação ainda não foi conectada. Isso vem depois.

---

## ✅ Parte 2 concluída!

Você aprendeu a:

- **Planejar antes de programar** em vez de começar direto pela implementação.
- **Iterar nos planos** até a arquitetura fazer sentido.
- **Passar do plano à implementação** com um fluxo mais claro e seguro.
