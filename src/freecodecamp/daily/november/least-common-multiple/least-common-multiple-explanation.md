---
title: "least-common-multiple"
difficulty: "easy"
topics:
  - Algorithm
source: "freecodecamp"
series: "daily"
category: "freecodecamp"
createdAt: "2025-11-24"
---

# Least Common Multiple - Análisis y Explicación

## Enunciado del Problema

Dados dos enteros, devuelve el mínimo común múltiplo (MCM) de los dos números.
El MCM de dos números es el número entero positivo más pequeño que es múltiplo de ambos números. Por ejemplo, dado 4 y 6, devuelve 12 porque:
Los múltiplos de 4 son 4, 8, 12, y así sucesivamente.
Los múltiplos de 6 son 6, 12, 18, y así sucesivamente.
12 es el número más pequeño que es múltiplo de ambos.

## Análisis Inicial

### Comprensión del Problema

El **mínimo común múltiplo (mcm)** de dos números enteros \(a\) y \(b\) (donde \(a \neq 0\) y \(b \neq 0\)) se puede calcular de varias formas matemáticas. La más eficiente y elegante utiliza el **máximo común divisor (mcd)**.

### Fórmula principal (la más usada y recomendada)

\[
\boxed{\operatorname{mcm}(a, b) = \frac{|a \cdot b|}{\operatorname{mcd}(a, b)}}
\]

#### Por qué funciona esta fórmula

- Todo número natural se puede descomponer en factores primos:
  \[
  a = p_1^{e_1} p_2^{e_2} \cdots p_k^{e_k}, \quad b = p_1^{f_1} p_2^{f_2} \cdots p_k^{f_k}
  \]
  (los exponentes que no aparecen son cero).
- El mcd toma el **mínimo** exponente de cada primo:  
  \(\operatorname{mcd}(a,b) = p_1^{\min(e_1,f_1)} p_2^{\min(e_2,f_2)} \cdots\)
- El mcm toma el **máximo** exponente de cada primo:  
  \(\operatorname{mcm}(a,b) = p_1^{\max(e_1,f_1)} p_2^{\max(e_2,f_2)} \cdots\)
- Si multiplicas mcm × mcd:
  \[
  \operatorname{mcm}(a,b) \cdot \operatorname{mcd}(a,b) = p_1^{\max+\min} p_2^{\max+\min} \cdots = p_1^{e_1+f_1} p_2^{e_2+f_2} \cdots = a \cdot b
  \]
  (porque \(\max(e_i,f_i) + \min(e_i,f_i) = e_i + f_i\)).

Por eso:
\[\
\operatorname{mcm}(a,b) = \frac{|a \cdot b|}{\operatorname{mcd}(a,b)}
\]
(Se usa valor absoluto por si alguno es negativo, pero normalmente trabajamos con positivos).

### Cómo obtener el mcd: Algoritmo de Euclides

El mcd se calcula muy rápido con el algoritmo de Euclides:

```text
mcd(a, b):
    mientras b ≠ 0:
        a, b = b, a mod b
    devolver |a|
```

Ejemplo paso a paso: mcm(12, 18)

1. Factorización:
   - 12 = 2² × 3¹
   - 18 = 2¹ × 3²
2. mcd = 2^{\min(2,1)} × 3^{\min(1,2)} = 2¹ × 3¹ = 6
3. mcm = 2^{\max(2,1)} × 3^{\max(1,2)} = 2² × 3² = 4 × 9 = 36

O con la fórmula rápida:
\[
\operatorname{mcm}(12,18) = \frac{|12 \times 18|}{6} = \frac{216}{6} = 36
\]

### Casos de Prueba Identificados

| Entrada | Salida Esperada | Explicación |
|

- | --------------- | ------------------------------ |
  | (4, 6) | 12 | Múltiplos comunes: 12, 24, ... |
  | (5, 10) | 10 | Múltiplos comunes: 10, 20, ... |
  | (7, 3) | 21 | Múltiplos comunes: 21, 42, ... |
  | (0, 5) | Indefinido | MCM no está definido para 0 |
  | (1, 1) | 1 | MCM(1,1) = 1 |

## Desarrollo de la Solución

Queda pasar de la matematica al código.
El paso a paso sería:

1. Implementar la función para calcular el mcd usando el algoritmo de Euclides.
2. Usar la fórmula del mcm para calcular el resultado final.

```js
function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return Math.abs(a);
}

function lcm(a, b) {
  if (a === 0 || b === 0) {
    throw new Error("MCM no está definido para 0");
  }
  return Math.abs(a * b) / gcd(a, b);
}
```

## Análisis de Complejidad

### Complejidad Temporal

La complejidad del algoritmo de Euclides para calcular el mcd es \(O(\log(\min(a, b)))\). Por lo tanto, la complejidad total para calcular el mcm usando la fórmula es también \(O(\log(\min(a, b)))\).

### Complejidad Espacial

La complejidad espacial es \(O(1)\) ya que solo se utilizan unas pocas variables adicionales independientemente del tamaño de los números de entrada.

## Casos Edge y Consideraciones

- Si alguno de los números es 0, el mcm no está definido. Se puede manejar lanzando una excepción o devolviendo un valor especial.
- Si ambos números son negativos, el mcm se calcula usando sus valores absolutos.
- Si uno de los números es 1, el mcm es simplemente el otro número.
- Si ambos números son iguales, el mcm es ese mismo número.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Uso del algoritmo de Euclides para calcular el mcd.
- Aplicación de la relación entre mcd y mcm para optimizar el cálculo.
- Manejo de casos especiales como entradas cero y números negativos.

### Posibles Optimizaciones

- Precalcular mcd para múltiples pares si se van a calcular varios mcm.
- Optimizar el manejo de errores para entradas inválidas.
- Usar tipos de datos más grandes si se espera trabajar con números muy grandes para evitar desbordamientos.
- Implementar versiones iterativas y recursivas para comparar rendimiento en diferentes escenarios.

## Recursos y Referencias

- [Wikipedia: Mínimo Común Múltiplo](https://es.wikipedia.org/wiki/M%C3%ADnimo_com%C3%BAn_m%C3%BAltiplo)
- [Wikipedia: Algoritmo de Euclides](https://es.wikipedia.org/wiki/Algoritmo_de_Euclides)
- [FreeCodeCamp: GCD and LCM](https://www.freecodecamp.org/news/how-to-find-gcd-and-lcm-in-javascript/)
-
