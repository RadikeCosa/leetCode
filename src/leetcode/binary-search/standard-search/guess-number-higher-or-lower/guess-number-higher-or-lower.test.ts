/**
 * LeetCode Problem 374: Guess Number Higher or Lower
 * Difficulty: Easy
 * Topics: Binary Search, Interactive
 *
 * We are playing the Guess Game. The game is as follows:
 * I pick a number from 1 to n. You have to guess which number I picked (the number I picked stays the same throughout the game).
 *
 * Every time you guess wrong, I will tell you whether the number I picked is
 * higher or lower than your guess.
 *
 * You call a pre-defined API int guess(int num), which returns three possible results:
 * - -1: Your guess is higher than the number I picked (i.e. num > pick).
 * - 1: Your guess is lower than the number I picked (i.e. num < pick).
 * - 0: your guess is equal to the number I picked (i.e. num == pick).
 *
 * Return the number that I picked.
 *
 * Example 1:
 * Input: n = 10, pick = 6
 * Output: 6
 *
 * Example 2:
 * Input: n = 1, pick = 1
 * Output: 1
 *
 * Example 3:
 * Input: n = 2, pick = 1
 * Output: 1
 *
 * Constraints:
 * - 1 <= n <= 2^31 - 1
 * - 1 <= pick <= n
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { guessNumber } from "./guess-number-higher-or-lower";

describe("Guess Number Higher or Lower", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Helper function para crear la lógica de guess
  const createGuessLogic = (pick: number) => {
    return (num: number) => {
      if (num === pick) return 0; // Correcto
      else if (num > pick) return -1; // Muy alto
      else return 1; // Muy bajo
    };
  };

  it("should find pick = 6 in range n = 10", () => {
    const guessLogic = createGuessLogic(6);
    vi.stubGlobal("guess", vi.fn(guessLogic));

    const result = guessNumber(10);
    expect(result).toBe(6);
  });

  it("should handle edge case n = 1, pick = 1", () => {
    const guessLogic = createGuessLogic(1);
    vi.stubGlobal("guess", vi.fn(guessLogic));

    const result = guessNumber(1);
    expect(result).toBe(1);
  });

  it("should handle example 3: n = 2, pick = 1", () => {
    const guessLogic = createGuessLogic(1);
    vi.stubGlobal("guess", vi.fn(guessLogic));

    const result = guessNumber(2);
    expect(result).toBe(1);
  });

  it("should be efficient - limited number of calls", () => {
    const guessLogic = createGuessLogic(6);
    const guessSpy = vi.fn(guessLogic);
    vi.stubGlobal("guess", guessSpy);

    guessNumber(10);

    // Binary search should make at most log2(n) + 1 calls
    // For n=10: log2(10) ≈ 3.32, so max 4 calls
    expect(guessSpy.mock.calls.length).toBeLessThanOrEqual(4);
    expect(guessSpy.mock.calls.length).toBeGreaterThan(0);
  });
});
