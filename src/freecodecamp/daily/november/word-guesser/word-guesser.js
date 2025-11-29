/**
 * FreeCodeCamp Problem: Word Guesser
 * Category: FreeCodeCamp
 *
 * @param {string} word - The secret word to guess
 * @param {string} guess - The guessed word
 * @returns {string} A string representing the match results with "2", "1", and "0"
 */

function compare(secret, guess) {
  const result = Array(secret.length).fill("0");
  const secretFreq = {};
  // Primer paso: encontrar coincidencias exactas y construir el mapa de frecuencias
  for (let i = 0; i < secret.length; i++) {
    if (guess[i] === secret[i]) {
      result[i] = "2";
    } else {
      secretFreq[secret[i]] = (secretFreq[secret[i]] || 0) + 1;
    }
  }
  // Segundo paso: encontrar coincidencias parciales usando el mapa de frecuencias
  for (let i = 0; i < guess.length; i++) {
    if (result[i] === "0" && secretFreq[guess[i]] > 0) {
      result[i] = "1";
      secretFreq[guess[i]]--;
    }
  }
  return result.join("");
}

export default compare;
