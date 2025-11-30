---
name: count-elements-with-maximum-frequency
difficulty: easy
category: daily
topics: [Array, Hash Table, Counting]
source: leetcode
series: daily
createdAt: 2025-11-29
---

# Count Elements With Maximum Frequency - Explicación Detallada

## Información del Problema

- **Número**: 3005
- **Título**: Count Elements With Maximum Frequency
- **Dificultad**: Easy
- **Temas**: Array, Hash Table, Counting
- **Enlace**: [LeetCode](https://leetcode.com/problems/count-elements-with-maximum-frequency/)

## Descripción del Problema

Se nos da un array `nums` que consiste en enteros positivos. Necesitamos retornar el total de frecuencias de elementos en `nums` tales que esos elementos tengan la frecuencia máxima.

La frecuencia de un elemento es el número de ocurrencias de ese elemento en el array.

## Análisis de Ejemplos

### Ejemplo 1:

- **Input**: `nums = [1,2,2,3,1,4]`
- **Output**: `4`
- **Análisis paso a paso**:
  - Frecuencias: `{1: 2, 2: 2, 3: 1, 4: 1}`
  - Frecuencia máxima: `2`
  - Elementos con frecuencia máxima: `1` y `2`
  - Total de ocurrencias: `2 + 2 = 4`

### Ejemplo 2:

- **Input**: `nums = [1,2,3,4,5]`
- **Output**: `5`
- **Análisis paso a paso**:
  - Frecuencias: `{1: 1, 2: 1, 3: 1, 4: 1, 5: 1}`
  - Frecuencia máxima: `1`
  - Elementos con frecuencia máxima: todos (`1, 2, 3, 4, 5`)
  - Total de ocurrencias: `1 + 1 + 1 + 1 + 1 = 5`

## Restricciones

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Enfoque de Solución

### Análisis Inicial

El problema requiere dos operaciones principales:

1. **Contar frecuencias** de cada elemento
2. **Identificar la frecuencia máxima** y sumar todas las ocurrencias de elementos que la tienen

### Algoritmo - Dos Pasadas Optimizado

```typescript
export function maxFrequencyElements(nums: number[]): number {
  let frequencyMap: Record<number, number> = {};
  let maxFrequency = 0;
  let totalCount = 0;

  // Primera pasada: construir mapa de frecuencias + tracking de máximo
  for (let num of nums) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    maxFrequency = Math.max(maxFrequency, frequencyMap[num]);
  }

  // Segunda pasada: sumar frecuencias que igualan el máximo
  for (let count of Object.values(frequencyMap)) {
    if (count === maxFrequency) {
      totalCount += count;
    }
  }

  return totalCount;
}
```

**Primera pasada** (O(n)):

- Iteramos sobre cada elemento del array
- `frequencyMap[num] = (frequencyMap[num] || 0) + 1`: Si el elemento no existe, lo inicializamos en 0 y sumamos 1
- `Math.max(maxFrequency, frequencyMap[num])`: Actualizamos la frecuencia máxima en tiempo real

**Segunda pasada** (O(k), donde k ≤ n):

- `Object.values(frequencyMap)`: Obtenemos todas las frecuencias del mapa
- Sumamos solo aquellas frecuencias que igualan `maxFrequency`

### Casos Edge

1. **Array de un elemento**: `[42]` → Frecuencia máxima = 1, resultado = 1
2. **Todos elementos iguales**: `[5,5,5,5]` → Frecuencia máxima = 4, resultado = 4
3. **Un elemento dominante**: `[1,1,1,2,2,3]` → Solo elemento `1` tiene frecuencia máxima 3
4. **Múltiples elementos con máxima frecuencia**: `[1,2,3,1,2,3]` → Elementos `1,2,3` tienen frecuencia 2 c/u

## Complejidad

### Complejidad Temporal: O(n)

- **Primera pasada**: O(n) - recorremos todo el array
- **Segunda pasada**: O(k) - recorremos elementos únicos (k ≤ n)
- **Total**: O(n + k) = O(n)

### Complejidad Espacial: O(k)

- `frequencyMap`: almacena hasta k elementos únicos
- En el peor caso (todos elementos diferentes): O(n)
- Variables auxiliares: O(1)

## Implementación

### Decisiones de Diseño

1. **Record vs Map**: Elegimos `Record<number, number>` por:

   - Sintaxis más simple: `obj[key]` vs `map.get(key)`
   - Menos verboso para incrementos
   - Claves numéricas funcionan perfectamente

2. **Tracking de máximo en tiempo real**:

   - Evita un tercer bucle para encontrar el máximo
   - Mantiene la complejidad en O(n)

3. **Nombres descriptivos**:
   - `frequencyMap`: claridad sobre qué almacena
   - `maxFrequency`: tracking explícito del máximo
   - `totalCount`: acumulador del resultado

## Patrones y Técnicas Utilizadas

1. **Hash Table/Record**: Para conteo de frecuencias en O(1)
2. **Two-Pass Algorithm**: Separación clara de responsabilidades
3. **Greedy Tracking**: Actualización del máximo durante construcción del mapa
4. **Functional Programming**: Uso de `Object.values()` para iterar valores

## Problemas Relacionados

- **Two Sum**: Uso de hash maps para lookup O(1)
- **Top K Frequent Elements**: Conteo de frecuencias con ordenamiento
- **Majority Element**: Problema de frecuencias con optimizaciones especiales
- **Group Anagrams**: Uso de hash maps para agrupación

## Optimizaciones Alternativas

### ¿Una sola pasada?

```typescript
// Más complejo, no mejora complejidad asintótica
let elementsWithMaxFreq: Set<number> = new Set();
// Requiere tracking dinámico de elementos con frecuencia máxima
```

**Conclusión**: La solución actual es **algorítmicamente óptima** - no se puede mejorar la complejidad temporal O(n).
