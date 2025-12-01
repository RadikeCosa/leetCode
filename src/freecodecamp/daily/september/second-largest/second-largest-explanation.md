---
title: "second-largest"
difficulty: "easy"
topics:
  - Array
  - Sorting
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-10-24"
---

# Análisis del Problema: 2nd Largest

## Enunciado

Dado un array, retornar el segundo número más grande distinto.

## Análisis

Este problema requiere encontrar el segundo elemento más grande en un array, considerando que debe ser un valor único (distinct). Los pasos principales son:

1. **Eliminar duplicados**: Dado que necesitamos valores distintos, debemos filtrar elementos repetidos
2. **Ordenar el array**: Para encontrar el segundo más grande, necesitamos ordenar los elementos
3. **Seleccionar el penúltimo**: Una vez ordenado de mayor a menor, el segundo elemento será el segundo más grande
4. **Manejar casos especiales**:
   - Arrays con menos de 2 elementos únicos
   - Arrays con números negativos
   - Arrays con números decimales

Casos especiales a considerar:

- Si hay menos de 2 números únicos, ¿qué retornar? (asumiendo que siempre hay al menos 2)
- Los números pueden ser negativos o decimales
- Los duplicados deben ignorarse completamente

## Solución

La solución implementada utiliza `Set` para eliminar duplicados y `sort()` para ordenar, siguiendo una lógica clara y eficiente:

### Paso 1: Eliminar duplicados con Set

```javascript
const uniqueNumbers = [...new Set(arr)];
```

- `new Set(arr)` crea un conjunto que automáticamente elimina elementos repetidos
- `[...new Set(arr)]` usa el spread operator para convertir el Set de vuelta a un array
- Esto garantiza que trabajemos solo con valores únicos

### Paso 2: Ordenar de mayor a menor

```javascript
uniqueNumbers.sort((a, b) => b - a);
```

- `sort()` ordena el array usando una función comparadora
- `(a, b) => b - a` ordena de mayor a menor (descendente)
- Para orden ascendente sería `(a, b) => a - b`

### Paso 3: Retornar el segundo elemento

```javascript
return uniqueNumbers[1];
```

- Después de ordenar, `uniqueNumbers[0]` es el más grande
- `uniqueNumbers[1]` es el segundo más grande
- Los índices en arrays empiezan desde 0

### Enfoque alternativo más eficiente para arrays grandes

Para arrays muy grandes, podemos evitar el `sort()` (O(n log n)) y usar un solo recorrido O(n):

```javascript
function secondLargestEfficient(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  return secondLargest;
}
```

**Ventajas del enfoque alternativo:**

- **Tiempo**: O(n) - un solo recorrido del array
- **Espacio**: O(1) - usa solo dos variables
- **Eficiencia**: Mucho mejor para arrays grandes

**¿Por qué funciona?**

- Mantiene dos variables: `largest` y `secondLargest`
- Al encontrar un número mayor que `largest`, actualiza ambos
- Al encontrar un número entre `secondLargest` y `largest`, actualiza solo `secondLargest`
- Ignora duplicados automáticamente (condición `num !== largest`)

## Complejidad

- **Tiempo**: O(n log n) debido al `sort()` (la creación del Set es O(n))
- **Espacio**: O(n) para almacenar el Set y el array ordenado

_Nota: El enfoque alternativo tiene O(n) tiempo y O(1) espacio_

## Aprendizajes

- **Uso de Set para eliminar duplicados**: `new Set(arr)` crea automáticamente un conjunto único
- **Spread operator con Set**: `[...new Set(arr)]` para convertir Set a array
- **Ordenamiento personalizado**: `sort((a, b) => b - a)` para orden descendente
- **Acceso por índice**: `array[1]` para el segundo elemento (índice 0 es el primero)
- **Manejo de números únicos**: Importancia de eliminar duplicados antes de buscar el segundo más grande
- **Optimización para arrays grandes**: Enfoque O(n) vs O(n log n) para mejor rendimiento