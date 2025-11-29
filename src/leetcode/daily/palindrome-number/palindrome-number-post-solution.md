# Intuition

Al ver este problema, mi primer pensamiento fue identificar los casos obvios que puedo descartar inmediatamente:

- Números negativos nunca pueden ser palindromos
- Solo necesito revertir el número y compararlo con el original

La clave está en hacer esto sin convertir a string, usando solo matemáticas.

# Approach

1. **Descarte rápido**: Si x < 0, retorno false inmediatamente
2. **Reversión matemática**: Uso el patrón clásico de extracción de dígitos:
   - `x % 10` extrae el último dígito
   - `Math.floor(x / 10)` elimina el último dígito
   - `reverse * 10 + digito` construye el número reverso
3. **Comparación**: Al final comparo el número original con su reverso

El algoritmo itera dígito por dígito, construyendo el reverso de derecha a izquierda.

**Ejemplo con 123:**

- Iteración 1: reverse = 0\*10 + 3 = 3, num = 12
- Iteración 2: reverse = 3\*10 + 2 = 32, num = 1
- Iteración 3: reverse = 32\*10 + 1 = 321, num = 0
- Comparar: 321 === 123 → false

# Complexity

- Time complexity: $$O(\log n)$$

  - Iteramos una vez por cada dígito del número
  - Un número n tiene aproximadamente log₁₀(n) dígitos

- Space complexity: $$O(1)$$
  - Solo usamos variables auxiliares (reverse, num)
  - No depende del tamaño de la entrada

# Code

```typescript []
export function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  let reverse = 0;
  let num = x;

  while (num !== 0) {
    reverse = reverse * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return reverse === x;
}
```
