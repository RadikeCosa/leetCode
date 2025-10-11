/**
 * FreeCodeCamp Problem: Multiples of 3 or 5
 * Category: Project Euler
 * Difficulty: Easy
 * Topics: Mathematics, Loops, Arithmetic
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
 */
function multiplesOf3Or5(number) {
  let multiples = new Set();
  for (let i = 1; i < number; i++) {
    // Cambiar de i = 0 a i = 1
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.add(i);
    }
  }
  return Array.from(multiples).reduce((acc, curr) => acc + curr, 0);
}

export default multiplesOf3Or5;
