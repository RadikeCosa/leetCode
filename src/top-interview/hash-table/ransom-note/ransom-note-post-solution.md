# Intuition

This is a classic **frequency counting** problem. Think of it like cutting letters from a magazine to form a ransom note - we need to check if we have enough of each letter. The key insight is that we need to count how many times each character appears in the magazine, then verify if we have sufficient characters to build the ransom note.

# Approach

I used the **HashMap Frequency Counter** pattern with a two-phase algorithm:

**Phase 1 - Count Available Characters:**

- Create a `Map<string, number>` to count frequency of each character in `magazine`
- Iterate through magazine and increment counter for each character

**Phase 2 - Verify and Consume Characters:**

- For each character in `ransomNote`:
  - Check if character exists in our count map AND has count > 0
  - If not available, return `false` immediately (early termination)
  - If available, "consume" the character by decrementing its count
- If we successfully process all characters, return `true`

**Key optimizations:**

- Early return if `ransomNote.length > magazine.length` (impossible case)
- Early return as soon as we find a missing/insufficient character

# Complexity

- **Time complexity**: O(n + m) where n = length of `ransomNote`, m = length of `magazine`

  - O(m) to count all characters in magazine
  - O(n) to verify each character in ransomNote
  - Each HashMap operation (get/set) is O(1) average case

- **Space complexity**: O(k) where k = number of unique characters in magazine
  - In worst case O(26) for lowercase English letters = O(1) constant space

# Code

```typescript
export function canConstruct(ransomNote: string, magazine: string): boolean {
  // Optimización temprana: si ransomNote es más largo, es imposible construirlo
  if (ransomNote.length > magazine.length) {
    return false;
  }

  // Crear un HashMap para contar la frecuencia de cada carácter en magazine
  const magazineCount = new Map<string, number>();

  // Fase 1: Contar todos los caracteres disponibles en magazine
  for (const char of magazine) {
    // Si el carácter ya existe, incrementamos su contador; si no, lo inicializamos en 1
    magazineCount.set(char, (magazineCount.get(char) || 0) + 1);
  }

  // Fase 2: Verificar si podemos construir ransomNote con los caracteres disponibles
  for (const char of ransomNote) {
    // Verificamos si el carácter existe y si tenemos cantidad suficiente (> 0)
    if (!magazineCount.has(char) || magazineCount.get(char)! <= 0) {
      // No tenemos el carácter o ya se agotó
      return false;
    }
    // "Usamos" el carácter decrementando su contador
    magazineCount.set(char, magazineCount.get(char)! - 1);
  }

  // Si llegamos aquí, pudimos construir ransomNote exitosamente
  return true;
}
```

# Notes

- **Edge cases handled**: Empty strings, missing characters, insufficient character counts
- **Alternative approach**: Could use array[26] for lowercase letters only, but Map is more flexible
- **Early termination**: Critical for performance - return false immediately when impossible
- **Variable naming**: Used descriptive names (`magazineCount`, `ransomNote`) for clarity
- **TypeScript benefits**: Type safety with `Map<string, number>` prevents runtime errors
- **Memory efficiency**: Only stores characters that actually appear in magazine
