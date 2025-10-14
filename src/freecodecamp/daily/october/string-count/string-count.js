/**
 * FreeCodeCamp Problem: String Count
 * Category: Daily
 * Difficulty: Easy
 * Topics: Strings, Algorithms
 *
 * Given two strings, determine how many times the second string appears in the first.
 *
 * The pattern string can overlap in the first string. For example, "aaa" contains "aa" twice. The first two a's and the second two a's.
 *
 * Examples:
 * count('abcdefg', 'def') should return 1.
 * count('hello', 'world') should return 0.
 * count('mississippi', 'iss') should return 2.
 * count('she sells seashells by the seashore', 'sh') should return 3.
 * count('101010101010101010101', '101') should return 10.
 */
function count(text, pattern) {
  let count = 0;
  let pos = text.indexOf(pattern);
  while (pos !== -1) {
    count++;
    pos = text.indexOf(pattern, pos + 1);
  }
  return count;
}

export default count;
