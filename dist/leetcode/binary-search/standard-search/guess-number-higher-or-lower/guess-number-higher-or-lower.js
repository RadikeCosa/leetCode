/**
 * LeetCode Problem 374: Guess Number Higher or Lower
 * Difficulty: Easy
 * Topics: Binary Search, Interactive
 *
 * We are playing the Guess Game. You have to guess which number I picked.
 * Every time you guess wrong, I will tell you whether the number I picked is
 * higher or lower than your guess.
 *
 * Time Complexity: O(log n) - binary search reduction
 * Space Complexity: O(1) - constant extra space
 */
export function guessNumber(n) {
    let start = 1;
    let end = n;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const result = guess(mid);
        if (result === 0)
            return mid;
        if (result === -1)
            end = mid - 1;
        else
            start = mid + 1;
    }
    return -1;
}
