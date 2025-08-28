/**
 * LeetCode Problem 2635: Apply Transform Over Each Element in Array
 * Difficulty: Easy
 * Topics: Array, Function
 *
 * Given an integer array arr and a mapping function fn, return a new array
 * with a transformation applied to each element.
 * The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 * Please solve it without the built-in Array.map method.
 *
 * Time Complexity: O(n) - we need to iterate through each element once
 * Space Complexity: O(n) - we create a new array of the same size
 */

type Fn = (n: number, i: number) => number;

export function map(arr: number[], fn: Fn): number[] {
  // TODO: Implementar la función que aplica la transformación a cada elemento
  // Crear un nuevo array y aplicar fn(arr[i], i) a cada elemento
  let newArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i));
  }

  return newArr;
}
