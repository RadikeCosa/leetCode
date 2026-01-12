import golfScore from "./par-for-the-hole";

/**
 Par for the Hole
Given two integers, the par for a golf hole and the number of strokes a golfer took on that hole, return the golfer's score using golf terms.

Return:

"Hole in one!" if it took one stroke.
"Eagle" if it took two strokes less than par.
"Birdie" if it took one stroke less than par.
"Par" if it took the same number of strokes as par.
"Bogey" if it took one stroke more than par.
"Double bogey" if took two strokes more than par.
Tests
1. golfScore(3, 3) should return "Par".
2. golfScore(4, 3) should return "Birdie".
3. golfScore(3, 1) should return "Hole in one!".
4. golfScore(5, 7) should return "Double bogey".
5. golfScore(4, 5) should return "Bogey".
6. golfScore(5, 3) should return "Eagle".
 */

describe("Par For The Hole", () => {
  it("test case 1", () => {
    expect(golfScore(3, 3)).toBe("Par");
  });

  it("test case 2", () => {
    expect(golfScore(4, 3)).toBe("Birdie");
  });

  it("test case 3", () => {
    expect(golfScore(3, 1)).toBe("Hole in one!");
  });

  it("test case 4", () => {
    expect(golfScore(5, 7)).toBe("Double bogey");
  });
  it("test case 5", () => {
    expect(golfScore(4, 5)).toBe("Bogey");
  });
  it("test case 6", () => {
    expect(golfScore(5, 3)).toBe("Eagle");
  });
});
