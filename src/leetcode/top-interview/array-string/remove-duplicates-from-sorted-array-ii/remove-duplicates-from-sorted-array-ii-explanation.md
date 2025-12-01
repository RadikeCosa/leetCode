---
name: remove-duplicates-from-sorted-array-ii
difficulty: medium
category: top-interview-array-string
topics: [Array, Two Pointers, In-place]
source: leetcode
series: top-interview
createdAt: 2025-09-16
---

# Remove Duplicates from Sorted Array II

Dado un array de enteros `nums` ordenado en orden no decreciente, remover algunos duplicados **in-place** de tal manera que cada elemento único aparezca como máximo dos veces. El orden relativo de los elementos debe mantenerse igual.
Desde el momento que es imposible cambiar el tamaño del array en algunos lenguajes, la función debe devolver la nueva longitud del array después de los cambios. De modo mas formal, se debe hacer que los primeros `k` elementos de `nums` contengan los elementos deseados. No importa lo que se deje más allá de la nueva longitud.
Devuelve `k` después de modificar el array `nums` de acuerdo a lo descrito anteriormente.
No uses espacio extra para otro array. Debes hacer los cambios **in-place** con O(1) espacio adicional.

## Ejemplos

### Ejemplo 1:

- **Input**: `nums = [1,1,1,2,2,3]`
- **Output**: `k = 5, nums = [1,1,2,2,3,_]`
- **Explicación**: Los primeros 5 elementos son `[1,1,2,2,3]` con máximo 2 de cada número

### Ejemplo 2:

- **Input**: `nums = [0,0,1,1,1,1,2,3,3]`
- **Output**: `k = 7, nums = [0,0,1,1,2,3,3,_,_]`
- **Explicación**: De 4 unos consecutivos, solo 2 permanecen

## Análisis

Este problema se resuelve eficientemente usando la técnica de **Two Pointers**:

1. **Puntero de lectura** (`i`): Recorre todo el array secuencialmente
2. **Puntero de escritura** (`writeIndex`): Marca dónde escribir el siguiente elemento válido
3. **Contador** (`count`): Rastrea cuántas veces hemos visto el elemento actual

**Insight clave**: Como el array está ordenado, los duplicados son consecutivos, lo que simplifica la detección.

## Enfoque detallado

### Algoritmo paso a paso:

```typescript
for (let i = 0; i < nums.length; i++) {
  if (i === 0 || nums[i] !== nums[i - 1]) {
    // Nuevo elemento único
    count = 1;
    nums[writeIndex] = nums[i];
    writeIndex++;
  } else if (count < 2) {
    // Duplicado permitido (primera repetición)
    count++;
    nums[writeIndex] = nums[i];
    writeIndex++;
  }
  // Si count >= 2, solo avanzamos i sin escribir
}
```

### Estados del algoritmo:

1. **Elemento nuevo**: `nums[i] !== nums[i-1]` → resetear count, escribir elemento
2. **Primer duplicado**: `count = 1` → incrementar count, escribir elemento
3. **Duplicado excesivo**: `count >= 2` → solo avanzar, no escribir

### Modificación in-place:

- Los elementos válidos se escriben en las primeras `k` posiciones
- No importa qué queda después de la posición `k`
- El array se reorganiza eficientemente sin espacio extra

## Casos extremos

- **Array de 1 elemento**: `[5]` → `k=1, [5]` (sin duplicados)
- **Exactamente 2 iguales**: `[1,1]` → `k=2, [1,1]` (límite perfecto)
- **Todos iguales**: `[3,3,3,3,3]` → `k=2, [3,3]` (caso extremo)
- **Sin duplicados**: `[1,2,3,4,5]` → `k=5, [1,2,3,4,5]` (sin cambios)
- **Array vacío**: `[]` → `k=0, []` (caso límite)
- **Números negativos**: `[-1,-1,0,1,1]` → funciona igual

## Complejidad

- **Time complexity**: O(n) - un solo recorrido del array con operaciones constantes
- **Space complexity**: O(1) - solo variables auxiliares (count, writeIndex)

## Solución Alternativa: Enfoque nums[w-2]

Existe una **solución más concisa** que elimina la necesidad del contador explícito:

```typescript
function removeDuplicates(nums: number[]): number {
  let w = 0;
  for (let num of nums) {
    if (w < 2 || nums[w - 2] !== num) {
      nums[w++] = num;
    }
  }
  return w;
}
```

### ¿Por qué funciona nums[w-2]?

