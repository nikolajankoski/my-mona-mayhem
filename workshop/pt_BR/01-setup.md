<!-- l10n-sync: source-file="workshop/01-setup.md" -->
# Parte 1: Configuração e engenharia de contexto

---

Nesta parte, você vai configurar seu ambiente de desenvolvimento **e** ensinar o Copilot sobre a base de código, para que cada novo prompt comece com o contexto adequado.

## Seção 1: Configuração inicial

### Passo 1: Crie seu repositório

1. Abra [github.com/copilot-dev-days/mona-mayhem](https://github.com/copilot-dev-days/mona-mayhem).
2. Crie seu próprio repositório de uma destas formas:
   - clique em **Use this template** → **Create a new repository**; ou
   - faça um fork do repositório.
3. Use o nome `my-mona-mayhem` e defina a visibilidade como **Public** (se criou a partir do template).

<!-- track:vscode:start -->
### Passo 2: Escolha seu ambiente de desenvolvimento

#### Opção A: VS Code local

1. Abra o VS Code e execute **Git: Clone** → **Clone from GitHub**.
2. Selecione seu repositório `my-mona-mayhem`.
3. Quando solicitado, instale as **extensões recomendadas**.

#### Opção B: GitHub Codespaces

1. Abra seu repositório no GitHub.
2. Clique em **Code** → **Codespaces** → **Create codespace on main**.
3. Aguarde o ambiente iniciar e as dependências serem instaladas.

### Passo 3: Instale as dependências e inicie o app

1. Abra o terminal integrado no repositório.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o app:

   ```bash
   npm run dev
   ```

> ✅ **O app já está rodando no navegador!**
<!-- track:vscode:end -->

<!-- track:cli:start -->
### Passo 2: Instale o GitHub Copilot CLI

Escolha o método de instalação adequado para sua máquina:

- **npm (multiplataforma; requer Node.js 22+)**

  ```bash
  npm install -g @github/copilot
  ```

- **Homebrew (macOS/Linux)**

  ```bash
  brew install copilot-cli
  ```

- **WinGet (Windows)**

  ```bash
  winget install GitHub.Copilot
  ```

### Passo 3: Inicie o app e autentique o CLI

1. Clone o repositório localmente e abra um terminal na raiz do projeto.
2. Instale as dependências e inicie o app:

   ```bash
   npm install
   npm run dev
   ```

3. Abra um **segundo terminal** no mesmo repositório e inicie o Copilot CLI:

   ```bash
   copilot
   ```

4. Na sessão interativa, digite:

   ```
   /login
   ```

5. Siga as instruções do fluxo de autenticação do dispositivo e confirme que você confia no repositório quando o CLI solicitar aprovação.

> ✅ **Agora você tem a prévia do app em um terminal e o Copilot CLI pronto no outro.**
<!-- track:cli:end -->

## Seção 2: Engenharia de contexto

Engenharia de contexto é como você ensina a IA sobre sua base de código. Quanto melhor o contexto, melhores serão as respostas futuras.

<!-- track:vscode:start -->
### Tarefa 1: Gere instruções do workspace com /init

Use o comando integrado `/init` para gerar um arquivo de instruções do workspace para o Copilot:

1. Abra o **Copilot Chat** e digite:

   ```
   /init simple instructions with a project overview, build/dev commands, and Astro best practices, (ignore the workshop).
   ```

2. Revise o arquivo gerado: o Copilot vai analisar o projeto e criar `.github/copilot-instructions.md`.
3. Aceite as alterações e faça **commit** do arquivo de instruções.

> **Resultado:** As próximas solicitações ao Copilot já terão um mapa do seu workspace como contexto.

### Tarefa 2: Agentes em segundo plano

**Agente local em segundo plano:**

1. No painel do Chat, clique em **+** para iniciar um novo chat.
2. Na parte inferior da janela, altere **Local** para **Copilot CLI**.
3. Digite o prompt:

   > "Adicione regras de lint para variáveis não utilizadas e melhore o estilo do código; corrija os erros."

4. Quando terminar, **revise e aplique** as alterações. Se quiser, arquive a sessão.

**Agente na nuvem:**

1. No painel do Chat, clique em **+** para iniciar outro chat.
2. Na parte inferior da janela, altere **Local** para **Cloud**.
3. Digite o prompt:

   > "Deixe o README mais atraente como página inicial."

> **Resultado:** Regras de lint adicionadas, erros corrigidos e README melhorado, sem sair do editor.

### Tarefa 3: Explore o projeto

Abra o **Copilot Chat** no **modo Ask** e experimente estes prompts:

- `"Explain the architecture of this project"`
- `"What files are in the src directory and what do they do?"`
- `"What would I need to build to make the Battle button work?"`

> 💡 Use **@workspace** para dar ao Copilot contexto do projeto inteiro e obter respostas mais precisas.
<!-- track:vscode:end -->

<!-- track:cli:start -->
### Tarefa 1: Gere instruções do repositório com /init

Use `/init` para gerar um arquivo de instruções do workspace para o Copilot:

1. No Copilot CLI, digite:

   ```
   /init simple instructions with a project overview, build/dev commands, and Astro best practices, (ignore the workshop).
   ```

2. Revise o arquivo gerado: o Copilot vai analisar o projeto e criar `.github/copilot-instructions.md`.
3. Faça commit do arquivo de instruções.

> **Resultado:** As próximas sessões do CLI herdarão automaticamente as instruções específicas do repositório em `.github/copilot-instructions.md`.

### Tarefa 2: Ajuste seu ambiente do CLI

Pratique os controles do CLI que vão facilitar as próximas etapas:

1. Execute `/help` para consultar os comandos slash disponíveis.
2. Use `/model` para verificar os modelos disponíveis para você.
3. Se o Copilot tiver aprendido muitas aprovações durante os testes, redefina-as com:

   ```
   /reset-allowed-tools
   ```

4. Se o repositório estiver dentro de um diretório pai maior, use `/add-dir PATH` para ampliar explicitamente o workspace permitido.

> 💡 A documentação do CLI recomenda instruções personalizadas concisas e permissões explícitas de ferramentas para manter o Copilot rápido e previsível.

### Tarefa 3: Explore o projeto pelo terminal

Experimente estes prompts no Copilot CLI:

- `Give me an overview of this project.`
- `@src/pages/api/contributions/[username].ts What is this file for and what needs to be built here?`
- `@src/pages/index.astro What exists here and what would I need to add to build the battle page?`

Para obter uma resposta rápida fora da sessão interativa, experimente:

```bash
copilot -p "Summarize the architecture of this repo in 5 bullet points"
```

> **Resultado:** Agora você tem instruções, conhece os comandos e sabe como fornecer arquivos como contexto para o Copilot CLI.
<!-- track:cli:end -->

## ✅ Parte 1 concluída

Você aprendeu a:

- **Configurar** o repositório e o ambiente de desenvolvimento local.
- **Gerar instruções** com `/init` para o Copilot entender o projeto e a direção de design.
- **Criar o hábito de revisar** as alterações antes de aplicá-las.
- **Explorar a base de código** com prompts que fornecem contexto útil.
