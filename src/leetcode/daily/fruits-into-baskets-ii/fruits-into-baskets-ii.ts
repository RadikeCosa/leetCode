export function numOfUnplacedFruits(
  fruits: number[],
  baskets: number[]
): number {
  // Greedy: for each fruit (left to right) pick the leftmost available basket
  // whose capacity is >= quantity. If none, count it as unplaced.
  // Complexity: O(n^2) worst case (n <= 100 per constraints) -> fine.
  const used: boolean[] = new Array(baskets.length).fill(false);
  let unplaced = 0;
  for (let i = 0; i < fruits.length; i++) {
    const quantity = fruits[i];
    let placed = false;
    for (let j = 0; j < baskets.length; j++) {
      if (!used[j] && baskets[j] >= quantity) {
        used[j] = true;
        placed = true;
        break; // leftmost suitable basket
      }
    }
    if (!placed) unplaced++;
  }
  return unplaced;
}
