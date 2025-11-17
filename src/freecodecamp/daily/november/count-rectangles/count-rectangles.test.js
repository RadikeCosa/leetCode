import { it, describe, expect } from "vitest";
import countRectangles from "./count-rectangles";

/**
test1 : countRectangles(1, 3) should return 6.
test2: . countRectangles(3, 2) should return 18.
test3. countRectangles(1, 2) should return 3.
test4. countRectangles(5, 4) should return 150.
test5. countRectangles(11, 19) should return 12540.
  */

describe("Count Rectangles", () => {
  it("test1: countRectangles(1, 3) should return 6", () => {
    expect(countRectangles(1, 3)).toBe(6);
  });
  it("test2: countRectangles(3, 2) should return 18", () => {
    expect(countRectangles(3, 2)).toBe(18);
  });
  it("test3: countRectangles(1, 2) should return 3", () => {
    expect(countRectangles(1, 2)).toBe(3);
  });
  it("test4: countRectangles(5, 4) should return 150", () => {
    expect(countRectangles(5, 4)).toBe(150);
  });
  it("test5: countRectangles(11, 19) should return 12540", () => {
    expect(countRectangles(11, 19)).toBe(12540);
  });
});
