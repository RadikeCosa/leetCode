/**
 * FreeCodeCamp Problem: 24 Game
 * Category: Rosetta Code
 *
 * The 24 Game tests a person's mental arithmetic.
 * The aim of the game is to arrange four numbers in a way that when evaluated, the result is 24.
 *
 * Implement a function that takes a string of four digits as its argument, with each digit from 1 to 9
 * (inclusive) with repetitions allowed, and returns an arithmetic expression that evaluates to the number 24.
 * If no such solution exists, return "no solution exists".
 *
 * Rules:
 * - Only the following operators/functions are allowed: multiplication, division, addition, subtraction.
 * - Division should use floating point or rational arithmetic, etc, to preserve remainders.
 * - Forming multiple digit numbers from the supplied digits is disallowed.
 * - The order of the digits when given does not have to be preserved.
 *
 * @param {string} numStr - String of four digits from 1-9
 * @returns {string} - Arithmetic expression that evaluates to 24 or "no solution exists"
 */
function solve24(numStr) {
  let result = "no solution exists";
  const numbers = numStr.split("").map(Number);
  const operators = ["+", "-", "*", "/"];
}

export default solve24;
