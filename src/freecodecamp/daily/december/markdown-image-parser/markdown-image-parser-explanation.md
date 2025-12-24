---
title: Markdown Image Parser
source: freecodecamp
series: daily
category: december
createdAt: 2025-12-24
difficulty: easy
topics:
  - markdown
  - parsing
  - strings
  - html
blogLink: https://blog-astro-rouge.vercel.app/posts/markdown-image-parser/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-24/
---

## Markdown Image Parser - Análisis y Explicación

## Enunciado del Problema

Dado un string que representa una imagen en formato Markdown, devuelve el string equivalente en formato HTML.
Una imagen en Markdown tiene el siguiente formato: `![alt text](image_url)`, donde:

- `alt text` es la descripción de la imagen (corresponde al atributo `alt` en HTML).
- `image_url` es la URL de la imagen (corresponde al atributo `src` en HTML).

Debes devolver el string de la imagen en formato HTML, con el atributo `src` establecido en la URL de la imagen y el atributo `alt` en el texto alternativo.

Por ejemplo, dado: `![Cute cat](cat.png)` se debe retornar `'<img src="cat.png" alt="Cute cat">'`.

- Asegúrate de que la etiqueta, el orden de los atributos, el espaciado y las comillas coincidan exactamente con el ejemplo.

## Análisis Inicial

### Comprensión del Problema

El objetivo es transformar un string que representa una imagen en formato Markdown a su equivalente en HTML. El formato de entrada es siempre `![alt text](image_url)`, donde el texto alternativo y la URL están claramente delimitados. La tarea consiste en extraer ambos valores y construir una etiqueta `<img>` en HTML, asegurando que el orden de los atributos, el espaciado y el uso de comillas coincidan exactamente con el ejemplo proporcionado. No se requiere validar otros formatos ni manejar casos ambiguos: se asume que la entrada cumple siempre con el patrón especificado.

### Casos de Prueba Identificados

A partir del enunciado y los tests proporcionados, los casos de prueba clave son:

- Entrada: `![Cute cat](cat.png)`  
  Salida esperada: `<img src="cat.png" alt="Cute cat">`

- Entrada: `![Rocket Ship](https://freecodecamp.org/cdn/rocket-ship.jpg)`  
  Salida esperada: `<img src="https://freecodecamp.org/cdn/rocket-ship.jpg" alt="Rocket Ship">`

- Entrada: `![Cute cats!](https://freecodecamp.org/cats.jpeg)`  
  Salida esperada: `<img src="https://freecodecamp.org/cats.jpeg" alt="Cute cats!">`

Estos cubren casos con texto alternativo simple, con signos de exclamación y con URLs absolutas y relativas.

## Desarrollo de la Solución

### Enfoque Elegido

Para resolver este problema, se opta por utilizar expresiones regulares para extraer el texto alternativo y la URL de la imagen del string en formato Markdown. Este enfoque es eficiente y directo, ya que el patrón de entrada es fijo y bien definido.

### Implementación Paso a Paso

1. **Expresión Regular**: Utilizar una expresión regular para capturar el texto alternativo y la URL de la imagen. La expresión `!\[(.*?)\]\((.*?)\)` permite extraer ambos componentes.
2. **Extracción de Componentes**: Aplicar la expresión regular al string de entrada para obtener el texto alternativo y la URL.
3. **Construcción del String HTML**: Formatear los componentes extraídos en la estructura HTML requerida: `<img src="image_url" alt="alt text">`.
4. **Retorno del Resultado**: Devolver el string HTML construido.

```javascript
function parseImage(markdown) {
  // Expresión regular para capturar alt text y image URL
  const regex = /!\[(.*?)\]\((.*?)\)/;
  // Aplicar la expresión regular al string de entrada
  const match = markdown.match(regex);
  // Si hay una coincidencia, extraer los componentes y construir el string HTML
  if (match) {
    const altText = match[1];
    const imageUrl = match[2];
    return `<img src="${imageUrl}" alt="${altText}">`;
  }
  // Si no hay coincidencia, retornar un string vacío o manejar el error según sea necesario
  return "";
}
```

## Análisis de Complejidad

### Complejidad Temporal

La expresión regular se evalúa en tiempo lineal respecto al tamaño del string de entrada, es decir, $O(n)$, donde $n$ es la longitud del string Markdown. La construcción del string HTML también es $O(1)$, ya que solo depende de los valores extraídos.

### Complejidad Espacial

El uso de memoria es $O(1)$, ya que solo se almacenan referencias a los grupos capturados y el string de salida. No se crean estructuras de datos adicionales proporcionales al tamaño de la entrada.

## Casos Edge y Consideraciones

- Si el string de entrada no sigue el formato exacto de imagen Markdown, la función retorna un string vacío.
- No se manejan espacios extra, anidamientos ni escapes dentro del alt text o la URL, ya que el enunciado asume entradas válidas.
- No se procesan múltiples imágenes en un mismo string, solo la primera coincidencia.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Uso de expresiones regulares para parsing de patrones fijos.
- Extracción de grupos de captura y formateo de strings en JavaScript.
- Validación mínima, asumiendo entradas bien formadas según la consigna.

### Posibles Optimizaciones

- Si se requiriera soportar múltiples imágenes en un mismo string, se podría usar `matchAll` o un bucle con la expresión global.
- Para mayor robustez, se podría validar la URL o sanitizar el alt text, aunque no es necesario en este contexto.

## Recursos y Referencias

- [MDN Web Docs: Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [MDN Web Docs: String.prototype.match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
- [HTML img element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
