/**
 * LeetCode Problem 166: Fraction to Recurring Decimal
 * Difficulty: Medium
 * Topics: Hash Table, Math, String
 *
 * Given two integers representing the numerator and denominator of a fraction,
 * return the fraction in string format.
 * If the fractional part is repeating, enclose the repeating part in parentheses.
 * If multiple answers are possible, return any of them.
 * It is guaranteed that the length of the answer string is less than 10^4 for all the given inputs.
 *
 * Time Complexity: O(d) - donde d es el número de dígitos únicos antes de repetición
 * Space Complexity: O(d) - para el HashMap y array de dígitos
 */
export function fractionToDecimal(
  numerator: number,
  denominator: number
): string {
  if (numerator % denominator === 0) {
    return (numerator / denominator).toString();
  }
  const isNegative = numerator < 0 !== denominator < 0;
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);
  const integerPart = Math.floor(numerator / denominator);
  let remainder = numerator % denominator;

  // Array para construir los dígitos decimales
  const digits: string[] = [];
  const remainderMap = new Map<number, number>();

  while (remainder !== 0) {
    if (remainderMap.has(remainder)) {
      // ¡Repetición detectada! Insertar paréntesis
      const repeatIndex = remainderMap.get(remainder)!;
      digits.splice(repeatIndex, 0, "("); // Insertar "(" en la posición donde empezó el ciclo
      digits.push(")"); // Agregar ")" al final
      break;
    }

    // Guardar la posición actual antes de agregar el dígito
    remainderMap.set(remainder, digits.length);

    // Simular división larga
    remainder *= 10; // "Bajar un 0"
    const nextDigit = Math.floor(remainder / denominator); // Calcular siguiente dígito
    digits.push(nextDigit.toString()); // Agregar dígito al array
    remainder %= denominator; // Calcular nuevo resto
  }

  // Construir el resultado final
  const decimalPart = digits.join("");
  return (
    (isNegative ? "-" : "") +
    integerPart +
    (decimalPart ? "." + decimalPart : "")
  );
}
