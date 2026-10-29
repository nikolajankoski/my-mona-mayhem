<!-- l10n-sync: source-file="workshop/03-agent-mode.md" -->
# Parte 3: Construa o jogo com fluxos de trabalho agênticos

---

Nesta parte, o Copilot passa do planejamento à implementação. Em vez de escrever código linha por linha, você descreve o que precisa e deixa o Copilot trabalhar nos arquivos necessários.

## Tarefa 1: Conecte a batalha

<!-- track:vscode:start -->
1. Mude para **Agent** no Copilot Chat.
2. Digite este prompt:
<!-- track:vscode:end -->

<!-- track:cli:start -->
1. Volte ao fluxo normal de programação do Copilot CLI (ou continue no autopilot para deixar o Copilot trabalhar até você interrompê-lo).
2. Se ajudar, forneça o arquivo da página como contexto: `@src/pages/index.astro`.
3. Digite este prompt:
<!-- track:cli:end -->

   > Adicione JavaScript no cliente à página de batalha para:
   > 1. Ao clicar no botão Batalhar, obter os dois nomes de usuário dos campos.
   > 2. Validar se ambos foram preenchidos (e exibir um erro caso contrário).
   > 3. Buscar em paralelo, pela nossa API, os dados de contribuição dos dois usuários.
   > 4. Exibir os gráficos de contribuição em grades coloridas — cada dia deve ser um quadrado colorido da paleta do GitHub.
   > 5. Mostrar um selo VS entre os dois usuários.
   > 6. Exibir o nome de usuário, o total de contribuições e o intervalo de datas de cada pessoa.
   > 7. Tratar os estados de carregamento e os erros.
   > 8. Também iniciar a ação quando a tecla Enter for pressionada em um dos campos.
   > 9. Usar a interface simples já criada.
   >
   > Use interfaces do TypeScript para a estrutura dos dados de contribuição.

<!-- track:vscode:start -->
3. Deixe o Agent Mode implementar as alterações em `index.astro`.
4. Revise as alterações propostas na visualização de diff antes de aceitá-las.
<!-- track:vscode:end -->

<!-- track:cli:start -->
4. Deixe o Copilot CLI implementar as alterações em `src/pages/index.astro`.
5. Use `/diff` para inspecionar as alterações geradas e aprove-as.
<!-- track:cli:end -->

## Tarefa 2: Teste a batalha

> **⚠️ As alterações não apareceram?** Se a página de batalha não tiver sido atualizada, pare o servidor de desenvolvimento (`Ctrl+C`), reinicie-o com `npm run dev` e atualize o navegador.

1. Digite `octocat` e `torvalds` como nomes de usuário e clique em **Batalhar**.
2. Os gráficos dos dois usuários devem aparecer lado a lado, em grades coloridas.
3. Teste os casos de erro:
   - Deixe um ou ambos os campos vazios e clique em Batalhar — deve aparecer um erro de validação.
   - Digite um nome de usuário inválido — o app deve exibir um erro da API.
4. Pressione **Enter** em qualquer campo; a batalha deve começar como se você tivesse clicado no botão.

## Tarefa 3: Itere com o Copilot

Se algo não estiver como deveria, envie feedback ao Copilot. Por exemplo:

- *"Os quadrados de contribuição estão grandes demais; ajuste para 12 × 12 px."*
- *"Adicione uma dica ao passar o cursor que mostre a data e a contagem de contribuições."*
- *"O estado de carregamento precisa de uma animação de pulso."*

<!-- track:vscode:start -->
O Agent Mode lida naturalmente com alterações em vários arquivos e iterações. Cada novo prompt aproveita o contexto da conversa, então você pode refinar a implementação aos poucos sem começar do zero.
<!-- track:vscode:end -->

<!-- track:cli:start -->
As sessões do Copilot CLI mantêm o histórico, então cada novo prompt aproveita os anteriores. Use `/session` ou `/context` para inspecionar o contexto atual e execute `/review` depois de uma iteração maior para procurar bugs e oportunidades de melhoria.
<!-- track:cli:end -->

## Dicas para esta parte

- **Explique com clareza o que você quer** — requisitos objetivos geram resultados melhores.
- **Divida tarefas grandes em prompts menores** se o Copilot se desviar.
- **Revise as alterações antes de aceitá-las** — inspecionar o código gerado costuma ser mais rápido do que reescrevê-lo.
- **Teste o app depois de cada etapa de implementação** para localizar problemas mais cedo.

## ✅ Parte 3 concluída

Você aprendeu a:

- Usar o Copilot para **implementar alterações em vários arquivos**.
- **Iterar nos resultados** com feedback específico.
- Conduzir o **ciclo completo de uma funcionalidade** — implementação, revisão, testes e refinamento.
