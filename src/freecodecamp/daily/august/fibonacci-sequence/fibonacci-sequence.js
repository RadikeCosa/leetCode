/**
 * FreeCodeCamp Problem: Fibonacci Sequence
 * Category: Coding Interview Prep
 * Difficulty: Easy
 * Topics: Array, Math, Algorithms
 *
 * The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. When starting with 0 and 1, the first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 *
 * Given an array containing the first two numbers of a Fibonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.
 *
 * Your function should handle sequences of any length greater than or equal to zero.
 * If the length is zero, return an empty array.
 * Note that the starting numbers are part of the sequence.
 *
 * Time Complexity: O(n) - Lineal en la longitud deseada de la secuencia
 * Space Complexity: O(n) - Proporcional al tamaño del array resultante
 */
function fibonacciSequence(startSequence, length) {
  if (length === 0) return [];
  if (length === 1) return [startSequence[0]];
  if (length === 2) return startSequence;

  const sequence = [...startSequence];
  sequence[0] = startSequence[0];
  sequence[1] = startSequence[1];
  for (let i = 2; i < length; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence;
}

export default fibonacciSequence;
