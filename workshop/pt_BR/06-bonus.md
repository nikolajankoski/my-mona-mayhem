<!-- l10n-sync: source-file="workshop/06-bonus.md" -->
# 🎉 Bônus e extensões

---

Você construiu um app de batalhas do GitHub totalmente funcional! Agora é hora de ir além com estes **desafios abertos**.

<!-- track:vscode:start -->
Use o **Agent Mode** em todos os desafios: descreva o que quer e deixe o Copilot ajudar na implementação.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Use o Copilot CLI em todos os desafios e combine o contexto `@file`, `/plan`, o modo normal e `/review` conforme necessário.
<!-- track:cli:end -->

---

## 🏆 Desafio 1: Banner do vencedor

Depois que os dois gráficos de contribuição forem carregados, compare os totais e exiba um anúncio dinâmico do vencedor.

**O que implementar:**
- Compare o total de contribuições dos dois usuários.
- Se houver um vencedor claro, mostre **"🏆 {username} VENCE! 🏆"** com um estilo comemorativo.
- Se as contribuições forem iguais, mostre **"🤝 DEU EMPATE! 🤝"**.
- Adicione uma animação ou confete para dar mais destaque.

**Sugestão de prompt:**
> Depois que os dados de contribuição dos dois usuários forem carregados, compare os totais e exiba um banner com o vencedor. Mostre "🏆 {username} VENCE! 🏆" se uma pessoa tiver mais contribuições ou "🤝 DEU EMPATE! 🤝" se houver empate. Use animações CSS para deixar o visual empolgante.

---

## 🏆 Desafio 2: Contador de sequência

Calcule e exiba a maior sequência de dias consecutivos com contribuições de cada usuário.

**O que implementar:**
- Analise os dados de contribuição dia a dia.
- Encontre a maior sequência de dias consecutivos com pelo menos uma contribuição.
- Exiba com destaque a quantidade de dias da sequência de cada usuário.
- Destaque quem tem a sequência mais longa.

**Sugestão de prompt:**
> Adicione um contador de sequência que analise os dados de contribuição de cada usuário e encontre a maior sequência de dias consecutivos. Exiba "🔥 Maior sequência: X dias" abaixo do gráfico de cada usuário.

---

## 🏆 Desafio 3: Histórico de batalhas

Armazene os resultados das batalhas para que os usuários possam consultar confrontos anteriores.

**O que implementar:**
- Salve cada resultado em `localStorage` (nomes de usuário, totais, vencedor e data/hora).
- Adicione uma seção **"Batalhas recentes"** abaixo da área principal da batalha.
- Exiba os últimos 5–10 confrontos e seus resultados.
- Adicione um botão "Limpar histórico".

**Sugestão de prompt:**
> Salve os resultados em localStorage depois de cada comparação. Adicione uma seção "Batalhas recentes" que exiba as últimas 10 batalhas com nomes de usuário, totais de contribuições, vencedor e quando a batalha aconteceu. Inclua um botão "Limpar histórico".

---

## 🏆 Desafio 4: Efeitos sonoros

Adicione efeitos sonoros de arcade retrô com a Web Audio API — sem arquivos externos.

**O que implementar:**
- Som de **moeda inserida** quando o botão "Batalhar!" for clicado.
- Som de **power-up** quando os resultados forem carregados com sucesso.
- Som de **explosão** quando ocorrer um erro (usuário não encontrado ou falha na API).
- Um botão para ativar ou silenciar o som.

**Sugestão de prompt:**
> Adicione efeitos sonoros de arcade retrô com a Web Audio API, sem arquivos de áudio. Toque um som de moeda ao iniciar a batalha, um som de power-up quando os resultados forem carregados e um som de explosão em caso de erro. Gere os sons com osciladores e nós de ganho. Inclua um botão para silenciar.

---

## 🏆 Desafio 5: Sequência de batalha animada

Crie suspense com uma contagem regressiva dramática antes de revelar os resultados.

**O que implementar:**
- Ao clicar em "Batalhar!", exiba uma sobreposição em tela cheia.
- Anime: **"3..."** → **"2..."** → **"1..."** → **"⚡ LUTE! ⚡"**.
- Em seguida, revele os gráficos de contribuição com uma entrada dramática.
- Use animações CSS ou temporização em JavaScript.

