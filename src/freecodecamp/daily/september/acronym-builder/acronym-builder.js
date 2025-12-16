/**
 * FreeCodeCamp Problem: Acronym Builder
 * Category: FreeCodeCamp
 *
 * @param {string} str - The input phrase from which to build the acronym
 * @returns {string} The resulting acronym
 */
function buildAcronym(str) {
  const ignoreWords = new Set(["a", "for", "an", "and", "by", "of"]);
  const words = str.split(" ");
  let acronym = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (i === 0 || !ignoreWords.has(word.toLowerCase())) {
      acronym += word[0].toUpperCase();
    }
  }
  return acronym;
}

export default buildAcronym;
