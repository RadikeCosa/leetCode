import { it, describe, expect } from "vitest";
import getNextLocation from "./ball-trajectory";

/**
 Tests
1. getNextLocation([[0,0,0,0], [0,0,0,0], [0,1,2,0], [0,0,0,0]]) should return [2, 3].
2. getNextLocation([[0,0,0,0], [0,0,1,0], [0,2,0,0], [0,0,0,0]]) should return [3, 0].
3. getNextLocation([[0,2,0,0], [1,0,0,0], [0,0,0,0], [0,0,0,0]]) should return [1, 2].
4. getNextLocation([[0,0,0,0], [0,0,0,0], [2,0,0,0], [0,1,0,0]]) should return [1, 1].
5. getNextLocation([[0,0,0,0], [0,0,0,0], [0,0,1,0], [0,0,0,2]]) should return [2, 2].
 */

describe("Ball Trajectory", () => {
  it("manage test case 1", () => {
    expect(
      getNextLocation([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 2, 0],
        [0, 0, 0, 0],
      ])
    ).toEqual([2, 3]);
  });
  it("manage test case 2", () => {
    expect(
      getNextLocation([
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 2, 0, 0],
        [0, 0, 0, 0],
      ])
    ).toEqual([3, 0]);
  });
  it("manage test case 3", () => {
    expect(
      getNextLocation([
        [0, 2, 0, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ])
    ).toEqual([1, 2]);
  });
  it("manage test case 4", () => {
    expect(
      getNextLocation([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [2, 0, 0, 0],
        [0, 1, 0, 0],
      ])
    ).toEqual([1, 1]);
  });
  it("manage test case 5", () => {
    expect(
      getNextLocation([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 2],
      ])
    ).toEqual([2, 2]);
  });
});
