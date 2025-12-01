---
title: "adjacent-increasing-subarrays-detection-i"
difficulty: "medium"
topics:
  - Array
  - Sliding Window
  - Brute Force
source: "leetcode"
series: "daily"
category: "daily"
createdAt: "2025-11-30"
---

# Adjacent Increasing Subarrays Detection I

## Enunciado del Problema

### LeetCode - Problema 3349

Dado un array `nums` de `n` enteros y un entero `k`, determina si existen dos subarrays adyacentes de longitud `k` tales que ambos subarrays sean estrictamente crecientes. Específicamente, verifica si hay dos subarrays que empiecen en los índices `a` y `b` (`a < b`), donde:

• Ambos subarrays `nums[a..a + k - 1]` y `nums[b..b + k - 1]` son estrictamente crecientes.
• Los subarrays deben ser adyacentes, lo que significa `b = a + k`.

Retorna `true` si es posible encontrar dos subarrays de este tipo, y `false` en caso contrario.

**Ejemplo 1:**

Input: nums = [2,5,7,8,9,2,3,4,3,1], k = 3
Output: true
Explicación: Los subarrays [7,8,9] y [2,3,4] son ambos crecientes y adyacentes.

**Ejemplo 2:**

Input: nums = [1,2,3,4,4,4,4,5,6,7], k = 5
Output: false

**Restricciones:**

- `2 <= nums.length <= 100`
- `1 < 2 * k <= nums.length`
- `-1000 <= nums[i] <= 1000`

## Análisis Inicial

### Comprensión del Problema

El problema requiere encontrar dos subarrays consecutivos (adyacentes) de exactamente `k` elementos cada uno, donde ambos subarrays sean estrictamente crecientes. Los subarrays deben estar separados por exactamente `k` posiciones, lo que significa que no se superponen pero están uno al lado del otro.

**Input:**

- `nums`: Array de números enteros
- `k`: Longitud de cada subarray

**Output:**

- `true` si existen al menos dos subarrays adyacentes crecientes
- `false` en caso contrario

**Condición clave:** Los subarrays deben ser adyacentes, lo que significa que si el primer subarray termina en la posición `i+k-1`, el segundo debe comenzar en la posición `i+k`.

### Conceptos Clave

**Subarray Estrictamente Creciente:** Una secuencia de `k` elementos donde cada elemento es mayor que el anterior. Por ejemplo:

- `[1, 2, 3]` es estrictamente creciente
- `[1, 3, 2]` NO es estrictamente creciente (3 > 2 en la transición)
- `[1, 1, 2]` NO es estrictamente creciente (1 no es mayor que 1)

**Subarrays Adyacentes:** Dos subarrays que no se superponen pero están separados por exactamente `k` posiciones. Si el primer subarray va de `i` a `i+k-1`, el segundo debe ir de `i+k` a `i+2k-1`.

### Casos de Ejemplo

**Ejemplo 1:** `nums = [2,5,7,8,9,2,3,4,3,1], k = 3`

- Posibles pares de subarrays adyacentes:
  - `[2,5,7]` y `[8,9,2]` → `[2,5,7]` es creciente, `[8,9,2]` NO es creciente
  - `[5,7,8]` y `[9,2,3]` → `[5,7,8]` es creciente, `[9,2,3]` NO es creciente
  - `[7,8,9]` y `[2,3,4]` → Ambos son crecientes → **TRUE**

**Ejemplo 2:** `nums = [1,2,3,4,4,4,4,5,6,7], k = 5`

- Solo hay espacio para un par: `[1,2,3,4,4]` y `[4,4,5,6,7]`
- `[1,2,3,4,4]` NO es creciente (4 no es > 4)
- `[4,4,5,6,7]` NO es creciente (4 no es > 4)
- No hay otros pares posibles → **FALSE**

## Restricciones

- `2 <= nums.length <= 100`: Array pequeño, algoritmos O(n²) son aceptables
- `1 < 2 * k <= nums.length`: Garantiza que quepan al menos dos subarrays adyacentes
- `-1000 <= nums[i] <= 1000`: Valores razonables, no hay problemas de overflow

