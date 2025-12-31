---
title: Markdown Italic Parser
source: freecodecamp
series: daily
category: december
createdAt: 2025-12-31
difficulty: easy
topics:
  - strings
  - parsing
  - markdown
  - regex
blogLink: https://blog-astro-rouge.vercel.app/posts/markdown-italic-parser/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-31/
---

## Markdown Italic Parser - Análisis y Explicación

## Enunciado del Problema

Dado un string que puede incluir algun texto en italico en formato markdown, retorna el string HTML equivalente.

- Italic en markdown es cualquier texto que cominence y termine con un asterisco o un guion bajo.
- No pueden haber espacios entre el asterisco/guion bajo y el texto en italico, pero pueden haber espacios en el texto.
- Converti todas las ocurrencias de texto en italico a su etiqueta HTML correspondiente

Por Ejemplo, dado "_This is italic_", devolve "<i>This is italic</i>".

## Análisis Inicial

### Comprensión del Problema

El objetivo es crear un parser simple que convierta la sintaxis de itálicas de Markdown (`*texto*` o `_texto_`) a etiquetas HTML `<i>texto</i>`.

Las reglas críticas para que el texto sea considerado itálico son:

1. **Delimitadores:** Debe comenzar y terminar con el mismo carácter, ya sea un asterisco (`*`) o un guion bajo (`_`).
2. **Sin espacios en los bordes:** No puede haber un espacio inmediatamente después del delimitador de apertura, ni inmediatamente antes del delimitador de cierre.
3. **Contenido:** El texto interno puede contener espacios, siempre que se respeten las reglas de los bordes.
4. **Múltiples ocurrencias:** Un mismo string puede contener varias secciones en itálica que deben ser procesadas.

### Casos de Prueba Identificados

1. **Itálica simple con asteriscos:** `*italic*` -> `<i>italic</i>`.
2. **Itálica simple con guiones bajos:** `_italic_` -> `<i>italic</i>`.
3. **Espacio al inicio (Inválido):** `_ italic_` -> No debe cambiar.
4. **Espacio al final (Inválido):** `*italic *` -> No debe cambiar.
5. **Múltiples ocurrencias mixtas:** `The *quick* brown fox _jumps_...` -> Debe convertir todas las válidas.
6. **Texto con espacios internos:** `*This is italic*` -> Válido, debe convertir.

## Desarrollo de la Solución

### Enfoque Elegido

Para este problema, el enfoque más eficiente y legible es utilizar **Expresiones Regulares (RegExp)** con el método `replace()` de JavaScript.

La lógica de la RegExp debe:

- Capturar el delimitador (`*` o `_`).
- Asegurar que el primer carácter del contenido no sea un espacio (usando _lookahead_ negativo o clases de caracteres).
- Capturar el contenido de forma no codiciosa (_non-greedy_).
- Asegurar que el último carácter del contenido no sea un espacio (usando _lookbehind_ negativo).
- Referenciar el delimitador inicial para el cierre.

### Implementación Paso a Paso

1. **Definición de la RegExp:** Se utiliza `/(\*|_)(?!\s)(.+?)(?<!\s)\1/g`.
   - `(\*|_)`: Captura el delimitador inicial.
   - `(?!\s)`: Asegura que no haya un espacio inmediatamente después.
   - `(.+?)`: Captura el contenido de forma no codiciosa para evitar que una itálica se "coma" a la siguiente.
   - `(?<!\s)`: Asegura que no haya un espacio inmediatamente antes del cierre.
   - `\1`: Obliga a que el delimitador de cierre sea idéntico al de apertura.
2. **Reemplazo Dinámico:** Usamos `markdown.replace(regex, "<i>$2</i>")`, donde `$2` hace referencia al contenido capturado (el texto sin los delimitadores).

## Análisis de Complejidad

### Complejidad Temporal

**O(N)**, donde **N** es la longitud del string de entrada. Aunque las expresiones regulares pueden tener comportamientos complejos, en este caso el motor de RegExp recorre el string buscando patrones. Al usar cuantificadores no codiciosos y límites claros, el tiempo de ejecución escala linealmente con el tamaño del texto.

### Complejidad Espacial

**O(N)**. El método `replace` genera un nuevo string con las sustituciones realizadas. En el peor de los casos (donde todo el texto es itálica), el nuevo string tendrá un tamaño proporcional al original (ligeramente mayor por las etiquetas `<i>`).

## Casos Edge y Consideraciones

- **Itálicas vacías:** Un caso como `**` o `__` no será capturado por `(.+?)` ya que requiere al menos un carácter. Esto es correcto según la mayoría de especificaciones de Markdown.
- **Delimitadores mezclados:** `*texto_` no se convertirá porque `\1` exige que el cierre coincida con la apertura.
- **Espacios en los bordes:** Los casos `* texto*` y `*texto *` se mantienen como texto plano, cumpliendo con la consigna.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

#### 1. Backreferences (Referencias hacia atrás)

El uso de `\1` es fundamental para garantizar la simetría de los delimitadores. Una **backreference** permite que la expresión regular "recuerde" lo que capturó en un grupo anterior (en este caso, el primer grupo `(\*|_)`) y exija que aparezca exactamente lo mismo más adelante. Esto evita que un texto que empieza con `*` cierre con `_`.

#### 2. Lookarounds (Búsquedas de entorno)

Los **lookarounds** permiten validar condiciones de contexto sin "consumir" caracteres del string, lo cual es ideal para validaciones de bordes:

- **Negative Lookahead (`(?!\s)`):** Mira hacia adelante desde la posición actual para asegurar que el siguiente carácter **no** sea un espacio. Se usa justo después del delimitador de apertura.
- **Negative Lookbehind (`(?<!\s)`):** Mira hacia atrás desde la posición actual para asegurar que el carácter anterior **no** haya sido un espacio. Se usa justo antes del delimitador de cierre.

### Posibles Optimizaciones

Para un parser de Markdown completo, se necesitaría manejar el escape de caracteres (ej: `\*no itálica\*`) y la prioridad de otras etiquetas (como negritas `**`). Sin embargo, para el alcance de este problema, la solución con RegExp es la más balanceada entre simplicidad y efectividad.

## Recursos y Referencias

- [MDN - Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [CommonMark Spec - Emphasis and strong emphasis](https://spec.commonmark.org/0.30/#emphasis-and-strong-emphasis) (Referencia para el comportamiento estándar de itálicas).
