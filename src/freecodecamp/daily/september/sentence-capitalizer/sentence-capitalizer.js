/**
 * FreeCodeCamp Problem: Sentence Capitalizer
 * Category: FreeCodeCamp
 *
 * @param {string} paragraph - The input paragraph to capitalize sentences in.
 * @returns {string} The paragraph with the first letter of each sentence capitalized.
 */
function capitalize(paragraph) {
  // Regex explanation:
  // (^|[.?!]+\s*) -> Group 1: Start of string OR one or more punctuation marks followed by optional whitespace
  // ([a-z])       -> Group 2: The first lowercase letter found after Group 1
  return paragraph.replace(/(^|[.?!]+\s*)([a-z])/g, (match, p1, p2) => {
    return p1 + p2.toUpperCase();
  });
}

export default capitalize;
