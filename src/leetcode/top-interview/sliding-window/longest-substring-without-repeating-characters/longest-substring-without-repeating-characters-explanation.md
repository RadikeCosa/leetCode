---
title: "Longest Substring Without Repeating Characters"
difficulty: "medium"
topics:
  - Array
  - Math
  - String
source: "leetcode"
series: "top-interview"
category: "daily | binary-search | ..."
createdAt: "2025-12-01"
---

# Longest Substring With## Análisis

Este problema es un ejemplo clásico de **sliding window** (ventana deslizante) donde necesitamos:

1. Mantener una ventana de caracteres únicos
2. Expandir la ventana mientras no haya duplicados
3. Contraer la ventana cuando encontramos duplicados
4. Rastrear la longitud máxima encontrada

### Evolución del Enfoque:

**Primera implementación (O(2n)):**

- Two pointers explícitos (`start` y `end`)
- Set para tracking de caracteres actuales
- Movimiento paso a paso de `start` cuando hay duplicados

**Implementación optimizada (O(n)):**

- Map para almacenar **posiciones** de caracteres
- Salto directo de `start` usando `Math.max`
- Una sola pasada por el string

### Insight Clave:

En lugar de mover `start` paso a paso, **saltamos directamente** a la posición después del carácter duplicado, pero solo si está dentro de la ventana actual.i## Enfoque detallado

### Algoritmo Sliding Window Optimizado:

```typescript
function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;
  let start = 0;
  const charPositions = new Map<string, number>();

  for (let end = 0; end < s.length; end++) {
    if (charPositions.has(s[end])) {
      // Salto optimizado: solo hacia adelante
      start = Math.max(start, charPositions.get(s[end])! + 1);
    #

}

    charPositions.set(s[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
```

### Visualización paso a paso con "abcabcbb":

```
Iteración 1: end=0, char='a'
  Map: {a: 0}
  start=0, maxLength=1
  Ventana: [a]

Iteración 2: end=1, char='b'
  Map: {a: 0, b: 1}
  start=0, maxLength=2
  Ventana: [a,b]

Iteración 3: end=2, char='c'
  Map: {a: 0, b: 1, c: 2}
  start=0, maxLength=3
  Ventana: [a,b,c]

Iteración 4: end=3, char='a' (DUPLICADO!)
  'a' encontrada en posición 0
  start = Math.max(0, 0+1) = 1
  Map: {a: 3, b: 1, c: 2}
  maxLength=3 (no cambia)
  Ventana: [b,c,a]

Iteración 5: end=4, char='b' (DUPLICADO!)
  'b' encontrada en posición 1
  start = Math.max(1, 1+1) = 2
  Map: {a: 3, b: 4, c: 2}
  maxLength=3
  Ventana: [c,a,b]
```

### ¿Por qué Math.max?

Consideremos el caso "abcba":

```
Cuando end=4 encuentra 'a':
- La primera 'a' está en posición 0
- start actual es 2
- Sin Math.max: start = 0 + 1 = 1 (¡retroceso!)
- Con Math.max: start = Math.max(2, 1) = 2 (mantiene progreso)
```

El `Math.max` garantiza que `start` solo avance, nunca retroceda.C## Casos extremos

### Casos manejados correctamente:

1. **String vacío**: `""` → retorna 0

   - El loop no ejecuta, `maxLength` permanece en 0

2. **String de un carácter**: `"a"` → retorna 1

   - Una iteración, `maxLength = 1 - 0 + 1 = 1`

3. **Todos caracteres iguales**: `"bbbbb"` → retorna 1

   - `start` salta constantemente, ventana máxima siempre es 1

4. **Sin repeticiones**: `"abcdef"` → retorna 6

   - Nunca hay duplicados, ventana crece constantemente

5. **Caracteres especiales y espacios**: `"a b!@#"` → retorna 6

   - Todos los caracteres (incluidos espacios) se tratan igual

6. **Patrones complejos**: `"pwwkew"` → retorna 3
   - Ventana se ajusta múltiples veces: "p", "pw", "w", "wk", "ke", "kew"

### Edge case crítico resuelto:

**Problema**: Duplicados fuera de ventana actual
**Ejemplo**: `"abcba"` cuando `start=2` y encontramos 'a' en posición 0
**Solución**: `Math.max(start, duplicatePos + 1)` evita retrocesos## Complejidad

