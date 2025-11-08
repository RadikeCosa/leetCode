/*
 * FreeCodeCamp Problem: Counting Cards
 * Category: daily/november
 *
 * Given an integer representing the number of cards to pick from the deck,
 * return the number of unique combinations of cards you can pick.
 *
 * Order does not matter. Picking card A then card B is the same as picking card B then card A.
 *
 * Constraints:
 * - Deck size is 52 (13 ranks × 4 suits)
 * - 0 <= cards <= 52
 *
 * Examples:
 * combinations(52) => 1
 * combinations(1)  => 52
 * combinations(2)  => 1326
 */

/**
 * Devuelve el número de combinaciones al elegir `cards` cartas de una baraja de 52.
 * - Entrada: entero `cards` en [0,52].
 * - Salida: número de combinaciones (Number).
 * - Lanza TypeError si `cards` no es entero y RangeError si está fuera de rango.
 */
function combinations(cards) {
  // Validación de entrada
  if (!Number.isInteger(cards)) {
    throw new TypeError("cards must be an integer");
  }

  const n = 52;
  const k = cards;

  if (k < 0 || k > n) {
    throw new RangeError("cards must be between 0 and 52 inclusive");
  }

  // Casos rápidos
  if (k === 0 || k === n) return 1;

  // Aprovechar simetría: calcular con m = min(k, n-k)
  const m = Math.min(k, n - k);

  // Implementación sencilla y legible usando Number:
  // aplicamos la fórmula multiplicativa
  //   result = product_{i=1..m} (n - m + i) / i
  // Es corta y clara, y suficiente para n=52 (ejemplos de FreeCodeCamp).
  // Nota sobre BigInt: si necesitas exactitud absoluta para n mucho mayores
  // (o evitar cualquier error de coma flotante), reemplaza este bloque por
  // una versión que use BigInt y haga las operaciones en enteros:
  //   resultBig = 1n; resultBig = (resultBig * BigInt(num)) / BigInt(den);
  // Esa versión garantiza enteros exactos sin redondeos.
  let result = 1;
  for (let i = 1; i <= m; i++) {
    result *= (n - m + i) / i;
  }

  // Devolvemos el Number resultante. Para n=52 no es necesario Math.round,
  // pero podrías usarlo si quieres forzar entero.
  return result;
}

export default combinations;
