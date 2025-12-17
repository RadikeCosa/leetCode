import arrayDiff from "./array-diff";

/**
 Array Diff
Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.

The returned array should be sorted in alphabetical order.
Tests
1. arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"]) should return ["cherry"].
2. arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"]) should return ["cherry"].
3. arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]) should return ["eight", "four", "six", "two"].
4. arrayDiff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]) should return ["five", "one", "seven", "three"].
5. arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"]) should return ["freeCodeCamp", "rocks"].
 */

describe("Array Diff", () => {
  it("should return 'cherry' for example 1", () => {
    expect(
      arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"])
    ).toEqual(["cherry"]);
  });
  it("should return 'cherry' too for example 2", () => {
    expect(
      arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"])
    ).toEqual(["cherry"]);
  });
  it("should return ['eight', 'four', 'six', 'two'] for example 3", () => {
    expect(
      arrayDiff(
        ["one", "two", "three", "four", "six"],
        ["one", "three", "eight"]
      )
    ).toEqual(["eight", "four", "six", "two"]);
  });
  it("should return ['five', 'one', 'seven', 'three'] for example 4", () => {
    expect(
      arrayDiff(
        ["two", "four", "five", "eight"],
        ["one", "two", "three", "four", "seven", "eight"]
      )
    ).toEqual(["five", "one", "seven", "three"]);
  });
  it("should return ['freeCodeCamp', 'rocks'] for example 5", () => {
    expect(
      arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"])
    ).toEqual(["freeCodeCamp", "rocks"]);
  });
});
