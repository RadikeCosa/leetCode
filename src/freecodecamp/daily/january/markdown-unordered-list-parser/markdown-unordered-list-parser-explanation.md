---
title: Markdown Unordered List Parser
source: freeCodeCamp
series: daily
category: january
createdAt: 2026-01-07
difficulty: easy
topics:
  - string
  - parsing
  - markdown
  - html
blogLink: https://blog-astro-rouge.vercel.app/posts/markdown-unordered-list-parser/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-07/
---

## Markdown Unordered List Parser - Análisis y Explicación

## Enunciado del Problema

Dado el string de una lista desordenada válida en Markdown, retorna el string equivalente en HTML.

Una lista desordenada consiste en uno o más ítems de lista. Un ítem válido aparece en su propia línea y:

- Comienza con un guion ("-"), seguido de
- Al menos un espacio, y luego
- El texto del ítem de lista.

La lista se da como un string único con nuevas líneas separadas por el carácter de nueva línea ("\n"). No incluyas los caracteres de nueva línea en el texto del ítem.

Envuelve cada ítem de lista en etiquetas HTML `<li>`, y toda la lista de ítems en etiquetas `<ul>`.

Por ejemplo, dado `"- Item A\n- Item B"`, retorna `"<ul><li>Item A</li><li>Item B</li></ul>"`.

## Análisis Inicial

### Comprensión del Problema

El problema requiere convertir una cadena que representa una lista desordenada válida en Markdown a su equivalente en HTML. La función debe identificar cada ítem de la lista, que comienza con un guion seguido de al menos un espacio y el texto correspondiente, y envolver cada uno en etiquetas `<li>`. Finalmente, toda la lista debe estar envuelta en etiquetas `<ul>`. La entrada es una cadena única con ítems separados por caracteres de nueva línea (`\n`), y no se deben incluir estos caracteres en el texto de los ítems.

### Casos de Prueba Identificados

Se identifican los siguientes casos de prueba para validar la función `parseUnorderedList`:

1. **Caso básico con dos ítems simples**:

   - **Entrada**: `"- Item A\n- Item B"`
   - **Salida esperada**: `"<ul><li>Item A</li><li>Item B</li></ul>"`
   - **Explicación**: Verifica el funcionamiento básico con una lista de dos ítems estándar, asegurando que se envuelvan correctamente en etiquetas HTML.

2. **Ítems con espacios extra después del guion**:

   - **Entrada**: `"-  JavaScript\n-  Python"`
   - **Salida esperada**: `"<ul><li>JavaScript</li><li>Python</li></ul>"`
   - **Explicación**: Prueba el manejo de espacios adicionales después del guion, confirmando que se ignoren y no se incluyan en el texto del ítem.

3. **Lista con tres ítems y contenido variado**:

   - **Entrada**: `"- 2 C Flour\n- 1/2 C Sugar\n- 1 Tsp Vanilla"`
   - **Salida esperada**: `"<ul><li>2 C Flour</li><li>1/2 C Sugar</li><li>1 Tsp Vanilla</li></ul>"`
   - **Explicación**: Evalúa el procesamiento de una lista más larga con números, fracciones y unidades, asegurando que se parseen correctamente sin alterar el contenido.

4. **Ítems con guiones en el texto**:
   - **Entrada**: `"- A-1\n- A-2\n- B-1"`
   - **Salida esperada**: `"<ul><li>A-1</li><li>A-2</li><li>B-1</li></ul>"`
   - **Explicación**: Verifica que los guiones dentro del texto del ítem (como en "A-1") no se confundan con el guion inicial de la lista, y se incluyan en la salida.

## Enfoque y Solución

### Enfoque Elegido

El enfoque elegido se basa en el procesamiento secuencial de la cadena de entrada mediante manipulación de strings, aprovechando las características simples del formato Markdown para listas desordenadas. Primero, se divide la cadena en líneas para aislar cada ítem de la lista. Luego, se extrae el texto de cada ítem eliminando el prefijo requerido (guion y al menos un espacio). Finalmente, se construye la estructura HTML envolviendo cada ítem en etiquetas `<li>` y la lista completa en `<ul>`. Esta estrategia es eficiente para listas de tamaño razonable, con complejidad temporal lineal en el número de ítems, y prioriza la claridad y simplicidad sobre soluciones más complejas como expresiones regulares, ya que el formato de entrada es predecible y no requiere validaciones avanzadas.

