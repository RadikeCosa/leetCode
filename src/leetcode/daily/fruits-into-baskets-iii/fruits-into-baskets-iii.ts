export function numOfUnplacedFruits(
  fruits: number[],
  baskets: number[]
): number {
  // Preprocesar: para cada canasta, guardar capacidad y su índice original
  const n = baskets.length;
  // Array de pares [capacidad, índice]
  const basketPairs = baskets.map((cap, idx) => [cap, idx] as [number, number]);
  // Ordenar por índice original (para búsqueda eficiente)
  // Pero para búsqueda binaria, necesitamos acceso rápido por capacidad
  // Así que creamos un array de índices disponibles, ordenados
  const available = Array.from({ length: n }, (_, i) => i);

  let unplaced = 0;
  // Para eficiencia, recorremos las frutas y para cada una buscamos el primer índice disponible con capacidad suficiente
  for (let i = 0; i < fruits.length; i++) {
    const quantity = fruits[i];
    let placed = false;
    // Buscar la canasta más a la izquierda disponible con capacidad >= quantity
    for (let j = 0; j < available.length; j++) {
      const idx = available[j];
      if (baskets[idx] >= quantity) {
        // Asignar y eliminar el índice de disponibles
        available.splice(j, 1);
        placed = true;
        break;
      }
    }
    if (!placed) unplaced++;
  }
  return unplaced;
}
