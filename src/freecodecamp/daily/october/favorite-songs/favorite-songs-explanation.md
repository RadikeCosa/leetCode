---
title: "favorite-songs"
difficulty: "easy"
topics:
  - Array
  - Sorting
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-10-19"
---

# Favorite Songs - Análisis Detallado

## Enunciado del Problema

### FreeCodeCamp - Daily Challenge: Favorite Songs

Remember iPods? The first model came out 24 years ago today, on Oct. 23, 2001.

Given an array of song objects representing your iPod playlist, return an array with the titles of the two most played songs, with the most played song first.

Each object will have a "title" property (string), and a "plays" property (integer).

**Ejemplos de entrada y salida:**

- Input: `[{"title": "Sync or Swim", "plays": 3}, {"title": "Byte Me", "plays": 1}, {"title": "Earbud Blues", "plays": 2}]`
- Output: `["Sync or Swim", "Earbud Blues"]`

- Input: `[{"title": "Skip Track", "plays": 98}, {"title": "99 Downloads", "plays": 99}, {"title": "Clickwheel Love", "plays": 100}]`
- Output: `["Clickwheel Love", "99 Downloads"]`

## Análisis Inicial

### Comprensión del Problema

Este problema requiere procesar una lista de reproducción de canciones representada como un array de objetos, donde cada objeto tiene:

- `title`: string con el nombre de la canción
- `plays`: número entero con la cantidad de reproducciones

El objetivo es identificar las **dos canciones más reproducidas** y retornar sus títulos en orden descendente de popularidad.

### Casos Especiales a Considerar

1. **Array con menos de 2 canciones**: Aunque no está especificado, asumimos que siempre hay al menos 2 canciones
2. **Empates en reproducciones**: Si hay empates, el orden relativo entre canciones con igual número de plays no está especificado
3. **Orden original**: No necesitamos preservar el orden original del array

### Estrategia Inicial

La solución más directa sería:

1. Ordenar el array por la propiedad `plays` en orden descendente
2. Tomar los primeros dos elementos
3. Extraer sus títulos en un nuevo array

Esta aproximación es eficiente y clara, utilizando métodos nativos de arrays de JavaScript.

## Solución Implementada

La implementación utiliza una cadena de métodos funcionales para resolver el problema de manera concisa:

```javascript
function favoriteSongs(playlist) {
  // Ordenar por plays descendente y tomar los primeros dos títulos
  return playlist
    .sort((a, b) => b.plays - a.plays)
    .slice(0, 2)
    .map((song) => song.title);
}
```

### Desglose de la Solución

1. **`sort((a, b) => b.plays - a.plays)`**: Ordena el array de canciones por la propiedad `plays` en orden descendente. La función comparadora `b.plays - a.plays` asegura que las canciones con más reproducciones aparezcan primero.

2. **`slice(0, 2)`**: Toma los primeros dos elementos del array ordenado, correspondientes a las dos canciones más reproducidas.

3. **`map((song) => song.title)`**: Transforma el array de objetos de canciones en un array de strings conteniendo solo los títulos.

### Ventajas de Esta Implementación

- **Funcional**: Utiliza el paradigma funcional de JavaScript con métodos encadenados
- **Declarativa**: El código expresa "qué" hacer, no "cómo" hacerlo
- **Concisa**: Solución en una sola línea de ejecución
- **Legible**: Cada método tiene una responsabilidad clara
- **Inmutable**: No modifica el array original (aunque `sort` sí lo hace, esto es aceptable aquí)

## Complejidad

### Complejidad Temporal: O(n log n)

- **`sort()`**: O(n log n) - El algoritmo de ordenamiento de JavaScript (Timsort en V8) tiene esta complejidad
- **`slice(0, 2)`**: O(1) - Operación constante ya que solo toma 2 elementos
- **`map()`**: O(k) donde k=2 - Operación constante en la práctica

La complejidad dominante es O(n log n) debido al ordenamiento.

### Complejidad Espacial: O(1) adicional

- No se crean estructuras de datos adicionales significativas
- El `sort()` modifica el array in-place
- Los métodos `slice()` y `map()` crean nuevos arrays pequeños (tamaño 2)
- El espacio adicional es constante relativo al tamaño de entrada