### Implementación Paso a Paso

Siguiendo el enfoque de procesamiento secuencial de strings, la implementación se divide en los siguientes pasos lógicos:

1. **Dividir la cadena de entrada en líneas**: Utilizar el carácter de nueva línea (`\n`) como delimitador para separar la cadena en un array de strings, donde cada elemento representa una línea de la lista Markdown. Esto aísla cada ítem de la lista para procesarlos individualmente.

2. **Extraer el texto de cada ítem**: Para cada línea del array, eliminar el prefijo requerido: el guion inicial (`-`) y al menos un espacio. Dado que el enunciado garantiza que cada línea es válida, se puede asumir que cada línea comienza con `-` seguido de al menos un espacio. Usar técnicas de manipulación de strings para remover estos caracteres y obtener el texto limpio del ítem, manejando posibles espacios adicionales para asegurar que no se incluyan en la salida.

3. **Construir los elementos `<li>`**: Envolver el texto extraído de cada ítem en etiquetas HTML `<li>`, formando strings como `<li>Texto del ítem</li>`. Este paso transforma cada ítem Markdown en su equivalente HTML individual.

4. **Envolver la lista en `<ul>`**: Recopilar todos los strings `<li>` generados y concatenarlos dentro de una etiqueta `<ul>`, resultando en la estructura completa `<ul><li>...</li><li>...</li></ul>`. Esto asegura que la salida sea una cadena única representando la lista HTML.

Esta secuencia garantiza un procesamiento eficiente y directo, aprovechando la simplicidad del formato de entrada para evitar validaciones complejas.

## Análisis de Complejidad

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal es **O(n)**, donde `n` es la longitud total de la cadena de entrada. Esto se debe a que las operaciones principales (`split`, `map` con `replace`, y `join`) recorren la cadena o el array resultante de manera lineal. Dado que el número de ítems es proporcional a la longitud de la cadena (cada ítem tiene al menos unos pocos caracteres), el algoritmo escala bien para listas de tamaño razonable, sin bucles anidados o operaciones costosas.

### Complejidad Espacial

La complejidad espacial es **O(n)**, ya que se crea un array de líneas (`lines`) y otro de strings HTML (`listItems`), ambos proporcionales al tamaño de la entrada. Aunque se podría optimizar para usar menos memoria con un enfoque iterativo, esta implementación prioriza la legibilidad y es adecuada para el contexto del problema, donde las listas no son extremadamente grandes.

## Casos Edge y Consideraciones

La implementación maneja correctamente los casos de prueba proporcionados, incluyendo ítems con espacios extra después del guion (usando `replace(/^-+\s+/, "")` para eliminar uno o más guiones seguidos de espacios) y texto con guiones internos. Dado que el enunciado garantiza listas válidas con al menos un ítem, no se incluyen validaciones para entradas vacías o inválidas. Consideraciones adicionales: el regex usado es simple y eficiente, pero asume el formato exacto; en un escenario real, se podría agregar trimming adicional o manejo de líneas vacías si fuera necesario.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

Se aplicaron conceptos de manipulación de strings en JavaScript, como el uso de `split` para dividir cadenas, `map` para transformar arrays, y expresiones regulares (`replace`) para parsing simple. También se utilizó la construcción de strings con template literals implícitos para generar HTML. Este enfoque demuestra el patrón de "parsing secuencial" para formatos estructurados simples, priorizando la eficiencia y claridad sobre abstracciones complejas.

### Posibles Optimizaciones

La implementación actual es óptima para el problema dado, con complejidad lineal y código legible. Una posible mejora sería evitar el uso de regex reemplazándolo con `substring` y `trim` para mayor control, aunque el regex es más conciso. Para listas muy grandes, se podría procesar de manera streaming para reducir el uso de memoria, pero esto no es necesario aquí. En general, el código es robusto y no requiere cambios significativos.

## Recursos y Referencias

- **Enlace al problema**: [FreeCodeCamp Daily Coding Challenge - Markdown Unordered List Parser](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-07/)
- **Documentación de JavaScript**: [MDN Web Docs - String.prototype.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) y [String.prototype.replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- **Referencias relacionadas**: Conceptos de parsing en [Markdown Specification](https://spec.commonmark.org/), útil para entender formatos similares.
