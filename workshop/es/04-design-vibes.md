<!-- l10n-sync: source-file="workshop/04-design-vibes.md" -->
# Parte 4: Tematización desde el diseño

---

En esta parte usarás los ciclos de planificación e implementación de Copilot para diseñar una transformación completa del tema. Es desarrollo desde el diseño: empieza con una idea, itera sobre el aspecto visual y deja que Copilot se encargue del trabajo pesado con CSS.

## Tarea 1: Planifica el tema retro

<!-- track:vscode:start -->
Cambia a **Plan** en GitHub Copilot Chat.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Usa `/plan` en GitHub Copilot CLI o pulsa **Shift+Tab** hasta activar el modo de planificación.
<!-- track:cli:end -->

Introduce este prompt:

> Quiero transformar esta página en una experiencia completa de arcade retro. Planifica una renovación visual exhaustiva que incluya: efecto de líneas de barrido CRT en el fondo, resplandor de neón en el título con pulsaciones como un letrero de neón, una insignia VS animada con cambios de color en degradado, un efecto de brillo superpuesto en las tarjetas de resultados de usuario, animaciones de entrada flotante para los campos, texto de carga que cambie entre verde y morado, y efectos de resplandor al pasar el cursor por los cuadrados de contribuciones. Mantén el fondo oscuro (`#0a0a1a`) y usa verde (`#5fed83`) y morado (`#8a2be2`) como colores de acento. Usa un tema oscuro con la fuente retro de videojuegos Press Start 2P de Google Fonts.

Copilot generará un plan detallado con todos los efectos visuales. **No lo aceptes de inmediato**: revisa el plan e itera:

- Propón ajustes al ritmo de las animaciones (por ejemplo, «Haz que el pulso de neón sea más lento, de unos 3 segundos»).
- Pregunta por efectos concretos (por ejemplo, «¿Cómo funcionará el brillo superpuesto en las tarjetas?»).
- Pide cambios en el enfoque si algo no te convence.

## Tarea 2: Implementa el tema

Cuando estés satisfecho con el plan, pide a Copilot que lo implemente.

> Implementa el plan de tema arcade retro que acabamos de diseñar.

Copilot añadirá animaciones CSS, pseudoelementos y transiciones en la hoja de estilos. Por ejemplo, puede incluir:

- `@keyframes` para líneas de barrido, pulsaciones de neón, destellos y efectos de entrada flotante.
- Pseudoelementos (`::before`, `::after`) para efectos superpuestos.
- Propiedades personalizadas de CSS para los colores del tema.
- Transiciones y estados al pasar el cursor para los elementos interactivos.

<!-- track:cli:start -->
Cuando se apliquen los cambios, usa `/diff` para revisar los estilos antes de aprobarlos.
<!-- track:cli:end -->

## Tarea 3: Ajusta el estilo

> **⚠️ ¿No aparecen los cambios?** Si no ves el nuevo tema o las animaciones, detén el servidor de desarrollo (`Ctrl+C`), reinícialo con `npm run dev` y fuerza la recarga del navegador (`Ctrl+Shift+R`).

Mantén abierta la vista previa del navegador e itera sobre el diseño. Prueba prompts como:

> El efecto de líneas de barrido es demasiado intenso; reduce la opacidad a 0.03.

> Añade un ligero parpadeo eléctrico al texto del título.

> La insignia VS debería pulsar con más intensidad.

Esto es **desarrollo desde el diseño**: iteras sobre el resultado visual en tiempo real. Cada prompt perfecciona la experiencia. No te conformes con un resultado «suficientemente bueno»: sigue mejorando el estilo hasta que parezca propio de una máquina recreativa.

## Tarea 4: Actualiza las instrucciones

Las instrucciones deben reflejar las decisiones de diseño importantes para orientar los siguientes prompts.

<!-- track:vscode:start -->
Pide a Copilot Chat:

> Añade a `copilot-instructions.md` una sección de guía de diseño que describa el tema arcade retro: colores, fuentes y estilo de animación.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Pide a Copilot CLI:

> Actualiza las instrucciones del repositorio con una breve guía de diseño del tema arcade retro: colores, fuentes, estilo de animación y la regla de que la nueva interfaz debe conservar la estética de neón.
<!-- track:cli:end -->

Haz commit de las instrucciones y los cambios de diseño cuando la página tenga el aspecto adecuado.

## ✅ Parte 4 completada

**Has aprendido a:**

- Usar los flujos de planificación para esbozar un **sistema de diseño antes de implementarlo**.
- **Iterar sobre el resultado visual** con prompts breves.
- **Actualizar las instrucciones tras tomar decisiones importantes** para mantener una identidad visual coherente.
