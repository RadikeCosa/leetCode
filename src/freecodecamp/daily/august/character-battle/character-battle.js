/**
 * FreeCodeCamp Problem: Character Battle
 * Category: FreeCodeCamp
 *Character Battle
Given two strings representing your army and an opposing army, each character from your army battles the character at the same position from the opposing army using the following rules:

Characters a-z have a strength of 1-26, respectively.
Characters A-Z have a strength of 27-52, respectively.
Digits 0-9 have a strength of their face value.
All other characters have a value of zero.
Each character can only fight one battle.
For each battle, the stronger character wins. The army with more victories, wins the war. Return the following values:

"Opponent retreated" if your army has more characters than the opposing army.
"We retreated" if the opposing army has more characters than yours.
"We won" if your army won more battles.
"We lost" if the opposing army won more battles.
"It was a tie" if both armies won the same number of battles.

 * @param {string} myArmy - Your army represented as a string
 * @param {string} opposingArmy - Opposing army represented as a string
 * @returns {string} Result of the battle
 */
function battle(myArmy, opposingArmy) {
  const myArmyLength = myArmy.length;
  const opposingArmyLength = opposingArmy.length;

  if (myArmyLength > opposingArmyLength) {
    return "Opponent retreated";
  } else if (myArmyLength < opposingArmyLength) {
    return "We retreated";
  }

  let myWins = 0;
  let opposingWins = 0;
  // Function to get the strength of a character
  const getStrength = (char) => {
    // Lowercase letters
    if (char >= "a" && char <= "z") {
      return char.charCodeAt(0) - "a".charCodeAt(0) + 1;
      // Uppercase letters
    } else if (char >= "A" && char <= "Z") {
      return char.charCodeAt(0) - "A".charCodeAt(0) + 27;
      // Digits
    } else if (char >= "0" && char <= "9") {
      return parseInt(char, 10);
    }
    // All other characters
    return 0;
  };
  // Compare characters position by position
  for (let i = 0; i < myArmyLength; i++) {
    // Get strengths
    const myStrength = getStrength(myArmy[i]);
    const opposingStrength = getStrength(opposingArmy[i]);
    // Determine winner
    if (myStrength > opposingStrength) {
      myWins++;
    } else if (opposingStrength > myStrength) {
      opposingWins++;
    }
  }

  if (myWins > opposingWins) {
    return "We won";
  } else if (opposingWins > myWins) {
    return "We lost";
  } else {
    return "It was a tie";
  }
}
export default battle;
