# Intuition

Al leer el problema, inmediatamente pensé en **división iterativa** - dividir repetidamente entre 3 hasta llegar a 1. Pero la pregunta de seguimiento me hizo reflexionar: _"¿Podrías resolverlo sin usar ningún bucle o recursión?"_ Esto sugiere que hay un **enfoque matemático más elegante**. Recordé el concepto del **número mágico** para potencias de primos.

# Approach

La clave está en usar la **mayor potencia de 3 que cabe en un entero de 32 bits**: `3^19 = 1162261467`.

**Principio matemático:** Si `n` es una potencia de 3 (es decir, `n = 3^k` donde `k ≤ 19`), entonces `3^19` debe ser **exactamente divisible** por `n`.

¿Por qué funciona?

- `3^19 ÷ 3^k = 3^(19-k)` = entero perfecto
- Si `n` tiene **cualquier factor que no sea 3** (como 2, 5, 7, etc.), entonces `3^19` no será divisible por `n`

**Ejemplos:**

- `1162261467 % 27 === 0` ✓ (27 = 3^3, solo factores de 3)
- `1162261467 % 6 === 3` ✗ (6 = 2×3, contiene factor 2)

# Complexity

- Time complexity: $$O(1)$$ - solo una operación de módulo
- Space complexity: $$O(1)$$ - solo variables auxiliares constantes

# Code

```typescript []
function isPowerOfThree(n: number): boolean {
  // Caso base para números inválidos
  if (n <= 0) return false;

  // El número mágico: mayor potencia de 3 en rango int32
  const maxPowerOfThree = Math.pow(3, 19); // 1162261467

  // La condición mágica: solo potencias puras de 3 dividen exactamente
  return maxPowerOfThree % n === 0;
}
```
