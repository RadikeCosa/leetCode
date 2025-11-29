/**
 * LeetCode Problem 2725: Interval Cancellation
 * Difficulty: Easy
 * Topics: JavaScript, Asynchronous Programming, Closures
 *
 * Given a function fn, an array of arguments args, and an interval time t,
 * return a cancel function cancelFn.
 *
 * The function fn should be called with args immediately and then called again
 * every t milliseconds until cancelFn is called.
 *
 * Time Complexity: O(1) - constant time operations
 * Space Complexity: O(1) - constant space usage
 */

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => JSONValue;

export function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
  // Ejecutar inmediatamente
  fn(...args);

  // Configurar repetición cada t milisegundos
  const intervalId = setInterval(() => {
    fn(...args);
  }, t);

  // Retornar función de cancelación
  return () => {
    clearInterval(intervalId);
  };
}
