/**
 * FreeCodeCamp Problem: Battle of Words
 * Category: Daily
 * Difficulty: Easy
 * Topics: String, Array
 *
 * Given two sentences representing your team and an opposing team, where each word from your team battles the corresponding word from the opposing team, determine which team wins using the following rules:
 *
 * The given sentences will always contain the same number of words.
 * Words are separated by a single space and will only contain letters.
 * The value of each word is the sum of its letters.
 * Letters a to z correspond to the values 1 through 26. For example, a is 1, and z is 26.
 * A capital letter doubles the value of the letter. For example, A is 2, and Z is 52.
 * Words battle in order: the first word of your team battles the first word of the opposing team, and so on.
 * A word wins if its value is greater than the opposing word's value.
 * The team with more winning words is the winner.
 * Return "We win" if your team is the winner, "We lose" if your team loses, and "Draw" if both teams have the same number of wins.
 *
 * Time Complexity: O(L) - donde L es la longitud total de caracteres en ambas oraciones, ya que procesamos cada carácter una vez
 * Space Complexity: O(n) - donde n es el número de palabras, debido a los arrays creados por split()
 */
function wordValue(word) {
  return [...word].reduce((value, char) => {
    const baseValue = char.toLowerCase().charCodeAt(0) - 96;
    return value + (char === char.toUpperCase() ? baseValue * 2 : baseValue);
  }, 0);
}

function getBattleResult(ourWins, opponentWins) {
  if (ourWins > opponentWins) return "We win";
  if (opponentWins > ourWins) return "We lose";
  return "Draw";
}

function battle(ourTeam, opponent) {
  const ourWords = ourTeam.split(" ");
  const opponentWords = opponent.split(" ");

  const differences = ourWords.map(
    (word, i) => wordValue(word) - wordValue(opponentWords[i])
  );

  const ourWins = differences.filter((diff) => diff > 0).length;
  const opponentWins = differences.filter((diff) => diff < 0).length;

  return getBattleResult(ourWins, opponentWins);
}

module.exports = battle;
