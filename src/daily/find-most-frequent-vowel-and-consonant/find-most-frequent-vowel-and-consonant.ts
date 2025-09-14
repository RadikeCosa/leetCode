/**
 * LeetCode Problem 3541: Find Most Frequent Vowel and Consonant
 * Difficulty: Easy
 * Topics: Hash Table, String, Counting
 *
 * You are given a string s consisting of lowercase English letters ('a' to 'z').
 * Your task is to:
 * • Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
 * • Find the consonant (all other letters excluding vowels) with the maximum frequency.
 * Return the sum of the two frequencies.
 *
 * Note: If multiple vowels or consonants have the same maximum frequency, you may
 * choose any one of them. If there are no vowels or no consonants in the string,
 * consider their frequency as 0.
 *
 * Time Complexity: O(n) - una pasada por el string + O(26) para Math.max = O(n)
 * Space Complexity: O(1) - dos arrays fijos de tamaño 26, independiente del input
 */
export function findMostFrequentVowelAndConsonant(s: string): number {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  // Arrays para conteo directo (a-z = índices 0-25)
  const vowelCounts = new Array(26).fill(0);
  const consonantCounts = new Array(26).fill(0);

  // Contar directamente en arrays
  for (const char of s) {
    const index = char.charCodeAt(0) - 97; // 'a' = 97
    if (vowels.has(char)) {
      vowelCounts[index]++;
    } else {
      consonantCounts[index]++;
    }
  }

  // Encontrar máximos
  const maxVowelFreq = Math.max(...vowelCounts);
  const maxConsonantFreq = Math.max(...consonantCounts);

  return maxVowelFreq + maxConsonantFreq;
}
