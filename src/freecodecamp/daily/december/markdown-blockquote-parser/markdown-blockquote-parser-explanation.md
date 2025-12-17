---
title: Markdown Blockquote Parser
source: freecodecamp
series: daily
category: december
createdAt: 2025-12-17
difficulty: easy
topics:
  - strings
  - parsing
  - html
  - markdown
blogLink: https://blog-astro-rouge.vercel.app/posts/markdown-blockquote-parser/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-17/
---

## Markdown Blockquote Parser - Análisis y Explicación Freecodecamp #129

## Enunciado del Problema

Dado un string que incluye un bloque de cita en formato Markdown, devolve el equivalente en string HTML.

Un bloque de cita en Markdown es cualquier linea que:

- Comienza con cero o mas espacios.
- Seguido por un sigo mayor que (>)
- Luego uno o mas espacios.
- Finalmente el texto del bloque de cita.

Devole el texto del bloque de cita envuelto en etiquetas de apertura y cierre de `<blockquote>`.

Por ejemplo dado "> this is a quote", devolvé `"<blockquote>this is a quote</blockquote>".`

## Análisis Inicial

### Comprensión del Problema

El problema requiere validar y convertir un string que representa un blockquote en formato Markdown a su equivalente en HTML.

### Casos de Prueba Identificados

Los casos de prueba relevantes para este problema son:

1. Línea válida con blockquote simple, sin espacios iniciales:  
   Entrada: `"> Esto es una cita"`  
   Salida esperada: `<blockquote>Esto es una cita</blockquote>`

2. Línea válida con espacios iniciales antes del símbolo `>`:  
   Entrada: `"   > Cita con espacios iniciales"`  
   Salida esperada: `<blockquote>Cita con espacios iniciales</blockquote>`

3. Línea válida con múltiples espacios entre `>` y el texto:  
   Entrada: `">     Texto con espacios después del símbolo"`  
   Salida esperada: `<blockquote>Texto con espacios después del símbolo</blockquote>`

4. Línea inválida sin el símbolo `>`:  
   Entrada: `"Esto no es una cita"`  
   Salida esperada: `"Esto no es una cita"`

5. Línea con solo el símbolo `>` y sin texto:  
   Entrada: `">"`  
   Salida esperada: `<blockquote></blockquote>`

6. Línea vacía o con solo espacios:  
   Entrada: `""` o `"    "`  
   Salida esperada: `""` o `"    "` (sin blockquote)

## Desarrollo de la Solución

### Enfoque Elegido

Se eligio usar una expresion regular para identificar y "capturar" el '>' y el texto del blockquote, permititendo espacios iniciales y tambien entre el '>' y el texto. Luego se reemplaza el match con la etiqueta HTML correspondiente.

### Implementación Paso a Paso

1. Definir una expresion regular que ignore espacios iniciales, capture el '>' y el texto del blockquote.
2. Usar el metodo `replace` de JavaScript para buscar y reemplazar el match con la etiqueta HTML `<blockquote>`.
3. Normalizar el string de entrada con trim() para eliminar espacios innecesarios.
4. Agregar la etiqueta de cierre `</blockquote>`al final del texto capturado.
5. Devolver el string resultante.

### Código Final

```javascript
function parseBlockquote(markdown) {
  // Regular expression to match blockquote in Markdown
  const blockquoteRegex = /^\s*>+\s*(.*)$/;
  // Replace Markdown blockquote with HTML <blockquote> tags
  const match = markdown.match(blockquoteRegex);
  if (match) {
    return `<blockquote>${match[1].trim()}</blockquote>`;
  }
  return markdown; // Return original if no blockquote found
}
```

## Análisis de Complejidad

### Complejidad Temporal

La función `parseBlockquote` realiza una única búsqueda con expresión regular sobre el string de entrada y, si hay coincidencia, aplica el método `trim` al texto capturado. Ambas operaciones recorren el string una sola vez, por lo que la complejidad temporal es $\mathcal{O}(n)$, donde $n$ es la cantidad de caracteres de la entrada.

### Complejidad Espacial

En cuanto al uso de memoria, la función solo almacena el resultado de la expresión regular y el string de salida, ambos proporcionales al tamaño de la entrada. Por lo tanto, la complejidad espacial también es $\mathcal{O}(n)$.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- **Expresiones regulares:** Se utilizó una expresión regular para identificar y extraer el contenido de las líneas que cumplen con el formato de blockquote en Markdown.
- **Manipulación de strings:** Se aplicaron métodos como `trim` y `split` para limpiar y procesar el texto.
- **Robustez ante casos edge:** Se consideraron entradas con múltiples líneas y casos límite, haciendo la solución más general y reutilizable.

### Posibles Optimizaciones

Actualmente, la función solo procesa una línea a la vez. Para mejorarla y permitir el manejo de entradas con múltiples líneas (por ejemplo, textos con varios blockquotes o líneas normales mezcladas), se puede modificar la función para que:

1. Divida el string de entrada en líneas usando `split('\n')`.
2. Procese cada línea individualmente aplicando la lógica del blockquote.
3. Una nuevamente las líneas procesadas con `join('\n')`.

De esta forma, la función podrá convertir correctamente todos los blockquotes presentes en un texto multilínea, manteniendo intactas las líneas que no correspondan a citas. Esta optimización hace que la solución sea más robusta y aplicable a textos reales en formato Markdown.

#### Implementación para múltiples líneas

```javascript
function parseBlockquotesMultiline(markdown) {
  return markdown
    .split("\n")
    .map((line) => {
      const match = line.match(/^\s*>+\s*(.*)$/);
      if (match) {
        return `<blockquote>${match[1].trim()}</blockquote>`;
      }
      return line;
    })
    .join("\n");
}
```

Esta versión procesa cada línea del texto, convirtiendo solo aquellas que cumplen con el formato de blockquote y dejando el resto sin modificar.

## Recursos y Referencias

- [Documentación de expresiones regulares en JavaScript (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Método String.prototype.match() (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/match)
- [Sintaxis de blockquotes en Markdown (Markdown Guide)](https://www.markdownguide.org/basic-syntax/#blockquotes)
