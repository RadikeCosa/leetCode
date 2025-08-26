/**
 * LeetCode Problem 2704: To Be Or Not To Be
 * Difficulty: Easy
 * Topics: Function, Objects, Error Handling
 *
 * Write a function expect that helps developers test their code. It should take in any value val
 * and return an object with the following two functions:
 * • toBe(val) accepts another value and returns true if the two values === each other.
 *   If they are not equal, it should throw an error "Not Equal".
 * • notToBe(val) accepts another value and returns true if the two values !== each other.
 *   If they are equal, it should throw an error "Equal".
 *
 * Time Complexity: O(1) - constant time for comparisons
 * Space Complexity: O(1) - only stores the value and returns methods
 */

interface ExpectObject {
  toBe(val: any): boolean;
  notToBe(val: any): boolean;
}

export function expect(val: any): ExpectObject {
  // TODO: Implementar la función expect que retorna un objeto con métodos toBe y notToBe
  // Pista: necesitas retornar un objeto con dos métodos que comparen valores

  return {
    toBe(expected: any): boolean {
      if (val === expected) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },

    notToBe(expected: any): boolean {
      if (val !== expected) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
}
