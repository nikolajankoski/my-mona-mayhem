<!-- l10n-sync: source-file="workshop/06-bonus.md" -->
# 🎉 Bonus y ampliaciones

---

¡Has creado una aplicación de batallas de GitHub totalmente funcional! Ahora puedes ir más allá con estos **retos abiertos**.

<!-- track:vscode:start -->
Usa **Agent Mode** para todos los retos: describe lo que quieres y deja que Copilot te ayude a implementarlo.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Usa Copilot CLI para todos los retos y combina el contexto `@file`, `/plan`, el modo normal y `/review` según lo necesites.
<!-- track:cli:end -->

---

## 🏆 Reto 1: Anuncio del ganador

Cuando se hayan cargado los dos gráficos de contribuciones, compara los totales y muestra un anuncio dinámico del ganador.

**Qué implementar:**
- Compara el total de contribuciones de ambos usuarios.
- Si hay un ganador claro, muestra **«🏆 ¡{username} GANA! 🏆»** con un estilo festivo.
- Si ambos tienen el mismo número de contribuciones, muestra **«🤝 ¡EMPATE! 🤝»**.
- Añade una animación o confeti para darle más emoción.

**Sugerencia de prompt:**
> Cuando se hayan cargado los datos de contribuciones de ambos usuarios, compara los totales y muestra un anuncio del ganador. Muestra «🏆 ¡{username} GANA! 🏆» si un usuario tiene más contribuciones o «🤝 ¡EMPATE! 🤝» si están empatados. Dale un aspecto emocionante con animaciones CSS.

---

## 🏆 Reto 2: Contador de rachas

Calcula y muestra la racha más larga de días consecutivos con contribuciones de cada usuario.

**Qué implementar:**
- Analiza los datos de contribuciones día a día.
- Encuentra la secuencia más larga de días consecutivos con al menos una contribución.
- Muestra claramente el número de días de racha de cada usuario.
- Destaca quién tiene la racha más larga.

**Sugerencia de prompt:**
> Añade un contador de rachas que analice los datos de contribuciones de cada usuario y calcule su racha más larga de días consecutivos. Debajo del gráfico de contribuciones de cada usuario, muestra «🔥 Racha más larga: X días».

---

## 🏆 Reto 3: Historial de batallas

Guarda los resultados de las batallas para que los usuarios puedan ver sus enfrentamientos anteriores.

**Qué implementar:**
- Guarda cada resultado en `localStorage` (nombres de usuario, totales, ganador y fecha y hora).
- Añade una sección **«Batallas recientes»** debajo del área principal de batalla.
- Muestra los últimos 5–10 enfrentamientos y sus resultados.
- Añade un botón «Borrar historial».

**Sugerencia de prompt:**
> Guarda los resultados en localStorage después de cada comparación. Añade una sección «Batallas recientes» que muestre los últimos 10 enfrentamientos, los nombres de usuario, el total de contribuciones, el ganador y la fecha y hora. Incluye un botón «Borrar historial».

---

## 🏆 Reto 4: Efectos de sonido

Añade efectos de sonido de arcade retro con la Web Audio API, sin archivos externos.

**Qué implementar:**
- Sonido de **moneda insertada** al hacer clic en el botón «¡Batalla!».
- Sonido de **potenciador** cuando los resultados se carguen correctamente.
- Sonido de **explosión** cuando haya un error (usuario no encontrado o fallo de la API).
- Un botón para silenciar y activar el sonido.

**Sugerencia de prompt:**
> Añade efectos de sonido de arcade retro con la Web Audio API, sin archivos de audio. Reproduce el sonido de una moneda al iniciar una batalla, un sonido de potenciador cuando se carguen los resultados y una explosión si hay un error. Genera los sonidos mediante osciladores y nodos de ganancia. Incluye un botón para silenciar el sonido.

---

## 🏆 Reto 5: Secuencia de batalla animada

Crea expectación con una cuenta atrás dramática antes de revelar los resultados.

**Qué implementar:**
- Al hacer clic en «¡Batalla!», muestra una superposición a pantalla completa.
- Anima la secuencia: **«3...»** → **«2...»** → **«1...»** → **«⚡ ¡A LUCHAR! ⚡»**.
- Después, muestra los gráficos de contribuciones con una entrada espectacular.
- Usa animaciones CSS o temporizadores de JavaScript.

