/**
 * FreeCodeCamp Problem: Digits vs Letters
 * Category: Daily
 */
function digitsOrLetters(str) {
  const digitsCount = (str.match(/\d/g) || []).length;
  const lettersCount = (str.match(/[a-zA-Z]/g) || []).length;

  if (digitsCount > lettersCount) return "digits";
  if (lettersCount > digitsCount) return "letters";
  return "tie";
}

export default digitsOrLetters;
