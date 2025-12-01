---
name: rotate-array
difficulty: medium
category: top-interview-array-string
topics: [Array, Rotation, In-place, Reverse]
source: leetcode
series: top-interview
createdAt: 2025-11-25
---

# Rotate Array - Análisis y Explicación

## Enunciado del Problema

Dado un array de enteros nums, rota el array hacia la derecha por k pasos, donde k es un número no negativo.

**Desafio adicional:**
Intenta idear tantas soluciones como puedas. Hay al menos tres formas diferentes de resolver este problema. ¿Podrías hacerlo in-place con O(1) espacio extra?

### Pistas de LeetCode

- **Pista 1** La solucion mas simple utiliza espacio adicional y esta perfecto
- **Pista 2** el "chiste" es hacerlo in-place con O(1) espacio extra. Esto es significa que tenes que usar el array original de algun modo para mover los elementos alrededor. Ahora podemos ubicar cada elemento en su ubicacion original y desplazar todos los elementos alrededor para ajustarlos pero eso seria muy costoso y probablemente se agote el tiempo en arrays de entrada mas grandes.
- **Pista 3** Una forma de pensar se basa en invertir el array (o partes de el) para obtener el resultado deseado. Piensa en como la inversion podria ayudarnos usando un ejemplo.
- **Pista 4** La otra forma de pensar es un poco mas complicada pero esencialmente se basa en la idea de colocar cada elemento en su posicion original mientras se mantiene el seguimiento del elemento que estaba originalmente en esa posicion. Basicamente, en cada paso, colocamos un elemento en su posicion correcta y mantenemos el seguimiento del elemento que ya estaba ahi o el que esta siendo sobrescrito en una variable adicional. No podemos hacer esto en un solo pase lineal y la idea aqui se basa en dependencias ciclicas entre elementos.

## Análisis Inicial

### Constricciones

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105

### Comprensión del Problema

El problema requiere rotar los elementos de un array hacia la derecha un número específico de pasos. Esto implica que los elementos al final del array se moverán al principio, y los demás elementos se desplazarán hacia la derecha. La firma de la función es `rotate(nums: List[int], k: int) -> None`, donde `nums` es el array a rotar y `k` es el número de pasos a rotar, y la función debe modificar el array `nums` in-place sin devolver ningún valor, es decir una funcion void.

### Casos de Prueba Identificados

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

## Desarrollo de la Solución

El enunciado propone como follow up el encontrar al menos 3 soluciones diferentes, incluyendo una que utilice O(1) espacio extra.

### Normalizacion de k

en cualquiera de los soluciones es conveniente normalizar el valor de k usando el modulo con la longitud del array, ya que si el valor de k es mayor que la longitud del array, rotar el array k veces es equivalente a rotarlo k % length veces.
k = k % nums.length

## Primer Enfoque

### Implementación Paso a Paso

Primero normalizamos k para manejar casos donde k es mayor o igual a n (nums.length). Luego, usamos el método slice para dividir el array en dos partes: los últimos k elementos y los primeros n-k elementos. Finalmente, reasignamos el array original usando splice para combinar estas dos partes en el orden correcto.
Por que splice? Porque la funcion debe modificar el array in-place y splice nos permite modificar el array original sin crear uno nuevo.
que hace splice? splice modifica el array original eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar.
splice toma tres argumentos principales: el índice en el que comenzar a cambiar el array, la cantidad de elementos a eliminar, y los elementos a agregar en su lugar.
con slice obtenemos los elementos que necesitamos y con spread operator los expandimos para pasarlos como argumentos individuales a splice.

```typescript
function rotate(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n;

  // Si k === 0 después de la reducción, no rotamos
  if (k === 0) return;

  // Usamos slice + spread para reasignar el array in-place
  // Últimos k elementos + primeros n-k elementos
  nums.splice(0, n, ...nums.slice(-k), ...nums.slice(0, -k));
}
```

### Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal de esta solución es O(n), donde n es la longitud del array nums. Esto se debe a que las operaciones slice y splice recorren el array completo para crear las sublistas y luego reasignar los elementos.

### Complejidad Espacial

La complejidad espacial de esta solución es O(k), donde k es el número de pasos a rotar. Esto se debe a que las operaciones slice crean nuevas sublistas que ocupan espacio adicional proporcional a k.

## Segundo Enfoque

```typescript
function rotate(nums: number[], k: number): void {
  const n = nums.length; // n = 7
  k = k % n; // k = 3 (por si k fuera más grande que n)

  // 1. Creamos un array vacío del mismo tamaño
  const result: number[] = new Array(7); // [undefined, undefined, ...]

  // 2. Recorremos el array original con un for normal
  for (let i = 0; i < n; i++) {
    // ¿Dónde tiene que ir el número que está en la posición i?
    // Respuesta: k posiciones más a la derecha, pero si se pasa del final,
    // vuelve al principio → eso lo hace el módulo (%)
    const nuevaPosicion = (i + k) % n;

    // Ponemos el número directamente en su sitio final
    result[nuevaPosicion] = nums[i];
  }

  // 3. Al terminar el bucle, copiamos todo de vuelta al array original
  for (let i = 0; i < n; i++) {
    nums[i] = result[i];
  }
}
```

