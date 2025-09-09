/**
 * LeetCode Problem 2677: Chunk Array
 * Difficulty: Easy
 * Topics: Array
 *
 * Given an array arr and a chunk size size, return a chunked array.
 * A chunked array contains the original elements in arr, but consists of
 * subarrays each of length size. The length of the last subarray may be
 * less than size if arr.length is not evenly divisible by size.
 * Please solve it without using lodash's _.chunk function.
 *
 * Time Complexity: O(n) - each element is processed exactly once
 * Space Complexity: O(n) - result array stores all elements in chunk structure
 */
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

export function chunk(arr: Obj[], size: number): Obj[][] {
  let result: Obj[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
