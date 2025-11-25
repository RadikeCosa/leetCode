/**
 * FreeCodeCamp Problem: Longest Word
 * Category: FreeCodeCamp
 *
 * @param {string} sentence - The input sentence containing words.
 * @returns {string} The longest word found in the sentence.
 */
function longestWord(sentence) {
  // Split the sentence into words using space as a delimiter
  const words = sentence.split(" ");
  // Initialize a variable to keep track of the longest word found
  let longest = "";
  // Iterate through each word in the array
  for (let word of words) {
    // Remove punctuation from the word using regex
    const cleanedWord = word.replace(/[^\w]/g, "");
    // Check if the cleaned word is longer than the current longest word
    if (cleanedWord.length > longest.length) {
      // Update the longest word if the current one is longer
      longest = cleanedWord;
    }
  }
  // Return the longest word found
  return longest;
}

export default longestWord;
