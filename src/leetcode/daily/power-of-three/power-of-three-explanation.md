---
name: power-of-three
difficulty: easy
category: daily
topics: [Math, Powers, Division, Magic Number]
source: leetcode
series: daily
createdAt: 2025-08-12
---

# Power of Three - Documentación

## Descripción del Problema

**LeetCode 326 - Easy**  
**Daily Challenge: 13 de Agosto, 2025**

Dado un entero `n`, devuelve `true` si es una potencia de tres. De lo contrario, devuelve `false`.

Un entero `n` es una potencia de tres si existe un entero `x` tal que `n == 3^x`.

## Restricciones

- `-2^31 <= n <= 2^31 - 1`

## Pregunta de Seguimiento

¿Podrías resolverlo sin usar ningún bucle o recursión?

## Ejemplos y Casos de Prueba

### Ejemplo 1: Potencia válida

**Input:**

```typescript
n = 27;
```

**Output:**

```typescript
true;
```

**Explicación:**
27 = 3^3, por lo tanto es una potencia de tres.

### Ejemplo 2: No es potencia de tres

**Input:**

```typescript
n = 0;
```

**Output:**

```typescript
false;
```

**Explicación:**
No existe ningún x tal que 3^x = 0.

### Ejemplo 3: Potencia de tres básica

**Input:**

```typescript
n = 1;
```

**Output:**

```typescript
true;
```

**Explicación:**
1 = 3^0, por lo tanto es una potencia de tres.

## Análisis del Problema

### Observaciones Clave

1. **Potencias de 3**: 3^0 = 1, 3^1 = 3, 3^2 = 9, 3^3 = 27, 3^4 = 81, ...
2. **Números negativos**: No pueden ser potencias de tres positivas
3. **Cero**: No es una potencia de tres
4. **Número 1**: Es 3^0, por lo tanto sí es una potencia de tres

### Enfoques Implementados

#### Enfoque 1: División iterativa (Básico)

```typescript
export function isPowerOfThree(n: number): boolean {
  if (n <= 0) return false;
  if (n === 1) return true;

  while (n > 1) {
    if (n % 3 !== 0) return false;
    n = n / 3;
  }
  return true;
}
```

- **Complejidad**: O(log n) tiempo, O(1) espacio
- **Ventajas**: Intuitivo, fácil de entender
- **Ideal para**: Primera aproximación al problema

#### Enfoque 2: Método matemático - Número mágico ⭐ IMPLEMENTADO

```typescript
export function isPowerOfThree(n: number): boolean {
  if (n <= 0) return false;
  const maxPowerOfThree = Math.pow(3, 19); // 1162261467
  return maxPowerOfThree % n === 0;
}
```

- **Complejidad**: O(1) tiempo, O(1) espacio
- **Ventajas**: Óptimo, responde a la pregunta de seguimiento
- **Principio clave**: Solo las potencias puras de 3 pueden dividir exactamente a 3^19

#### Enfoque 3: Recursión (Alternativo)

- Caso base: n == 1 → true, n < 1 → false
- Caso recursivo: n % 3 == 0 && isPowerOfThree(n / 3)
- **Complejidad**: O(log n) tiempo, O(log n) espacio (stack)

#### Enfoque 4: Logaritmos (Problemático)

- Usar log₃(n) = log(n) / log(3)
- **Problema**: Precisión de punto flotante
- **No recomendado**: Para uso en producción

## Implementación Final - Análisis Detallado

### ¿Por qué funciona el número mágico?

**Concepto clave**: 3^19 = 1162261467 es la mayor potencia de 3 en rango int32.

**Principio matemático**:

- Si n es una potencia de 3 (n = 3^k donde k ≤ 19)
- Entonces 3^19 es divisible por n
- Porque 3^19 ÷ 3^k = 3^(19-k), que es un entero

**Ejemplo con potencias válidas**:

```
1162261467 % 1 = 0   ✓ (3^19 ÷ 3^0)
1162261467 % 3 = 0   ✓ (3^19 ÷ 3^1)
1162261467 % 9 = 0   ✓ (3^19 ÷ 3^2)
1162261467 % 27 = 0  ✓ (3^19 ÷ 3^3)
```

**Ejemplo con múltiplos NO potencias**:

