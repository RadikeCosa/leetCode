/**
 * FreeCodeCamp Problem: Integer Sequence
 * Category: Daily
 */
function sequence(n) {
  if (n < 1) return "";
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += i.toString();
  }

  return result;
}

export default sequence;
