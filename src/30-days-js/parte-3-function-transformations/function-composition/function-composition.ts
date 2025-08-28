/**
 * LeetCode Problem 2629: Function Composition
 * Difficulty: Easy
 * Topics: Function, JavaScript, TypeScript
 *
 * Given an array of functions [f1, f2, f3, ..., fn], return a new function fn
 * that is the function composition of the array of functions.
 *
 * The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
 * The function composition of an empty list of functions is the identity function f(x) = x.
 *
 * Time Complexity: O(n) - where n is the number of functions
 * Space Complexity: O(1) - excluding the call stack
 */

type F = (x: number) => number;

export function compose(functions: F[]): F {
  // Tu implementación aquí
  // Pista: considera el caso especial del array vacío
  // y cómo evaluar las funciones de derecha a izquierda
  if (functions.length === 0) {
    return (x: number) => x; // Función identidad
  }

  return function (x: number): number {
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
}
