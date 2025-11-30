---
name: remove-duplicates-from-sorted-array
difficulty: easy
category: daily
topics: [Array, Two Pointers, In-place]
source: leetcode
series: daily
createdAt: 2025-11-29
---

# Remove Duplicates from Sorted Array

Dado un array de enteros ordenado en orden no decreciente, remover los duplicados in-place de forma que cada elemento único aparezca solo una vez. El orden relativo de los elementos debe mantenerse igual.

## Ejemplos

- Input: nums = [1,1,2]
- Output: 2, nums = [1,2,_]

- Input: nums = [0,0,1,1,1,2,2,3,3,4]
- Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

## Análisis

Este problema aprovecha el hecho de que el array está **ordenado**, lo cual significa que todos los elementos duplicados están agrupados consecutivamente. Esta característica es clave para resolverlo eficientemente.

La clave es entender que necesitamos:

1. **Modificar el array in-place** (sin usar memoria extra)
2. **Mover todos los elementos únicos al principio** del array
3. **Retornar la cantidad de elementos únicos** (k)

El patrón que emerge es el de **dos punteros**: uno para leer (`read`) y otro para escribir (`write`).

## Enfoque detallado

### Algoritmo de Dos Punteros

1. **Caso base**: Si el array tiene 0 o 1 elementos, no hay duplicados.

2. **Inicialización**:

   - `write = 1`: Posición donde escribir el próximo elemento único
   - `read = 1`: Posición desde donde leer (empezamos en índice 1)

3. **Bucle principal**:

   - Comparamos `nums[read]` con `nums[read-1]`
   - Si son **diferentes**: encontramos un nuevo elemento único
     - Lo copiamos a `nums[write]`
     - Incrementamos `write`
   - Si son **iguales**: lo ignoramos (es un duplicado)

4. **Resultado**: `write` contiene la cantidad de elementos únicos

### Ejemplo paso a paso: [0,0,1,1,1,2,2,3,3,4]

```
Inicial: [0,0,1,1,1,2,2,3,3,4]
         write=1, read=1

read=1: nums[1]=0, nums[0]=0 → iguales, seguimos
read=2: nums[2]=1, nums[1]=0 → diferentes → nums[1]=1, write=2
read=3: nums[3]=1, nums[2]=1 → iguales, seguimos
read=4: nums[4]=1, nums[3]=1 → iguales, seguimos
read=5: nums[5]=2, nums[4]=1 → diferentes → nums[2]=2, write=3
read=6: nums[6]=2, nums[5]=2 → iguales, seguimos
read=7: nums[7]=3, nums[6]=2 → diferentes → nums[3]=3, write=4
read=8: nums[8]=3, nums[7]=3 → iguales, seguimos
read=9: nums[9]=4, nums[8]=3 → diferentes → nums[4]=4, write=5

Final: [0,1,2,3,4,2,2,3,3,4], return 5
```

## Casos extremos

- **Array vacío**: `[]` → return 0
- **Un elemento**: `[1]` → return 1
- **Todos iguales**: `[1,1,1,1]` → return 1, array `[1,1,1,1]`
- **Sin duplicados**: `[1,2,3,4]` → return 4, array sin cambios
- **Números negativos**: Funciona igual por el ordenamiento

## Complejidad

- **Time complexity: O(n)** - Recorremos el array una sola vez
- **Space complexity: O(1)** - Solo usamos variables auxiliares (write, read)

## Conclusión

Este problema enseña la importancia de aprovechar las **propiedades del input** (array ordenado) para diseñar algoritmos eficientes. El patrón de **dos punteros** es fundamental en problemas de arrays y aparece frecuentemente en:

- Eliminación de duplicados
- Búsqueda de pares con suma objetivo
- Problemas de ventana deslizante
- Merge de arrays ordenados

**Lección clave**: Cuando el array está ordenado, los elementos duplicados siempre están agrupados, lo que permite procesarlos eficientemente con una sola pasada.
