/**
 * FreeCodeCamp Problem: Pangram
 * Category: FreeCodeCamp
 *
 * @param {string} sentence - The sentence to check
 * @param {string} letters - The string of lowercase letters to check against
 * @returns {boolean} True if the sentence uses all the letters from the given set at least once and no other letters, false otherwise
 */
function isPangram(sentence, letters) {
  // Normalize the sentence to lowercase and remove non-alphabetical characters
  const normalizedSentence = sentence.toLowerCase().replace(/[^a-z]/g, "");

  // Create a set of unique letters from the normalized sentence
  const sentenceSet = new Set(normalizedSentence);

  // Create a set of unique letters from the given letters
  const lettersSet = new Set(letters);

  // Check if both sets are equal
  if (sentenceSet.size !== lettersSet.size) {
    return false;
  }
  return [...sentenceSet].every((letter) => lettersSet.has(letter));
}

export default isPangram;
