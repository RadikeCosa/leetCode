---
title: "remove-duplicates-from-sorted-array"
difficulty: "easy"
topics:
  - Array
  - Two Pointers
  - In-place
source: "leetcode"
series: "top-interview"
category: "top-interview-array-string"
createdAt: "2025-12-01"
---

# Remove Duplicates from Sorted Array - Análisis del Problema

## Descripción del Problema

**LeetCode Problem 26: Remove Duplicates from Sorted Array**

- **Dificultad**: Easy
- **Temas**: Array, Two Pointers

### Enunciado

Dado un array de enteros `nums` ordenado en orden no decreciente, elimina los duplicados **in-place** de tal manera que cada elemento único aparezca solo una vez. El orden relativo de los elementos debe mantenerse igual. Luego retorna el número de elementos únicos en `nums`.

### Restricciones

- `1 <= nums.length <= 3 * 10^4`
- `-100 <= nums[i] <= 100`
- `nums` está ordenado en orden no decreciente

### Ejemplos

**Ejemplo 1:**

```
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explicación: Tu función debe retornar k = 2, con los primeros dos elementos de nums siendo 1 y 2 respectivamente.
No importa lo que dejes después del k retornado.
```

**Ejemplo 2:**

```
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explicación: Tu función debe retornar k = 5, con los primeros cinco elementos de nums siendo 0, 1, 2, 3, y 4 respectivamente.
```

## Análisis y Enfoque

### Observaciones Clave

1. **Array ordenado**: Los elementos duplicados están agrupados consecutivamente
2. **Modificación in-place**: No podemos crear un nuevo array, debemos modificar el original
3. **Solo importan los primeros k elementos**: El resto del array puede contener cualquier valor
4. **Orden relativo**: Los elementos únicos deben mantener su orden original

### Estrategia de Solución

**Técnica Two Pointers:**

- **Puntero `read`**: Recorre todo el array buscando elementos únicos
- **Puntero `write`**: Marca la posición donde escribir el siguiente elemento único

**Algoritmo:**

1. Manejar edge case: si el array tiene ≤1 elementos, retornar su longitud
2. Inicializar `write = 1` (el primer elemento siempre es único)
3. Recorrer desde `read = 1` hasta el final
4. Si `nums[read] ≠ nums[read-1]`, encontramos un nuevo elemento único:
   - Copiarlo a `nums[write]`
   - Incrementar `write`
5. Retornar `write` (cantidad de elementos únicos)

### Casos Edge

- **Array de un elemento**: `[1]` → retorna `1`
- **Todos elementos iguales**: `[1,1,1,1]` → retorna `1`
- **Sin duplicados**: `[1,2,3,4]` → retorna `4`
- **Dos elementos iguales**: `[1,1]` → retorna `1`
- **Dos elementos diferentes**: `[1,2]` → retorna `2`

### Complejidad

- **Tiempo**: O(n) - una sola pasada por el array
- **Espacio**: O(1) - solo variables adicionales, modificación in-place

## Implementación

### Paso a Paso

```typescript
export function removeDuplicates(nums: number[]): number {
  // Edge case: arrays con 0 o 1 elementos
  if (nums.length <= 1) return nums.length;

  // Puntero para escribir el siguiente elemento único
  let write = 1;

  // Recorrer desde la segunda posición
  for (let read = 1; read < nums.length; read++) {
    // Si encontramos un elemento diferente al anterior
    if (nums[read] !== nums[read - 1]) {
      nums[write] = nums[read]; // Escribir elemento único
      write++; // Avanzar posición de escritura
    }
  }

  return write; // Cantidad de elementos únicos
}
```

**Trace del Ejemplo 1: `[1,1,2]`**

```
Inicial: [1,1,2], write=1
read=1: nums[1]=1 === nums[0]=1 → no escribir
read=2: nums[2]=2 !== nums[1]=1 → escribir en write=1
        [1,2,2], write=2
Resultado: k=2, primeros 2 elementos = [1,2] ✓
```

**Trace del Ejemplo 2: `[0,0,1,1,1,2,2,3,3,4]`**

```
Inicial: [0,0,1,1,1,2,2,3,3,4], write=1
read=1: 0===0 → no escribir
read=2: 1!==0 → escribir en write=1 → [0,1,1,1,1,2,2,3,3,4], write=2
read=3: 1===1 → no escribir
read=4: 1===1 → no escribir
read=5: 2!==1 → escribir en write=2 → [0,1,2,1,1,2,2,3,3,4], write=3
read=6: 2===2 → no escribir
read=7: 3!==2 → escribir en write=3 → [0,1,2,3,1,2,2,3,3,4], write=4
read=8: 3===3 → no escribir
read=9: 4!==3 → escribir en write=4 → [0,1,2,3,4,2,2,3,3,4], write=5
Resultado: k=5, primeros 5 elementos = [0,1,2,3,4] ✓
```

## Reflexiones y Aprendizajes

### Conceptos Aplicados

1. **Two Pointers Pattern**: Técnica fundamental para problemas de arrays
2. **In-place Modification**: Optimización de espacio modificando la estructura original
3. **Aprovechamiento de propiedades**: El array ordenado simplifica la detección de duplicados
4. **Edge Case Handling**: Consideración de casos límite para robustez

### Patrones Algorítmicos

- **Two Pointers**: Uno para lectura, otro para escritura
- **Single Pass**: Algoritmo eficiente que requiere solo una iteración
- **Invariant Maintenance**: Los primeros `write` elementos siempre contienen valores únicos
- **Comparación con elemento anterior**: Aprovecha el ordenamiento para detectar cambios