---
title: "power-of-two"
difficulty: "easy"
topics:
  - Bit Manipulation
  - Math
source: "leetcode"
series: "daily"
category: "daily"
createdAt: "2025-08-09"
---

# Power of Two - Documentación

## Descripción del Problema

Dado un entero `n`, devolver `true` si es una potencia de dos, de lo contrario devolver `false`.

Un entero `n` es potencia de dos si existe un entero `x` tal que `n = 2^x`.

## Ejemplos

| Input | Output | Explicación                    |
|

--- | ------------------------------ |
| 1     | true   | 2^0 = 1                        |
| 16    | true   | 2^4 = 16                       |
| 3     | false  | No es potencia de 2            |
| 0     | false  | No existe x tal que 2^x = 0    |
| -8    | false  | Potencias de dos son positivas |

## Restricciones

-2^31 <= n <= 2^31 - 1

## Enfoques Comunes

### 1. División iterativa

Mientras `n` sea divisible por 2, dividir entre 2. Al final debe quedar 1.

- Complejidad: O(log n)
- Problema: Usa bucle (la consigna sugiere pensar sin loops/recursión)

### 2. Bit Manipulation (Truco Clásico)

En binario, una potencia de dos tiene exactamente un bit en 1.
Ejemplos:

- 1 = 0001
- 2 = 0010
- 4 = 0100
- 8 = 1000

Propiedad: `n & (n - 1) === 0` si y solo si `n` es potencia de dos (y `n > 0`).

- Complejidad: O(1)
- Sin bucles ni recursión

### 3. Tabla / Set Precalculado (no ideal aquí)

Para rango limitado (32 bits), podrías precalcular todas las potencias de dos hasta 2^30. No es necesario.

### 4. Matemática con logaritmos (menos robusto)

`x = log2(n)` y verificar si `x` es entero. Problema: Errores de precisión de punto flotante.

## Implementación Recomendada

Usar el enfoque de bit manipulation:

```typescript
function isPowerOfTwo(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0;
}
```

## Edge Cases

- n = 0 → false
- n < 0 → false
- n = 1 → true
- n = 2^k dentro del rango de 32 bits
- Grandes no-potencias cerca de potencias (ej: 2^k ± 1)

## Explicación del Truco `n & (n - 1)`

- Restar 1 a una potencia de dos invierte todos los bits desde el bit activo hacia la derecha.
- AND entre ambos da 0 porque no comparten bits en 1.
  Ejemplo:

```
8  = 1000
7  = 0111
8 & 7 = 0000
```

## Complejidad

- Tiempo: O(1)
- Espacio: O(1)

## Próximos Pasos

1. Implementar la función en `power-of-two.ts`
2. Correr tests
3. Reflexionar sobre otras propiedades (popcount == 1)

---

_Este archivo se actualizará si se agregan variaciones (e.g. count set bits)._