/**
 * LeetCode Problem 228: Summary Ranges
 * Difficulty: Easy
 * Topics: Array
 *
 * You are given a sorted unique integer array nums.
 * A range [a,b] is the set of all integers from a to b (inclusive).
 * Return the smallest sorted list of ranges that cover all the numbers in the array exactly.
 * That is, each element of nums is covered by exactly one of the ranges, and there is no integer x
 * such that x is in one of the ranges but not in nums.
 *
 * Each range [a,b] in the list should be output as:
 * • "a->b" if a != b
 * • "a" if a == b
 *
 * Time Complexity: O(n) - Single pass through the array. Each element is visited exactly once
 *                              as the i pointer advances sequentially and end pointer only moves forward.
 * Space Complexity: O(1) - Only constant extra space for variables (i, end, rangeStart, rangeEnd).
 *                          Output array doesn't count toward auxiliary space.
 */
export function summaryRanges(nums: number[]): string[] {
  let i = 0;
  const result: string[] = [];

  while (i < nums.length) {
    // Marcar el inicio del rango actual
    let rangeStart = nums[i];
    let end = i; // end avanza para encontrar el final del rango

    // Extender end mientras los números sean consecutivos
    while (end < nums.length - 1 && nums[end] + 1 === nums[end + 1]) {
      end++;
    }

    let rangeEnd = nums[end];

    // Formatear según el tamaño del rango
    if (rangeStart === rangeEnd) {
      result.push(`${rangeStart}`);
    } else {
      result.push(`${rangeStart}->${rangeEnd}`);
    }

    // Saltar al siguiente segmento después del rango actual
    i = end + 1;
  }
  return result;
}
