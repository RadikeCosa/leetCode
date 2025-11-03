/**
 * FreeCodeCamp Problem: Infected
 * Category: Daily November
 *
 * Given a number of days, calculate total infected computers following these rules:
 * - Day 0: First computer is infected
 * - Each day: Number of infected computers doubles
 * - Every 3rd day: After virus spread, 20% of infected get patched (round up)
 *
 * @param {number} days - Number of days since infection started
 * @return {number} - Total number of infected computers after given days
 */
function infected(days) {
  if (days < 0) return 0;
  let infectedCount = 1;
  for (let day = 1; day <= days; day++) {
    infectedCount *= 2;
    if (day % 3 === 0) {
      const patched = Math.ceil(infectedCount * 0.2);
      infectedCount -= patched;
    }
  }
  return infectedCount;
}

export default infected;
