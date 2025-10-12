/**
 * FreeCodeCamp Problem: Battle of Words
 * Category: Daily
 * Difficulty: Easy
 * Topics: String, Array
 *
 * Given two sentences representing your team and an opposing team, where each word from your team battles the corresponding word from the opposing team, determine which team wins using the following rules:
 *
 * The given sentences will always contain the same number of words.
 * Words are separated by a single space and will only contain letters.
 * The value of each word is the sum of its letters.
 * Letters a to z correspond to the values 1 through 26. For example, a is 1, and z is 26.
 * A capital letter doubles the value of the letter. For example, A is 2, and Z is 52.
 * Words battle in order: the first word of your team battles the first word of the opposing team, and so on.
 * A word wins if its value is greater than the opposing word's value.
 * The team with more winning words is the winner.
 * Return "We win" if your team is the winner, "We lose" if your team loses, and "Draw" if both teams have the same number of wins.
 *
 * Example 1:
 * Input: battle("hello world", "hello word")
 * Output: "We win"
 *
 * Example 2:
 * Input: battle("Hello world", "hello world")
 * Output: "We win"
 *
 * Example 3:
 * Input: battle("lorem ipsum", "kitty ipsum")
 * Output: "We lose"
 *
 * Example 4:
 * Input: battle("hello world", "world hello")
 * Output: "Draw"
 *
 * Example 5:
 * Input: battle("git checkout", "git switch")
 * Output: "We win"
 *
 * Example 6:
 * Input: battle("Cheeseburger with fries", "Cheeseburger with Fries")
 * Output: "We lose"
 *
 * Example 7:
 * Input: battle("We must never surrender", "Our team must win")
 * Output: "Draw"
 *
 * Constraints:
 * - The given sentences will always contain the same number of words.
 * - Words are separated by a single space and will only contain letters.
 */
import { describe, it, expect } from "vitest";
import battle from "./battle-of-words.js";

describe("Battle of Words", () => {
  it('should return "We win" for battle("hello world", "hello word")', () => {
    expect(battle("hello world", "hello word")).toBe("We win");
  });
  it('should return "We win" for battle("Hello world", "hello world")', () => {
    expect(battle("Hello world", "hello world")).toBe("We win");
  });
  it('should return "We lose" for battle("lorem ipsum", "kitty ipsum")', () => {
    expect(battle("lorem ipsum", "kitty ipsum")).toBe("We lose");
  });
  it('should return "Draw" for battle("hello world", "world hello")', () => {
    expect(battle("hello world", "world hello")).toBe("Draw");
  });
  it('should return "We win" for battle("git checkout", "git switch")', () => {
    expect(battle("git checkout", "git switch")).toBe("We win");
  });
  it('should return "We lose" for battle("Cheeseburger with fries", "Cheeseburger with Fries")', () => {
    expect(battle("Cheeseburger with fries", "Cheeseburger with Fries")).toBe(
      "We lose"
    );
  });
  it('should return "Draw" for battle("We must never surrender", "Our team must win")', () => {
    expect(battle("We must never surrender", "Our team must win")).toBe("Draw");
  });
});
