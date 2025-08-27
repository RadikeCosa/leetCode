/**
 * LeetCode Problem 2634: Filter Elements from Array
 * Difficulty: Easy
 * Topics: Array, Function
 *
 * Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
 * The fn function takes one or two arguments: arr[i] and i (index).
 * filteredArr should only contain elements from arr for which fn(arr[i], i) evaluates to a truthy value.
 * Please solve it without the built-in Array.filter method.
 *
 * Time Complexity: O(n) - we need to iterate through each element once
 * Space Complexity: O(k) - where k is the number of elements that pass the filter
 */

type Fn = (n: number, i: number) => any;

export function filter(arr: number[], fn: Fn): number[] {
  // TODO: Implementar la función que filtra elementos basándose en la función fn
  // Solo incluir elementos donde fn(arr[i], i) sea truthy
  let filteredArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
}
