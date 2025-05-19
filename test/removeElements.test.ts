import { describe, it, expect } from "vitest";
import { removeElement } from "../src/removeElements";

describe("removeElement", () => {
  it("elimina los 3s de [3,2,2,3]", () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    const k = removeElement(nums, val);

    expect(k).toBe(2);
    expect(nums.slice(0, k).sort()).toEqual([2, 2]);
  });

  it("elimina los 2s de [0,1,2,2,3,0,4,2]", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;
    const k = removeElement(nums, val);

    expect(k).toBe(5);
    expect(nums.slice(0, k).sort()).toEqual([0, 0, 1, 3, 4]);
  });

  it("no elimina nada si val no está en el array", () => {
    const nums = [1, 2, 3];
    const val = 4;
    const k = removeElement(nums, val);

    expect(k).toBe(3);
    expect(nums.slice(0, k)).toEqual([1, 2, 3]);
  });

  it("devuelve 0 si todos los elementos son val", () => {
    const nums = [2, 2, 2];
    const val = 2;
    const k = removeElement(nums, val);

    expect(k).toBe(0);
    expect(nums.slice(0, k)).toEqual([]);
  });

  it("funciona con array vacío", () => {
    const nums: number[] = [];
    const val = 1;
    const k = removeElement(nums, val);

    expect(k).toBe(0);
    expect(nums.slice(0, k)).toEqual([]);
  });
});
