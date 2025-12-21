/**
 * LeetCode Problem: Reverse Integer
 * Difficulty:
 * Topics:
 *
 * @param {number} x - The integer to be reversed
 * @returns {number} The reversed integer or 0 if it overflows 32-bit signed integer range
 */
export default function reverse(x: number): number {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  let resultado = 0;
  const signo = x < 0 ? -1 : 1;
  x = Math.abs(x);
  while (x !== 0) {
    const digito = x % 10;
    x = Math.trunc(x / 10);

    // Verificar overflow antes de actualizar resultado
    if (
      resultado > Math.trunc(INT_MAX / 10) ||
      (resultado === Math.trunc(INT_MAX / 10) && digito > INT_MAX % 10)
    ) {
      return 0;
    }

    resultado = resultado * 10 + digito;
  }
  resultado *= signo;
  if (resultado < INT_MIN || resultado > INT_MAX) {
    return 0;
  }
  return resultado;
}
