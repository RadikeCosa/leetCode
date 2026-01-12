/**
 * FreeCodeCamp Problem: Par For The Hole
 * Category: FreeCodeCamp
 *
 * @param {number} par - The par for the golf hole
 * @param {number} strokes - The number of strokes taken by the golfer
 * @returns {string} The golfer's score using golf terms
 */
function golfScore(par, strokes) {
  if (strokes === 1) {
    return "Hole in one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes === par - 1) {
    return "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par + 1) {
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double bogey";
  }
}

export default golfScore;
