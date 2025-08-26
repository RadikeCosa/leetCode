/**
 * LeetCode Problem 2667: Create Hello World Function
 * Difficulty: Easy
 * Topics: Function, Closures
 *
 * Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 *
 * Time Complexity: O(1) - constant time to return the function and execute it
 * Space Complexity: O(1) - no additional space needed
 */
export function createHelloWorld(): (...args: any[]) => string {
  // Retorna una función que siempre devuelve "Hello World"
  // Los argumentos se capturan pero se ignoran completamente
  return function (...args: any[]): string {
    return "Hello World";
  };
}
