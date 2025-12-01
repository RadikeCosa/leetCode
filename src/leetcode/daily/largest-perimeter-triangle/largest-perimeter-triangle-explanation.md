---
title: "largest perimeter triangle"
difficulty: "easy"
topics:
  - Array
  - Math
  - Greedy
  - Sorting
source: "leetcode"
series: "daily"
category: "daily"
createdAt: "2025-09-29"
---

## Problema 976: Largest Perimeter Triangle

## Descripción del problema

Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

## Análisis inicial

### Comprensión del problema

- Necesitamos encontrar el **perímetro máximo** de un triángulo válido
- Un triángulo válido debe cumplir la **desigualdad triangular**
- Si no se puede formar ningún triángulo, retornar 0
- Los elementos del array representan **longitudes de lados** posibles

### Casos de ejemplo

**Example 1**: `nums = [2,1,2]` → `5`

- Lados posibles: [1,2,2] después de ordenar
- Desigualdad triangular: 1+2=3 > 2 ✓
- Perímetro: 1+2+2 = 5

**Example 2**: `nums = [1,2,1,10]` → `0`

- Ninguna combinación de 3 elementos forma triángulo válido
- [1,1,2]: 1+1=2 ≯ 2 ✗
- [1,1,10]: 1+1=2 ≯ 10 ✗
- [1,2,10]: 1+2=3 ≯ 10 ✗

### Restricciones importantes

- 3 <= nums.length <= 10^4 (suficientes elementos para al menos un triángulo)
- 1 <= nums[i] <= 10^6 (solo valores positivos)

## Enfoque y algoritmo

### Estrategia principal

**Greedy + Sorting**: Ordenar de mayor a menor y buscar la primera combinación válida que dará automáticamente el perímetro máximo.

### Insight matemático clave

**Desigualdad triangular**: Para lados a ≥ b ≥ c, solo necesitamos verificar `b + c > a`

- Las otras dos desigualdades (a + b > c, a + c > b) se cumplen automáticamente
- Esto simplifica la verificación a una sola condición

### Pasos del algoritmo

1. **Ordenar** el array de mayor a menor: `nums.sort((a, b) => b - a)`
2. **Iterar** por elementos consecutivos de 3 en 3
3. **Verificar** desigualdad triangular para cada terna
4. **Retornar** el perímetro de la primera terna válida (será la máxima)
5. **Si no encuentra** ninguna terna válida, retornar 0

### ¿Por qué funciona la estrategia greedy?

- Al ordenar de mayor a menor, exploramos primero las combinaciones con números más grandes
- La **primera** combinación válida encontrada será automáticamente la de **perímetro máximo**
- No necesitamos explorar todas las combinaciones

### Casos edge importantes

- **Array mínimo**: Exactamente 3 elementos
- **Desigualdad límite**: Casos donde apenas se cumple o falla la condición
- **Múltiples válidos**: Elegir correctamente el de mayor perímetro
- **Triángulos imposibles**: Arrays donde ninguna combinación es válida

## Implementación

### Código final optimizado

```typescript
export function largestPerimeter(nums: number[]): number {
  // Sort in descending order to check largest combinations first
  nums.sort((a, b) => b - a);

  // Find first valid triangle using greedy approach
  for (let i = 0; i < nums.length - 2; i++) {
    const [a, b, c] = [nums[i], nums[i + 1], nums[i + 2]];

    // Triangle inequality: sum of two smaller sides > largest side
    if (b + c > a) {
      return a + b + c; // Return perimeter of valid triangle
    }
  }

  return 0; // No valid triangle found
}
```

### Explicación del código

- **Sorting estratégico**: `(a, b) => b - a` ordena descendentemente
- **Destructuring semántico**: `[a, b, c]` asigna nombres claros (a=mayor, b,c=menores)
- **Condición optimizada**: Solo verificamos `b + c > a` por el insight matemático
- **Early return**: Primera combinación válida es automáticamente la óptima
- **Manejo de fracaso**: `return 0` cuando no hay solución

## Análisis de complejidad

### Complejidad temporal

**O(n log n)** donde n es el número de elementos

- **Sorting**: O(n log n) - Algoritmo de ordenamiento estándar
- **Loop**: O(n) - En el peor caso recorre todo el array
- **Dominancia**: El sorting domina la complejidad total

### Complejidad espacial

**O(1)** - Espacio constante

- **In-place sorting**: Modifica el array original sin espacio extra
- **Variables locales**: Solo índices y referencias temporales
- **Sin estructuras auxiliares**: No se crean arrays u objetos adicionales

## Casos de prueba

### Casos básicos

- **Example 1**: [2,1,2] → 5 (triángulo válido básico)
- **Example 2**: [1,2,1,10] → 0 (sin triángulos válidos)

### Casos edge

- **Mínimo válido**: [3,4,5] → 12 (exactamente 3 elementos)
- **Mínimo inválido**: [1,2,3] → 0 (igualdad falla la desigualdad)
- **Múltiples opciones**: [5,4,3,2,1] → 12 (elige óptimo)
- **Búsqueda profunda**: [10,8,4,3,2] → 22 (primera combinación válida)
- **Límite exacto**: [6,4,3] → 13 (apenas cumple desigualdad)
- **Números grandes**: [1000000,999999,999998] → 2999997 (límites)

## Reflexiones y aprendizajes

### Conceptos clave aplicados

- **Greedy Algorithm**: Estrategia de elección óptima local que garantiza óptimo global
- **Sorting estratégico**: Usar ordenamiento para simplificar búsquedas
- **Desigualdad triangular**: Condición matemática fundamental para triángulos
- **Early termination**: Optimización que evita búsquedas innecesarias

### Alternativas consideradas

- **Fuerza bruta O(n³)**: Probar todas las combinaciones de 3 elementos
  - **Problema**: Innecesariamente lento para arrays grandes
  - **Ventaja del greedy**: Reduce complejidad significativamente
  - **Problema**: Innecesarios para este problema específico
  - **Ventaja del sorting**: Simple y eficiente

### Patrones identificados

- **Patrón "Greedy + Sort"**: Ordenar para hacer greedy óptimo
- **Patrón "Mathematical insight"**: Usar propiedades matemáticas para simplificar
- **Patrón "Early return optimization"**: Terminar en cuanto encontramos la respuesta
- **Patrón "Consecutive elements"**: Procesar elementos adyacentes en array ordenado

### Lecciones de optimización

1. **Greedy + matemática**: Combinar estrategias algorítmicas con insights del dominio
2. **Simplificación inteligente**: Una condición en lugar de tres (desigualdad triangular)
3. **Nombrado semántico**: `[a, b, c]` vs `nums[i], nums[i+1], nums[i+2]` mejora legibilidad