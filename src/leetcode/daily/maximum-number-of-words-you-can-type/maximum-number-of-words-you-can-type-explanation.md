---
name: maximum-number-of-words-you-can-type
difficulty: easy
category: daily
topics: [String, Set, Filtering]
source: leetcode
series: daily
createdAt: 2025-11-29
---

# Maximum Number of Words You Can Type

Problema sobre determinar cuántas palabras se pueden escribir completamente con un teclado que tiene algunas teclas rotas.

## Ejemplos

- **Ejemplo 1**: text = "hello world", brokenLetters = "ad" → Output: 1

  - "hello" se puede escribir (no contiene 'a' ni 'd')
  - "world" NO se puede escribir (contiene 'd')

- **Ejemplo 2**: text = "leet code", brokenLetters = "lt" → Output: 1

  - "leet" NO se puede escribir (contiene 'l' y 't')
  - "code" se puede escribir (no contiene 'l' ni 't')

- **Ejemplo 3**: text = "leet code", brokenLetters = "e" → Output: 0
  - Ambas palabras contienen 'e', ninguna se puede escribir

## Análisis

El problema se puede abordar de dos maneras principales:

### Enfoque 1: Verificación por palabra (Óptimo)

- Para cada palabra, verificar si alguna de sus letras está rota
- Usar un Set para búsqueda O(1) de letras rotas
- Filtrar palabras que se pueden escribir completamente

### Enfoque 2: Eliminación iterativa (Intuitivo)

- Por cada letra rota, eliminar todas las palabras que la contengan
- Más fácil de entender conceptualmente
- Menos eficiente por múltiples filtraciones

## Enfoque detallado

### Solución Principal (Óptima)

```typescript
export function canBeTypedWords(text: string, brokenLetters: string): number {
  const words = text.split(" ");
  const brokenSet = new Set(brokenLetters);

  const validWords = words.filter((word) =>
    [...word].every((letra) => !brokenSet.has(letra))
  );
  return validWords.length;
}
```

**Pasos:**

1. **Dividir texto**: `split(" ")` para obtener array de palabras
2. **Crear Set**: Conversión de brokenLetters para búsqueda O(1)
3. **Filtrar palabras**: Usar `filter()` + `every()` para verificar cada palabra
4. **Verificación por letra**: `every()` asegura que ninguna letra esté rota
5. **Contar resultado**: Retornar cantidad de palabras válidas

**Ventajas:**

- Time Complexity: O(n × m) - óptimo para el problema
- Space Complexity: O(n) - eficiente en memoria
- Early exit: `every()` para en cuanto encuentra letra rota
- Usa Set para lookup O(1) vs O(k) con includes()

### Solución Alternativa (Intuitiva)

```typescript
function canBeTypedWordsAlternative(
  text: string,
  brokenLetters: string
): number {
  let words = text.split(" ");
  for (const char of brokenLetters) {
    words = words.filter((word) => !word.includes(char));
  }
  return words.length;
}
```

**Pasos:**

1. **Dividir texto**: Igual que solución principal
2. **Iterar letras rotas**: Por cada letra rota
3. **Filtrar palabras**: Eliminar palabras que contengan esa letra
4. **Resultado final**: Palabras que sobrevivieron todos los filtros

**Ventajas:**

- Más intuitivo: "elimina palabras con cada letra rota"
- Código más directo, menos abstracciones
- Fácil de entender el flujo de ejecución

**Desventajas:**

- Time Complexity: O(n × k × m) - menos eficiente
- Space Complexity: O(n × k) - crea arrays intermedios
- Múltiples pasadas sobre el mismo conjunto de datos

## Casos extremos

- **Sin letras rotas** (`brokenLetters = ""`): Todas las palabras son válidas
- **Una sola palabra**: Funciona igual que múltiples palabras
- **Todas las palabras contienen letras rotas**: Retorna 0
- **Letras repetidas en palabras**: Algoritmo funciona correctamente

## Complejidad

### Solución Principal

- **Time complexity**: O(n × m) - donde n = número de palabras, m = longitud promedio
- **Space complexity**: O(n + k) → O(n) - donde k ≤ 26 para brokenSet

### Solución Alternativa

- **Time complexity**: O(n × k × m) - donde k = letras rotas
- **Space complexity**: O(n × k) - por arrays intermedios en cada filtro

## Conclusión

Ambas soluciones resuelven el problema correctamente, pero la **solución principal es más eficiente** para casos grandes. La **solución alternativa es más intuitiva** y puede ser preferible para código educativo o cuando la claridad es más importante que la eficiencia.

La elección entre usar Set vs includes(), y filter+every vs múltiples filtros, demuestra diferentes trade-offs entre eficiencia algorítmica y claridad conceptual.
