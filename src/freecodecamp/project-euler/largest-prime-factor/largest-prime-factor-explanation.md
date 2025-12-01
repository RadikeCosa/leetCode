---
title: "largest-prime-factor"
difficulty: "easy"
topics:
  - math
  - prime
source: "freecodecamp"
series: "project-euler"
category: "freecodecamp"
createdAt: "2025-10-14"
---

# Largest Prime Factor

## Enunciado del Problema

**Project Euler - Problema 3**

Los factores primos de 13195 son 5, 7, 13 y 29.

¿Cuál es el factor primo más grande del número dado?

## Análisis Inicial

### Comprensión del Problema

- **Input**: Un número entero positivo mayor que 1
- **Output**: El factor primo más grande de ese número
- **Objetivo**: Encontrar el mayor número primo que divide exactamente al número dado

### Conceptos Matemáticos

**Número Primo**: Un número natural mayor que 1 que solo es divisible por 1 y por sí mismo.

**Factor Primo**: Un número primo que divide exactamente a otro número.

**Factorización Prima**: Descomposición de un número en el producto de sus factores primos.

**Ejemplo**: 13195 = 5 × 7 × 13 × 29

- Los factores primos son: 5, 7, 13, 29
- El factor primo más grande es: 29

### Casos de Ejemplo

**Ejemplo 1: 13195**

- Factores primos: 5, 7, 13, 29
- Resultado: 29

**Ejemplo 2: 8**

- 8 = 2 × 2 × 2
- Factores primos: 2, 2, 2
- Resultado: 2 (el único factor primo)

**Ejemplo 3: 7**

- 7 es primo
- Factores primos: 7
- Resultado: 7

## Restricciones

- Número entero positivo > 1
- Puede ser muy grande (hasta 600.851.475.143)
- Debe ser eficiente para números grandes

## Estrategias de Solución

### Enfoque Básico

**Algoritmo de Prueba de División:**

1. **Manejar el caso especial del 2**: Dividir por 2 hasta que el número sea impar
2. **Probar divisores impares**: Desde 3 hasta la raíz cuadrada del número
3. **Para cada divisor candidato**:
   - Verificar si divide al número
   - Si divide, es un factor primo (ya que probamos desde el más pequeño)
   - Continuar dividiendo hasta que ya no sea divisible
4. **Caso final**: Si el número restante es > 1, es primo y es el factor más grande

**Pseudocódigo:**

```
function largestPrimeFactor(n):
    // Manejar el 2
    while n % 2 == 0:
        n = n / 2
        largest = 2

    // Probar divisores impares desde 3
    for i = 3 to sqrt(n) step 2:
        while n % i == 0:
            n = n / i
            largest = i

    // Si n es un número primo mayor que 2
    if n > 1:
        largest = n

    return largest
```

### Optimizaciones

1. **Manejo especial del 2**: Elimina todos los factores de 2 primero
2. **Solo números impares**: `i += 2` reduce iteraciones a la mitad
3. **Condición de parada eficiente**: `i * i <= number` evita `Math.sqrt()`
4. **División completa**: `while (number % i === 0)` elimina factores repetidos

## Casos Edge

1. **Números primos**: `largestPrimeFactor(7)` → `7`
2. **Potencias de 2**: `largestPrimeFactor(8)` → `2`
3. **Producto de primos**: `largestPrimeFactor(15)` → `5` (3×5)
4. **Números grandes**: `largestPrimeFactor(600851475143)` → `6857`

## Complejidad Esperada

### Tiempo: O(√n)

- **Mejor caso**: Números primos → O(√n) iteraciones
- **Peor caso**: Números con muchos factores pequeños → O(√n) iteraciones
- **Ejemplo**: Para 600.851.475.143 (≈6×10^11), √n ≈ 775.146 iteraciones

### Espacio: O(1)

- Solo variables simples, no arrays o estructuras adicionales
- Uso de `Math.floor()` para evitar problemas de punto flotante

## Implementación

```javascript
function largestPrimeFactor(number) {
  // Optimización: Primero eliminamos todos los factores de 2
  // El 2 es el único número primo par, así podemos trabajar solo con impares después
  while (number % 2 === 0) {
    number = Math.floor(number / 2);
  }

  // Si después de dividir por 2 el número es 1, significa que era una potencia de 2
  // En este caso, el factor primo más grande es 2
  if (number === 1) return 2;

  // Para números impares, buscamos el factor primo más grande
  // Inicializamos con 1, pero se actualizará con cada factor encontrado
  let largest = 1;

  // Solo necesitamos verificar hasta la raíz cuadrada del número
  // Usamos i*i <= number para evitar calcular Math.sqrt() en cada iteración
  for (let i = 3; i * i <= number; i += 2) {
    // Mientras i divida al número, lo usamos como factor
    while (number % i === 0) {
      largest = i; // Actualizamos el factor más grande encontrado
      number = Math.floor(number / i);
    }
  }

  // Si queda un número > 1 después del bucle, significa que es un factor primo
  // Este sería el factor primo más grande (caso de números primos grandes)
  if (number > 1) {
    largest = number;
  }

  return largest;
}
```

## Lecciones Aprendidas

- **Optimización del 2**: El 2 es especial porque es el único primo par
- **Eficiencia crítica**: Para números hasta 10^12, O(√n) es aceptable
- **Precisión numérica**: Usar `Math.floor()` para divisiones enteras
- **Propiedad matemática**: Todo número compuesto tiene un factor ≤ √n