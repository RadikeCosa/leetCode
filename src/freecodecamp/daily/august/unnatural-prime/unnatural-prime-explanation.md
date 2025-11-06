# Unnatural Prime - Análisis y Solución

## Descripción del Problema

Determinar si un número entero es un número primo o un número primo negativo.

- Un número primo es un entero positivo mayor que 1 que solo es divisible por 1 y por sí mismo.
- Un número primo negativo es la versión negativa de un número primo positivo.
- 1 y 0 no se consideran números primos.

## Planteamiento y Solución

### Análisis del Problema

El problema requiere determinar si un número entero `n` cumple con ser un "unnatural prime", que incluye tanto primos positivos como negativos. Podemos descomponerlo en los siguientes casos:

1. **Números Positivos**:

   - Si `n > 1`: Verificar si es primo (divisible solo por 1 y sí mismo).
   - Si `n <= 1`: Siempre `false` (1 y números menores no son primos).

2. **Números Negativos**:

   - No descartar automáticamente los negativos; verificar si `Math.abs(n) > 1` y es primo.
   - Por ejemplo, `-23` es válido porque `23` es primo.

3. **Algoritmo para Verificar Primalidad**:
   - Un número `p > 1` es primo si no tiene divisores positivos entre 2 y `√p`.
   - Optimización: Chequear divisibilidad solo por números impares después de 2.
   - Casos base: 2 es primo, números pares > 2 no lo son.

**Casos de Prueba Analizados**:

- `1` y `-1`: No primos → `false`
- `0`: No primo → `false`
- `19`, `97`: Primos positivos → `true`
- `-23`, `-61`: Negativos de primos → `true`
- `99`, `-44`: No primos → `false`

### Enfoque Utilizado

Implementaremos una función que:

1. **Lógica Unificada**: Verificar si `Math.abs(n) > 1` y el valor absoluto es primo.
2. **Casos Especiales**: `0`, `1`, `-1` retornan `false` directamente.
3. **Función Helper**: Crear `isPrime(num)` para verificar si un número positivo es primo.
4. **Evaluación Individual**: No descartar negativos automáticamente; cada número se evalúa por su valor absoluto.

[A completar con código después de implementación]

### Complejidad

[A completar después de implementar la solución]

### Consideraciones Especiales

[A completar después de implementar la solución]

## Otros Enfoques Útiles

[A completar después de implementar la solución]

## Lecciones Aprendidas

[A completar después de implementar la solución]
