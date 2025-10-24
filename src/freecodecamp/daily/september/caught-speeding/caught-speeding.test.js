import speeding from "./caught-speeding.js";

/*
Caught Speeding

Given an array of numbers representing the speed at which vehicles were observed traveling, and a number representing the speed limit, return an array with two items, the number of vehicles that were speeding, followed by the average amount beyond the speed limit of those vehicles.

If there were no vehicles speeding, return [0, 0].

Tests

Waiting:1. speeding([50, 60, 55], 60) should return [0, 0].

Waiting:2. speeding([58, 50, 60, 55], 55) should return [2, 4].

Waiting:3. speeding([61, 81, 74, 88, 65, 71, 68], 70) should return [4, 8.5].

Waiting:4. speeding([100, 105, 95, 102], 100) should return [2, 3.5].

Waiting:5. speeding([40, 45, 44, 50, 112, 39], 55) should return [1, 57].
*/
import { describe, it, expect } from "vitest";
import speeding from "./caught-speeding.js";

describe("Caught Speeding", () => {
  it("should return [0, 0] for speeds [50, 60, 55] with limit 60", () => {
    expect(speeding([50, 60, 55], 60)).toEqual([0, 0]);
  });
  it("should return [2, 4] for speeds [58, 50, 60, 55] with limit 55", () => {
    expect(speeding([58, 50, 60, 55], 55)).toEqual([2, 4]);
  });
  it("should return [4, 8.5] for speeds [61, 81, 74, 88, 65, 71, 68] with limit 70", () => {
    expect(speeding([61, 81, 74, 88, 65, 71, 68], 70)).toEqual([4, 8.5]);
  });
  it("should return [2, 3.5] for speeds [100, 105, 95, 102] with limit 100", () => {
    expect(speeding([100, 105, 95, 102], 100)).toEqual([2, 3.5]);
  });
  it("should return [1, 57] for speeds [40, 45, 44, 50, 112, 39] with limit 55", () => {
    expect(speeding([40, 45, 44, 50, 112, 39], 55)).toEqual([1, 57]);
  });
});
