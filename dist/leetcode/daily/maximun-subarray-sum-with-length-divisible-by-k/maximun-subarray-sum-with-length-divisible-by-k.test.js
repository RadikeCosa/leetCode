import { maxSubarraySum } from "./maximun-subarray-sum-with-length-divisible-by-k";
import { describe, expect, it } from "vitest";
describe("Maximun Subarray Sum With Length Divisible By K", () => {
    it("Example 1", () => {
        const nums = [1, 2];
        const k = 1;
        const result = maxSubarraySum(nums, k);
        expect(result).toBe(3);
    });
    it("Example 2", () => {
        const nums = [-1, -2, -3, -4, -5];
        const k = 4;
        const result = maxSubarraySum(nums, k);
        expect(result).toBe(-10);
    });
    it("Example 3", () => {
        const nums = [-5, 1, 2, -3, 4];
        const k = 2;
        const result = maxSubarraySum(nums, k);
        expect(result).toBe(4);
    });
});
