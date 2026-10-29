<!-- l10n-sync: source-file="README.md" -->
🌐 [English](README.md) | Español | [Português (Brasil)](README.pt_BR.md) | [한국어](README.ko.md)

<div align="center">

# 🎮 Mona Mayhem

### Convierte los gráficos de contribuciones de GitHub en un duelo arcade.

Crea una arena de batalla de inspiración retro que compara las contribuciones de dos usuarios de GitHub y aprende a trabajar con GitHub Copilot durante el proceso.

[Empezar el taller](workshop/es/00-overview.md) · [Elegir un itinerario](#elige-tu-flujo-de-trabajo) · [Ejecutarlo en local](#primeros-pasos)

![Mona Mayhem arcade battle arena](https://github.com/user-attachments/assets/5eca79e2-cb9f-4e93-aa0d-23666ebde3b7)

*La experiencia terminada que crearás durante el taller.*

</div>

## Construye, aprende y compite

Mona Mayhem es un taller práctico de GitHub Copilot en torno a un pequeño proyecto de Astro. Empieza con una estructura base y conviértela en una arena de batalla de contribuciones: planifica la arquitectura, crea una ruta de datos en el servidor, construye la página del juego y dale un aspecto inspirado en los salones recreativos.

Durante el proceso, practicarás la planificación, la implementación con agentes, la iteración del diseño y la revisión del código con el flujo de trabajo que prefieras.

## Elige tu flujo de trabajo

- **[VS Code](workshop/es/00-overview.md)** — explora con Chat, planifica con Plan Mode, implementa con Agent Mode y perfecciona el proyecto con agentes en segundo plano y la revisión integrada en el editor.
- **[GitHub Copilot CLI](workshop/es/00-overview.md)** — trabaja desde el terminal con `copilot`, contexto `@file`, `/plan`, `/fleet`, `/delegate` y `/review`.

Ambos itinerarios siguen el mismo taller. Elige uno y empieza.

## Primeros pasos

1. Crea tu propio repositorio con **Use this template** o haz un fork de este repositorio.
2. Abre tu copia en VS Code o clónala en local para seguir el itinerario del CLI.
3. Instala las dependencias e inicia el servidor de desarrollo de Astro:

   ```bash
   npm install
   npm run dev
   ```

4. Abre la URL local que muestra Astro y sigue la **[guía del taller](workshop/es/00-overview.md)**.

> **Punto de partida:** esta es la estructura base de un taller, no la arena de batalla terminada. Constrúyela paso a paso mientras completas los laboratorios.

### Qué necesitas

- GitHub Copilot (Pro, Business o Enterprise)
- Git y Node.js
- **Itinerario de VS Code:** VS Code v1.107+ y la extensión de GitHub Copilot con la sesión iniciada
- **Itinerario del CLI:** GitHub Copilot CLI (`copilot`); necesitas Node.js 22+ para instalarlo con npm (también puedes usar Homebrew o WinGet)

## Recorrido del taller

| Parte | Construye y explora |
|------|----------------------|
| [00 · Introducción](workshop/es/00-overview.md) | Elige tu itinerario y descubre qué aprenderás |
| [01 · Configuración e ingeniería de contexto](workshop/es/01-setup.md) | Prepara el entorno y proporciona a Copilot un contexto útil del proyecto |
| [02 · Planificación y estructura](workshop/es/02-plan-and-scaffold.md) | Planifica la API y la página de batalla antes de implementarlas |
| [03 · Construcción del juego](workshop/es/03-agent-mode.md) | Implementa la experiencia de batalla con flujos de trabajo basados en agentes |
| [04 · Tematización desde el diseño](workshop/es/04-design-vibes.md) | Dale a la aplicación un estilo de arcade retro |
| [05 · Perfeccionamiento y trabajo en paralelo](workshop/es/05-polish.md) | Mejora la calidad y explora los flujos de trabajo paralelos |
| [06 · Bonus y ampliaciones](workshop/es/06-bonus.md) | Lleva el proyecto más lejos con tus propias ideas |

## Tecnologías

- [Astro 6](https://astro.build/) y Node.js
- [Adaptador de Node.js para Astro](https://docs.astro.build/en/guides/integrations-guide/node/) para generar contenido en el servidor
- API del gráfico de contribuciones de GitHub
- Press Start 2P, para darle un aire arcade

## Despliegue

El [flujo de trabajo actual de GitHub Pages](.github/workflows/deploy.yml) publica el contenido estático del taller y la documentación de `docs/` y `workshop/`. **No** compila ni despliega la aplicación Astro de `src/`.

Para alojar la aplicación en GitHub Pages, cambia Astro a salida estática, elimina el adaptador de Node.js y actualiza el flujo de trabajo para compilar y publicar `dist/`. Si mantienes las rutas de API del servidor, despliega la aplicación en una plataforma compatible con servidores.

## Licencia

[MIT](LICENSE)
