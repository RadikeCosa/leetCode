/**
 * FreeCodeCamp Problem: Caught Speeding
 * Category: Daily
 */
function speeding(speeds, limit) {
  let speeders = speeds.filter((speed) => speed > limit);
  let count = speeders.length;
  if (count === 0) {
    return [0, 0];
  }
  let totalOver = speeders.reduce((acc, speed) => acc + (speed - limit), 0);
  return [count, totalOver / count];
}

export default speeding;
