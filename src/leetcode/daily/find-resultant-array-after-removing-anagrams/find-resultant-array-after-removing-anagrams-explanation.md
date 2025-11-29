# Find Resultant Array After Removing Anagrams

## Enunciado del Problema

Dado un array de strings `words` donde cada string contiene letras minúsculas del inglés, debemos realizar operaciones repetidas donde eliminamos strings que sean anagramas de su vecino anterior hasta que no sea posible realizar más operaciones.

Un anagrama es una palabra o frase formada reorganizando las letras de otra palabra o frase usando exactamente las mismas letras una vez.

## Análisis Inicial

### Comprensión del Problema

- **Input**: Array de strings con letras minúsculas
- **Operación**: Eliminar strings que sean anagramas de su vecino anterior
- **Output**: Array resultante después de todas las eliminaciones posibles

### Casos de Ejemplo

**Ejemplo 1:**

- Input: `["abba","baba","bbaa","cd","cd"]`
- Output: `["abba","cd"]`
- Explicación: Se eliminan "baba" (anagrama de "abba"), "bbaa" (anagrama de "baba"), y el segundo "cd"

**Ejemplo 2:**

- Input: `["a","b","c","d","e"]`
- Output: `["a","b","c","d","e"]`
- Explicación: No hay anagramas adyacentes

## Restricciones

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 10`
- `words[i]` contiene solo letras minúsculas del inglés

## Detección de Anagramas

Para determinar si dos strings son anagramas, podemos:

1. **Ordenar las letras**: `s1.split('').sort().join('') === s2.split('').sort().join('')`
2. **Contar frecuencias**: Usar un mapa o array de conteo para cada letra

## Estrategia de Solución

### Enfoque Iterativo

1. Usar un stack para mantener los elementos que no serán eliminados
2. Para cada palabra en el array:
   - Comparar con el último elemento del stack
   - Si son anagramas, no agregar la palabra actual
   - Si no son anagramas, agregar la palabra actual

### Implementación Final Optimizada

```typescript
export function findResultantArrayAfterRemovingAnagrams(
  words: string[]
): string[] {
  // Optimización: Precomputamos las "firmas" ordenadas de todas las palabras
  // Esto evita reordenar strings múltiples veces durante las comparaciones
  const signatures = words.map((word) => word.split("").sort().join(""));

  // Array que actuará como stack para mantener los elementos que sobreviven
  const result: string[] = [];

  // Procesamos cada palabra del array original
  for (let i = 0; i < words.length; i++) {
    // Verificamos si la palabra actual es anagrama del último elemento en result
    // Solo comparamos con el último elemento porque las eliminaciones son secuenciales
    if (result.length > 0) {
      const lastWordIndex = words.indexOf(result[result.length - 1]);
      if (signatures[i] === signatures[lastWordIndex]) {
        // Si son anagramas, saltamos esta palabra (sería eliminada en el proceso)
        continue;
      }
    }
    // Si no son anagramas, agregamos la palabra al resultado
    result.push(words[i]);
  }

  return result;
}
```

## Análisis de Complejidad Optimizada

### Tiempo: O(n \* m log m)

- **Preprocesamiento**: O(n \* m log m) para ordenar todas las palabras una vez
- **Procesamiento**: O(n) para las comparaciones usando índices
- **Total**: O(n \* m log m) donde m ≤ 10, esencialmente O(n log n) en práctica

### Espacio: O(n \* m)

- Array de firmas ordenadas: O(n \* m)
- Stack del resultado: O(n \* m)
- Total: O(n \* m) - aceptable dado n ≤ 100, m ≤ 10

## Optimizaciones Implementadas

1. **Precomputación de firmas**: Calculamos las versiones ordenadas una sola vez
2. **Comparación directa**: Usamos comparación de strings en lugar de lógica compleja
3. **Eliminación de función auxiliar**: Código más directo y legible

## Comparación de Enfoques

| Enfoque           | Complejidad Tiempo  | Espacio Extra | Legibilidad  |
| ----------------- | ------------------- | ------------- | ------------ |
| Array de conteo   | O(n \* m)           | O(1)          | Baja         |
| Strings ordenados | O(n \* m log m)     | O(n \* m)     | Alta         |
| **Precomputado**  | **O(n \* m log m)** | **O(n \* m)** | **Muy Alta** |

## Trade-offs

- **Ventaja**: Código extremadamente simple y fácil de entender
- **Desventaja**: Mayor uso de memoria (almacenamos strings ordenados)
- **Resultado**: Para las restricciones del problema, es la solución más elegante

## Casos Edge

1. **Array vacío**: No aplicable (restricción mínima 1)
2. **Sin anagramas**: Retornar array original
3. **Todos anagramas**: Retornar primer elemento
4. **Strings de longitud 1**: Solo anagramas si son iguales

## Optimizaciones Posibles

1. **Precomputar firmas**: Crear mapa de frecuencias para cada palabra
2. **Usar sorting**: Para strings cortas, ordenar puede ser más simple
3. **Memoización**: Para arrays grandes, cachear comparaciones

## Lecciones Aprendidas

- El uso de stack es eficiente para problemas de eliminación secuencial
- La comparación de anagramas mediante conteo de frecuencias es O(m) vs O(m log m) de sorting
- Es importante entender que el orden de eliminación no afecta el resultado final
