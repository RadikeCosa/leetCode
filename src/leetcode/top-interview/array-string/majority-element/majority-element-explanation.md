---
title: "majority-element"
difficulty: "easy"
topics:

- Array
- Hash Map
- Boyer-Moore
  source: "leetcode"
  series: "top-interview"
  category: "top-interview-array-string"
  createdAt: "2025-11-18"
---

# Majority Element - Análisis y Explicación

## Enunciado del Problema

Dado un array de enteros `nums`, de tamaño `n`, encuentra el elemento mayoritario
El elemento mayoritario es el elemento que aparece más de `⌊ n/2 ⌋` veces. Puedes asumir que siempre existe un elemento mayoritario en el array.

Desafio: Podes resolverlo en tiempo lineal y o(1) en espacio?

## Análisis Inicial

### Comprensión del Problema

El problema requiere identificar el numero que aparece mas de n/2 veces en el array dado.

### Casos de Prueba Identificados

| Caso de Prueba | Entrada | Salida Esperada | Descripción |
|

-------- | --------------- | --------------- | --------------------------------------- |
| Caso 1 | [3,2,3] | 3 | Elemento mayoritario es 3 |
| Caso 2 | [2,2,1,1,1,2,2] | 2 | Elemento mayoritario es 2 |
| Caso 3 | [1] | 1 | Un solo elemento, que es el mayoritario |
| Caso 4 | [1,1,2,2,2] | 2 | Elemento mayoritario es 2 |

## Desarrollo de la Solución

Mi primer intuicion es la de usar un hashmap para contar las ocurrencias de cada numero en el array, luego podemos comparar al mas frecuente con n/2 para determinar si es el mayoritario.

### Enfoque Elegido

- Usar un hashmap para contar las ocurrencias de cada numero.
- Iterar sobre el hashmap para encontrar el numero con ocurrencias mayores a n/2.
- Retornar ese numero como el elemento mayoritario.

### Implementación Paso a Paso

```javascript
function majorityElement(nums: number[]): number {
  const hashMap: Record<number, number> = {};
  const n = nums.length;
  for (const num of nums) {
    hashMap[num] = (hashMap[num] || 0) + 1;
    if (hashMap[num] > Math.floor(n / 2)) {
      return num;
    }
  }
  return -1;
}
```

## Análisis de Complejidad

### Complejidad Temporal

El algoritmo recorre el array una vez (for sobre nums), así que es O(n), donde n es el tamaño del array.

### Complejidad Espacial

El algoritmo utiliza un hashmap para almacenar las ocurrencias de cada número. En el peor caso, cuando todos los números son diferentes, el hashmap tendrá n entradas, por lo que la complejidad espacial es O(n) por lo que no es lo suficientemente eficiente para cumplir el desafio extra

### Solucion Eficiente: Algoritmo de Boyer-Moore

El algoritmo de Boyer-Moore Majority Vote es una tecnica que permite encontrar el elemetno mayoritario en o(n) tiempo y o(1) en espacio, sin usar estructuras adicionales

¿como funciona? Idea principal:
Imagina que tienes un "contador" y un "candidato".
Vas recorriendo el array:

Si el contador está en cero, eliges el número actual como candidato.
Si el número actual es igual al candidato, aumentas el contador.
Si es diferente, disminuyes el contador.
Por qué funciona:
El elemento mayoritario aparece más de n/2 veces, así que nunca puede ser eliminado por los otros elementos.

### Ejemplo paso a paso

Supongamos: nums = [2,2,1,1,1,2,2]

Inicialmente: candidate = None, count = 0
2 → count=0, candidate=2, count=1
2 → candidate=2, count=2
1 → candidate=2, count=1
1 → candidate=2, count=0
1 → count=0, candidate=1, count=1
2 → candidate=1, count=0
2 → count=0, candidate=2, count=1
Al final, el candidato es 2, que es el mayoritario.

```text
Inicializar candidate = null
Inicializar count = 0

Para cada num en nums:
    Si count == 0:
        candidate = num
        count = 1
    Sino si num == candidate:
        count += 1
    Sino:
        count -= 1

Retornar candidate
```

## Casos Edge y Consideraciones

- Array de un solo elemento [1]
- Todos elementos iguales [5,5,5,5,5]
- Mayoria al final [1,2,3,3,3,3]
- Mayoría al principio del array [4,4,4,2,3]
- Array con Ceros [0,0,1,0]

## Reflexiones y Aprendizajes

### Conceptos Aplicados

En este problema se aplicaron conceptos fundamentales de algoritmos y estructuras de datos. Inicialmente, se utilizó un hashmap para contar ocurrencias, lo que permitió identificar el elemento mayoritario mediante conteo de frecuencias. Posteriormente, se exploró el algoritmo de Boyer-Moore Majority Vote, que es un patrón eficiente para encontrar el elemento mayoritario en una secuencia, aprovechando la idea de mantener un candidato y un contador para reducir la complejidad espacial a O(1). Este enfoque demuestra la importancia de reconocer patrones algorítmicos y seleccionar la técnica adecuada según los requisitos de eficiencia del problema.

## Recursos y Referencias

- [Boyer-Moore Majority Vote Algorithm (GeeksforGeeks)](https://www.geeksforgeeks.org/dsa/boyer-moore-algorithm-for-pattern-searching/)
