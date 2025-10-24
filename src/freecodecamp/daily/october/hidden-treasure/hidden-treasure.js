/**
 * FreeCodeCamp Problem: Hidden Treasure
 * Category: Daily
 */
function dive(map, coordinates) {
  const [row, col] = coordinates;
  const cell = map[row][col];

  if (cell === "-") {
    return "Empty";
  }

  if (cell === "X") {
    // Check if there are other "O" in the map
    const hasUnfoundTreasure = map.flat().includes("O");
    return hasUnfoundTreasure ? "Found" : "Recovered";
  }

  if (cell === "O") {
    // Check if this is the last "O" in the map
    const hasOtherTreasure = map.flat().filter((c) => c === "O").length > 1;
    return hasOtherTreasure ? "Found" : "Recovered";
  } else {
    return "Empty";
  }
}

export default dive;
