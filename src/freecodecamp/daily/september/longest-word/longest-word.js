/**
 * FreeCodeCamp Problem: Longest Word
 * Category: Daily
 *
 * Given a sentence, return the longest word in the sentence.
 *
 * Rules:
 * - Ignore periods (.) when determining word length
 * - If multiple words are ties for the longest, return the first one that occurs
 */

function getLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";

  for (let word of words) {
    const cleanedWord = word.replace(/\./g, "");
    if (cleanedWord.length > longestWord.length) {
      longestWord = cleanedWord;
    }
  }
  return longestWord;
}

export default getLongestWord;
