---
title: Permutation Count
source: freecodecamp
series: daily-challenge
category: daily
createdAt: 2025-12-04
difficulty: medium
topics:
  - strings
  - math
  - permutations
  - combinatorics
blogLink: https://blog-astro-rouge.vercel.app/posts/permutation-count/
---

## Permutation Count - Análisis y Explicación

## Enunciado del Problema

Dado un string, devuelve el número de permutaciones distintas que se pueden formar con sus caracteres.
Una Permutacion es cualquier variante en el orden de los caracteres del string.
No se deben contar permutaciones duplicadas.
Si el string contiene caracteres repetidos, las permutaciones repetidas solo deben contarse una vez.
El string contendrá solo letras (A-Z, a-z).
Por ejemplo, dado "abb", devuelve 3 porque hay tres formas únicas de ordenar las letras: "abb", "bab" y "bba".

### Breve Repaso Matemático

Antes de empezar, puede ser útil repasar algunos conceptos clave que te ayudarán a entender y disfrutar el desafío:

- **Permutaciones**: Dado un conjunto de letras, cada posible reordenamiento de los elementos es una permutación. Si hay $n$ elementos distintos, existen $n!$ (factorial de $n$) formas diferentes de ordenarlos. Por ejemplo, con 3 letras hay $3! = 6$ permutaciones posibles.
- **Permutaciones con repetición**: Si algunas letras se repiten, hay que ajustar el cálculo para no contar dos veces las mismas combinaciones. La fórmula que se usa es:
  $\displaystyle \text{Permutaciones únicas} = \frac{n!}{k_1! \cdot k_2! \cdot \ldots \cdot k_m!}$
  donde $n$ es el número total de letras y $k_i$ es cuántas veces se repite cada una.
- **Factorial ($n!$)**: Es simplemente multiplicar todos los números desde 1 hasta $n$. Por ejemplo, $4! = 4 \times 3 \times 2 \times 1 = 24$.
- **Conteo de frecuencias**: Saber cuántas veces aparece cada letra en el string te va a ayudar a aplicar la fórmula correctamente.

## Análisis Inicial

### Comprensión del Problema

El problema nos pide calcular el número de permutaciones únicas de un string, teniendo en cuenta que puede haber caracteres repetidos. Esto implica que debemos considerar tanto el total de caracteres como la frecuencia de cada uno para evitar contar permutaciones duplicadas. Tenemos que aplicar la formula de permutaciones con repetición para obtener el resultado correcto.

Para resolver este problema de manera eficiente y clara, es fundamental contar cuántas veces aparece cada letra en el string. Para eso, usamos un objeto `{}`, que nos permite registrar la frecuencia de cada carácter de forma rápida y sencilla. Así, podemos aplicar la fórmula de permutaciones con repetición y evitar contar combinaciones duplicadas.

### Casos de Prueba Identificados

1. **Caso Básico sin Repetición**:
   - Input: "abc"
   - Output Esperado: 6 (abc, acb, bac, bca, cab, cba)
   - Descripción: Tres caracteres únicos, todas las permutaciones son distintas.
   - Razonamiento: 3! = 6
2. **Caso con Repetición**:
   - Input: "aabb"
   - Output Esperado: 6 (aabb, abab, abba, baab, baba, bbaa)
   - Descripción: Cuatro caracteres con dos 'a' y dos 'b'.
   - Razonamiento: 4! / (2! \* 2!) = 6
3. **Caso con Todos los Caracteres Iguales**:
   - Input: "aaaa"
   - Output Esperado: 1 (aaaa)
   - Descripción: Todos los caracteres son iguales, solo hay una permutación.
   - Razonamiento: 4! / 4! = 1
4. **Caso con Mezcla de Caracteres**:
   - Input: "abcde"
   - Output Esperado: 120
   - Descripción: Cinco caracteres únicos, todas las permutaciones son distintas.
   - Razonamiento: 5! = 120

