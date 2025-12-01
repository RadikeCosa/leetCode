---
title: Unnatural Prime
source: freecodecamp
series: daily
category: daily
difficulty: easy
topics:
  - Math
createdAt: 2025-11-06
---

## Enunciado del Problema

Dado un número entero, determinar si es primo o no. Retornar `true` si es primo, `false` en caso contrario.

**Ejemplo:**

- unnaturalPrime(2) → true
- unnaturalPrime(4) → false
- unnaturalPrime(17) → true
- unnaturalPrime(1) → false

## Análisis Inicial

Este problema es un clásico de teoría de números. El objetivo es determinar si un número es primo.

**Desafíos identificados:**

- Manejo de números pequeños (0, 1)
- Eficiencia para números grandes

## Estrategias posibles

### 1. Enfoque con bucle hasta sqrt(n)

- Eficiente
- Legible
- Correcto

### 2. Enfoque con bucle hasta n-1

- Ineficiente para números grandes

## Solución Implementada

```javascript
function unnaturalPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
```

**Lógica paso a paso:**

1. Retornar `false` si n <= 1
2. Probar divisores desde 2 hasta sqrt(n)
3. Si algún divisor divide a n, retornar `false`
4. Si no se encuentra divisor, retornar `true`

## Alternativas Consideradas

### 1. Enfoque con bucle hasta n-1

```javascript
function unnaturalPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
```

- Menos eficiente

### 2. Enfoque recursivo

- No aporta ventajas

## Elección del Enfoque

Se eligió el enfoque con bucle hasta sqrt(n) por eficiencia y claridad.

## Complejidad

- Tiempo: O(√n)
- Espacio: O(1)

## Aprendizajes

- La verificación de primos es un problema clásico y la optimización con sqrt(n) es estándar