**Insight clave**: Para permitir máximo **2** duplicados, comparamos con el elemento **2 posiciones atrás**:

- **Si `w < 2`**: Siempre escribimos (primeros 2 elementos)
- **Si `w >= 2`**: Solo escribimos si `num` es diferente a `nums[w-2]`

### Explicación del Post-incremento (`w++`):

Una confusión común es entender qué hace `nums[w++] = num`:

**❌ NO significa**: "Incrementar el elemento del array en posición w"
**✅ SÍ significa**: "Usar w como índice, luego incrementar la variable w"

```typescript
// Operación: nums[w++] = num
// Paso 1: Evaluar w++
//   - Valor actual de w (ej: 0)
//   - Usar 0 como índice para acceder al array
//   - Incrementar la variable w: w = 1
// Paso 2: Asignar
//   - nums[0] = num

// Resultado:
// - nums[0] tiene el nuevo valor
// - w ahora vale 1 (apunta a la próxima posición libre)
```

**Equivalente explícito**:

```typescript
// Estas dos versiones son idénticas:

// Versión compacta:
nums[w++] = num;

// Versión explícita:
let temp_index = w; // Guardar índice actual
w = w + 1; // Incrementar variable w
nums[temp_index] = num; // Asignar en índice anterior
```

**Clave**: `w++` es una **expresión** que evalúa al valor actual de `w` y como **efecto secundario** incrementa la variable `w`. Los corchetes `[]` solo usan el valor evaluado como índice.

### Razonamiento matemático:

Si queremos máximo **k** duplicados, comparamos con `nums[w-k]`:

- Para k=1: `nums[w-1] !== num` (sin duplicados)
- Para k=2: `nums[w-2] !== num` (máximo 2 duplicados)
- Para k=3: `nums[w-3] !== num` (máximo 3 duplicados)

### Simulación con [1,1,1,2,2,3]:

| Iteración | `num` | `w` | `nums[w-2]`   | Condición    | Acción               | Array resultante |
| --------- | ----- | --- | ------------- | ------------ | -------------------- | ---------------- |
| 1         | 1     | 0   | -             | `w < 2` ✅   | `nums[0] = 1, w = 1` | `[1,1,1,2,2,3]`  |
| 2         | 1     | 1   | -             | `w < 2` ✅   | `nums[1] = 1, w = 2` | `[1,1,1,2,2,3]`  |
| 3         | 1     | 2   | `nums[0] = 1` | `1 !== 1` ❌ | No escribe           | `[1,1,1,2,2,3]`  |
| 4         | 2     | 2   | `nums[0] = 1` | `1 !== 2` ✅ | `nums[2] = 2, w = 3` | `[1,1,2,2,2,3]`  |
| 5         | 2     | 3   | `nums[1] = 1` | `1 !== 2` ✅ | `nums[3] = 2, w = 4` | `[1,1,2,2,2,3]`  |
| 6         | 3     | 4   | `nums[2] = 2` | `2 !== 3` ✅ | `nums[4] = 3, w = 5` | `[1,1,2,2,3,3]`  |

**Resultado**: `w = 5`, array: `[1,1,2,2,3]` ✅

### Comparación de enfoques:

| Aspecto                  | Enfoque con contador      | Enfoque nums[w-2]         |
| ------------------------ | ------------------------- | ------------------------- |
| **Líneas de código**     | ~10 líneas                | 3 líneas                  |
| **Variables auxiliares** | count, writeIndex         | solo w                    |
| **Legibilidad**          | Muy clara                 | Requiere entender w-2     |
| **Generalización**       | Manual para k duplicados  | Automática: nums[w-k]     |
| **Complejidad**          | O(n) tiempo, O(1) espacio | O(n) tiempo, O(1) espacio |

**Para aprendizaje**: El enfoque con contador es más didáctico
**Para código de producción**: El enfoque nums[w-2] es más elegante

## Conclusión

El patrón **Two Pointers** es ideal para problemas de modificación in-place en arrays ordenados. La técnica de "puntero de escritura" permite reorganizar elementos eficientemente sin espacio adicional.

**Lecciones aprendidas**:

- Aprovechar que el array está ordenado para simplificar la lógica
- Two pointers para separar lectura y escritura in-place
- Contador para rastrear estado entre elementos consecutivos
- **nums[w-k] pattern**: Patrón generalizable para límites de duplicados
- Complejidad óptima O(n) tiempo, O(1) espacio
