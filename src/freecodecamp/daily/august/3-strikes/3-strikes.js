/**
 * FreeCodeCamp Problem: 3 Strikes
 * Category: Daily
 */
function squaresWithThree(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let square = i * i;
    if (square.toString().includes("3")) {
      count++;
    }
  }
  return count;
}

export default squaresWithThree;
