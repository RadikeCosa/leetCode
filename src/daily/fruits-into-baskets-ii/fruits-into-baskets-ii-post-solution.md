# Intuition

Al leer el problema, inmediatamente reconocí un **patrón de asignación con restricciones**. Mi primera impresión fue: "Necesito simular exactamente las reglas - proceso cada fruta de izquierda a derecha y la asigno a la primera canasta disponible que tenga suficiente capacidad."

El problema me recordó a algoritmos **greedy** donde tomas la primera opción válida sin considerar optimizaciones futuras. Con las restricciones pequeñas (n ≤ 100), una solución directa O(n²) sería perfectamente aceptable.

# Approach

Implementé una **simulación paso a paso** siguiendo exactamente las reglas del problema:

1. **Para cada fruta** (de izquierda a derecha):

   - Buscar la **primera canasta disponible** (de izquierda a derecha) que tenga capacidad suficiente
   - Si encuentra una: marcarla como usada, fruta colocada
   - Si no encuentra ninguna: incrementar contador de frutas sin colocar

2. **Estructuras de datos auxiliares:**

   - `used: boolean[]` para rastrear qué canastas ya están ocupadas
   - `unplaced: number` contador de frutas que no se pudieron colocar

3. **Estrategia greedy:** Siempre elegir la primera opción válida (canasta más a la izquierda), sin considerar si podría ser mejor reservarla para frutas futuras.

# Complexity

- Time complexity: $$O(n^2)$$ - para cada fruta (n), buscamos en todas las canastas (n)
- Space complexity: $$O(n)$$ - array auxiliar `used` para rastrear estado de canastas

# Code

```typescript []
function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
  // Greedy: for each fruit (left to right) pick the leftmost available basket
  // whose capacity is >= quantity. If none, count it as unplaced.
  const used: boolean[] = new Array(baskets.length).fill(false);
  let unplaced = 0;

  for (let i = 0; i < fruits.length; i++) {
    const quantity = fruits[i];
    let placed = false;

    for (let j = 0; j < baskets.length; j++) {
      if (!used[j] && baskets[j] >= quantity) {
        used[j] = true;
        placed = true;
        break;
      }
    }

    if (!placed) unplaced++;
  }

  return unplaced;
}
```
