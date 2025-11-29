/**
 * LeetCode Problem 2623: Memoize
 * Difficulty: Medium
 * Topics: Function, Higher-Order Functions, Memoization
 *
 * Given a function fn, return a memoized version of that function.
 * A memoized function will never be called twice with the same inputs.
 * Instead it will return a cached value.
 *
 * Time Complexity: O(1) - for cached results, O(f(n)) for new calculations
 * Space Complexity: O(k) - where k is the number of unique input combinations
 */

type Fn = (...params: number[]) => number;

export function memoize(fn: Fn): Fn {
  // Tu implementación aquí
  // Pista: necesitas almacenar los resultados de llamadas anteriores
  // y crear una clave única para cada combinación de parámetros
  const cache = new Map<string, number>();

  return function (...args: number[]): number {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