Vamos a ver qué pasa en cada vuelta del for
| Vuelta | i | i | número actual (nums[i]) | nuevaPosicion = (i + 3) % 7 | result después de esta vuelta |
|-----|-----|------------------------|-----------------------------|-----------------------------------------------|
| 1 | 0 | 1 | (0+3)%7 = 3 | [ , , , 1, , , ] |
| 2 | 1 | 2 | (1+3)%7 = 4 | [ , , , 1, 2, , ] |
| 3 | 2 | 3 | (2+3)%7 = 5 | [ , , , 1, 2, 3, ] |
| 4 | 3 | 4 | (3+3)%7 = 6 | [ , , , 1, 2, 3, 4] |
| 5 | 4 | 5 | (4+3)%7 = 0 | [5, , , 1, 2, 3, 4] ← ¡empieza a llenar delante! |
| 6 | 5 | 6 | (5+3)%7 = 1 | [5, 6, , 1, 2, 3, 4] |
| 7 | 6 | 7 | (6+3)%7 = 2 | [5, 6, 7, 1, 2, 3, 4] ← ¡terminado! |
¡Y ya está! El array result tiene exactamente lo que queríamos.
Después solo copiamos result encima de nums y el problema está resuelto.
¿Por qué funciona el truco del módulo (%)?
Porque cuando i + k se pasa del final, el % n hace que “vuelva al principio”, igual que en un reloj:

10 % 7 = 3
11 % 7 = 4
12 % 7 = 5
13 % 7 = 6
14 % 7 = 0 ← vuelve al inicio
15 % 7 = 1
etc.

1. Crea un array vacío del mismo tamaño.
2. Para cada posición i del array original, calcula dónde irá después de rotar: (i + k) % longitud.
   Pon el número directamente ahí.
3. Cuando termines, copia el array nuevo encima del original.

## Tercer Enfoque La técnica de los 3 reverses → O(1) espacio extra

### Ejemplo que usaremos siempre

```ts
nums = [1, 2, 3, 4, 5, 6, 7];
k = 3;
```

Queremos → `[5, 6, 7, 1, 2, 3, 4]`

### El Concepto

"Para rotar un array k posiciones a la derecha,  
si invierto todo el array,  
luego invierto los primeros k elementos,  
y por último invierto el resto…  
¡magia! queda perfectamente rotado"

### Paso a paso con dibujos (pizarra mode ON)

### Paso 0 – Estado inicial

```text
índices:  0  1  2  3  4  5  6
valores: [1, 2, 3, 4, 5, 6, 7]
```

### Paso 1 – Invertir TODO el array\*\*

````text
reverse(0, 6) → [7, 6, 5, 4, 3, 2, 1]
```text
Ahora queda:
```text
[7, 6, 5, 4, 3, 2, 1]
 ↑        ↑
 0       n-1
````

### Paso 2 – Invertir los primeros k elementos (k=3)\*\*

```text
reverse(0, 2) → invierto posiciones 0 a 2
[5, 6, 7, 4, 3, 2, 1]
```

¡Mira! Los últimos k elementos del array original (5,6,7) ya están al principio y en orden correcto!

### Paso 3 – Invertir el resto (desde k hasta el final)\*\*

```text
reverse(3, 6) → invierto posiciones 3 a 6
[5, 6, 7, 1, 2, 3, 4]   ← ¡EXACTAMENTE lo que queríamos!
```

### Diagrama completo (pizarra estilo entrevista)

```text
Original:      1   2   3   4   5   6   7
                  ├────── k = 3 ──────┤

Paso 1:        7   6   5   4   3   2   1    ← reverse todo

Paso 2:        5   6   7 │ 4   3   2   1    ← reverse primeros k

Paso 3:        5   6   7   1   2   3   4    ← reverse el resto
                                          ✓ ¡Rotado perfectamente!
```

### Código final en TypeScript

```ts
function rotate(nums: number[], k: number): void {
  const n = nums.length;
  if (n <= 1) return;

  k = k % n; // importantísimo si k > n
  if (k === 0) return;

  // Función auxiliar para invertir un rango
  const reverse = (start: number, end: number) => {
    while (start < end) {
      // swap sin variable temporal (ES6 destructuring)
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  };

  // Los 3 reverses mágicos
  reverse(0, n - 1); // 1. todo el array
  reverse(0, k - 1); // 2. primeros k
  reverse(k, n - 1); // 3. el resto
}
```

### ¿Por qué esto impresiona tanto a los entrevistadores?

| Ventaja                         | Qué dicen ellos en su cabeza                        |
| ------------------------------- | --------------------------------------------------- |
| Tiempo O(n), espacio O(1)       | "Sabe optimizar memoria, clave en sistemas grandes" |
| Solo 3 pasadas lineales         | "Muy eficiente, no hace cosas raras"                |
| Usa swap in-place               | "Entiende mutación y pointers básicamente"          |
| Elegante y matemático           | "Este candidato piensa bonito"                      |
| Fácil de explicar con dibujitos | "Comunicación 10/10"                                |

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Manipulación de arrays in-place: Aprendimos 3 maneras distintas de rotar un array, incluyendo una que no usa espacio extra.
- Entender por que no se resulta sin splice la primera solucion, ya que la funcion debe modificar el array in-place.
- Uso de operaciones matemáticas (módulo) para manejar índices circulares en arrays.
- Técnicas de inversión de arrays para lograr rotaciones eficientes.

## Recursos y Referencias

- [Reverse Method - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [Reverse Algorithm for Array Rotation](https://www.geeksforgeeks.org/dsa/program-for-array-rotation-continued-reversal-algorithm/)
- [Splice Method - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [Slice Method - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
