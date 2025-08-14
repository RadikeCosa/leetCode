# Intuition

Al ver el problema, inmediatamente pensé en usar una **sliding window de tamaño fijo (3)** para recorrer la cadena buscando secuencias de 3 caracteres iguales consecutivos. La clave es que solo necesitamos verificar ventanas exactas de longitud 3, no ventanas variables.

# Approach

1. **Sliding Window:** Uso un bucle que recorre desde `i = 0` hasta `num.length - 3` para examinar cada posible ventana de 3 caracteres.
2. **Validación de triple:** Para cada posición `i`, verifico si `num[i] === num[i+1] === num[i+2]`.
3. **Construcción del candidato:** Si es válida, construyo el substring como `a + a + a` donde `a = num[i]`.
4. **Comparación lexicográfica:** Uso `candidate > best` para determinar el mayor, aprovechando que para strings de dígitos, la comparación lexicográfica mantiene el orden numérico (`"777" > "333"`).
5. **Early termination optimization:** Si encuentro `"999"`, retorno inmediatamente porque es el máximo posible.

# Complexity

- Time complexity: $$O(n)$$ - cada posición se visita exactamente una vez
- Space complexity: $$O(1)$$ - solo uso variables auxiliares independientes del tamaño de entrada

# Code

```typescript []
function largestGoodInteger(num: string): string {
  let best = "";
  for (let i = 0; i < num.length - 2; i++) {
    const a = num[i];
    if (a === num[i + 1] && a === num[i + 2]) {
      let candidate = a + a + a;
      if (candidate === "999") {
        return "999";
      }
      if (candidate > best) {
        best = candidate;
      }
    }
  }
  return best;
}
```
