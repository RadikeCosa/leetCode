/**
 * FreeCodeCamp Problem: Goldilocks Zone
 * Category: Daily
 * Difficulty: Easy
 * Topics: Math, Astronomy
 *
 * Given the mass of a star, return an array with the start and end distances of its Goldilocks Zone in Astronomical Units.
 *
 * To calculate the Goldilocks Zone:
 * - Find the luminosity of the star by raising its mass to the power of 3.5.
 * - The start of the zone is 0.95 times the square root of its luminosity.
 * - The end of the zone is 1.37 times the square root of its luminosity.
 * - Return the distances rounded to two decimal places.
 *
 * Time Complexity: O(1) - direct calculation
 * Space Complexity: O(1) - no extra space
 */
function goldilocksZone(mass) {
  const luminosity = mass ** 3.5;
  const sqrtLuminosity = Math.sqrt(luminosity);
  const start = 0.95 * sqrtLuminosity;
  const end = 1.37 * sqrtLuminosity;
  return [parseFloat(start.toFixed(2)), parseFloat(end.toFixed(2))];
}

export default goldilocksZone;
