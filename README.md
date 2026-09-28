![KanjiZen — Ver. Recordar. Escribir. Repetir.](assets/hero.svg)

# KanjiZen

**Ver. Recordar. Escribir. Repetir.**

Entrenamiento de lectura y escritura de kana mediante sesiones breves, entrada por teclado y gestos Flick, con progreso local.

**Stack:** TypeScript · React Native · Expo  
**Estado:** Primera experiencia de kana

[Portfolio](https://github.com/calinrus-dev/portfolio) · [Experiencia](docs/EXPERIENCIA.md) · [Componentes](docs/COMPONENTES.md) · [Diseño técnico](docs/ARQUITECTURA.md) · [Demostraciones](docs/DEMOSTRACIONES.md) · [Estado](docs/ESTADO.md)

## El problema que aborda

Reconocer un símbolo al verlo y producir su lectura son habilidades diferentes. KanjiZen las trabaja en recorridos separados que comparten una colección y un perfil de progreso.

## Qué compone la experiencia

- **MECA.** Lectura de kana y respuesta en romaji dentro de una sesión acotada.
- **Flick.** Práctica guiada y reproducción mediante gestos.
- **Colección.** Consulta de caracteres y continuidad entre filas de aprendizaje.
- **Perfil local.** Seguimiento de sesiones, progresión y preferencias visuales.

![Mapa conceptual de KanjiZen: Elegir una fila → Practicar con guía → Responder sin ayuda → Revisar el progreso.](assets/experiencia.svg)

*Lámina explicativa con datos ficticios. Su contenido también está disponible como texto en [Componentes](docs/COMPONENTES.md).*

## Galería real

![Inicio real de la preview web con perfil de prueba.](assets/inicio.png)

*Inicio real de la preview web con perfil de prueba.*

![Ejercicio guiado real de Flick en la preview web.](assets/flick.png)

*Ejercicio guiado real de Flick en la preview web.*

## Decisiones que definen el proyecto

- **Reconocer no equivale a dominar.** La práctica con ayuda y la respuesta autónoma se distinguen en la experiencia.
- **Cada motor conserva su contexto.** Cambiar de ejercicio no debe arrastrar una respuesta ni un temporizador anterior.
- **Continuidad sin fricción.** Las sesiones y las preferencias se recuperan localmente sin depender de una cuenta remota.

## Explorar el caso

- [Experiencia y recorrido](docs/EXPERIENCIA.md): intención, interacción y criterios de revisión.
- [Componentes](docs/COMPONENTES.md): las piezas visibles y el papel de cada una.
- [Diseño técnico](docs/ARQUITECTURA.md): responsabilidades y compromisos de diseño.
- [Demostraciones](docs/DEMOSTRACIONES.md): qué enseñan las imágenes y cómo leer la evidencia.
- [Estado y siguientes pasos](docs/ESTADO.md): alcance actual, comprobaciones y trabajo pendiente.

## Sobre este repositorio

Caso de estudio público de un proyecto con implementación privada. Reúne documentación, diagramas e imágenes seleccionadas. Los detalles del motor, integraciones, datos operativos y código se mantienen en los repositorios privados.

Revisión editorial: 28 de septiembre de 2026. Autor: [Calin Rus](https://github.com/calinrus-dev).

[calinrus.com](https://calinrus.com) · [Instagram @c4linrus](https://www.instagram.com/c4linrus/) · [Todos los proyectos](https://github.com/calinrus-dev/portfolio)
