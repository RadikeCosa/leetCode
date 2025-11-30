---
name: palindrome-number
difficulty: easy
category: daily
topics: [Math, Palindrome, Integer]
source: leetcode
series: daily
createdAt: 2025-11-29
---

# Palindrome Number - Documentación

## Descripción del Problema

**LeetCode 9 - Easy**  
**Daily Challenge: 14 de Agosto, 2025**

Dado un entero `x`, devolver `true` si `x` es un palindromo, `false` en caso contrario.

Un número palindrómico se lee igual hacia adelante y hacia atrás.

## Ejemplos

| Input | Output | Explicación                                                                  |
| ----- | ------ | ---------------------------------------------------------------------------- |
| 121   | true   | 121 se lee igual hacia adelante y hacia atrás                                |
| -121  | false  | De izquierda a derecha: -121. De derecha a izquierda: 121-. No es palindromo |
| 10    | false  | Se lee 01 de derecha a izquierda. No es palindromo                           |

## Restricciones

- -2^31 <= x <= 2^31 - 1

## Pregunta de Seguimiento

¿Podrías resolverlo sin convertir el entero a string?

## Análisis del Problema

### Casos de Descarte Rápido Identificados

1. **Números negativos**: Nunca pueden ser palindromos (ej: -121 ≠ 121-)
2. **Números > 0 que terminan en 0**: Solo el 0 puede ser palindromo terminando en 0
3. **Números de un dígito**: Siempre son palindromos

### Enfoque Elegido: Reversión Matemática Completa

Se optó por revertir completamente el número usando solo operaciones matemáticas, sin conversión a string.

## Solución Implementada

```typescript
export function isPalindrome(x: number): boolean {
  if (x < 0) return false; // Números negativos nunca son palindromos

  let reverse = 0;
  let num = x;

  while (num !== 0) {
    reverse = reverse * 10 + (num % 10); // Construye el reverso dígito a dígito
    num = Math.floor(num / 10); // Elimina el último dígito procesado
  }

  return reverse === x; // Compara original vs reverso
}
```

## Explicación del Algoritmo

### Proceso de Reversión (Ejemplo: 123 → 321)

**Iteración 1:**

- `reverse = 0`, `num = 123`
- `reverse = 0 * 10 + (123 % 10) = 0 + 3 = 3`
- `num = Math.floor(123 / 10) = 12`

**Iteración 2:**

- `reverse = 3`, `num = 12`
- `reverse = 3 * 10 + (12 % 10) = 30 + 2 = 32`
- `num = Math.floor(12 / 10) = 1`

**Iteración 3:**

- `reverse = 32`, `num = 1`
- `reverse = 32 * 10 + (1 % 10) = 320 + 1 = 321`
- `num = Math.floor(1 / 10) = 0` → Loop termina

**Resultado:** `reverse = 321`, comparar `321 === 123` → false

### Operaciones Clave

- `num % 10`: Extrae el último dígito
- `Math.floor(num / 10)`: Elimina el último dígito
- `reverse * 10 + dígito`: Construye el número reverso

## Casos Extremos Manejados

- **x = 0**: Retorna true (palindromo de un dígito)
- **x < 0**: Retorna false inmediatamente
- **x termina en 0**: Se procesa normalmente, pero 10 → 01 = 1 ≠ 10
- **Números grandes**: No hay riesgo de overflow en JavaScript/TypeScript

## Análisis de Complejidad

- **Tiempo**: O(log₁₀(n)) - itera por cada dígito del número
- **Espacio**: O(1) - solo variables auxiliares

## Ventajas de Este Enfoque

1. **Sin conversión a string**: Cumple la restricción adicional
2. **Eficiente**: Complejidad logarítmica
3. **Claro**: Lógica matemática directa
4. **Robusto**: Maneja todos los casos extremos

## Reflexiones

Esta solución demuestra cómo operaciones matemáticas simples (módulo y división) pueden resolver problemas que intuitivamente podríamos abordar con strings. La clave está en entender cómo construir números dígito por dígito usando el patrón `reverse * 10 + nuevoDígito`.