## Desarrollo de la Solución

### Enfoque Elegido

Para resolver el problema, seguimos estos pasos:

1. **Contar la frecuencia de cada carácter:**
   Usamos un objeto `{}` para registrar cuántas veces aparece cada letra. Esto nos permite saber exactamente cuántas repeticiones hay de cada carácter.
2. **Calcular el factorial del total de caracteres:**
   Esto nos da el número total de formas de ordenar los caracteres, sin considerar repeticiones.
3. **Calcular el producto de los factoriales de las frecuencias:**
   Para cada letra que se repite, calculamos su factorial y multiplicamos todos estos valores. Así descontamos las permutaciones duplicadas.
4. **Aplicar la fórmula de permutaciones con repetición:**
   Dividimos el factorial total por el producto de los factoriales de las frecuencias para obtener el número de permutaciones únicas.
5. **Devolver el resultado:**
   El resultado es el número de formas únicas de ordenar los caracteres del string.

### Implementación Paso a Paso

1. Recorremos el string y usamos un objeto `{}` para contar la frecuencia de cada letra.
2. Calculamos el factorial del total de caracteres (n!).
3. Calculamos el producto de los factoriales de las frecuencias de cada letra.
4. Aplicamos la fórmula: dividimos el factorial total por el producto de los factoriales de las frecuencias.
5. Devolvemos el resultado.

```javascript
function countPermutations(str) {
  // Función para calcular el factorial
  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  // Contar la frecuencia de cada caracter
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  // Calcular el factorial del total de caracteres
  const n = str.length;
  let numerator = factorial(n);
  // Calcular el factorial de las frecuencias
  let denominator = 1;
  for (let key in freq) {
    denominator *= factorial(freq[key]);
  }
  // Calcular el número de permutaciones únicas
  const permutations = numerator / denominator;

  return permutations;
}
```

En este código:

- Usamos un objeto `freq` como HashMap para contar la frecuencia de cada letra.
- Calculamos el factorial del total de caracteres y de cada frecuencia.
- Aplicamos la fórmula de permutaciones con repetición para obtener el resultado.

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal de la solución es O(n + m), donde n es la longitud del string y m es el número de caracteres únicos en el string. Contar la frecuencia de los caracteres toma O(n) y calcular los factoriales toma O(m) en el peor de los casos.

### Complejidad Espacial

La complejidad espacial de la solución es O(m), donde m es el número de caracteres únicos en el string. Esto se debe a que almacenamos la frecuencia de cada carácter en un objeto, y el espacio utilizado depende del número de caracteres únicos.

## Casos Edge y Consideraciones

Los casos edge a considerar incluyen:

- Strings vacíos: Deberíamos devolver 1, ya que hay una única permutación (la cadena vacía).
- Strings con un solo carácter: Deberíamos devolver 1, ya que solo hay una permutación posible.
- Strings con todos los caracteres iguales: Deberíamos devolver 1, ya que todas las permutaciones son idénticas.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Uso de HashMap para conteo de frecuencias de caracteres, una técnica fundamental en problemas de strings.
- Cálculo de factoriales de manera iterativa para evitar recursión innecesaria.
- Aplicación de la fórmula de permutaciones con repetición, un concepto clásico de combinatoria.

### Posibles Optimizaciones

- Precalcular factoriales para mejorar la eficiencia en casos con strings largos.
- Usar memoización para almacenar resultados de factoriales ya calculados.
- Optimizar el manejo de grandes números si se espera trabajar con strings muy largos.

## Recursos y Referencias

- [Factorial en Wikipedia](https://es.wikipedia.org/wiki/Factorial)
- [Permutaciones con repetición en Wikipedia](https://es.wikipedia.org/wiki/Permutaci%C3%B3n#Permutaciones_con_repetici%C3%B3n)
- [Documentación de JavaScript sobre objetos](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object)
