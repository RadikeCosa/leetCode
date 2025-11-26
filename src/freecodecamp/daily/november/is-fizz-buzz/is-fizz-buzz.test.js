import { it, describe, expect } from "vitest";
import isFizzBuzz from "./is-fizz-buzz";

/**
 * 
 
Given an array, determine if it is a correct FizzBuzz sequence from 1 to the last item in the array. A sequence is correct if:

Numbers that are multiples of 3 are replaced with "Fizz"
Numbers that are multiples of 5 are replaced with "Buzz"
Numbers that are multiples of both 3 and 5 are replaced with "FizzBuzz"
All other numbers remain as integers in ascending order, starting from 1.
The array must start at 1 and have no missing or extra elements.

 * 
 Tests
1. isFizzBuzz([1, 2, "Fizz", 4]) should return true.
2. isFizzBuzz([1, 2, 3, 4]) should return false.
3. isFizzBuzz([1, 2, "Fizz", 4, "Buzz", 7]) should return false.
4. isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "FizzBuzz"]) should return false.
5. isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Fizz"]) should return false.
6. isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Buzz"]) should return false.
7. isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"]) should return true.
*/

describe("Is Fizz Buzz", () => {
  it("should return true for in first example", () => {
    expect(isFizzBuzz([1, 2, "Fizz", 4])).toBe(true);
  });

  it("should return false for in second example", () => {
    expect(isFizzBuzz([1, 2, 3, 4])).toBe(false);
  });

  it("should return false for in third example", () => {
    expect(isFizzBuzz([1, 2, "Fizz", 4, "Buzz", 7])).toBe(false);
  });

  it("should return false for in fourth example", () => {
    expect(
      isFizzBuzz([
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        "FizzBuzz",
      ])
    ).toBe(false);
  });
  it("should return false for in fifth example", () => {
    expect(
      isFizzBuzz([
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        "Fizz",
      ])
    ).toBe(false);
  });

  it("should return false for in sixth example", () => {
    expect(
      isFizzBuzz([
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        "Buzz",
      ])
    ).toBe(false);
  });

  it("should return true for in seventh example", () => {
    expect(
      isFizzBuzz([
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
        16,
        17,
        "Fizz",
        19,
        "Buzz",
        "Fizz",
        22,
        23,
        "Fizz",
        "Buzz",
        26,
        "Fizz",
        28,
        29,
        "FizzBuzz",
        31,
        32,
        "Fizz",
        34,
        "Buzz",
        "Fizz",
        37,
        38,
        "Fizz",
        "Buzz",
        41,
        "Fizz",
        43,
        44,
        "FizzBuzz",
        46,
        47,
        "Fizz",
        49,
        "Buzz",
      ])
    ).toBe(true);
  });
});
