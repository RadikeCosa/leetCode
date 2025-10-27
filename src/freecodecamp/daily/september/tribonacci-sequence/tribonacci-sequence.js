/**
 * FreeCodeCamp Problem: Tribonacci Sequence
 * Category: Daily
 */
function tribonacciSequence(startSequence, length) {
  if (length <= 0) return [];
  if (length === 1) return [startSequence[0]];
  if (length === 2) return [startSequence[0], startSequence[1]];
  if (length === 3) return startSequence;

  const result = [...startSequence];

  for (let i = 3; i < length; i++) {
    const nextValue = result[i - 1] + result[i - 2] + result[i - 3];
    result.push(nextValue);
  }

  return result;
}

export default tribonacciSequence;
