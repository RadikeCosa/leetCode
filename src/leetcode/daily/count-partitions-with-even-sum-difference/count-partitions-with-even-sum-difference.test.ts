import { countPartitions } from "./count-partitions-with-even-sum-difference";
import { describe, it, expect } from "vitest";

/**
 * You are given an integer array nums of length n.
 *
 * A partition is defined as an index i where 0 <= i < n - 1, splitting the array into two non-empty subarrays such that:
 *   • Left subarray contains indices [0, i].
 *   • Right subarray contains indices [i + 1, n - 1].
 *
 * Return the number of partitions where the difference between the sum of the left and right subarrays is even.
 *
 * Example 1:
 * Input: nums = [10,10,3,7,6]
 * Output: 4
 * Explanation:
 *   The 4 partitions are:
 *   • [10], [10, 3, 7, 6] with a sum difference of 10 - 26 = -16, which is even.
 *   • [10, 10], [3, 7, 6] with a sum difference of 20 - 16 = 4, which is even.
 *   • [10, 10, 3], [7, 6] with a sum difference of 23 - 13 = 10, which is even.
 *   • [10, 10, 3, 7], [6] with a sum difference of 30 - 6 = 24, which is even.
 *
 * Example 2:
 * Input: nums = [1,2,2]
 * Output: 0
 * Explanation:
 *   No partition results in an even sum difference.
 *
 * Example 3:
 * Input: nums = [2,4,6,8]
 * Output: 3
 * Explanation:
 *   All partitions result in an even sum difference.
 *
 * Constraints:
 *   • 2 <= n == nums.length <= 100
 *   • 1 <= nums[i] <= 100
 * 
 * #### Casos de prueba adicionales

- `[2, 2]`  
  Output: 1  
  Explicación: Solo hay una partición posible, la diferencia es 2 - 2 = 0 (par).

- `[1, 1, 1, 1]`  
  Output: 3  
  Explicación: Todas las particiones posibles tienen diferencia 0 (par).

- `[1, 3, 5, 7]`  
  Output: 0  
  Explicación: Todas las sumas parciales generan diferencias impares.

- `[100, 100, 100, 100, 100]`  
  Output: 4  
  Explicación: Todas las particiones posibles tienen diferencia par.

- `[99, 1]`  
  Output: 1  
  Explicación: 99 - 1 = 98 (par).

- `[1, 2]`  
  Output: 0  
  Explicación: 1 - 2 = -1 (impar).

- `[50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]`  
  Output: 99  
  Explicación: Todos los valores son iguales y pares, todas las particiones cumplen la condición.
 */

describe("Count Partitios With Even Sum Difference", () => {
  it("Example 1", () => {
    const nums = [10, 10, 3, 7, 6];
    const result = countPartitions(nums);
    expect(result).toBe(4);
  });

  it("Example 2", () => {
    const nums = [1, 2, 2];
    const result = countPartitions(nums);
    expect(result).toBe(0);
  });

  it("Example 3", () => {
    const nums = [2, 4, 6, 8];
    const result = countPartitions(nums);
    expect(result).toBe(3);
  });

  // Additional test cases
  it("Additional Test Case 1", () => {
    const nums = [2, 2];
    const result = countPartitions(nums);
    expect(result).toBe(1);
  });

  it("Additional Test Case 2", () => {
    const nums = [1, 1, 1, 1];
    const result = countPartitions(nums);
    expect(result).toBe(3);
  });

  it("Additional Test Case 3", () => {
    const nums = [1, 3, 5, 7];
    const result = countPartitions(nums);
    expect(result).toBe(3);
  });

  it("Additional Test Case 4", () => {
    const nums = [100, 100, 100, 100, 100];
    const result = countPartitions(nums);
    expect(result).toBe(4);
  });

  it("Additional Test Case 5", () => {
    const nums = [99, 1];
    const result = countPartitions(nums);
    expect(result).toBe(1);
  });

  it("Additional Test Case 6", () => {
    const nums = [1, 2];
    const result = countPartitions(nums);
    expect(result).toBe(0);
  });

  it("Additional Test Case 7", () => {
    const nums = [
      50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
      50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
      50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
      50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
      50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
      50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
    ];
    const result = countPartitions(nums);
    expect(result).toBe(99);
  });
});
