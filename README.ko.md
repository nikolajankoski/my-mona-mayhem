🌐 [English](README.md) | [Español](README.es.md) | [Português (Brasil)](README.pt_BR.md) | 한국어

<div align="center">

# 🎮 Mona Mayhem

### GitHub 기여 그래프를 아케이드 대결로 만들어 보세요.

두 GitHub 사용자의 기여도를 비교하는 레트로풍 배틀 아레나를 만들면서 GitHub Copilot 사용법도 익혀 보세요.

[워크숍 시작하기](workshop/ko/00-overview.md) · [작업 흐름 선택하기](#작업-흐름-선택하기) · [로컬에서 실행하기](#시작하기)

![Mona Mayhem arcade battle arena](https://github.com/user-attachments/assets/5eca79e2-cb9f-4e93-aa0d-23666ebde3b7)

*워크숍을 진행하며 완성하게 될 결과물입니다.*

</div>

## 만들고, 배우고, 대결하기

Mona Mayhem은 작은 Astro 프로젝트를 활용하는 실습형 GitHub Copilot 워크숍입니다. 기본 스캐폴드에서 시작해 기여도 배틀 아레나로 발전시킵니다. 아키텍처를 계획하고, 서버 측 데이터 라우트를 만들고, 게임 페이지를 구현한 뒤 아케이드풍 디자인을 적용합니다.

원하는 작업 흐름에 따라 계획 수립, 에이전트 기반 구현, 디자인 반복 개선, 코드 검토를 연습할 수 있습니다.

## 작업 흐름 선택하기

- **[VS Code](workshop/ko/00-overview.md)** — Chat으로 탐색하고 Plan Mode로 계획한 다음 Agent Mode로 구현합니다. 백그라운드 에이전트와 편집기 내 검토 기능으로 마무리합니다.
- **[GitHub Copilot CLI](workshop/ko/00-overview.md)** — 터미널에서 `copilot`, `@file` 컨텍스트, `/plan`, `/fleet`, `/delegate`, `/review`를 활용합니다.

두 트랙은 같은 워크숍을 따릅니다. 원하는 트랙을 선택해 시작하세요.

## 시작하기

1. **Use this template**으로 저장소를 만들거나 이 저장소를 포크합니다.
2. 복사한 저장소를 VS Code에서 열거나, CLI 트랙을 위해 로컬에 복제합니다.
3. 의존성을 설치하고 Astro 개발 서버를 시작합니다.

   ```bash
   npm install
   npm run dev
   ```

4. Astro가 표시한 로컬 URL을 열고 **[워크숍 안내](workshop/ko/00-overview.md)**를 따라 진행합니다.

> **시작점:** 이 저장소는 완성된 배틀 아레나가 아니라 워크숍용 스캐폴드입니다. 실습을 따라 한 단계씩 완성해 보세요.

### 준비물

- GitHub Copilot(Pro, Business 또는 Enterprise)
- Git 및 Node.js
- **VS Code 트랙:** VS Code v1.107 이상 및 로그인된 GitHub Copilot 확장
- **CLI 트랙:** GitHub Copilot CLI(`copilot`). npm으로 설치하려면 Node.js 22 이상이 필요합니다(Homebrew와 WinGet으로도 설치할 수 있습니다).

## 워크숍 여정

| 파트 | 만들고 살펴볼 내용 |
|------|-------------------|
| [00 · 개요](workshop/ko/00-overview.md) | 트랙을 선택하고 학습 내용을 확인합니다. |
| [01 · 설정 및 컨텍스트 엔지니어링](workshop/ko/01-setup.md) | 환경을 준비하고 Copilot에 유용한 프로젝트 컨텍스트를 제공합니다. |
| [02 · 계획 및 스캐폴딩](workshop/ko/02-plan-and-scaffold.md) | 구현 전에 API와 배틀 페이지를 계획합니다. |
| [03 · 게임 구현](workshop/ko/03-agent-mode.md) | 에이전트 기반 워크플로로 배틀 경험을 구현합니다. |
| [04 · 디자인 우선 테마 구성](workshop/ko/04-design-vibes.md) | 앱에 레트로 아케이드 스타일을 적용합니다. |
| [05 · 다듬기 및 병렬 작업](workshop/ko/05-polish.md) | 품질을 개선하고 병렬 워크플로를 살펴봅니다. |
| [06 · 보너스 및 확장](workshop/ko/06-bonus.md) | 자신만의 아이디어로 프로젝트를 확장합니다. |

## 사용 기술

- [Astro 6](https://astro.build/) 및 Node.js
- 서버 출력을 위한 [Astro Node 어댑터](https://docs.astro.build/en/guides/integrations-guide/node/)
- GitHub 기여 그래프 API
- 아케이드 분위기를 더해 주는 Press Start 2P

## 배포

현재 [GitHub Pages 워크플로](.github/workflows/deploy.yml)는 `docs/`와 `workshop/`의 정적 워크숍 및 문서 콘텐츠를 게시합니다. `src/`의 Astro 앱을 빌드하거나 배포하지는 않습니다.

### Astro 앱을 GitHub Pages에 배포하려면

GitHub Pages는 정적 호스팅이므로 Astro 앱도 정적 출력을 사용해야 합니다.

1. `astro.config.mjs`의 `output`을 `server`에서 `static`으로 변경합니다.
2. `astro.config.mjs`와 `package.json`에서 Node 어댑터(`@astrojs/node`)를 제거합니다.
3. GitHub Actions 워크플로에서 `npm ci`와 `npm run build`를 실행한 다음 Pages 아티팩트로 `dist/`를 업로드하도록 변경합니다.
4. 프로젝트 페이지(`https://<user>.github.io/<repo>/`)에 배포한다면 `astro.config.mjs`에서 `site`와 `base`를 설정합니다.

프로덕션에서 API 라우트를 계속 실행해야 한다면 GitHub Pages 대신 Vercel, Netlify 또는 Node.js 호스트와 같은 서버 플랫폼을 사용합니다.

## 라이선스

[MIT](LICENSE)
