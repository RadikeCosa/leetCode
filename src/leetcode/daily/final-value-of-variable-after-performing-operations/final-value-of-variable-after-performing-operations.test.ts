/**
 * LeetCode Problem 2011: Final Value of Variable After Performing Operations
 *
 * There is a programming language with only four operations and one variable X:
 * - ++X and X++ increments the value of the variable X by 1.
 * - --X and X-- decrements the value of the variable X by 1.
 *
 * Initially, the value of X is 0.
 * Given an array of strings operations containing a list of operations,
 * return the final value of X after performing all the operations.
 *
 * Examples:
 *
 * Example 1:
 * Input: operations = ["--X","X++","X++"]
 * Output: 1
 * Explanation:
 * Initially, X = 0.
 * --X: X is decremented by 1, X = 0 - 1 = -1.
 * X++: X is incremented by 1, X = -1 + 1 = 0.
 * X++: X is incremented by 1, X = 0 + 1 = 1.
 *
 * Example 2:
 * Input: operations = ["++X","++X","X++"]
 * Output: 3
 * Explanation:
 * Initially, X = 0.
 * ++X: X is incremented by 1, X = 0 + 1 = 1.
 * ++X: X is incremented by 1, X = 1 + 1 = 2.
 * X++: X is incremented by 1, X = 2 + 1 = 3.
 *
 * Example 3:
 * Input: operations = ["X++","++X","--X","X--"]
 * Output: 0
 * Explanation:
 * Initially, X = 0.
 * X++: X is incremented by 1, X = 0 + 1 = 1.
 * ++X: X is incremented by 1, X = 1 + 1 = 2.
 * --X: X is decremented by 1, X = 2 - 1 = 1.
 * X--: X is decremented by 1, X = 1 - 1 = 0.
 *
 * Constraints:
 * - 1 <= operations.length <= 100
 * - operations[i] will be either "++X", "X++", "--X", or "X--".
 *
 * Casos de ejemplo para implementar:
 *
 * 1. Ejemplo básico decrementos/incrementos:
 *    finalValueAfterOperations(["--X","X++","X++"]) should return 1
 *
 * 2. Solo incrementos:
 *    finalValueAfterOperations(["++X","++X","X++"]) should return 3
 *
 * 3. Operaciones balanceadas:
 *    finalValueAfterOperations(["X++","++X","--X","X--"]) should return 0
 *
 * 4. Caso edge - una operación:
 *    finalValueAfterOperations(["++X"]) should return 1
 *
 * 5. Solo decrementos:
 *    finalValueAfterOperations(["--X","X--"]) should return -2
 *
 * Pattern: Simular cada operación secuencialmente sobre variable X inicial = 0
 */

import { describe, it, expect } from "vitest";
import finalValueAfterOperations from "./final-value-of-variable-after-performing-operations.js";

describe("Final Value of Variable After Performing Operations", () => {
  describe("LeetCode Examples", () => {
    it("should return 1 for operations ['--X','X++','X++'] (Example 1)", () => {
      expect(finalValueAfterOperations(["--X", "X++", "X++"])).toBe(1);
    });

    it("should return 3 for operations ['++X','++X','X++'] (Example 2)", () => {
      expect(finalValueAfterOperations(["++X", "++X", "X++"])).toBe(3);
    });

    it("should return 0 for operations ['X++','++X','--X','X--'] (Example 3)", () => {
      expect(finalValueAfterOperations(["X++", "++X", "--X", "X--"])).toBe(0);
    });
  });

  describe("Edge Cases", () => {
    it("should return 1 for single increment operation ['++X']", () => {
      expect(finalValueAfterOperations(["++X"])).toBe(1);
    });

    it("should return -1 for single decrement operation ['--X']", () => {
      expect(finalValueAfterOperations(["--X"])).toBe(-1);
    });

    it("should return -2 for only decrements ['--X','X--']", () => {
      expect(finalValueAfterOperations(["--X", "X--"])).toBe(-2);
    });
  });

  describe("Specific Operation Types", () => {
    it("should handle all four operation types correctly", () => {
      // Verificar que ++X, X++, --X, X-- todas funcionen
      expect(finalValueAfterOperations(["++X"])).toBe(1);
      expect(finalValueAfterOperations(["X++"])).toBe(1);
      expect(finalValueAfterOperations(["--X"])).toBe(-1);
      expect(finalValueAfterOperations(["X--"])).toBe(-1);
    });

    it("should treat ++X and X++ identically for final value", () => {
      expect(finalValueAfterOperations(["++X", "++X"])).toBe(2);
      expect(finalValueAfterOperations(["X++", "X++"])).toBe(2);
      expect(finalValueAfterOperations(["++X", "X++"])).toBe(2);
    });
  });
});