**Sugerencia de prompt:**
> Añade una secuencia de batalla animada cuando el usuario haga clic en «¡Batalla!». Muestra una cuenta atrás superpuesta: «3...», «2...», «1...» y «⚡ ¡A LUCHAR! ⚡», con una duración aproximada de 1 segundo por paso. Después de la cuenta atrás, muestra los resultados con una animación de entrada lateral.

---

## 🏆 Reto 6: Leyenda de contribuciones

Añade una leyenda de escala de colores que coincida con la paleta del gráfico de contribuciones.

**Qué implementar:**
- Una leyenda horizontal con los niveles de intensidad de las contribuciones.
- Etiquetas desde **«Menos»** hasta **«Más»**.
- Usa la paleta de colores que devuelve la API de contribuciones de GitHub.
- Coloca la leyenda cerca de los gráficos de contribuciones.

**Sugerencia de prompt:**
> Añade debajo de los gráficos una leyenda de contribuciones con la escala de colores de la API. Muestra una fila de cuadrados de color, desde «Menos» (el más claro) hasta «Más» (el más oscuro), con los colores de los niveles de contribución que devuelve la API.

---

## 🏆 Reto 7: Compartir resultados

Permite compartir los resultados de una batalla con un solo clic.

**Qué implementar:**
- Un botón **«📋 Compartir resultados»** que aparezca después de una batalla.
- Copia en el portapapeles un resumen de texto con formato.
- Incluye los nombres de usuario, el total de contribuciones y el ganador.
- Muestra brevemente una confirmación como «¡Copiado!».

**Sugerencia de prompt:**
> Añade un botón «📋 Compartir resultados» que copie en el portapapeles un resumen de la batalla con formato. El resumen debe incluir los dos nombres de usuario, el total de contribuciones y quién ganó. Usa la Clipboard API y muestra brevemente la confirmación «¡Copiado al portapapeles!».

---

<!-- track:cli:start -->
## 💻 Extras del CLI

Si quieres explorar más funciones de Copilot CLI después del taller:

- Usa `copilot -p "Write a conventional commit message for the current git diff"` para generar una respuesta de una sola ejecución que puedas copiar en Git.
- Ejecuta `/share file` para guardar la sesión como Markdown y consultarla más adelante.
- Usa `/session` y `/session plan` para ver cómo CLI sigue el trabajo actual.
<!-- track:cli:end -->

## 🎊 ¡Enhorabuena!

¡Has completado el taller **Mona Mayhem: GitHub Battle**! Esto es lo que has conseguido:

### Lo que has creado

- ✅ Una **aplicación web multipágina completa** a partir de una especificación de diseño.
- ✅ Una **página de inicio** con estética de arcade retro y diseño adaptable.
- ✅ Una **arena de batalla** que obtiene y compara datos reales de contribuciones de GitHub.
- ✅ **Gráficos de contribuciones interactivos** con niveles de actividad diferenciados por colores.
- ✅ **Gestión de errores, estados de carga y mejoras de accesibilidad**.
- ✅ **Diseño adaptable** para distintos dispositivos.

### Lo que has practicado

| Habilidad | Qué has practicado |
|---|---|
| **Ingeniería de contexto** | Proporcionar a Copilot los archivos, instrucciones y restricciones adecuados |
| **Planificación** | Generar y refinar planes de implementación antes de programar |
| **Programación con agentes** | Delegar a Copilot trabajo de varios pasos y archivos |
| **Iteración del diseño** | Partir de una dirección visual y perfeccionarla |
| **Disciplina de revisión** | Inspeccionar los cambios generados por IA antes de hacer commit |

### 🚀 Sigue aprendiendo

- 📺 [Canal de YouTube de VS Code](https://www.youtube.com/@code) — Consejos, tutoriales y novedades
- 📖 [Documentación de GitHub Copilot](https://docs.github.com/en/copilot) — Documentación y guías oficiales
- 💻 [Documentación de GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli) — Instalación, comandos slash y buenas prácticas
- 🌟 [Awesome GitHub Copilot](https://github.com/stefanprodan/awesome-github-copilot) — Recursos y ejemplos de la comunidad
- 🛠️ [Talleres de Copilot Dev Days](https://github.com/github/copilot-dev-days) — Más talleres prácticos

---

## 🙏 ¡Gracias!

¡Gracias por participar en este taller! Has comprobado cómo GitHub Copilot puede acelerar todas las fases del desarrollo, desde la planificación y el diseño hasta la implementación y el perfeccionamiento. Las técnicas que has practicado sirven para cualquier proyecto, framework y escala. ¡Ahora crea algo increíble! 🚀
