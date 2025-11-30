---
name: two-sum
difficulty: easy
category: daily
topics: [Array, Hash Map, Two Sum]
source: leetcode
series: daily
createdAt: 2025-11-29
---

# Two Sum - Análisis y Explicación

## Descripción del Problema

Dado un array de enteros `nums` y un entero `target`, devuelve los índices de los dos números que sumen el `target`.

Puedes asumir que cada entrada tendrá exactamente una solución, y no puedes usar el mismo elemento dos veces.

Puedes devolver la respuesta en cualquier orden.

## Ejemplos

### Ejemplo 1:

- **Input:** `nums = [2,7,11,15], target = 9`
- **Output:** `[0,1]`
- **Explicación:** Porque `nums[0] + nums[1] == 9`, devolvemos `[0, 1]`.

### Ejemplo 2:

- **Input:** `nums = [3,2,4], target = 6`
- **Output:** `[1,2]`

### Ejemplo 3:

- **Input:** `nums = [3,3], target = 6`
- **Output:** `[0,1]`

## Restricciones

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Solo existe una respuesta válida.

## Enfoques de Solución

### Enfoque 1: Fuerza Bruta (O(n²))

**Idea:** Probar todas las combinaciones posibles de dos números.

**Algoritmo:**

```typescript
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      return [i, j];
    }
  }
}
```

**Complejidad:**

- Tiempo: O(n²) - doble bucle anidado
- Espacio: O(1) - no usa espacio extra

### Enfoque 2: Hash Map - Una Pasada (O(n)) ⭐

**Idea:** Mientras iteramos, verificamos si el complemento (target - num actual) ya existe en nuestro hash map.

**Algoritmo implementado:**

```typescript
export function twoSum(nums: number[], target: number): number[] {
  // Map para recordar: valor -> índice
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;

    // ¿Ya vi el número que necesito?
    if (seen.has(complement)) {
      // ¡Encontré la pareja! Regreso los índices
      return [seen.get(complement)!, i];
    }

    // Guardo el número actual para futuras referencias
    seen.set(currentNum, i);
  }

  return []; // Nunca debería llegar aquí según el problema
}
```

**Pasos del algoritmo:**

1. Crear un `Map<number, number>` llamado `seen` para almacenar valores y sus índices
2. Para cada elemento en el array:
   - Extraer el número actual: `currentNum = nums[i]`
   - Calcular el complemento: `complement = target - currentNum`
   - Si el complemento ya existe en `seen`, devolver `[seen.get(complement), i]`
   - Si no existe, agregar el número actual al map: `seen.set(currentNum, i)`
3. Continuar hasta encontrar la solución (garantizada por las restricciones)

**Ventajas:**

- Una sola pasada por el array
- Tiempo de búsqueda O(1) en hash map
- Solución elegante y eficiente
- Variables descriptivas (`seen`, `currentNum`, `complement`)
- Comentarios claros en español

## Casos Extremos a Considerar

1. **Array mínimo:** Solo 2 elementos
2. **Números negativos:** El target puede ser negativo
3. **Números duplicados:** Como `[3,3]` con target `6`
4. **Números grandes:** Dentro de los límites de las restricciones
5. **Target zero:** Números positivos y negativos que sumen 0

## Conceptos Clave

- **Hash Map/Tabla de Hash:** Estructura de datos que permite búsqueda O(1)
- **Complemento:** Si necesitamos `target`, y tenemos `x`, buscamos `target - x`
- **Trade-off tiempo vs espacio:** Cambiamos O(1) espacio por O(n) tiempo

## Preguntas de Reflexión

1. ¿Por qué el enfoque de hash map es más eficiente que la fuerza bruta?
2. ¿Qué pasa si hay múltiples soluciones válidas?
3. ¿Cómo cambiaría el algoritmo si necesitáramos encontrar todos los pares?
4. ¿Qué estructura de datos alternativa podrías usar?

## Variaciones del Problema

- **Two Sum II:** Array ordenado (se puede usar two pointers)
- **3Sum:** Encontrar tripletas que sumen target
- **4Sum:** Encontrar cuádruplas que sumen target
- **Two Sum con duplicados:** Múltiples respuestas válidas

## Notas de Implementación

- Cuidado con usar el mismo índice dos veces
- El hash map debe verificar existencia antes de agregar
- Considera el orden de los índices en la respuesta

## Proceso de Desarrollo en este Repositorio

### Enfoque TDD Aplicado

1. **Escribimos los tests primero** (`two-sum.test.ts`):

   - Casos de ejemplo del enunciado
   - Casos extremos: números negativos, array mínimo, números grandes
   - Total: 7 tests que cubren diferentes escenarios

2. **Implementamos la solución** (`two-sum.ts`):

   - Elegimos el enfoque con Hash Map (una pasada)
   - Variables descriptivas: `seen`, `currentNum`, `complement`
   - Comentarios en español para claridad
   - Manejo del caso imposible con `return []`

3. **Verificamos la solución**:
   ```bash
   npx vitest src/daily/two-sum/two-sum.test.ts
   ```
   - Resultado: ✅ Todos los tests pasaron

### Decisiones de Diseño

- **¿Por qué `Map` en lugar de objeto?** Mejor rendimiento y API más clara
- **¿Por qué `seen` como nombre?** Más descriptivo que `map` o `cache`
- **¿Por qué extraer `currentNum`?** Mejora la legibilidad del código
- **¿Por qué `get(complement)!`?** Sabemos que existe por el `has()` previo

### Comandos Útiles

```bash
# Ejecutar solo este test
npx vitest src/daily/two-sum/two-sum.test.ts

# Ejecutar todos los tests
npm run test

# Ejecutar tests en modo watch
npm run test:watch
```