**Sugestão de prompt:**
> Adicione uma sequência animada quando o usuário clicar em "Batalhar!". Exiba uma contagem regressiva sobreposta: "3...", "2...", "1..." e "⚡ LUTE! ⚡", com cada etapa durando cerca de 1 segundo. Depois da contagem, revele os resultados com uma animação de entrada lateral.

---

## 🏆 Desafio 6: Legenda de contribuições

Adicione uma legenda de escala de cores que corresponda à paleta do gráfico de contribuições.

**O que implementar:**
- Uma legenda horizontal com os níveis de intensidade das contribuições.
- Rótulos de **"Menos"** a **"Mais"**.
- Use a paleta real retornada pela API de contribuições do GitHub.
- Posicione a legenda perto dos gráficos de contribuição.

**Sugestão de prompt:**
> Adicione abaixo dos gráficos uma legenda de contribuições com a escala de cores da API. Exiba uma linha de quadrados coloridos, de "Menos" (mais claro) a "Mais" (mais escuro), usando as cores reais dos níveis de contribuição retornadas pela API.

---

## 🏆 Desafio 7: Compartilhe os resultados

Permita que as pessoas compartilhem os resultados da batalha com um clique.

**O que implementar:**
- Um botão **"📋 Compartilhar resultados"** que aparece depois de uma batalha.
- Copie um resumo formatado em texto para a área de transferência.
- Inclua os nomes de usuário, os totais de contribuição e o vencedor.
- Exiba brevemente uma confirmação como "Copiado!".

**Sugestão de prompt:**
> Adicione um botão "📋 Compartilhar resultados" que copie para a área de transferência um resumo formatado da batalha. O resumo deve incluir os nomes dos dois usuários, os totais de contribuição e quem venceu. Use a Clipboard API e exiba brevemente a confirmação "Copiado para a área de transferência!".

---

<!-- track:cli:start -->
## 💻 Extras do CLI

Se quiser explorar outros recursos do Copilot CLI depois do workshop:

- Use `copilot -p "Write a conventional commit message for the current git diff"` para gerar uma resposta única que você pode colar no Git.
- Execute `/share file` para salvar a sessão como Markdown e consultar depois.
- Use `/session` e `/session plan` para verificar como o CLI está acompanhando seu trabalho atual.
<!-- track:cli:end -->

## 🎊 Parabéns!

Você concluiu o workshop **Mona Mayhem: GitHub Battle**! Veja o que realizou:

### O que você construiu

- ✅ Um **aplicativo web completo com várias páginas**, baseado em uma especificação de design.
- ✅ Uma **página inicial** com tema de arcade retrô e layout responsivo.
- ✅ Uma **arena de batalha** que busca e compara dados reais de contribuição do GitHub.
- ✅ **Gráficos de contribuição interativos** com níveis de atividade indicados por cores.
- ✅ **Tratamento de erros, estados de carregamento e melhorias de acessibilidade**.
- ✅ **Design responsivo** que funciona em diferentes dispositivos.

### O que você praticou

| Habilidade | O que você praticou |
|---|---|
| **Engenharia de contexto** | Fornecer ao Copilot os arquivos, as instruções e as restrições adequadas |
| **Planejamento** | Gerar e refinar planos de implementação antes de programar |
| **Programação agêntica** | Delegar ao Copilot tarefas com várias etapas e arquivos |
| **Iteração de design** | Partir de uma direção visual e refiná-la até chegar a um resultado polido |
| **Disciplina de revisão** | Inspecionar alterações geradas por IA antes de fazer commit |

### 🚀 Continue aprendendo

- 📺 [Canal do YouTube do VS Code](https://www.youtube.com/@code) — Dicas, tutoriais e novidades
- 📖 [Documentação do GitHub Copilot](https://docs.github.com/en/copilot) — Documentação e guias oficiais
- 💻 [Documentação do GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli) — Instalação, comandos slash e boas práticas
- 🌟 [Awesome GitHub Copilot](https://github.com/stefanprodan/awesome-github-copilot) — Recursos e exemplos da comunidade
- 🛠️ [Workshops do Copilot Dev Days](https://github.com/github/copilot-dev-days) — Mais workshops práticos

---

## 🙏 Obrigado!

Obrigado por participar deste workshop! Você viu como o GitHub Copilot pode acelerar cada etapa do desenvolvimento — do planejamento e design à implementação e ao polimento. As técnicas praticadas aqui servem para qualquer projeto, framework ou escala. Agora vá construir algo incrível! 🚀