## Estrategias de Solución

### Enfoque Principal

**Verificación por Fuerza Bruta:**

1. **Iterar por posiciones iniciales**: Para cada índice `i` donde quepan dos subarrays adyacentes (`i <= nums.length - 2*k`)
2. **Verificar primer subarray**: Comprobar si `nums[i..i+k-1]` es estrictamente creciente
3. **Verificar segundo subarray**: Comprobar si `nums[i+k..i+2k-1]` es estrictamente creciente
4. **Retornar true**: Si encontramos algún par que cumpla ambas condiciones

**Implementación:**

- Para verificar si un subarray es creciente: iterar de `i` a `i+k-2` y verificar `nums[j] < nums[j+1]`

### Optimizaciones Posibles

Optimización 1: Verificación temprana

- Si el primer subarray no es creciente, saltar directamente al siguiente par
- Evita verificar el segundo subarray innecesariamente

Optimización 2: Preprocesamiento (Implementada)

- Calcular previamente cuáles subarrays de longitud k son crecientes
- Almacenar resultados en un array booleano
- Luego verificar pares adyacentes en tiempo O(n)
- Ventaja: separa lógica de verificación de adyacencia

Optimización 3: Sliding Window

- Mantener un contador de elementos consecutivos crecientes
- Pero la condición de "pares adyacentes" hace que la verificación directa sea más clara

## Casos Especiales

Caso 1: Array muy pequeño

- Con `nums.length = 2` y `k = 1`, solo hay espacio para un par mínimo
- La restricción `1 < 2*k <= nums.length` garantiza que siempre hay al menos un par posible

Caso 2: Valores iguales consecutivos

- Si hay `nums[i] === nums[i+1]`, ningún subarray que incluya esta posición puede ser creciente
- Ejemplo: `[1, 1, 2, 3]` con `k = 2` → `[1, 1]` nunca será creciente

Caso 3: Valores negativos

- Los valores negativos no afectan la lógica de comparación
- Ejemplo: `[-3, -2, -1, 0]` con `k = 2` → Todos los pares son crecientes

Caso 4: Subarrays al final del array

- Los subarrays pueden estar al final: `[1, 2, 3, 4, 5, 6]` con `k = 2`
- El último par posible es `[4, 5]` y `[5, 6]` (índices 3-4 y 5-6)

## Complejidad Esperada

## Complejidad y Trade-offs

**Análisis de ambas versiones:**

Tiempo: O(n × k) para ambas versiones

- Para cada posición inicial `i` (hasta `n - 2k`)
- Verificamos `k-1` comparaciones en cada subarray
- Total: `O((n - 2k + 1) × 2 × (k-1)) = O(n × k)`

**Espacio:**

- **Versión inicial**: O(1) - solo variables booleanas y contadores
- **Versión optimizada**: O(n) - array booleano de tamaño `n-k+1`

**Trade-offs:**

- **Versión inicial**: Menor uso de memoria, lógica más directa
- **Versión optimizada**: Mayor uso de memoria, mejor separación de responsabilidades

**¿Por qué ambas son aceptables?**

- `n ≤ 100`, `k ≤ 50` → Máximo 100 × 50 = 5,000 operaciones
- Muy eficiente para las restricciones dadas
- La optimización mejora la mantenibilidad, no el rendimiento (ya que n es pequeño)

## Implementación

### Versión Inicial (Fuerza Bruta)

La primera implementación verificaba cada par de subarrays adyacentes de manera directa:

```typescript
export function hasIncreasingSubarrays(nums: number[], k: number): boolean {
  for (let i = 0; i <= nums.length - 2 * k; i++) {
    let firstIncreasing = true;
    let secondIncreasing = true;

    // Verificar primer subarray
    for (let j = i; j < i + k - 1; j++) {
      if (nums[j] >= nums[j + 1]) {
        firstIncreasing = false;
        break;
      }
    }

    // Verificar segundo subarray
    for (let j = i + k; j < i + 2 * k - 1; j++) {
      if (nums[j] >= nums[j + 1]) {
        secondIncreasing = false;
        break;
      }
    }

    if (firstIncreasing && secondIncreasing) {
      return true;
    }
  }

  return false;
}
```

