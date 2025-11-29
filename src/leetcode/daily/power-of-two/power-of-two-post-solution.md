# Intuition

Mi primer pensamiento fue hacer **división iterativa** - dividir repetidamente entre 2 hasta llegar a 1 o encontrar un residuo. Pero al ver la pregunta de seguimiento _"¿Podrías resolverlo sin bucles/recursión?"_, supe que había una solución más elegante esperándome.

Recordé que las **potencias de 2 tienen una propiedad única en binario** y pensé: "¡Este es el momento perfecto para usar operadores bitwise!" Hacía tiempo que quería encontrar un caso práctico para bit manipulation, y este problema era ideal.

Las potencias de 2 en binario tienen exactamente **un solo bit en 1**: `1 = 0001`, `2 = 0010`, `4 = 0100`, `8 = 1000`. Esta observación me llevó a la técnica `n & (n - 1) === 0` - una solución O(1) súper elegante que responde perfectamente al desafío.

# Approach

La clave está en la **técnica de bit manipulation**: `n & (n - 1) === 0`

**¿Por qué funciona?**

- **Potencia de 2:** Tiene exactamente un bit en 1 (ej: `8 = 1000`)
- **Restar 1:** Invierte todos los bits desde el bit activo hacia la derecha (ej: `7 = 0111`)
- **AND operation:** El resultado siempre es 0 para potencias de 2

**Ejemplo paso a paso:**

```
8 = 1000 (binario)
7 = 0111 (binario)
8 & 7 = 0000 = 0 ✓
```

**Contraejemplo (no potencia):**

```
6 = 0110 (binario)
5 = 0101 (binario)
6 & 5 = 0100 = 4 ≠ 0 ✗
```

**Condición adicional:** `n > 0` para excluir números negativos y cero.

# Complexity

- Time complexity: $$O(1)$$ - una sola operación bitwise
- Space complexity: $$O(1)$$ - no se usa memoria adicional

# Code

```typescript []
function isPowerOfTwo(n: number): boolean {
  // Bit manipulation: potencias de 2 tienen exactamente un bit en 1
  // n & (n-1) elimina el bit más bajo, debe resultar en 0
  // Condición adicional: n > 0 (excluye negativos y cero)
  return n > 0 && (n & (n - 1)) === 0;
}
```
