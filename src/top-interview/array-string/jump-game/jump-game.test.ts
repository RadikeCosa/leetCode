import { canJump } from "./jump-game";
import { describe, it, expect } from "vitest";

/**
Example 1:
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.


Example 2:
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

1. Caso base con un solo elemento: [0] → true
2. Caso donde es posible llegar al final: [2,3,1,1,4] → true
3. Caso donde no es posible llegar al final: [3,2,1,0,4] → false
4. Caso con todos los elementos siendo 0 excepto el primero: [1,0,0,0] → false
5. Caso con grandes números: [10000, 0, 0, ..., 0] → true
6. Caso con números decrecientes: [5,4,3,2,1,0] → true
7. Caso con números aleatorios: [2,0,2,0,1] → true
8. Caso con números alternados: [1,2,0,1,0,1] → true
9. Caso con números grandes y ceros intercalados: [10,0,0,0,0,0,0,0,0,1] → true
10. Caso con todos los elementos siendo 1: [1,1,1,1,1] → true

 */

describe("Jump Game", () => {
  it("Example 1", () => {
    const nums = [2, 3, 1, 1, 4];
    const result = canJump(nums);
    expect(result).toBe(true);
  });

  it("Example 2", () => {
    const nums = [3, 2, 1, 0, 4];
    const result = canJump(nums);
    expect(result).toBe(false);
  });
  it("Caso base con un solo elemento", () => {
    const nums = [0];
    const result = canJump(nums);
    expect(result).toBe(true);
  });

  it("Caso donde es posible llegar al final", () => {
    const nums = [2, 3, 1, 1, 4];
    const result = canJump(nums);
    expect(result).toBe(true);
  });

  it("Caso donde no es posible llegar al final", () => {
    const nums = [3, 2, 1, 0, 4];
    const result = canJump(nums);
    expect(result).toBe(false);
  });

  it("Caso con todos los elementos siendo 0 excepto el primero", () => {
    const nums = [1, 0, 0, 0];
    const result = canJump(nums);
    expect(result).toBe(false);
  });

  it("Caso con grandes números", () => {
    const nums = [10000, 0, 0, 0, 0];
    const result = canJump(nums);
    expect(result).toBe(true);
  });

  it("Caso con números decrecientes", () => {
    const nums = [5, 4, 3, 2, 1, 0];
    const result = canJump(nums);
    expect(result).toBe(true);
  });

  it("Caso con números aleatorios", () => {
    const nums = [2, 0, 2, 0, 1];
    const result = canJump(nums);
    expect(result).toBe(true);
  });

  it("Caso con números alternados", () => {
    const nums = [1, 2, 0, 1, 0, 1];
    const result = canJump(nums);
    expect(result).toBe(false);
  });

  it("Caso con números grandes y ceros intercalados", () => {
    const nums = [10, 0, 0, 0, 0, 0, 0, 0, 0, 1];
    const result = canJump(nums);
    expect(result).toBe(true);
  });
  it("Caso con todos los elementos siendo 1", () => {
    const nums = [1, 1, 1, 1, 1];
    const result = canJump(nums);
    expect(result).toBe(true);
  });
});
