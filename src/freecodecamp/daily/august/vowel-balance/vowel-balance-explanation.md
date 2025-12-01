---
title: "Vowel Balance"
difficulty: "easy"
topics:
  - String
  - Array
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-12-01"
---

## Enunciado del Problema

Determinar si el número de vocales en la primera mitad de una string es igual al número de vocales en la segunda mitad, ignorando el caracter central en caso de longitud impar.

## Ejemplos

- Input: "racecar" → Output: true (1 vocal en cada mitad: "a" y "a")
- Input: "Lorem Ipsum" → Output: true (2 vocales en cada mitad)
- Input: "Kitty Ipsum" → Output: false (1 vs 3 vocales)
- Input: "string" → Output: false (1 vs 2 vocales)
- Input: " " → Output: true (0 vocales en ambas mitades)
- Input: "abcdefghijklmnopqrstuvwxyz" → Output: false (5 vs 6 vocales)
- Input: "123A#b!E&\*456-o.U" → Output: true (2 vocales en cada mitad)

## Análisis

Este problema requiere dividir una string en dos mitades y comparar el conteo de vocales entre ellas. La complejidad surge del manejo correcto del centro en strings de longitud impar.

### Patrones identificados

1. División simétrica: Primera mitad vs segunda mitad con centro opcional
2. Vocales case-insensitive: a,e,i,o,u en mayúsculas y minúsculas
3. Centro ignorado: En longitud impar, el caracter central no cuenta para ninguna mitad
4. Caracteres arbitrarios: La string puede contener cualquier caracter, no solo letras

### ¿Por qué un solo loop es la solución óptima?

- Eficiencia: O(n) tiempo, O(1) espacio
- Claridad: Un solo punto de iteración sobre los datos
- Flexibilidad: Maneja fácilmente casos pares e impares
- Mantenibilidad: Toda la lógica de conteo en un lugar

## Enfoque detallado

### Estrategia: Loop único con decisiones condicionales

1. Inicialización:

   ```javascript
   let vowels = "aeiouAEIOU"; // String constante para lookup rápido
   let leftVowelCount = 0,
     rightVowelCount = 0;
   let mid = Math.floor(length / 2);
   let isOdd = length % 2 === 1;
   ```

2. Loop principal:

   ```javascript
   for (let i = 0; i < length; i++) {
     if (vowels.includes(s[i])) {
       // O(1) lookup
       if (i < mid) {
         leftVowelCount++; // Primera mitad
       } else if (i > mid || !isOdd) {
         rightVowelCount++; // Segunda mitad
       }
       // i === mid && isOdd → ignorado
     }
   }
   ```

3. Lógica de particionamiento:
   - Longitud par: Primera mitad `0..mid-1`, segunda mitad `mid..length-1`
   - Longitud impar: Primera mitad `0..mid-1`, centro `mid` ignorado, segunda mitad `mid+1..length-1`

### Ejemplo detallado: "racecar" (longitud 7)

- `mid = 3`, `isOdd = true`
- Posición 0 ('r'): `i < 3` → primera mitad, no vocal
- Posición 1 ('a'): `i < 3` → primera mitad, vocal → `leftVowelCount = 1`
- Posición 2 ('c'): `i < 3` → primera mitad, no vocal
- Posición 3 ('e'): `i === 3 && isOdd` → ignorado
- Posición 4 ('c'): `i > 3` → segunda mitad, no vocal
- Posición 5 ('a'): `i > 3` → segunda mitad, vocal → `rightVowelCount = 1`
- Posición 6 ('r'): `i > 3` → segunda mitad, no vocal
- Resultado: `1 === 1` → `true`

## Casos extremos

- String vacío: `length = 0`, `mid = 0`, ningún loop → `0 === 0` → `true`
- Longitud 1: `mid = 0`, `isOdd = true`, posición 0 ignorada → `0 === 0` → `true`
- Longitud 2: `mid = 1`, posiciones 0 y 1 → comparación normal
- Solo vocales: "aeiou" (5) → primera mitad "ae", segunda "ou" → `2 === 2` → `true`
- Sin vocales: "xyz" → `0 === 0` → `true`
- Vocales solo en una mitad: "aeiouxyz" → primera "aei", segunda "uyz" → `3 === 2` → `false`

## Complejidad

- Time Complexity: O(n) - Un solo loop lineal sobre la string
- Space Complexity: O(1) - Variables constantes, sin estructuras de datos adicionales

## Optimizaciones consideradas

### Optimización 1: Set para vocales

```javascript
const vowelSet = new Set(['a','e','i','o','u','A','E','I','O','U']);
if (vowelSet.has(s[i])) // O(1) lookup vs O(1) includes
```

Resultado: Mínima mejora, includes() ya es O(1) para strings cortos.

### Optimización 2: Dos loops separados

```javascript
// Loop 1: i < mid
// Loop 2: i >= mid + (length % 2)
```

Resultado: Código más largo, misma complejidad O(n).

### Optimización 3: Usar slice() y filter()

```javascript
const left = s.slice(0, mid);
const right = s.slice(mid + (length % 2));
const leftCount = [...left].filter((c) => vowels.includes(c)).length;
```

Resultado: Más legible pero O(n) espacio extra y múltiples iteraciones.

### Conclusión de optimizaciones

La implementación actual es óptima: O(n) tiempo, O(1) espacio, clara y mantenible. No hay necesidad de optimizaciones adicionales para este problema.

## Conclusión

Esta solución demuestra el poder de un razonamiento algorítmico claro. El loop único con decisiones condicionales maneja elegantemente tanto casos pares como impares, evitando código duplicado mientras mantiene la eficiencia.

### Lecciones aprendidas

1. Un solo loop inteligente puede reemplazar múltiples loops con lógica compleja
2. Variables flag (`isOdd`) simplifican condiciones condicionales
3. Early returns no siempre son necesarios; a veces comparar al final es más claro
4. Comentarios explicativos hacen que la lógica condicional sea autodocumentada
5. Casos edge primero: Pensar en longitudes 0, 1, 2 ayuda a validar la lógica

Esta aproximación es robusta, eficiente y fácil de entender - cualidades esenciales para código de producción.