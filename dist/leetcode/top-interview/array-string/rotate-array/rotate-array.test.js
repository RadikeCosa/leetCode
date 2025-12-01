import { rotate } from "./rotate-array";
import { describe, it, expect } from "vitest";
/**
 Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 */
describe("Rotate Array", () => {
    it("Example 1", () => {
        const nums = [1, 2, 3, 4, 5, 6, 7];
        const k = 3;
        rotate(nums, k);
        expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
    });
    it("Example 2", () => {
        const nums = [-1, -100, 3, 99];
        const k = 2;
        rotate(nums, k);
        expect(nums).toEqual([3, 99, -1, -100]);
    });
});
