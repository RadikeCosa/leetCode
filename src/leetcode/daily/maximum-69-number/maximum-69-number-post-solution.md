# Intuition

Al leer este problema, inmediatamente pensé en una estrategia **greedy**. Como solo puedo cambiar **un dígito** y quiero **maximizar** el número, necesito identificar qué cambio tendría el mayor impacto.

La clave está en entender que:

- Solo tengo dígitos 6 y 9
- Cambiar 6→9 siempre incrementa el valor
- Cambiar 9→6 siempre lo decrece
- **La posición importa**: cambiar el dígito más a la izquierda tiene mayor impacto

Por ejemplo: `6999 → 9999` (+3000) vs `9996 → 9999` (+3)

# Approach

Mi enfoque usa **algoritmo greedy** con manipulación de arrays:

1. **Convertir** el número a array de dígitos para fácil manipulación
2. **Buscar** el primer 6 desde la izquierda (mayor impacto posicional)
3. **Cambiar** ese 6 a 9 y **terminar** inmediatamente
4. **Convertir** de vuelta a número

¿Por qué greedy funciona? Porque la decisión óptima local (cambiar el primer 6) garantiza el óptimo global, ya que cualquier 6 más a la derecha tendría menor impacto en el valor final.

**Casos especiales:**

- Si no hay 6's → no cambiar nada
- Si hay múltiples 6's → solo cambiar el primero

# Complexity

- Time complexity: $$O(\log n)$$

  - Donde n es el número de entrada
  - Necesitamos procesar cada dígito una vez (número de dígitos = log₁₀(n))

- Space complexity: $$O(\log n)$$
  - Para almacenar el array de dígitos

# Code

```typescript
export function maximum69Number(num: number): number {
  // Convert number to array of digits for easy manipulation
  const digits = num.toString().split("").map(Number);

  // Find the first (leftmost) 6 and change it to 9 for maximum impact
  // Using greedy approach: leftmost digit has the highest positional value
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 6) {
      digits[i] = 9;
      break; // Only change the first 6 found (at most one digit)
    }
  }

  // Convert array back to number
  return parseInt(digits.join(""), 10);
}
```
