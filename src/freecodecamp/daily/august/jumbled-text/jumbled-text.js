/**
 * FreeCodeCamp Problem: Jumbled Text
 * Category: Daily
 */
function jbelmu(text) {
  const words = text.split(" ");
  const jumbledWords = words.map((word) => {
    if (word.length <= 3) return word;
    const firstChar = word.charAt(0);
    const lastChar = word.charAt(word.length - 1);
    const middleChars = word.slice(1, -1).split("").sort().join("");
    return firstChar + middleChars + lastChar;
  });
  return jumbledWords.join(" ");
}

export default jbelmu;