### Time Complexity: O(n)

- **Una sola pasada**: Cada carácter es visitado exactamente una vez por el índice `end`
- **Saltos directos**: `start` no se mueve paso a paso, salta directamente usando el Map
- **Operaciones O(1)**: `Map.has()`, `Map.get()`, `Map.set()` son todas O(1) promedio

### Space Complexity: O(min(m,n))

- **m**: Tamaño del alfabeto (caracteres únicos posibles)
- **n**: Longitud del string
- **Map almacena**: Máximo `min(m,n)` entradas porque no puede haber más caracteres únicos que el alfabeto o que el string

**Ejemplos prácticos:**

- Letras minúsculas: O(26) → O(1)
- ASCII completo: O(128) → O(1)
- Unicode: O(min(65536, n))

### Comparación con implementaciones alternativas:

| Implementación         | Time     | Space           | Descripción              |
| ---------------------- | -------- | --------------- | ------------------------ | -------------- |
| **Fuerza bruta**       | O(n³)    | O(1)            | Verificar cada substring |
| **Set + Two Pointers** | O(2n)    | O(min(m,n))     | Movimiento paso a paso   |
| **Map optimizado**     | **O(n)** | **O(min(m,n))** | **Saltos directos** ✅   | o## Conclusión |

### Lecciones aprendidas:

1. **Sliding Window != Siempre Two Pointers**:

   - Fixed size sliding window: Un solo puntero
   - Variable size con condiciones simples: Map + loop
   - Variable size con condiciones complejas: Two pointers explícitos

2. **Optimización por saltos**:

   - En lugar de mover punteros paso a paso, usar información almacenada para saltar directamente
   - `Math.max` evita retrocesos y mantiene la invariante del algoritmo

3. **Trade-off Set vs Map**:

   - **Set**: Más simple, pero requiere movimiento paso a paso
   - **Map**: Más complejo, pero permite optimización con saltos

4. **Manejo de edge cases**:
   - El algoritmo general maneja naturalmente casos extremos
   - Early returns pueden optimizar casos triviales pero no son esenciales

### Patrones aplicables:

Este enfoque de **"sliding window con saltos optimizados"** es útil en:

- Longest substring with at most K distinct characters
- Minimum window substring
- Substring with concatenation of all words
- Cualquier problema de ventana deslizante con restricciones de unicidad

### Código final:

```typescript
export function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;
  let start = 0;
  const charPositions = new Map<string, number>();

  for (let end = 0; end < s.length; end++) {
    if (charPositions.has(s[end])) {
      start = Math.max(start, charPositions.get(s[end])! + 1);
    }

    charPositions.set(s[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
```

**Elegante, eficiente y correcto.** ✨ string `s`, encontrar la longitud de la substring más larga sin caracteres repetidos.

## Ejemplos

### Ejemplo 1:

- Input: `s = "abcabcbb"`
- Output: `3`
- Explicación: La respuesta es "abc", con longitud 3.

### Ejemplo 2:

- Input: `s = "bbbbb"`
- Output: `1`
- Explicación: La respuesta es "b", con longitud 1.

### Ejemplo 3:

- Input: `s = "pwwkew"`
- Output: `3`
- Explicación: La respuesta es "wke", con longitud 3.

## Análisis

_Este análisis será completado después de la implementación colaborativa._

Este problema es un ejemplo clásico de **sliding window** (ventana deslizante) donde necesitamos:

1. Mantener una ventana de caracteres únicos
2. Expandir la ventana mientras no haya duplicados
3. Contraer la ventana cuando encontramos duplicados
4. Rastrear la longitud máxima encontrada

## Enfoque detallado

_El enfoque detallado será desarrollado durante la implementación._

## Casos extremos

_Los casos extremos serán identificados durante la fase de testing colaborativo._

- String vacío
- String de un solo carácter
- String con todos caracteres iguales
- String sin repeticiones
- String con caracteres especiales y espacios

## Complejidad

_El análisis de complejidad será completado después de la implementación._

- Time complexity: O(?) - a determinar
- Space complexity: O(?) - a determinar

## Conclusión

_Las conclusiones y lecciones aprendidas serán documentadas después de resolver el problema._