```
1162261467 % 6 = 3   ✗ (6 = 2×3, tiene factor 2)
1162261467 % 12 = 3  ✗ (12 = 4×3, tiene factor 4)
1162261467 % 15 = 12 ✗ (15 = 5×3, tiene factor 5)
```

**¿Por qué fallan los múltiplos?**

- 3^19 = 3×3×3×...×3 (solo factores de 3)
- 6 = 2×3 (contiene factor 2)
- Como 3^19 no tiene factores de 2, no puede ser divisible por 6

#### Enfoque 4: Número mágico (sin bucles/recursión)

- Encontrar la mayor potencia de 3 que cabe en un int de 32 bits
- Si n divide a esa potencia, entonces n es potencia de 3
- 3^19 = 1162261467 es la mayor potencia de 3 en rango int32

## Casos Edge Importantes

### Casos que Manejar

- `n = 1`: Debe devolver `true` (3^0 = 1)
- `n = 0`: Debe devolver `false` (no hay potencia que dé 0)
- `n < 0`: Todos deben devolver `false` (potencias de 3 son positivas)
- Múltiplos de 3 NO potencias: 6, 12, 15, 18... → `false`
- Potencias válidas: 1, 3, 9, 27, 81, 243... → `true`

### Verificación con Ejemplos

```typescript
// Potencias válidas
isPowerOfThree(1)   → true  ✓ (3^0)
isPowerOfThree(3)   → true  ✓ (3^1)
isPowerOfThree(27)  → true  ✓ (3^3)

// Múltiplos NO potencias
isPowerOfThree(6)   → false ✓ (2×3)
isPowerOfThree(12)  → false ✓ (4×3)
isPowerOfThree(15)  → false ✓ (5×3)

// Casos edge
isPowerOfThree(0)   → false ✓
isPowerOfThree(-3)  → false ✓
```

## Complejidad Comparativa

| Enfoque                | Tiempo   | Espacio  | Elegancia  | Recomendado      |
| ---------------------- | -------- | -------- | ---------- | ---------------- |
| **División iterativa** | O(log n) | O(1)     | ⭐⭐⭐     | Para aprendizaje |
| **Número mágico**      | **O(1)** | **O(1)** | ⭐⭐⭐⭐⭐ | **✅ Óptimo**    |
| **Recursión**          | O(log n) | O(log n) | ⭐⭐       | Educativo        |
| **Logaritmos**         | O(1)     | O(1)     | ⭐         | ❌ Problemático  |

## Reflexiones para Entrevistas Técnicas

### Estrategia de Presentación

1. **Empezar simple**: "Podríamos dividir repetidamente entre 3..."
2. **Mencionar optimización**: "Pero hay una forma más elegante sin bucles"
3. **Explicar el número mágico**: Demostrar comprensión matemática profunda
4. **Discutir trade-offs**: Legibilidad vs eficiencia

### Puntos Clave para Mencionar

- **Pregunta de seguimiento**: "Sin bucles ni recursión" → número mágico
- **Factorización prima**: Por qué 6 falla pero 9 no
- **Límites de integers**: 3^19 es el máximo en int32
- **Edge cases**: Especialmente n=1 (muchos olvidan 3^0=1)

### Preguntas Adicionales Probables

- "¿Funciona para potencias de 2?" → Sí, pero con bit manipulation más elegante
- "¿Y para números de 64 bits?" → 3^39, mismo principio
- "¿Qué problemas tiene el enfoque de logaritmos?" → Precisión de punto flotante
- "¿En producción cuál usarías?" → Número mágico por eficiencia

### Demostración de Maestría

```typescript
// Mostrar comprensión del concepto subyacente
const maxPowerOfThree = Math.pow(3, 19); // 1162261467
// Si n es potencia de 3, entonces maxPowerOfThree % n === 0
// Porque 3^19 solo puede ser divisible por potencias puras de 3
```

## Conceptos Relacionados y Aprendizajes

- **Factorización prima**: Clave para entender por qué funciona
- **Límites de tipos de datos**: Conocer rangos de integers
- **Optimización matemática**: O(1) vs O(log n) con técnicas inteligentes
- **Propiedades de divisibilidad**: Solo potencias de p dividen a p^n
- **Trade-offs algorítmicos**: Elegancia vs comprensibilidad
