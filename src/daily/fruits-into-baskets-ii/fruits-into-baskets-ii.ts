export function numOfUnplacedFruits(
  fruits: number[],
  baskets: number[]
): number {
  // almaceno el numero de frutas no almacenadas
  let unplacedCount: number = 0;
  // genero un array de booleanos con igual cantidad de elementos que el array de baskets (podria ser de fruits)
  const basketUsed: boolean[] = new Array(baskets.length).fill(false);

  // en el bucle externo recorro cada fruta para buscarle la canasta en el bucle interno
  for (let i = 0; i < fruits.length; i++) {
    // almaceno la cantidad de la fruta que tengo en el elemento de esta vuelta
    const fruitQuantity = fruits[i];
    // variable para saber si la fruta se ha colocado
    let fruitPlaced = false;
    // en el bucle interno recorro cada canasta para ver si puedo colocar la fruta
    for (let j = 0; j < baskets.length; j++) {
      // Verifico si la canasta esta disponible y que tenga la capacidad suficiente
      if (!basketUsed[j] && baskets[j] >= fruitQuantity) {
        //marco la canasta como usada y la fruta como colocada y salgo del bucle
        basketUsed[j] = true;
        fruitPlaced = true;
        break;
      }
    }
    if (!fruitPlaced) {
      unplacedCount++;
    }
  }

  return unplacedCount;
}