**Características de la versión inicial:**

- **Espacio**: O(1) - solo variables booleanas
- **Ventaja**: Simple y directa
- **Desventaja**: Revérifica subarrays múltiples veces

### Versión Optimizada (Preprocesamiento)

Después de analizar el código, implementamos una optimización que precomputa cuáles subarrays son crecientes:

```typescript
export function hasIncreasingSubarrays(nums: number[], k: number): boolean {
  // Precomputar cuáles subarrays de longitud k son crecientes
  const increasingSubarrays = new Array(nums.length - k + 1).fill(false);

  for (let i = 0; i <= nums.length - k; i++) {
    let isIncreasing = true;
    for (let j = i; j < i + k - 1; j++) {
      if (nums[j] >= nums[j + 1]) {
        isIncreasing = false;
        break;
      }
    }
    increasingSubarrays[i] = isIncreasing;
  }

  // Verificar pares adyacentes
  for (let i = 0; i <= nums.length - 2 * k; i++) {
    if (increasingSubarrays[i] && increasingSubarrays[i + k]) {
      return true;
    }
  }

  return false;
}
```

**Proceso de optimización:**

1. **Identificación del problema**: La versión inicial re-verificaba los mismos subarrays múltiples veces
2. **Solución propuesta**: Precomputar una vez todos los subarrays crecientes
3. **Implementación**: Crear array booleano con resultados precalculados
4. **Verificación**: Los tests pasan con la nueva implementación

**Comparación de versiones:**

| Aspecto            | Versión Inicial               | Versión Optimizada                             |
|

------------ | ----------------------------- | ---------------------------------------------- |
| **Espacio**        | O(1)                          | O(n)                                           |
| **Claridad**       | Menos clara (lógica mezclada) | Más clara (separación de responsabilidades)    |
| **Mantenibilidad** | Más difícil de modificar      | Más fácil de extender                          |
| **Reutilización**  | Limitada                      | El array `increasingSubarrays` es reutilizable |

**¿Por qué la optimización?**

- **Mejor diseño**: Separa la lógica de verificación de subarrays de la lógica de adyacencia
- **Más mantenible**: Si necesitamos modificar cómo verificar subarrays crecientes, solo cambiamos una parte
- **Potencialmente más eficiente**: Aunque la complejidad es la misma O(n×k), en práctica puede ser más rápido
- **Mejor para testing**: Podemos testear la verificación de subarrays por separado

## Lecciones Aprendidas

1. Comprensión precisa del problema

- "Adyacentes" significa separados por exactamente `k` posiciones, no consecutivos
- Importante distinguir entre subarrays consecutivos vs adyacentes

1. Verificación de restricciones

- La restricción `1 < 2*k <= nums.length` garantiza que siempre hay al menos un par posible
- Siempre verificar las restricciones antes de implementar

1. Eficiencia vs claridad

- Para `n ≤ 100`, O(n×k) es perfectamente aceptable
- Priorizar código legible sobre micro-optimizaciones

1. Casos edge importantes

- Arrays con valores repetidos
- Subarrays al inicio vs final del array
- Valores negativos (no afectan la lógica)

1. Patrón de verificación de subarrays

- Función auxiliar `isIncreasing` es reusable
- Patrón común en problemas de arrays: verificar propiedades en rangos

1. Testing exhaustivo

- Probar con arrays pequeños primero
- Incluir casos con valores iguales, negativos, y posiciones límite
- Verificar que todos los pares posibles sean considerados

1. Proceso de optimización

- **Identificar ineficiencias**: Reconocer cuando el código re-verifica los mismos cálculos
- **Precomputación**: Cuando n es pequeño, precomputar puede mejorar claridad aunque no rendimiento
- **Separación de responsabilidades**: Dividir el problema en fases más pequeñas y manejables
- **Trade-offs**: Considerar claridad vs eficiencia, mantenibilidad vs optimización