### Eficiencia Práctica

Para arrays pequeños (como listas de reproducción típicas), esta solución es perfectamente eficiente. El O(n log n) del ordenamiento es aceptable ya que:

- Las listas de iPod raramente exceden miles de canciones
- El factor constante de los algoritmos de ordenamiento modernos es bajo
- La simplicidad del código vale la complejidad teórica

## Casos de Prueba

La implementación fue validada con tres casos de prueba que cubren diferentes escenarios:

### Caso 1: Ordenamiento Básico

```javascript
Input: [
  { title: "Sync or Swim", plays: 3 },
  { title: "Byte Me", plays: 1 },
  { title: "Earbud Blues", plays: 2 }
]
Expected Output: ["Sync or Swim", "Earbud Blues"]
```

**Análisis**: Las canciones están en orden mixto. "Sync or Swim" (3 plays) debe aparecer primero, seguido de "Earbud Blues" (2 plays).

### Caso 2: Números Grandes

```javascript
Input: [
  { title: "Skip Track", plays: 98 },
  { title: "99 Downloads", plays: 99 },
  { title: "Clickwheel Love", plays: 100 }
]
Expected Output: ["Clickwheel Love", "99 Downloads"]
```

**Análisis**: Verifica el manejo correcto de números más grandes y el ordenamiento descendente preciso.

### Caso 3: Orden Inverso

```javascript
Input: [
  { title: "Song A", plays: 42 },
  { title: "Song B", plays: 99 },
  { title: "Song C", plays: 75 }
]
Expected Output: ["Song B", "Song C"]
```

**Análisis**: Las canciones no están en orden de plays. "Song B" (99) debe aparecer primero, seguido de "Song C" (75).

## Patrones y Técnicas

### Patrón: Encadenamiento de Métodos Funcionales

Este problema demuestra el poder del **encadenamiento de métodos funcionales** en JavaScript:

```javascript
array.sort(comparator).slice(start, end).map(transformer);
```

**Cuándo usar este patrón:**

- Transformaciones secuenciales de datos
- Operaciones que no requieren estado intermedio complejo
- Cuando la legibilidad es más importante que la micro-optimización

### Técnica: Ordenamiento con Función Comparadora

La función comparadora `((a, b) => b.plays - a.plays)` es un patrón común para ordenamiento descendente:

- `b.plays - a.plays > 0`: b va antes que a (orden descendente)
- `b.plays - a.plays < 0`: a va antes que b
- `b.plays - a.plays === 0`: orden relativo se mantiene

### Técnica: Extracción de Propiedades con map()

El uso de `map(song => song.title)` para extraer títulos es una técnica estándar de transformación de arrays de objetos.

## Aprendizajes y Reflexiones

### Lecciones Técnicas

1. **Métodos Encadenados**: El encadenamiento de `sort().slice().map()` crea un flujo de datos claro y legible.

2. **Complejidad vs Simplicidad**: Para problemas pequeños, una solución O(n log n) es perfectamente aceptable cuando el código es simple y mantenible.

3. **Funciones Comparadoras**: Entender cómo funcionan las funciones comparadoras en `sort()` es fundamental para el ordenamiento personalizado.

### Reflexiones sobre el Desarrollo

Este problema ilustra cómo los problemas aparentemente simples pueden tener soluciones elegantes utilizando las características funcionales de JavaScript. La cadena de métodos crea un "pipeline" de transformación de datos que es fácil de leer y mantener.

### Conexión con el Tema

El problema hace referencia a iPods, conectando la nostalgia tecnológica con conceptos de programación modernos. Es un recordatorio de cómo la tecnología evoluciona mientras los fundamentos de la resolución de problemas permanecen constantes.

### Mejoras Potenciales

Aunque la solución actual es adecuada, en escenarios de producción con listas muy grandes, se podría considerar:

- Usar algoritmos de selección parcial para evitar ordenamiento completo
- Implementar un heap para encontrar los k elementos más grandes eficientemente
- Considerar casos edge como arrays vacíos o con menos de 2 elementos